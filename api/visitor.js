const COUNTER_KEY =
  process.env.VISITOR_COUNTER_KEY || "ruiyuanbai:portfolio:visitor-count";
const START_NUMBER = Number.parseInt(
  process.env.VISITOR_COUNTER_START || "12",
  10
);

function json(response, status, body) {
  response.status(status).setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(body));
}

function getRedisConfig() {
  const url =
    process.env.KV_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.REDIS_REST_API_URL;
  const token =
    process.env.KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.REDIS_REST_API_TOKEN;

  if (!url || !token) return null;

  return {
    token,
    url: url.replace(/\/$/, ""),
  };
}

async function incrementVisitorCount() {
  const config = getRedisConfig();

  if (!config) {
    return {
      configured: false,
      number: START_NUMBER,
    };
  }

  const redisResponse = await fetch(
    `${config.url}/incr/${encodeURIComponent(COUNTER_KEY)}`,
    {
      headers: {
        Authorization: `Bearer ${config.token}`,
      },
    }
  );

  if (!redisResponse.ok) {
    const message = await redisResponse.text();
    throw new Error(`Redis counter failed: ${redisResponse.status} ${message}`);
  }

  const data = await redisResponse.json();
  const rawCount = Number(data.result);

  if (!Number.isFinite(rawCount)) {
    throw new Error("Redis counter returned an invalid value.");
  }

  return {
    configured: true,
    number: START_NUMBER + rawCount - 1,
  };
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    json(response, 405, { error: "Method not allowed" });
    return;
  }

  try {
    const result = await incrementVisitorCount();
    json(response, result.configured ? 200 : 503, {
      configured: result.configured,
      number: result.number,
      padded: result.number.toString().padStart(7, "0"),
    });
  } catch (error) {
    json(response, 500, {
      error: "Visitor counter failed",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
