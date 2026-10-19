// Zesty decks — loaded on demand.
//
// The Zesty (grown-up) decks are not stored in this repository. The first time a
// Zesty game starts, this module downloads them, fills the exported arrays in
// data.js in place (so every game that already holds a reference sees the cards),
// and keeps a copy on the device so later sessions work offline.
import {
  PROMPTS, RESPONSES, WOULD_YOU_RATHER, MOST_LIKELY, RED_GREEN,
  ZESTY_TRUTHS_DARES, CAMPFIRE_ROASTS, RIZZ_ROULETTE,
} from "./data.js";

const DECKS_URL = "https://lakehouse-zesty-decks.gameassassin777.workers.dev/zesty-decks.json";
const CACHE_KEY = "lakehouse.zesty_decks.v1";
const TARGETS = { PROMPTS, RESPONSES, WOULD_YOU_RATHER, MOST_LIKELY, RED_GREEN, ZESTY_TRUTHS_DARES, CAMPFIRE_ROASTS, RIZZ_ROULETTE };

let loaded = false;
let inflight = null;

function fill(data) {
  if (!data || typeof data !== "object") return false;
  let any = false;
  for (const [name, arr] of Object.entries(TARGETS)) {
    const incoming = data[name];
    if (Array.isArray(incoming) && incoming.length && arr.length === 0) { arr.push(...incoming); any = true; }
  }
  if (any) loaded = true;
  return any;
}

export function zestyDecksLoaded() { return loaded; }

// Resolves true when the decks are available (from the device cache or the network).
export function ensureZestyDecks() {
  if (loaded) return Promise.resolve(true);
  if (inflight) return inflight;
  inflight = (async () => {
    try { fill(JSON.parse(localStorage.getItem(CACHE_KEY) || "null")); } catch (_) { /* no usable cache */ }
    try {
      const res = await fetch(DECKS_URL, { cache: "no-cache" });
      if (res.ok) {
        const data = await res.json();
        if (!loaded) fill(data);
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch (_) { /* storage full or blocked */ }
      }
    } catch (_) { /* offline: the cache, if any, already filled the decks */ }
    inflight = null;
    return loaded;
  })();
  return inflight;
}
