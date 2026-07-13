import type { AnimalEvent } from "@/types/event";

export const FATALITY_AUDIT_DATE = "2026-07-13";

// These records remain in the research register, but do not meet the newer,
// narrower publication rule: a documented death caused by human action.
export const fatalityAuditExclusions = new Set([
  "martha-1914", "incas-carolina-parakeet", "jackie-1918", "booming-ben-heath-hen", "chips-war-dog",
  "sergeant-reckless-korean-war", "able-baker-1959", "belka-strelka-orbit", "ham-1961", "enos-1961",
  "veterok-ugolyok", "namu-orca-captivity", "nemo-vietnam-dog", "tokitae-1970", "harlow-isolation-monkeys",
  "mali-1977", "hugo-orca-death", "silver-spring-1981", "sefton-hyde-park-horse", "peanut-1984",
  "kauai-oo-last-call", "gucci-dog-cruelty-law", "marjan-1995", "motala-1999", "last-wild-spix-macaw",
  "celia-pyrenean-ibex", "alala-last-wild-pair", "keiko-orca-release", "qiqi-baiji-dolphin", "pony-orangutan-rescue",
  "dolly-2003", "ming-harlem-tiger", "poouli-last-captive-bird", "beauty-2005", "winter-2005",
  "leo-snow-leopard-rescue", "maggie-alaska-relocation", "kenny-inbred-white-tiger", "susie-dog-north-carolina", "christmas-island-pipistrelle-last-call",
  "tilikum-2010", "silent-knight-2010", "anne-2011", "patrick-2011", "thandi-rhino-poaching",
  "lucca-military-dog", "lonesome-george-pinta", "lucy-puppy-farm-law", "lolong-2013", "raju-elephant-rescue",
  "sandra-orangutan-rights", "ponso-abandoned-chimpanzee", "ustad-t24-relocation", "caitlyn-2015", "hanako-inokashira-elephant",
  "bramble-cay-melomys-extinction", "arturo-polar-bear", "libre-2016", "khan-younis-2016", "toughie-2016",
  "finn-2016", "pizza-mall-polar-bear", "mosul-zoo-2017", "nosey-2017", "sudan-northern-white-rhino",
  "inuka-polar-bear-euthanasia", "george-snail-2019", "hope-2019", "kuno-military-dog", "fair-oaks-calves",
  "mali-polar-bear-thailand", "kaavan-2020", "snow-cone-2021", "lucy-edmonton-elephant", "pangolin-lucky-trafficking",
  "estrellita-2022", "envigo-2022", "happy-elephant-court", "moon-2022", "kiska-2023",
  "papillon-m49-bear", "romeo-manatee-isolation", "australia-reptiles-2024", "dexter-dog-florida", "trooper-hurricane-milton",
  "marine-trafficking-2026",
]);

export function filterHumanCausedFatalities(events: AnimalEvent[]) {
  return events.filter((event) => !fatalityAuditExclusions.has(event.id));
}
