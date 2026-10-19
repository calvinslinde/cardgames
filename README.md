# Lake House Card Games

A party-game web app for family and friends. It runs in the browser, installs on a phone's home screen, and works offline. Plain HTML, CSS, and JavaScript, with no dependencies.

**Play:** https://calvinslinde.github.io/cardgames/

## The games

Nineteen games in four groups, all playable on one phone passed around the table, and most of them online too:

- **Cozy card games:** fill-in-the-blank prompts, anonymous voting, truths, dares, and campfire roasts.
- **Creative and drawing:** sketch sharing, canvas guessers, round-robin book chains, and illustrated chronicles.
- **Party words and action:** fast team word guessers, forehead actor screens, and wacky response vote-offs.
- **Dice and scoreboards:** Farkle, Yahtzee, Liar's Dice, and a 3D dice roller.

There are also online rooms you can rejoin by code, a game history, custom cards, a doodle gallery, and a TV mode that turns a second screen into the game monitor. Decks written for adults are not stored in this repository.

## Updates

The app updates itself. A service worker caches everything for offline play, and a new version is picked up on the next launch. To ship an update, bump the version in both `js/version.js` and the `CACHE` constant in `sw.js`, and keep them matched.

## Run it locally

A service worker needs HTTP, so serve the folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Any static host works. On GitHub Pages, publish the root folder, open the page on your phone, and choose Add to Home Screen.

## Layout

```
index.html, styles.css          app shell and theme
manifest.webmanifest, sw.js     install and offline cache
js/app.js                       home menu, routing, and update wiring
js/version.js                   app version (bump on deploy)
js/cam.js                       the fill-in-the-blank game
js/meeting.js                   Emergency Meeting
js/deckgame.js                  the draw-a-card engine
js/data.js                      card content
js/ui.js                        shared helpers
icons/                          app icons
```
