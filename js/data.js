// Card data for the Lake House card games.
// Cards Against Monkeys (sussy) + Cards Against the Cabin (normal): prompts (black) + responses (white).

// Blank marker used in prompt text. The UI replaces these with the chosen card(s).
export const BLANK = "_______";
export const CUSTOM_CARD_TEXT = "✍️ [Write your own answer...]";

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
  "✍️ [Write your own answer...]",
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
  "re-staining the deck with my tears",
  "fake-coughing to cover a campfire sob",
  "a serial killer's unhinged LinkedIn post",
  "accidentally feuding with a 12-year-old on Roblox",
  "thinking I could land a commercial airliner in an emergency",
  "a microwave that only heats the bowl",
  "faking my death to avoid the family reunion",
  "a strongly worded email from the local homeowners association",
  "throwing the Monopoly board into the bonfire",
  "explaining late-stage capitalism to a toddler",
  "an inflatable flamingo that is slowly and ominously deflating",
  "pretending to know how to start the boat while sweating through my shirt",
  "a cooler that was left unplugged in the summer heat for three days",
  "planning my escape during direct eye contact",
  "the precise moment I realized there is no Wi-Fi at this cabin",
  "arguing with a Canadian goose over who owns the dock",
  "being held together by caffeine, spite, and phone chargers",
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

// Clean / Cozy cabin-themed Would You Rather cards.
export const COZY_WOULD_YOU_RATHER = [
  { tag: "Would You Rather", text: "Spend the whole weekend with no Wi-Fi, or no hot water?" },
  { tag: "Would You Rather", text: "Fall off the dock fully clothed, or get caught singing to yourself in the kayak?" },
  { tag: "Would You Rather", text: "Share a bunk bed with a loud snorer, or a sleep-talker who narrates their dreams?" },
  { tag: "Would You Rather", text: "Always be the one who packs the snacks, or always be the one who drives?" },
  { tag: "Would You Rather", text: "Swim across the whole lake, or run the entire shoreline trail?" },
  { tag: "Would You Rather", text: "Win every card game but lose every fishing contest, or vice versa?" },
  { tag: "Would You Rather", text: "Have a camping tent that has a tiny, constant leak, or have to sleep in the car?" },
  { tag: "Would You Rather", text: "Only eat burnt campfire hot dogs for a week, or only raw carrots?" },
  { tag: "Would You Rather", text: "Be visited by a very polite black bear, or an army of very rude raccoons?" },
  { tag: "Would You Rather", text: "Accidentally drop your phone into the outhouse toilet, or drop it into the deep lake?" },
  { tag: "Would You Rather", text: "Have to paddle a canoe alone with a windy headwind, or carry a heavy cooler up a steep hill?" },
  { tag: "Would You Rather", text: "Wear a wet swimsuit all day, or wear shoes completely filled with sand?" },
  { tag: "Would You Rather", text: "Be the designated campfire starter every single night, or the designated dish cleaner?" },
  { tag: "Would You Rather", text: "Get covered in sticky tree sap, or get bitten by 15 mosquitoes?" },
  { tag: "Would You Rather", text: "Accidentally splash yourself skip-stone hunting, or slip on a muddy dock?" },
  { tag: "Would You Rather", text: "Have a resident goose follow you everywhere, or a highly talkative squirrel?" },
  { tag: "Would You Rather", text: "Eat a s'more that is 90% charred black soot, or a s'more with completely cold chocolate?" },
  { tag: "Would You Rather", text: "Listen to someone play a three-chord song on an out-of-tune guitar for 3 hours, or sit in silence in the dark?" },
  { tag: "Would You Rather", text: "Be the first person to wake up at 5 a.m. to make coffee, or sleep in until noon and miss the boat trip?" },
  { tag: "Would You Rather", text: "Get stuck on the lake with no paddle, or get stuck in the woods with no map?" },
  { tag: "Would You Rather", text: "Only communicate in campfire smoke signals for a day, or in loud loon calls?" },
  { tag: "Would You Rather", text: "Have to wear mismatched, extremely bright neon socks the whole trip, or a floppy giant sun hat?" },
  { tag: "Would You Rather", text: "Be the champion at backyard cornhole but lose every board game, or vice versa?" },
  { tag: "Would You Rather", text: "Have a bedroom that smells like wet dog, or a bedroom that smells like burnt wood?" },
  { tag: "Would You Rather", text: "Accidentally reel in a smelly old boot, or reel in a giant clump of lake weeds after a 20-minute fight?" }
];

// Clean / Cozy cabin-themed Most Likely To cards.
export const COZY_MOST_LIKELY = [
  "fall asleep in the hammock and miss dinner entirely",
  "start an extremely competitive feud over a simple board game",
  "befriend the lake's resident goose and name it",
  "secretly check their work email within 10 minutes of arriving",
  "burn their marshmallow until it is a charred black coal and eat it anyway",
  "spend three hours trying to skip the perfect stone",
  "worry about a bear invasion after hearing a tiny pinecone fall",
  "pack enough clothes for a six-month expedition for a weekend trip",
  "insist on driving the boat but immediately get stuck in the weeds",
  "accidentally drop their sunglasses into the deepest part of the lake",
  "wear their swimsuit inside out half the day without realizing",
  "get completely lost walking on a clearly marked nature trail",
  "spend the entire day reading on the porch and accomplish nothing else",
  "accidentally splash the entire dock while attempting a cannonball jump",
  "bring a highly elaborate, multi-step gourmet recipe to a simple cabin kitchen",
  "complain about the lack of air conditioning within five minutes",
  "get caught secretly stealing the last premium chocolate bar from the s'mores bag",
  "take a 2-hour nap in the afternoon and complain they are still frustrated",
  "insist on waking up at 5 a.m. to see the misty lake sunrise alone",
  "try to start the campfire using a highly complex and unnecessary technique",
  "wear a giant, floppy sun hat that constantly gets blown into the water",
  "get a minor sunburn on their nose because they refused to wear sunscreen",
  "try to catch a frog with their bare hands and slip in the mud",
  "pack only salty snacks and completely forget to bring drinking water",
  "be the one who suggests playing just one more card game at 2 a.m."
];

// Clean / Cozy cabin-themed Red Flag / Green Flag traits.
export const COZY_RED_GREEN = [
  { tag: "Red or Green?", text: "They pack extra dry socks for everyone else on the hiking trip." },
  { tag: "Red or Green?", text: "Refuses to eat campfire food unless they can cover it in hot sauce." },
  { tag: "Red or Green?", text: "Checks their work email on their phone while sitting in a kayak." },
  { tag: "Red or Green?", text: "Takes a 45-minute hot shower when there is a queue of 6 people." },
  { tag: "Red or Green?", text: "Wakes up at 5:30 a.m. and starts grinding fresh coffee beans loudly." },
  { tag: "Red or Green?", text: "Doesn't wave back to other boaters passing on the lake." },
  { tag: "Red or Green?", text: "Claims they 'know a shortcut' that adds three hours to the drive." },
  { tag: "Red or Green?", text: "Packs three suitcases for a two-night stay at a rustic cabin." },
  { tag: "Red or Green?", text: "Steals the perfect, slowly toasted marshmallow from your stick." },
  { tag: "Red or Green?", text: "Spends the entire weekend playing games on their phone by the lake." },
  { tag: "Red or Green?", text: "Insists on singing campfire songs completely out of tune." },
  { tag: "Red or Green?", text: "Has a highly specific comfort spot on the porch and gets annoyed if you sit there." },
  { tag: "Red or Green?", text: "Brings a cooler filled with nothing but high-end fancy cheeses." },
  { tag: "Red or Green?", text: "Knows the exact scientific names of all the local birds and trees." },
  { tag: "Red or Green?", text: "Volunteers to wash all the greasy dinner dishes without being asked." },
  { tag: "Red or Green?", text: "Refuses to wear bug spray and complains about mosquitoes for three days." },
  { tag: "Red or Green?", text: "Brings three different board games but refuses to play anyone else's choice." },
  { tag: "Red or Green?", text: "Is extremely competitive during a casual backyard game of cornhole." },
  { tag: "Red or Green?", text: "Leaves their wet towel crumpled on the bathroom floor instead of hanging it." },
  { tag: "Red or Green?", text: "Always suggests going stargazing at 1 a.m. but falls asleep in 5 minutes." },
  { tag: "Red or Green?", text: "Pretends to be asleep when the car arrives so they don't have to carry bags." },
  { tag: "Red or Green?", text: "Can start a blazing campfire in the pouring rain using a single match." },
  { tag: "Red or Green?", text: "Calls a small harmless spider in the bedroom an 'absolute emergency'." },
  { tag: "Red or Green?", text: "Insists on sleeping in the hammock overnight and complains about a stiff neck." },
  { tag: "Red or Green?", text: "Remembers to bring the extra long s'mores sticks so nobody burns their hands." }
];

// Clean / Cozy cabin-themed Roast Me prompts.
export const COZY_CAMPFIRE_ROASTS = [
  { tag: "Roast", text: "Point at the person who looks like they still sleep with a nightlight because of 'creepy cabin sounds'." },
  { tag: "Roast", text: "Which player is absolutely incapable of starting a campfire without using a whole bottle of lighter fluid?" },
  { tag: "Roast", text: "Point at the person who has a special, high-pitched voice they only use when talking to dogs or chipmunks." },
  { tag: "Roast", text: "Which player would get completely lost inside a moderately sized grocery store?" },
  { tag: "Roast", text: "Point at the player who behaves like a grumpy grizzly bear who missed their winter hibernation." },
  { tag: "Roast", text: "Who in this room has the absolute worst posture when sitting in a hammock?" },
  { tag: "Roast", text: "Point at the person who is most likely to get highly competitive and ruin a friendly family board game." },
  { tag: "Roast", text: "Which player would be the absolute first to get eaten if a bear wandered onto the porch?" },
  { tag: "Roast", text: "Point at the person who packs enough gear for a polar expedition just to go on a 20-minute nature walk." },
  { tag: "Roast", text: "Who in this room has a laugh that sounds exactly like a startled loon on the lake?" },
  { tag: "Roast", text: "Point at the player who is most likely to secretly eat the last chocolate bar from the s'mores supply." },
  { tag: "Roast", text: "Which player looks like they still don't know how to properly skip a stone on the water?" },
  { tag: "Roast", text: "Point at the person who takes a 2-hour afternoon nap and then complains they are too tired to help make dinner." },
  { tag: "Roast", text: "Which player is most likely to get a severe sunburn on their nose because they were too stubborn for sunscreen?" },
  { tag: "Roast", text: "Point at the player whose room is a disaster zone of wet towels and sandy shoes." },
  { tag: "Roast", text: "Who in this room would spend two hours trying to catch a small frog, only to slip and fall in the mud?" },
  { tag: "Roast", text: "Point at the person who is most likely to check their work email while sitting in a kayak." },
  { tag: "Roast", text: "Which player is the absolute worst at steering a canoe, constantly going in circles?" },
  { tag: "Roast", text: "Point at the player who gets completely terrified by a harmless tiny spider in the bathroom." },
  { tag: "Roast", text: "Who in this room is most likely to fall asleep in a deck chair and get a highly awkward sun tan line?" },
  { tag: "Roast", text: "Point at the person who always complains the cabin is 'too cold' and then 'too hot' within ten minutes." },
  { tag: "Roast", text: "Which player is most likely to suggest playing just one more card game at 2 a.m. when everyone else is half-asleep?" },
  { tag: "Roast", text: "Point at the person who looks like they would get startled by their own shadow on the cabin wall." },
  { tag: "Roast", text: "Which player is most likely to accidentally drop their expensive phone directly into the lake while trying to take a selfie?" },
  { tag: "Roast", text: "Point at the player who behaves like they are the king of the cabin but doesn't actually know how to wash a single dish." }
];

// Clean / Cozy cabin-themed Truth or Dare deck.
export const COZY_TRUTHS_DARES = [
  // --- TRUTHS ---
  { tag: "Truth", text: "What is your secret comfort food that you only eat when nobody is looking?" },
  { tag: "Truth", text: "Who is the most competitive person in this room when playing card games?" },
  { tag: "Truth", text: "Have you ever secretly eaten the last snack and blamed it on someone else?" },
  { tag: "Truth", text: "What is the worst advice you have ever confidently given to a friend?" },
  { tag: "Truth", text: "If you could trade lives with anyone in this room for a day, who would it be and why?" },
  { tag: "Truth", text: "What is the silliest fear you still have as an adult?" },
  { tag: "Truth", text: "What is the cringiest fashion phase you ever went through?" },
  { tag: "Truth", text: "Have you ever pretended to be asleep just to get out of doing a chore?" },
  { tag: "Truth", text: "What is the most useless talent or party trick you can perform?" },
  { tag: "Truth", text: "What was the most embarrassing nickname you had growing up?" },
  { tag: "Truth", text: "Have you ever accidentally sent a text complaining about someone to that exact person?" },
  { tag: "Truth", text: "What is the weirdest habit you have when you are completely alone?" },
  { tag: "Truth", text: "Who in this room is the absolute worst driver?" },
  { tag: "Truth", text: "What is a secret purchase you made recently that you haven't told anyone about?" },
  { tag: "Truth", text: "What is the longest you have ever gone without showering on a camping trip?" },
  { tag: "Truth", text: "If you were a ghost, which room in this house would you haunt and why?" },
  { tag: "Truth", text: "What is the most embarrassing song on your playlist that you secretly love?" },
  { tag: "Truth", text: "Have you ever lied about your age to get a discount or entry somewhere?" },
  { tag: "Truth", text: "What is the most ridiculous excuse you've ever used to get out of plans?" },
  { tag: "Truth", text: "If you were to start a rumor about yourself, what would it be?" },
  { tag: "Truth", text: "What is the most childish thing you still do on a regular basis?" },
  { tag: "Truth", text: "What's the most chaotic thing that's ever happened on a family trip?" },
  { tag: "Truth", text: "Who in this group would survive longest stranded on the lake's tiny island?" },
  { tag: "Truth", text: "What's your most embarrassing 'outdoorsy' fail?" },
  { tag: "Truth", text: "If the cabin were haunted, whose fault would it be?" },

  // --- DARES ---
  { tag: "Dare", text: "Do your best loon call. Loudly. Right now." },
  { tag: "Dare", text: "Narrate the next 60 seconds like a nature documentary." },
  { tag: "Dare", text: "Give a dramatic toast to the lake as if you'll never see it again." },
  { tag: "Dare", text: "Convince everyone you caught a fish 'this big' with a straight face." },
  { tag: "Dare", text: "Try to balance a clean spoon on your nose for 15 seconds." },
  { tag: "Dare", text: "Perform a 30-second dramatic slow-motion replay of a clumsy moment." },
  { tag: "Dare", text: "Speak only in an enthusiastic radio host voice until your next turn." },
  { tag: "Dare", text: "Do 10 pushups while shouting a positive compliment about the host with each rep." },
  { tag: "Dare", text: "Allow the person to your left to style your hair in a ridiculous way." },
  { tag: "Dare", text: "Stare at the person across from you and try to explain a complex hobby in 20 seconds without laughing or blinking." },
  { tag: "Dare", text: "Do your absolute best impression of another player's signature laugh." },
  { tag: "Dare", text: "Balance a water bottle on your head and walk in a circle without it falling." },
  { tag: "Dare", text: "Do a 20-second interpretive dance about a kayak trip that goes horribly wrong." },
  { tag: "Dare", text: "Try to make the person to your right laugh in 30 seconds using only funny faces." },
  { tag: "Dare", text: "Give a 30-second passionate speech about why gas station snacks are gourmet food." },
  { tag: "Dare", text: "Sing the chorus of your favorite song, but substitute every noun with the word 'canoe'." },
  { tag: "Dare", text: "Do a 15-second plank while listing 5 things you love about the lake house." },
  { tag: "Dare", text: "Stand on one foot with your eyes closed for 25 seconds without falling." },
  { tag: "Dare", text: "Draw a tiny, goofy mustache on your finger with a pen and keep it there for the rest of the game." },
  { tag: "Dare", text: "Try to recite the alphabet backward in 15 seconds. If you fail, do 5 jumping jacks." },
  { tag: "Dare", text: "Act like a sleepy bear who just woke up from hibernation until your next turn." },
  { tag: "Dare", text: "High-five everyone in the room, but you must do it in extreme slow motion." },
  { tag: "Dare", text: "Try to balance a coaster on your chin for 10 seconds." },
  { tag: "Dare", text: "Do your best impression of a campfire crackling and popping dramatically." },
  { tag: "Dare", text: "Whisper all your responses until your next turn as if you are sharing a highly confidential secret." }
];

// Zesty / Suggestive adult-themed Truth or Dare deck.
export const ZESTY_TRUTHS_DARES = [
  // Deck content is served from outside this repository.
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

/* ============================================================
 * CARDS AGAINST THE FAMILY — edgy, silly, family-friction PG-13.
 * ============================================================ */
export const FAMILY_PROMPTS = [
  // --- Silly / Cozy ---
  { text: "Mom's secret ingredient in her award-winning campfire chili is actually _.", pick: 1 },
  { text: "Dad spent six hours in the hardware store looking for the perfect _.", pick: 1 },
  { text: "Mom grounded me for two weeks when she found _ hidden in the secret panel of our car.", pick: 1 },
  { text: "Our dog ran away into the woods because he caught a glimpse of _.", pick: 1 },
  { text: "The local park ranger warned us to lock up our coolers because the bears have developed a taste for _.", pick: 1 },
  { text: "My teacher didn't believe me when I told her my homework was destroyed by _.", pick: 1 },
  { text: "Instead of chores this weekend, dad surprised us by organizing a family contest of _.", pick: 1 },
  { text: "What's the absolute worst thing you could accidentally drop into the campfire?", pick: 1 },
  { text: "Grandma's favorite cabin activity is sitting on the porch and complaining about _.", pick: 1 },
  { text: "We knew the lake water was freezing when dad jumped in and screamed about _.", pick: 1 },
  { text: "First comes the smell of _, then comes the sound of _.", pick: 2 },
  { text: "I tried to build a custom treehouse using nothing but _ and _.", pick: 2 },
  { text: "Instead of clean laundry, my suitcase was completely filled with _ and _.", pick: 2 },
  { text: "The ultimate campfire s'more contains two graham crackers, a toasted marshmallow, and a slice of _.", pick: 1 },
  { text: "What did the fisherman accidentally reel in instead of a trout?", pick: 1 },
  { text: "My sibling got grounded for a week because they tried to feed the raccoons _.", pick: 1 },
  { text: "What is the secret cabin rule that nobody actually follows?", pick: 1 },

  // --- Edgy PG-13 Family Friction / Roasts ---
  { text: "My sibling was grounded for two weeks after mom found _ hidden under their bed.", pick: 1 },
  { text: "I knew my brother was lying about cleaning his room because I found _ in his closet.", pick: 1 },
  { text: "Nothing ruins a peaceful family road trip faster than dad threatening to turn the car around because of _.", pick: 1 },
  { text: "What is the real reason why my sister has been locked in the bathroom for three hours?", pick: 1 },
  { text: "Chore evasion is an art. My sibling's ultimate masterpiece was avoiding unloading the dishwasher by pretending to suffer from _.", pick: 1 },
  { text: "Why does the family dog secretly love my sibling more than me?", pick: 1 },
  { text: "Mom's strict kitchen rules are getting out of hand. Yesterday she literally banned _.", pick: 1 },
  { text: "What is secretly inside mom's locked 'secret stash' drawer in the kitchen?", pick: 1 },
  { text: "Dad's famous 'special recipe' barbecue is just normal burgers covered in _.", pick: 1 },
  { text: "I managed to escape setting the dinner table by creating a massive distraction involving _.", pick: 1 },
  { text: "The family group chat got completely silent after dad confidently messaged a photo of _.", pick: 1 },
  { text: "My sibling's search history is completely filled with _ and _.", pick: 2 },
  { text: "To survive a 10-hour family road trip, you need a high-tolerance for _ and a massive supply of _.", pick: 2 }
];

export const FAMILY_RESPONSES = [
  "✍️ [Write your own answer...]",
  "a canoe full of melted marshmallows",
  "dad's terrible, off-beat dance moves",
  "a squirrel wearing tiny sunglasses",
  "wet socks that have been sitting in a bag for three days",
  "an absolute overload of maple syrup",
  "a family board game that ends in an argument",
  "a sketchy street vendor selling warm, unlabeled energy drinks",
  "accidentally eating a bug while riding a bicycle",
  "dad's cheesy, laugh-at-his-own-jokes humor",
  "an extremely muddy pair of boots",
  "trying to catch a frog with bare hands",
  "a massive pile of sticky pinecones",
  "the absolute loudest snore in the cabin",
  "stealing the last marshmallow from the bag",
  "a fish that looks like it's judging my life choices",
  "accidentally dropping my phone in the lake",
  "a mountain of unwashed beach towels",
  "sleeping in a tent that has a tiny leak",
  "an army of very polite ants",
  "a soggy peanut butter and jelly sandwich",
  "trying to skip a flat stone but splashing myself",
  "a cooler full of nothing but broccoli",
  "mom's famous burnt hot dogs",
  "a mosquito that just won't leave me alone",
  "singing campfire songs completely out of tune",
  "a very confused duck in a life jacket",
  "wearing my shirt inside out all day without realizing",
  "a massive splash from a clumsy cannonball jump",
  "grandma's secret stash of chocolate chip cookies",
  "a tree branch that looks exactly like a dinosaur",
  "getting a marshmallow stuck to my forehead",
  "an entire day spent entirely in wet swimsuits",
  "bootleg Elmo in an alleyway surrounded by mysterious cloudy gas",

  // --- Edgy PG-13 Family Additions ---
  "mom's highly classified snack stash",
  "a deeply concerning, unwashed heap of gym clothes",
  "my sibling's questionable browser history",
  "accidentally calling the teacher 'Mom'",
  "chore evasion tactics that actually worked",
  "pretending to be asleep to avoid unloading the dishwasher",
  "an incredibly dramatic teenage tantrum",
  "wearing the same socks for four days straight",
  "blaming the dog for a mysterious smell in the living room",
  "my sister's 10-hour beauty routine",
  "dad trying to use modern slang and failing miserably",
  "the terrifying moment mom calls you by your full middle name",
  "stealing my sibling's phone charger out of their wall",
  "doing the absolute bare minimum to clean my room"
];

export const CAMPFIRE_ROASTS = [
  // Deck content is served from outside this repository.
];

export const SIBLING_RIVALRY = CAMPFIRE_ROASTS;
export const FAMILY_ROASTS = CAMPFIRE_ROASTS;

export const BLANK_SLATE_PROMPTS = [
  "_____ SLATE",
  "COLD _____",
  "_____ HOUSE",
  "_____ BOARD",
  "_____ WATER",
  "CAMP _____",
  "DEEP _____",
  "_____ FEVER",
  "_____ CAKE",
  "HOT _____",
  "SWEET _____",
  "_____ BALL",
  "_____ DAY",
  "_____ DOG",
  "FIRE _____",
  "_____ CARD",
  "_____ GAME",
  "LAKE _____",
  "_____ ROOM",
  "_____ LAND",
  "_____ TIME",
  "_____ BOOK",
  "_____ FLY",
  "_____ LIGHT",
  "_____ SHINE",
  "_____ CHIPS",
  "CABIN _____",
  "WOOD _____",
  "_____ STONE",
  "_____ ROCK",
  "_____ ROAD",
  "_____ WALK",
  "_____ FIRE",
  "_____ COAT",
  "_____ HEART",
  "_____ ICE",
  "_____ SNOW",
  "_____ WIND",
  "_____ SEA",
  "_____ FISH",
  "_____ MOUNTAIN",
  "_____ BEAST",
  "_____ STAR",
  "_____ MOON",
  "_____ SKY",
  "_____ TREE",
  "_____ BIRD",
  "_____ CAT",
  "_____ BEAR",
  "_____ BOAT"
];
