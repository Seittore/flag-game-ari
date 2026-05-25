# Flag Guess Board

A tiny static web board for a two-player voice-call flag guessing game.


## How to play

1. Both players open the same page.
2. Enter the same seed, for example `moon77`.
3. Press **Start**.
4. Both players will get the same 24 countries in the same order.
5. Each player secretly chooses one country.
6. Ask yes/no questions by voice call.
7. Click flags to eliminate or restore countries manually.

## Controls

- **Click** a flag: eliminate / restore it.
- **Star button**: mark your secret country.
- **Double-click** a flag: mark your secret country.
- **Right-click** a flag: mark your secret country.
- **Long press on mobile**: mark your secret country.
- **Hover**: shows the country name.
- **Show names**: displays names under flags.

## Files

```txt
index.html
style.css
script.js
.nojekyll
README.md
```

## Run locally

Just open `index.html` in your browser.

The flags are loaded from FlagCDN, so you need internet access for the flag images unless you later replace them with local images.

## Deploy to GitHub Pages

1. Create a new GitHub repository, for example `flag-guess-board`.
2. Upload all files from this folder to the repository root.
3. Make sure the main file is named `index.html`.
4. Open the repository on GitHub.
5. Go to **Settings → Pages**.
6. In **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
7. Save.
8. Your site will be available at a URL like:

```txt
https://your-username.github.io/flag-guess-board/
```

## Seed in URL

You can also open the game with a seed in the URL:

```txt
https://your-username.github.io/flag-guess-board/?seed=pizza77
```

This is useful if you want to send the exact game setup directly.

## Notes

- The project uses deterministic seeded randomness: the same seed always creates the same 24-country board.
- Eliminated countries and the selected country are saved locally in the browser per seed.
- This project intentionally has no multiplayer synchronization. It is just a clean shared board for a voice-call game.
