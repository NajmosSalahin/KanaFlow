---

# KanaFlow

KanaFlow is a minimalist, high-performance Japanese kana training tool designed to develop fluency through active recall and real-time feedback.

> If you can type it instantly, you know it.

---

## Overview

KanaFlow focuses on one objective: converting recognition into automatic recall. Instead of relying on passive flashcards, it requires direct input, forcing the learner to produce the correct reading under minimal latency.

The system is intentionally lightweight, running entirely in the browser without dependencies, while maintaining a high degree of responsiveness and configurability.

---

## Core Features

### Input-Driven Learning

* Type romaji for each kana
* Immediate validation with real-time feedback
* Eliminates guess-based recognition

### Adaptive Reinforcement

* Incorrect answers are reintroduced into the queue
* Reinforces weak points without explicit scheduling systems

### Audio Integration

* Native browser text-to-speech (Japanese)
* Supports phonetic association alongside visual recall

### Configurable Training Scope

* Hiragana
* Katakana
* Combination forms (e.g., きゃ, しゃ)
* Fine-grained enable/disable controls

### Theming System

* Multiple built-in themes (e.g., Night, Gruvbox, Nord, Tokyo Night)
* Designed for long-duration use with minimal visual fatigue

### Typography Control

* Multiple Japanese fonts to simulate real-world variation
* Helps prevent overfitting to a single character style

### Performance-Oriented Design

* Single-file architecture (HTML + CSS + JS)
* No frameworks or external dependencies
* Near-zero latency interaction

---

## Learning Model

KanaFlow is grounded in established principles of skill acquisition:

| Principle           | Implementation                        |
| ------------------- | ------------------------------------- |
| Active Recall       | Direct input instead of recognition   |
| Immediate Feedback  | Live validation and correction        |
| Reinforcement       | Incorrect items reappear in queue     |
| Flow State          | Minimal UI, uninterrupted interaction |
| Multimodal Encoding | Visual + auditory input               |

The system prioritizes fluency over familiarity. Recognition is not considered sufficient; response speed and accuracy are the targets.

---

## Controls

| Key   | Action                        |
| ----- | ----------------------------- |
| Enter | Submit / Continue             |
| Space | Skip (after incorrect answer) |
| P     | Play audio                    |
| ?     | Reveal reading                |
| Esc   | Skip when incorrect           |

---

## Installation

### Local Use

Open the HTML file directly in a browser:

```bash
open index.html
```

### Deployment

* Upload to a repository
* Enable GitHub Pages
* No build process required

---

## Architecture

KanaFlow is intentionally simple and self-contained.

### Components

* `KD`: Kana dataset (hiragana, katakana, combinations)
* `pool`: Active training set
* `queue`: Reinforcement mechanism for incorrect answers
* Input engine: Real-time validation and feedback
* Theme engine: CSS variable-based theming

### Technologies

* Vanilla JavaScript
* CSS variables for theming
* `localStorage` for persistence
* Web Speech API for audio

---

## Limitations

* Text-to-speech depends on browser voice availability
* Reinforcement is heuristic, not a formal spaced repetition algorithm
* Progress tracking is limited to localStorage
* Romaji variations are partially supported

---

## Future Work

* Implementation of a formal spaced repetition system (e.g., SM-2)
* Persistent user profiles and synchronization
* Expansion into kanji training
* Improved mobile experience
* Detailed performance analytics

---

## Contributing

Contributions are encouraged, particularly in the following areas:

* Input normalization and romaji handling
* Reinforcement algorithm improvements
* Interface and usability enhancements
* Accessibility

---

## License

MIT License

---

## Practice Guidance

* Begin with Hiragana only
* Avoid using reveal once basic familiarity is established
* Aim for sustained high accuracy (≥90%)
* Introduce Katakana after stabilization
* Add combination forms last

---

KanaFlow is designed around a single standard: fluency through recall under constraint.

If you can type it instantly, you know it.
