let video;
let facemesh;
let handposeModel;
let faces = [];
let hands = [];
let offscreen;

let recognition;
let speechSupported = false;
let transcriptBuffer = "";

let wordParticles = [];
let showVideoReference = true;

let gridStep = 8;
let baseDotSize = 2.4;
let portraitAlpha = 225;

let maxParticles = 180;
let collisionRadiusBase = 18;

let activeSpeakerId = null;
let activeSpeakerLockUntil = 0;
const SPEAKER_LOCK_MS = 800;

const PARTICLE_LIFETIME_MS = 180000;
const FADE_START_MS = 120000;

const HAND_PUSH_RADIUS = 55;
const HAND_PUSH_FORCE = 1.9;
const HAND_COLOR_TRANSFER_COOLDOWN = 140;

let faceGridColorMaps = [{}, {}];
let currentFaceSlots = [[], []];
let lastColorTransferTime = 0;

let wallBounds = {
  left: 0,
  right: 640,
  top: 0,
  bottom: 480
};

const WALL_THICKNESS_SCREEN = 40;

const FACE_OVAL = [
  10, 338, 297, 332, 284, 251, 389, 356, 454, 323,
  361, 288, 397, 365, 379, 378, 400, 377, 152, 148,
  176, 149, 150, 136, 172, 58, 132, 93, 234, 127,
  162, 21, 54, 103, 67, 109
];

const LEFT_EYE = [
  33, 246, 161, 160, 159, 158, 157, 173,
  133, 155, 154, 153, 145, 144, 163, 7
];

const RIGHT_EYE = [
  362, 398, 384, 385, 386, 387, 388, 466,
  263, 249, 390, 373, 374, 380, 381, 382
];

const OUTER_LIPS = [
  61, 146, 91, 181, 84, 17, 314, 405,
  321, 375, 291, 308, 324, 318, 402, 317,
  14, 87, 178, 88, 95, 78
];

const NOSE_REGION = [
  6, 197, 195, 5, 4, 1, 19, 94, 2, 97, 98, 327, 326, 168
];

const UPPER_LIP_POINT = 13;
const LOWER_LIP_POINT = 14;

const STOP_WORDS = new Set([
  "a","an","ann","the","i","me","my","to","of","in","on","at","for",
  "is","am","are","was","were","be","been","being",
  "and","or","but","so","if","it","its","this","that",
  "yeah","yes","no","uh","um","ah","oh","ok","okay",
  "do","did","does","done","have","has","had",
  "he","she","they","them","we","you","your","our",
  "as","by","from","with","without","about","into","onto"
]);

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  offscreen = createGraphics(640, 480);
  offscreen.pixelDensity(1);

  textFont("Georgia");
  textAlign(CENTER, CENTER);
  noStroke();

  facemesh = ml5.facemesh(video, () => {});
  facemesh.on("predict", (results) => {
    faces = results || [];
  });

  if (ml5.handpose) {
    handposeModel = ml5.handpose(video, () => {});
    handposeModel.on("predict", (results) => {
      hands = results || [];
    });
  }

  startSpeechRecognition();
}

function draw() {
  background(255);
  updateOffscreen();

  const vw = offscreen.width;
  const vh = offscreen.height;
  const scaleFactor = min(width / vw, height / vh) * 1.08;
  const drawW = vw * scaleFactor;
  const drawH = vh * scaleFactor;
  const offsetX = (width - drawW) / 2;
  const offsetY = (height - drawH) / 2;

  wallBounds.left = (WALL_THICKNESS_SCREEN - offsetX) / scaleFactor;
  wallBounds.right = (width - WALL_THICKNESS_SCREEN - offsetX) / scaleFactor;
  wallBounds.top = (WALL_THICKNESS_SCREEN - offsetY) / scaleFactor;
  wallBounds.bottom = (height - WALL_THICKNESS_SCREEN - offsetY) / scaleFactor;

  if (showVideoReference) {
    push();
    tint(255, 34);
    image(offscreen, offsetX, offsetY, drawW, drawH);
    pop();
  }

  const faceData = buildFaceData();
  updateSpeaker(faceData);

  currentFaceSlots = [[], []];
  for (let i = 0; i < faceData.length; i++) {
    currentFaceSlots[i] = buildFaceSlots(faceData[i]);
  }

  for (let i = 0; i < faceData.length; i++) {
    drawDotPortrait(faceData[i], i, scaleFactor, offsetX, offsetY);
  }

  updateWordParticles(faceData);
  resolveParticleCollisions();
  applyHandInteractions();
  drawWordParticles(scaleFactor, offsetX, offsetY);
  drawBiasWalls();
}

function updateOffscreen() {
  offscreen.push();
  offscreen.background(255);
  offscreen.translate(offscreen.width, 0);
  offscreen.scale(-1, 1);
  offscreen.image(video, 0, 0, offscreen.width, offscreen.height);
  offscreen.pop();
  offscreen.loadPixels();
}

function buildFaceData() {
  let data = [];

  for (let i = 0; i < min(2, faces.length); i++) {
    if (!faces[i].scaledMesh) continue;

    const keypoints = faces[i].scaledMesh;
    const facePoly = getPolygon(FACE_OVAL, keypoints);
    const leftEyePoly = getPolygon(LEFT_EYE, keypoints);
    const rightEyePoly = getPolygon(RIGHT_EYE, keypoints);
    const lipsPoly = getPolygon(OUTER_LIPS, keypoints);
    const nosePoly = getPolygon(NOSE_REGION, keypoints);
    const faceBox = getBoundingBox(facePoly);
    const mouthCenter = getPolygonCenter(lipsPoly);
    const mouthOpen = getMouthOpenValue(keypoints, faceBox);

    data.push({
      stableId: i,
      keypoints,
      facePoly,
      leftEyePoly,
      rightEyePoly,
      lipsPoly,
      nosePoly,
      faceBox,
      mouthCenter,
      mouthOpen
    });
  }

  data.sort((a, b) => a.faceBox.minX - b.faceBox.minX);
  data.forEach((f, idx) => f.stableId = idx);
  return data;
}

function getMouthOpenValue(keypoints, faceBox) {
  const upper = keypoints[UPPER_LIP_POINT];
  const lower = keypoints[LOWER_LIP_POINT];
  if (!upper || !lower || !faceBox) return 0;

  const uy = Array.isArray(upper) ? upper[1] : upper.y;
  const ly = Array.isArray(lower) ? lower[1] : lower.y;
  const fh = max(1, faceBox.maxY - faceBox.minY);
  return abs(ly - uy) / fh;
}

function updateSpeaker(faceData) {
  const now = millis();

  if (activeSpeakerId !== null && now < activeSpeakerLockUntil) return;

  if (faceData.length === 0) {
    activeSpeakerId = null;
    return;
  }

  let bestIdx = 0;
  let bestOpen = -Infinity;
  for (let i = 0; i < faceData.length; i++) {
    if (faceData[i].mouthOpen > bestOpen) {
      bestOpen = faceData[i].mouthOpen;
      bestIdx = faceData[i].stableId;
    }
  }

  if (bestOpen > 0.010) {
    activeSpeakerId = bestIdx;
    activeSpeakerLockUntil = now + SPEAKER_LOCK_MS;
  } else if (now >= activeSpeakerLockUntil) {
    activeSpeakerId = faceData[0].stableId;
  }
}

function buildFaceSlots(face) {
  const slots = [];
  const { facePoly, leftEyePoly, rightEyePoly, lipsPoly, nosePoly, faceBox } = face;

  const cx = (faceBox.minX + faceBox.maxX) / 2;
  const cy = (faceBox.minY + faceBox.maxY) / 2;
  const fw = faceBox.maxX - faceBox.minX;
  const fh = faceBox.maxY - faceBox.minY;

  const hairCX = cx;
  const hairCY = cy - fh * 0.42;
  const hairRX = fw * 0.72;
  const hairRY = fh * 0.62;

  const neckLeft = cx - fw * 0.14;
  const neckRight = cx + fw * 0.14;
  const neckTop = faceBox.maxY - fh * 0.01;
  const neckBottom = faceBox.maxY + fh * 0.24;

  const shoulderTop = faceBox.maxY + fh * 0.18;
  const shoulderBottom = faceBox.maxY + fh * 0.52;
  const shoulderLeft = cx - fw * 0.56;
  const shoulderRight = cx + fw * 0.56;

  for (let y = floor(faceBox.minY - fh * 0.42); y <= floor(shoulderBottom); y += gridStep) {
    for (let x = floor(faceBox.minX - fw * 0.22); x <= floor(faceBox.maxX + fw * 0.22); x += gridStep) {
      let region = "bg";

      if (pointInPolygon(x, y, leftEyePoly) || pointInPolygon(x, y, rightEyePoly)) {
        region = "eye";
      } else if (pointInPolygon(x, y, lipsPoly)) {
        region = "mouth";
      } else if (pointInPolygon(x, y, nosePoly)) {
        region = "nose";
      } else if (ellipseContains(x, y, hairCX, hairCY, hairRX, hairRY) && !pointInPolygon(x, y, facePoly)) {
        region = "hair";
      } else if (pointInPolygon(x, y, facePoly)) {
        region = "face";
      } else if (x > neckLeft && x < neckRight && y > neckTop && y < neckBottom) {
        region = "neck";
      } else if (x > shoulderLeft && x < shoulderRight && y > shoulderTop && y < shoulderBottom) {
        region = "shoulder";
      }

      if (region === "bg") continue;

      const brightnessVal = getBrightnessAt(x, y);
      const darkness = 1 - brightnessVal / 255;
      let appear = false;

      if (region === "eye" || region === "nose" || region === "mouth") {
        appear = darkness > 0.12;
      } else if (region === "hair") {
        appear = darkness > 0.10;
      } else if (region === "face") {
        appear = darkness > 0.07;
      } else {
        appear = darkness > 0.06;
      }

      if (!appear) continue;

      slots.push({ x, y, region });
    }
  }

  slots.sort((a, b) => {
    if (a.y !== b.y) return a.y - b.y;
    return a.x - b.x;
  });

  for (let i = 0; i < slots.length; i++) {
    slots[i].key = `slot_${i}`;
  }

  return slots;
}

function drawDotPortrait(face, faceIndex, scaleFactor, offsetX, offsetY) {
  const { facePoly, leftEyePoly, rightEyePoly, lipsPoly, nosePoly, faceBox } = face;

  const cx = (faceBox.minX + faceBox.maxX) / 2;
  const cy = (faceBox.minY + faceBox.maxY) / 2;
  const fw = faceBox.maxX - faceBox.minX;
  const fh = faceBox.maxY - faceBox.minY;

  const hairCX = cx;
  const hairCY = cy - fh * 0.42;
  const hairRX = fw * 0.72;
  const hairRY = fh * 0.62;

  const neckLeft = cx - fw * 0.14;
  const neckRight = cx + fw * 0.14;
  const neckTop = faceBox.maxY - fh * 0.01;
  const neckBottom = faceBox.maxY + fh * 0.24;

  const shoulderTop = faceBox.maxY + fh * 0.18;
  const shoulderBottom = faceBox.maxY + fh * 0.52;
  const shoulderLeft = cx - fw * 0.56;
  const shoulderRight = cx + fw * 0.56;

  let slotCounter = 0;

  for (let y = floor(faceBox.minY - fh * 0.42); y <= floor(shoulderBottom); y += gridStep) {
    for (let x = floor(faceBox.minX - fw * 0.22); x <= floor(faceBox.maxX + fw * 0.22); x += gridStep) {
      let region = "bg";

      if (pointInPolygon(x, y, leftEyePoly) || pointInPolygon(x, y, rightEyePoly)) {
        region = "eye";
      } else if (pointInPolygon(x, y, lipsPoly)) {
        region = "mouth";
      } else if (pointInPolygon(x, y, nosePoly)) {
        region = "nose";
      } else if (ellipseContains(x, y, hairCX, hairCY, hairRX, hairRY) && !pointInPolygon(x, y, facePoly)) {
        region = "hair";
      } else if (pointInPolygon(x, y, facePoly)) {
        region = "face";
      } else if (x > neckLeft && x < neckRight && y > neckTop && y < neckBottom) {
        region = "neck";
      } else if (x > shoulderLeft && x < shoulderRight && y > shoulderTop && y < shoulderBottom) {
        region = "shoulder";
      }

      if (region === "bg") continue;

      const brightnessVal = getBrightnessAt(x, y);
      const darkness = 1 - brightnessVal / 255;

      let appear = false;
      if (region === "eye" || region === "nose" || region === "mouth") {
        appear = darkness > 0.12;
      } else if (region === "hair") {
        appear = darkness > 0.10;
      } else if (region === "face") {
        appear = darkness > 0.07;
      } else {
        appear = darkness > 0.06;
      }

      if (!appear) continue;

      const px = x * scaleFactor + offsetX;
      const py = y * scaleFactor + offsetY;

      let sizeVal = map(darkness, 0, 1, baseDotSize * 0.65, baseDotSize * 3.6);
      let alphaVal = map(darkness, 0, 1, 14, portraitAlpha);
      let fillColor = color(0, alphaVal);

      if (region === "eye") sizeVal *= 0.85;
      if (region === "nose") sizeVal *= 0.9;
      if (region === "mouth") sizeVal *= 0.85;
      if (region === "hair") sizeVal *= 1.14;
      if (region === "shoulder") sizeVal *= 0.95;

      const key = `slot_${slotCounter}`;
      const c = faceGridColorMaps[faceIndex][key];
      if (c) {
        fillColor = color(c.r, c.g, c.b, alphaVal);
      }
      slotCounter++;

      fill(fillColor);
      circle(px, py, sizeVal);
    }
  }
}

function updateWordParticles(faceData) {
  let sourceFace = faceData.find(f => f.stableId === activeSpeakerId) || null;

  for (let i = wordParticles.length - 1; i >= 0; i--) {
    const p = wordParticles[i];
    const now = millis();
    const ageMs = now - p.birthTime;

    let targetFace = null;
    if (faceData.length >= 2) {
      targetFace = faceData.find(f => f.stableId !== p.sourceFaceId) || null;
    }

    p.age += 1;

    if (targetFace && targetFace.faceBox) {
      applyAttachmentForce(p, targetFace);
    }

    p.x += p.vx;
    p.y += p.vy;

    p.vx += (noise(p.noiseSeed, frameCount * 0.008) - 0.5) * p.noiseAmp;
    p.vy += (noise(p.noiseSeed + 100, frameCount * 0.008) - 0.5) * p.noiseAmp;

    p.vx *= p.attached ? 0.94 : p.damping;
    p.vy *= p.attached ? 0.94 : p.damping;

    if (!p.attached) {
      handleWallCollision(p);
    }

    p.angle += p.rotSpeed;
    p.wobble = sin(frameCount * 0.03 + p.noiseSeed) * p.wobbleAmp;

    if (ageMs < FADE_START_MS) {
      p.alpha = lerp(p.alpha, p.targetAlpha, 0.03);
    } else {
      const fadeT = constrain((ageMs - FADE_START_MS) / (PARTICLE_LIFETIME_MS - FADE_START_MS), 0, 1);
      const targetA = lerp(p.targetAlpha, 0, fadeT);
      p.alpha = lerp(p.alpha, targetA, 0.06);
      p.letterSpacing = lerp(p.letterSpacing, p.baseLetterSpacing + 1.4, 0.01);
      p.rotSpeed *= 0.995;
    }

    if (p.attached) {
      p.targetAlpha = lerp(p.targetAlpha, 190, 0.02);
      p.rotSpeed = lerp(p.rotSpeed, 0, 0.06);
    }

    if (p.alpha <= 2 || ageMs > PARTICLE_LIFETIME_MS || p.word.length === 0) {
      wordParticles.splice(i, 1);
    }
  }

  while (wordParticles.length > maxParticles) {
    wordParticles.shift();
  }

  if (sourceFace && sourceFace.mouthCenter) {
    for (const p of wordParticles) {
      if (p.age < 30 && !p.attached && p.sourceFaceId === sourceFace.stableId) {
        const dx = p.x - sourceFace.mouthCenter.x;
        const dy = p.y - sourceFace.mouthCenter.y;
        const d = sqrt(dx * dx + dy * dy);
        if (d < 20) {
          p.vx += 0.03;
          p.vy += random(-0.02, 0.02);
        }
      }
    }
  }
}

function applyAttachmentForce(p, targetFace) {
  const box = targetFace.faceBox;
  const cx = (box.minX + box.maxX) / 2;
  const cy = (box.minY + box.maxY) / 2;
  const fw = box.maxX - box.minX;
  const fh = box.maxY - box.minY;

  const attachRadiusX = fw * 0.62;
  const attachRadiusY = fh * 0.72;

  if (p.attachAngle == null) {
    p.attachAngle = random(TWO_PI);
  }

  const tx = cx + cos(p.attachAngle) * attachRadiusX;
  const ty = cy + sin(p.attachAngle) * attachRadiusY * 0.82;

  const dx = tx - p.x;
  const dy = ty - p.y;
  const d = sqrt(dx * dx + dy * dy);

  if (!p.attached) {
    p.vx += (dx / max(d, 1)) * 0.06;
    p.vy += (dy / max(d, 1)) * 0.06;
  }

  if (d < 26) {
    p.attached = true;
    p.attachedFaceId = targetFace.stableId;
    p.vx += (dx / max(d, 1)) * 0.04;
    p.vy += (dy / max(d, 1)) * 0.04;

    if (d < 8) {
      p.x = lerp(p.x, tx, 0.18);
      p.y = lerp(p.y, ty, 0.18);
    }
  }
}

function handleWallCollision(p) {
  const left = wallBounds.left;
  const right = wallBounds.right;
  const top = wallBounds.top;
  const bottom = wallBounds.bottom;

  let collided = false;
  let wall = "";

  if (p.x < left) {
    p.x = left;
    p.vx = abs(p.vx) * 0.98;
    collided = true;
    wall = "left";
  } else if (p.x > right) {
    p.x = right;
    p.vx = -abs(p.vx) * 0.98;
    collided = true;
    wall = "right";
  }

  if (p.y < top) {
    p.y = top;
    p.vy = abs(p.vy) * 0.98;
    collided = true;
    wall = "top";
  } else if (p.y > bottom) {
    p.y = bottom;
    p.vy = -abs(p.vy) * 0.98;
    collided = true;
    wall = "bottom";
  }

  if (collided && frameCount - p.lastMutationFrame > 12) {
    mutateParticleWordAndStyle(p, wall);
    mutateParticleColor(p, wall);
    p.lastMutationFrame = frameCount;
  }
}

function mutateParticleColor(p, wall) {
  const step = 30;

  if (wall === "top") {
    p.r = bounceChannel(p.r, step);
  } else if (wall === "right") {
    p.g = bounceChannel(p.g, step);
  } else if (wall === "bottom") {
    p.b = bounceChannel(p.b, step);
  } else if (wall === "left") {
    p.targetAlpha = max(0, p.targetAlpha - 1);
  }
}

function bounceChannel(value, step) {
  if (value + step > 255) return max(0, value - step);
  return min(255, value + step);
}

function resolveParticleCollisions() {
  for (let i = 0; i < wordParticles.length; i++) {
    for (let j = i + 1; j < wordParticles.length; j++) {
      const a = wordParticles[i];
      const b = wordParticles[j];

      if (a.attached && b.attached) continue;

      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d = sqrt(dx * dx + dy * dy);

      const ra = collisionRadiusBase + a.word.length * 0.8;
      const rb = collisionRadiusBase + b.word.length * 0.8;
      const minDist = (ra + rb) * 0.22;

      if (d > 0 && d < minDist) {
        const nx = dx / d;
        const ny = dy / d;
        const overlap = minDist - d;

        if (!a.attached) {
          a.x -= nx * overlap * 0.28;
          a.y -= ny * overlap * 0.28;
        }
        if (!b.attached) {
          b.x += nx * overlap * 0.28;
          b.y += ny * overlap * 0.28;
        }

        const push = 0.10;
        if (!a.attached) {
          a.vx -= nx * push;
          a.vy -= ny * push;
        }
        if (!b.attached) {
          b.vx += nx * push;
          b.vy += ny * push;
        }
      }
    }
  }
}

function mutateParticleWordAndStyle(p, wall) {
  if (wall === "top") {
    p.word = swapTwoLetters(p.word);
    p.size = max(12, p.size - 0.7);
    p.targetAlpha = max(90, p.targetAlpha - 18);
    p.letterSpacing += 0.22;
    p.rotSpeed *= 0.75;
    p.noiseAmp = max(0.004, p.noiseAmp - 0.002);
    p.wobbleAmp = max(0.4, p.wobbleAmp - 0.15);

  } else if (wall === "right") {
    p.word = duplicateOneLetter(p.word);
    if (p.word.length > 0 && !p.word.endsWith("?")) p.word += "?";
    p.size = min(28, p.size + 0.9);
    p.targetAlpha = min(255, p.targetAlpha + 22);
    p.letterSpacing -= 0.18;
    p.vx *= 1.08;
    p.vy *= 1.08;
    p.rotSpeed *= 1.08;
    p.noiseAmp += 0.001;

  } else if (wall === "bottom") {
    p.word = deleteOneLetter(p.word);
    p.rotSpeed += random(-0.01, 0.01);
    p.wobbleAmp = min(3.5, p.wobbleAmp + 0.35);
    p.noiseAmp = min(0.04, p.noiseAmp + 0.006);
    p.letterSpacing += random(-0.3, 0.4);

  } else if (wall === "left") {
    p.targetAlpha = max(0, p.targetAlpha - 1);
  }

  p.word = p.word.slice(0, 16);
  p.size = constrain(p.size, 12, 30);
  p.letterSpacing = constrain(p.letterSpacing, -1.2, 2.0);
  p.targetAlpha = constrain(p.targetAlpha, 0, 255);
  p.noiseAmp = constrain(p.noiseAmp, 0.002, 0.05);
  p.wobbleAmp = constrain(p.wobbleAmp, 0.2, 4.0);
}

function swapTwoLetters(word) {
  if (!word || word.length < 2) return word;
  const chars = word.split("");
  const i = floor(random(chars.length));
  let j = floor(random(chars.length));
  while (j === i) j = floor(random(chars.length));
  const tmp = chars[i];
  chars[i] = chars[j];
  chars[j] = tmp;
  return chars.join("");
}

function duplicateOneLetter(word) {
  if (!word || word.length < 1) return word;
  const chars = word.split("");
  const i = floor(random(chars.length));
  chars.splice(i, 0, chars[i]);
  return chars.join("");
}

function deleteOneLetter(word) {
  if (!word || word.length <= 1) return "";
  const chars = word.split("");
  const i = floor(random(chars.length));
  chars.splice(i, 1);
  return chars.join("");
}

function applyHandInteractions() {
  if (!hands || hands.length === 0) return;
  const now = millis();
  const handPoints = getMirroredHandPoints();

  for (const hp of handPoints) {
    for (const p of wordParticles) {
      const d = dist(hp.x, hp.y, p.x, p.y);
      if (d < HAND_PUSH_RADIUS) {
        const dx = p.x - hp.x;
        const dy = p.y - hp.y;
        const mag = max(1, sqrt(dx * dx + dy * dy));

        p.attached = false;
        p.vx += (dx / mag) * HAND_PUSH_FORCE;
        p.vy += (dy / mag) * HAND_PUSH_FORCE;
        p.alpha = min(255, p.alpha + 18);

        if (now - lastColorTransferTime > HAND_COLOR_TRANSFER_COOLDOWN) {
          let targetFaceIndex = 0;
          if (p.attachedFaceId != null) {
            targetFaceIndex = p.attachedFaceId;
          } else {
            targetFaceIndex = getClosestFaceIndex(hp.x, hp.y);
          }

          if (targetFaceIndex !== -1) {
            transferParticleColorToFaceGrid(p, targetFaceIndex);
            lastColorTransferTime = now;
          }
        }
      }
    }
  }
}

function getMirroredHandPoints() {
  let pts = [];

  for (const h of hands) {
    if (!h.landmarks) continue;

    const idxTip = h.landmarks[8];
    const midTip = h.landmarks[12];
    const palmBase = h.landmarks[9] || h.landmarks[0];

    if (idxTip) pts.push({ x: offscreen.width - idxTip[0], y: idxTip[1] });
    if (midTip) pts.push({ x: offscreen.width - midTip[0], y: midTip[1] });
    if (palmBase) pts.push({ x: offscreen.width - palmBase[0], y: palmBase[1] });
  }

  return pts;
}

function getClosestFaceIndex(x, y) {
  let bestIndex = -1;
  let bestD = Infinity;

  for (let i = 0; i < currentFaceSlots.length; i++) {
    if (!currentFaceSlots[i] || currentFaceSlots[i].length === 0) continue;

    for (const s of currentFaceSlots[i]) {
      const d = dist(x, y, s.x, s.y);
      if (d < bestD) {
        bestD = d;
        bestIndex = i;
      }
    }
  }

  return bestIndex;
}

function transferParticleColorToFaceGrid(particle, faceIndex) {
  if (!currentFaceSlots[faceIndex] || currentFaceSlots[faceIndex].length === 0) return;

  let slots = currentFaceSlots[faceIndex];
  let colorMap = faceGridColorMaps[faceIndex];

  let uncolored = slots.filter(s => !colorMap[s.key]);
  let chosen = null;

  if (uncolored.length > 0) {
    let bestD = Infinity;
    for (const s of uncolored) {
      const d = dist(particle.x, particle.y, s.x, s.y);
      if (d < bestD) {
        bestD = d;
        chosen = s;
      }
    }
  } else {
    chosen = random(slots);
  }

  if (!chosen) return;

  colorMap[chosen.key] = {
    r: particle.r,
    g: particle.g,
    b: particle.b
  };
}

function drawWordParticles(scaleFactor, offsetX, offsetY) {
  for (const p of wordParticles) {
    if (!p.word || p.word.length === 0) continue;

    const px = p.x * scaleFactor + offsetX;
    const py = p.y * scaleFactor + offsetY;

    push();
    translate(px, py);
    rotate(p.angle);

    fill(p.r, p.g, p.b, p.alpha);
    textSize(p.size);

    let cursorX = 0;
    for (let i = 0; i < p.word.length; i++) {
      const ch = p.word[i];
      const dx = sin(frameCount * 0.02 + p.noiseSeed + i * 0.7) * 0.6;
      text(ch, cursorX + dx, p.wobble * 0.08);
      cursorX += textWidth(ch) + p.letterSpacing;
    }

    pop();
  }
}

function addSpokenWords(txt, faceData) {
  const words = cleanSpeechWords(txt);
  if (!words.length) return;

  const sourceFace = faceData.find(f => f.stableId === activeSpeakerId) || faceData[0];
  if (!sourceFace || !sourceFace.mouthCenter) return;

  const mouth = sourceFace.mouthCenter;

  for (let w of words) {
    if (w.length > 12) w = w.slice(0, 12);

    wordParticles.push({
      word: w,
      sourceFaceId: sourceFace.stableId,
      attachedFaceId: null,
      x: mouth.x + random(-8, 8),
      y: mouth.y + random(-4, 4),
      vx: random(1.4, 2.8),
      vy: random(-1.2, 1.2),
      r: 0,
      g: 0,
      b: 0,
      alpha: 235,
      targetAlpha: 215,
      size: random(16, 23),
      angle: random(-0.18, 0.18),
      rotSpeed: random(-0.008, 0.008),
      wobble: 0,
      wobbleAmp: 1.6,
      letterSpacing: random(-0.4, 0.6),
      baseLetterSpacing: 0,
      age: 0,
      birthTime: millis(),
      noiseSeed: random(1000),
      noiseAmp: 0.018,
      damping: 0.996,
      lastMutationFrame: -999,
      attached: false,
      attachAngle: null
    });
  }
}

function cleanSpeechWords(txt) {
  const cleaned = txt
    .toLowerCase()
    .replace(/[^a-z\s']/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) return [];

  return cleaned.split(" ").filter(w => {
    if (!w) return false;
    if (w.length < 3) return false;
    if (STOP_WORDS.has(w)) return false;
    if (/^(ann|umm|uhh|mmm)$/.test(w)) return false;
    return true;
  });
}

function startSpeechRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SR) {
    speechSupported = false;
    return;
  }

  speechSupported = true;
  recognition = new SR();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    let finalText = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const txt = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalText += txt + " ";
      }
    }

    if (finalText.trim()) {
      const currentFaces = buildFaceData();
      updateSpeaker(currentFaces);
      addSpokenWords(finalText.trim(), currentFaces);
    }
  };

  recognition.onerror = (e) => {};

  recognition.onend = () => {
    setTimeout(() => {
      try {
        recognition.start();
      } catch (err) {}
    }, 300);
  };

  setTimeout(() => {
    try {
      recognition.start();
    } catch (err) {}
  }, 700);
}

function drawBiasWalls() {
  push();
  noStroke();
  fill(255, 80, 80, 30);
  rect(0, 0, width, WALL_THICKNESS_SCREEN);
  fill(80, 255, 120, 30);
  rect(width - WALL_THICKNESS_SCREEN, 0, WALL_THICKNESS_SCREEN, height);
  fill(80, 120, 255, 30);
  rect(0, height - WALL_THICKNESS_SCREEN, width, WALL_THICKNESS_SCREEN);
  fill(0, 0, 0, 18);
  rect(0, 0, WALL_THICKNESS_SCREEN, height);
  pop();
}

function getBrightnessAt(x, y) {
  x = floor(constrain(x, 0, offscreen.width - 1));
  y = floor(constrain(y, 0, offscreen.height - 1));
  const idx = (y * offscreen.width + x) * 4;
  const r = offscreen.pixels[idx];
  const g = offscreen.pixels[idx + 1];
  const b = offscreen.pixels[idx + 2];
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function getPolygon(indices, keypoints) {
  const poly = [];
  for (let i = 0; i < indices.length; i++) {
    const pt = keypoints[indices[i]];
    if (!pt) continue;

    const px = Array.isArray(pt) ? pt[0] : pt.x;
    const py = Array.isArray(pt) ? pt[1] : pt.y;

    poly.push({
      x: offscreen.width - px,
      y: py
    });
  }
  return poly;
}

function getBoundingBox(poly) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (let p of poly) {
    if (p.x < minX) minX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.x > maxX) maxX = p.x;
    if (p.y > maxY) maxY = p.y;
  }
  return { minX, minY, maxX, maxY };
}

function getPolygonCenter(poly) {
  if (!poly || poly.length === 0) return null;
  let sx = 0;
  let sy = 0;
  for (const p of poly) {
    sx += p.x;
    sy += p.y;
  }
  return { x: sx / poly.length, y: sy / poly.length };
}

function pointInPolygon(x, y, poly) {
  if (!poly || poly.length < 3) return false;
  let inside = false;

  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x, yi = poly[i].y;
    const xj = poly[j].x, yj = poly[j].y;

    const intersect =
      ((yi > y) !== (yj > y)) &&
      (x < ((xj - xi) * (y - yi)) / ((yj - yi) || 0.0000001) + xi);

    if (intersect) inside = !inside;
  }

  return inside;
}

function ellipseContains(x, y, cx, cy, rx, ry) {
  const dx = (x - cx) / rx;
  const dy = (y - cy) / ry;
  return dx * dx + dy * dy <= 1;
}

function keyPressed() {
  if (key === 't' || key === 'T') {
    showVideoReference = false;
  } else if (key === 'v' || key === 'V') {
    showVideoReference = true;
  } else if (key === 'c' || key === 'C') {
    wordParticles = [];
    transcriptBuffer = "";
    faceGridColorMaps = [{}, {}];
  } else if (key === '[') {
    baseDotSize = max(0.8, baseDotSize - 0.2);
  } else if (key === ']') {
    baseDotSize = min(8, baseDotSize + 0.2);
  } else if (key === '-') {
    gridStep = min(18, gridStep + 1);
  } else if (key === '=' || key === '+') {
    gridStep = max(4, gridStep - 1);
  }
}

function mousePressed() {
  if (speechSupported && recognition) {
    try {
      recognition.start();
    } catch (err) {}
  }
}

function touchStarted() {
  if (speechSupported && recognition) {
    try {
      recognition.start();
    } catch (err) {}
  }
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}