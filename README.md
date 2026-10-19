# Lake House Card Games

A party-game web app for family and friends. It runs in the browser, installs on a phone's home screen, and works offline. Plain HTML, CSS, and JavaScript, with no dependencies.

**Play:** https://calvinslinde.github.io/cardgames/

## The games

- **Cards Against the Cabin.** A fill-in-the-blank card game. One player judges each round and everyone else plays a card from their hand. Pass the device around, or let the app keep score while you play with real cards. Games save themselves and can be resumed.
- **Emergency Meeting.** A secret-ballot voting game. The group gets a "who's most likely to" prompt, everyone votes by passing the device, and the most-voted player is out for the round.
- **Draw-a-card decks:** would-you-rather, red flag or green flag, Lake House Truths.

Decks written for adults are not stored in this repository.

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
