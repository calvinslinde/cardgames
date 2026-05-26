// Card data for the Lake House card games.
// Cards Against Monkeys (sussy) + Cards Against the Cabin (normal): prompts (black) + responses (white).

// Blank marker used in prompt text. The UI replaces these with the chosen card(s).
export const BLANK = "_______";

/* ============================================================
 * CARDS AGAINST MONKEYS — the sussy / brain-rot deck.
 * ============================================================ */

// `pick` = how many response cards must be played.
// Prompts written as questions have no blank and the answer is shown beneath.
export const PROMPTS = [
  // Deck content is served from outside this repository.
];

// Response cards — chronically-online brain-rot answers.
export const RESPONSES = [
  // Deck content is served from outside this repository.
];

/* ============================================================
 * CARDS AGAINST THE CABIN — the "normal" deck. Same game, broader
 * humor (dark, absurd, relatable) with a lake-house lean. Tamer than
 * Monkeys but still firmly an adult party game.
 * ============================================================ */

export const NORMAL_PROMPTS = [
  // --- Pick One ---
  { text: `My local HOA president showed up, took one look at ${BLANK}, and left out of respect.`, pick: 1 },
  { text: `I don't have a personality anymore. I just have ${BLANK} and a sensible pair of slacks.`, pick: 1 },
  { text: `Breaking: local man's entire bloodline ended by ${BLANK}.`, pick: 1 },
  { text: `My toxic trait is genuinely believing I can fix ${BLANK}.`, pick: 1 },
  { text: `The group chat has been eerily quiet ever since I sent ${BLANK}.`, pick: 1 },
  { text: `Therapy is expensive, so I cope with ${BLANK} instead.`, pick: 1 },
  { text: `He's not a red flag. He's an entire ${BLANK} parade.`, pick: 1 },
  { text: `My villain origin story began the day I discovered ${BLANK}.`, pick: 1 },
  { text: `The only thing keeping me tethered to reality at 4 a.m. is ${BLANK}.`, pick: 1 },
  { text: `Customs pulled me aside because of ${BLANK}.`, pick: 1 },
  { text: `What does my FBI agent refuse to make eye contact with me about?`, pick: 1 },
  { text: `I told the doctor "it hurts when I do this," and "this" was ${BLANK}.`, pick: 1 },
  { text: `Rome fell eventually. Honestly, ${BLANK} would've finished the job faster.`, pick: 1 },
  { text: `My entire screen-time report is just ${BLANK}.`, pick: 1 },
  { text: `Welcome to my TED Talk. Today's topic: why ${BLANK} is the root of all my problems.`, pick: 1 },
  { text: `The lake-house weekend descended into chaos the second someone mentioned ${BLANK}.`, pick: 1 },
  { text: `I'd trade my entire 401(k) for one more hit of ${BLANK}.`, pick: 1 },
  { text: `What instantly turns any gas-station bathroom into an active crime scene?`, pick: 1 },
  { text: `According to my Spotify Wrapped, my whole year was just ${BLANK}.`, pick: 1 },
  { text: `I'm built different. Specifically, I'm built out of ${BLANK} and pure spite.`, pick: 1 },
  { text: `He pulled up to the function with ${BLANK} and genuinely thought it was a flex.`, pick: 1 },
  { text: `The horror movie would've ended in five minutes if they'd just had ${BLANK}.`, pick: 1 },
  { text: `My grandma found my phone, and now she only knows me as the guy who's into ${BLANK}.`, pick: 1 },
  { text: `Nothing humbles a grown man faster than ${BLANK}.`, pick: 1 },
  { text: `I will not be taking any further questions about ${BLANK}.`, pick: 1 },
  { text: `The aux got revoked the instant I played ${BLANK}.`, pick: 1 },
  { text: `What is currently rotting at the very bottom of my backpack?`, pick: 1 },
  { text: `Every night I lie awake, haunted by the memory of ${BLANK}.`, pick: 1 },
  { text: `My personal brand is 90% vibes and 10% ${BLANK}.`, pick: 1 },
  { text: `The Wi-Fi died at the cabin, and within an hour we'd resorted to ${BLANK}.`, pick: 1 },
  { text: `They say money can't buy happiness, but it can buy ${BLANK}, which is close enough.`, pick: 1 },
  { text: `I lost the family fishing trophy this year because of ${BLANK}.`, pick: 1 },
  { text: `My last two brain cells are currently fighting to the death over ${BLANK}.`, pick: 1 },
  { text: `What would get me immediately removed from a child's birthday party?`, pick: 1 },
  { text: `The secret ingredient in grandma's award-winning casserole was always ${BLANK}.`, pick: 1 },
  { text: `I peaked in high school, and the only proof left is ${BLANK}.`, pick: 1 },
  { text: `Officer, I can absolutely explain ${BLANK}.`, pick: 1 },
  { text: `My whole bloodline's curse can be traced directly back to ${BLANK}.`, pick: 1 },
  { text: `Nobody warned me that adulthood was mostly just ${BLANK}.`, pick: 1 },
  { text: `The campfire went silent the moment Dad confessed to ${BLANK}.`, pick: 1 },

  // --- Pick Two ---
  { text: `My therapist diagnosed me with ${BLANK} and a crippling dependence on ${BLANK}.`, pick: 2 },
  { text: `The recipe for the perfect lake-house weekend: equal parts ${BLANK} and ${BLANK}.`, pick: 2 },
  { text: `I told her I'm a simple man with simple needs: ${BLANK} and ${BLANK}.`, pick: 2 },
  { text: `Forget fight-or-flight. My nervous system only knows ${BLANK} and ${BLANK}.`, pick: 2 },
  { text: `The situationship started with ${BLANK} and ended, predictably, with ${BLANK}.`, pick: 2 },
  { text: `My two personalities: ${BLANK} in public, and ${BLANK} at 3 a.m.`, pick: 2 },
  { text: `Heaven is ${BLANK}. Hell is ${BLANK}. I have visited both this week.`, pick: 2 },
  { text: `The ick went from 0 to 100 the moment he combined ${BLANK} with ${BLANK}.`, pick: 2 },
  { text: `My entire financial plan is ${BLANK} now and ${BLANK} later.`, pick: 2 },
  { text: `The cult had two rules: never discuss ${BLANK}, and always protect ${BLANK}.`, pick: 2 },
  { text: `I childproofed the whole cabin but completely forgot about ${BLANK} and ${BLANK}.`, pick: 2 },
  { text: `My dating profile just reads: "into ${BLANK}, violently allergic to ${BLANK}."`, pick: 2 },
  { text: `The group project collapsed because Kevin brought ${BLANK} instead of ${BLANK}.`, pick: 2 },
  { text: `Evolution blessed me with ${BLANK} but cruelly denied me ${BLANK}.`, pick: 2 },
  { text: `The neighborhood council meeting approved ${BLANK}, which immediately demanded ${BLANK}.`, pick: 2 },
  { text: `My will leaves ${BLANK} to my enemies and ${BLANK} to my cat.`, pick: 2 },
  { text: `The wedding was perfect until the best man's speech brought up ${BLANK} and ${BLANK}.`, pick: 2 },
  { text: `Customs waved me through with ${BLANK} but somehow seized my ${BLANK}.`, pick: 2 },
  { text: `My morning routine: ${BLANK} before coffee, ${BLANK} before regret.`, pick: 2 },
  { text: `He proposed with ${BLANK} instead of a ring, then followed it up with ${BLANK}.`, pick: 2 },
  { text: `The apocalypse starter pack: ${BLANK}, ${BLANK}, and zero survival skills.`, pick: 2 },
  { text: `The lake monster surfaced, took ${BLANK}, and left behind only ${BLANK}.`, pick: 2 },
  { text: `Two things school never taught me: how to do taxes, and how to survive ${BLANK} and ${BLANK}.`, pick: 2 },
  { text: `I manifested ${BLANK}, and the universe sarcastically handed me ${BLANK}.`, pick: 2 },
  { text: `The campfire confessions spiraled when Aunt Linda admitted to ${BLANK} and ${BLANK}.`, pick: 2 },
  { text: `My entire twenties were just ${BLANK} fueled by ${BLANK}.`, pick: 2 },
  { text: `My performance review flagged two "areas for improvement": ${BLANK} and ${BLANK}.`, pick: 2 },
  { text: `The genie granted exactly two wishes: ${BLANK}, and the eternal curse of ${BLANK}.`, pick: 2 },
  { text: `Pro tip: never mix ${BLANK} with ${BLANK} unless you want to end up on a watchlist.`, pick: 2 },
  { text: `The family reunion split into two camps: team ${BLANK} and team ${BLANK}.`, pick: 2 },
  { text: `My comfort show is just ${BLANK}, and my comfort food is, regrettably, ${BLANK}.`, pick: 2 },
  { text: `He texted "we need to talk" and showed up holding ${BLANK} and ${BLANK}.`, pick: 2 },
  { text: `My entire sleep schedule is held together by ${BLANK} and ${BLANK}.`, pick: 2 },
  { text: `The boat sank because someone absolutely insisted on bringing ${BLANK} AND ${BLANK}.`, pick: 2 },
  { text: `My personality test came back with two results: ${BLANK} and a deeply concerning amount of ${BLANK}.`, pick: 2 },
  { text: `They erected a statue of me holding ${BLANK} in one hand and ${BLANK} in the other.`, pick: 2 },
  { text: `Step one: ${BLANK}. Step two: ??? Step three: ${BLANK}.`, pick: 2 },
  { text: `The escape room left us two clues: ${BLANK} and ${BLANK}. We are, to this day, still in there.`, pick: 2 },
  { text: `My red flag is ${BLANK}. My green flag is, somehow, also ${BLANK}.`, pick: 2 },
  { text: `The reunion photo was ruined by ${BLANK} and, in the background, ${BLANK}.`, pick: 2 },
];

export const NORMAL_RESPONSES = [
  // lake-house / cabin flavored
  "a canoe full of regret",
  "the dock where I lost my last shred of dignity",
  "skinny dipping at the worst possible time",
  "a deeply cursed s'more",
  "the lake monster everyone pretends isn't real",
  "a jet ski I cannot afford and cannot drive",
  "the in-laws arriving two days early",
  "a screaming loon at 4 a.m.",
  "an inflatable flamingo with too much attitude",
  "the group chat planning a trip that will never happen",
  "wet socks for the entire weekend",
  "a tackle box full of bad decisions",
  "the one mosquito that ruins everything",
  "grandma's terrifyingly competitive card-game face",
  "a cooler containing only mustard",
  "the bonfire that got slightly out of hand",
  "a paddleboard yoga influencer",
  "the cabin's haunted board game",
  "a fish that maintained eye contact",
  "the 'fun' family hike from hell",
  "an overconfident kayak flip",
  "a sunburn shaped like regret",
  "the neighbor's suspiciously loud generator",
  "a raccoon that learned to open the cooler",
  "the lake water you definitely shouldn't swallow",
  "an unhinged amount of bug spray",
  "a dad violently arguing with Google Maps in a dead zone",
  "a banana boat ride gone deeply wrong",
  "the campfire story that traumatized the kids",
  "a dock plank that gives everyone splinters",
  "the smug confidence of a man with no sunscreen",
  "a goose with a personal vendetta",
  "the 'quick' five-hour fishing trip",
  "an entire weekend of competitive pontoon energy",
  "the floatie that drifted into the next county",
  "a suspiciously damp deck of cards",
  "the s'mores-to-mosquito-bite ratio",
  "an aggressively patriotic speedboat",
  "the cabin's single, judgmental cat",
  "a thermos of unidentifiable lake-house punch",
  "flipping the Monopoly board directly into the campfire",
  "a beanbag-toss rivalry that ended a friendship",
  "the dock cannonball that emptied the lake",
  "a tan line shaped like a phone",
  "an emotionally complex pontoon boat",
  "the kayak that betrayed me",
  // general / dark / absurd
  "an aggressively confident wrong answer",
  "raw, unfiltered second-hand embarrassment",
  "a single, devastating left swipe",
  "the entire concept of object permanence",
  "a USB stick full of crimes",
  "my dad's 'I'm not mad, just disappointed' voice",
  "an unpaid internship that somehow charges rent",
  "a gas-station hot dog of deeply unknown origin",
  "the confidence of a man who has never once been told no",
  "a group project where I did literally everything",
  "spontaneous crying in a Target parking lot",
  "the last slice of pizza, weaponized",
  "a haunted Roomba seeking vengeance",
  "an HR violation waiting to happen",
  "one (1) functioning brain cell, currently on strike",
  "a deeply unserious amount of credit card debt",
  "a PowerPoint titled 'Why You Should Date Me'",
  "a raccoon wearing my exact outfit",
  "the precise moment it all went wrong",
  "an essential oil that cures absolutely nothing",
  "a confidently incorrect Wikipedia edit",
  "the smell of a freshly cracked can of regret",
  "crippling debt disguised as self-care",
  "a motivational speaker with zero accomplishments",
  "an air fryer I use exclusively to cry near",
  "a fully sentient pile of unfolded laundry",
  "the audacity, the gall, the absolute nerve",
  "a screenshot that ended a 12-year friendship",
  "my entire dignity, sold for clout",
  "a parking spot defended to the death",
  "an inflatable swan with a clear attitude problem",
  "a cease-and-desist letter from my own mother",
  "waking up from a 9-hour 'nap' with zero concept of time",
  "a profound, existential dread cured only by toasted s'mores",
  "a casserole nobody asked for and everyone fears",
  "a stack of unopened Amazon boxes holding my dopamine hostage",
  "an unhinged voicemail left at 2 a.m.",
  "a fish that has clearly seen some things",
  "a basic-pitch starter pack containing three different hoodies",
  "the smell of a new car I will never own",
  "a thermos of lukewarm vegetable soup",
  "an overhead projector",
  "the entire population of Denmark",
  "a balanced breakfast",
  "active listening",
  "being a motherfucking sorcerer",
  "a disappointing birthday party",
  "a positive attitude",
  "losing my keys immediately after locking the door",
  "putting on a warm sweater straight out of the dryer",
  "the sound of silence",
  "accidentally copying the teacher on a text",
  "a microwave that only heats the edges of your plate",
  "a sensible, mid-sized sedan",
  "the crushing weight of adulthood",
];

/* ============================================================
 * Bonus games
 * ============================================================ */

// Bonus deck: "Lake House Truths" — cozy + chaotic prompts to read aloud and answer.
export const LAKE_TRUTHS = [
  { type: "Would You Rather", text: "Would you rather spend the whole weekend with no Wi-Fi, or no hot water?" },
  { type: "Would You Rather", text: "Would you rather fall off the dock fully clothed, or get caught singing to yourself in the kayak?" },
  { type: "Would You Rather", text: "Would you rather share a bunk bed with a snorer, or a sleep-talker who narrates dreams?" },
  { type: "Would You Rather", text: "Would you rather always be the one who packs the snacks, or always be the one who drives?" },
  { type: "Would You Rather", text: "Would you rather swim across the whole lake, or run the entire shoreline trail?" },
  { type: "Would You Rather", text: "Would you rather win every card game but lose every fishing contest, or vice versa?" },
  { type: "Never Have I Ever", text: "Never have I ever capsized a canoe on purpose." },
  { type: "Never Have I Ever", text: "Never have I ever pretended to know how to start the boat." },
  { type: "Never Have I Ever", text: "Never have I ever eaten a s'more that was 90% marshmallow goo." },
  { type: "Never Have I Ever", text: "Never have I ever 'accidentally' splashed someone who deserved it." },
  { type: "Never Have I Ever", text: "Never have I ever lost a flip-flop to the lake forever." },
  { type: "Truth", text: "What's the most chaotic thing that's ever happened on a family trip?" },
  { type: "Truth", text: "Who in this group would survive longest stranded on the lake's tiny island?" },
  { type: "Truth", text: "What's your most embarrassing 'outdoorsy' fail?" },
  { type: "Truth", text: "If the cabin were haunted, whose fault would it be?" },
  { type: "Dare", text: "Do your best loon call. Loudly. Right now." },
  { type: "Dare", text: "Narrate the next 60 seconds like a nature documentary." },
  { type: "Dare", text: "Give a dramatic toast to the lake as if you'll never see it again." },
  { type: "Dare", text: "Convince everyone you caught a fish 'this big' with a straight face." },
  { type: "Most Likely To", text: "Who's most likely to fall asleep in the hammock and miss dinner?" },
  { type: "Most Likely To", text: "Who's most likely to start a competitive feud over a board game?" },
  { type: "Most Likely To", text: "Who's most likely to befriend the lake's resident goose?" },
  { type: "Most Likely To", text: "Who's most likely to 'just check work email' on vacation?" },
];

// Would You Rather: Unhinged — chronically-online dilemmas. Read both, everyone votes.
export const WOULD_YOU_RATHER = [
  // Deck content is served from outside this repository.
];

// Red Flag / Green Flag — read a trait aloud, group debates and shouts the verdict.
export const RED_GREEN = [
  // Deck content is served from outside this repository.
];

// Most Likely To — used by Emergency Meeting (voting game).
export const MOST_LIKELY = [
  // Deck content is served from outside this repository.
];

// Rizz Roulette — the unhinged, brain-rot party mode. Draw a card and do the thing:
// deliver the rizz, spill the confession, commit to the dare, or defend the hot take.
export const RIZZ_ROULETTE = [
  // Deck content is served from outside this repository.
];
