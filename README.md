# Kanaflow

A fast, offline-friendly Japanese typing quiz for **hiragana**, **katakana**, and **JLPT vocabulary** (N5–N1).

## Features

- **Letters mode** — type romaji for single kana and combo (yōon) characters
- **Words mode** — type the full reading of a JLPT word (level filter: all / N5–N1)
- 22 color themes, 5 kana display fonts
- Live per-character feedback, streaks, accuracy
- Session stats + best streak / accuracy **persisted per mode**
- Optional browser TTS for pronunciation
- No build step, no backend — static HTML/CSS/JS

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python -m http.server 8080
```

## Shortcuts

| Key | Action |
|-----|--------|
| Enter / Space | Submit or continue after a miss |
| P | Play sound |
| ? | Peek / reveal reading |
| Esc | Skip when wrong |

## Project layout

| File | Role |
|------|------|
| `index.html` | Markup |
| `style.css` | Layout + 22 themes |
| `script.js` | Quiz logic, settings, stats |
| `words.js` | JLPT word bank (7,012 entries) |
| `favicon.svg` | Icon |

## Data & licenses

- **Code:** MIT (see `LICENSE`)
- **Word bank:** [OpenJLPT](https://github.com/evanclan/OpenJLPT) — **CC BY-SA 4.0** — plus original Kanaflow curated entries (see `words.js` header)
