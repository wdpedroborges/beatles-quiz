![badge](https://img.shields.io/github/watchers/wdpedroborges/beatles-quiz?style=social)
![badge](https://img.shields.io/github/stars/wdpedroborges/beatles-quiz?style=social)
![badge](https://img.shields.io/github/license/wdpedroborges/beatles-quiz)
![badge](https://img.shields.io/badge/powered%20by-vite-blue)
![badge](https://img.shields.io/badge/powered%20by-react.js-blue)
![badge](https://img.shields.io/badge/powered%20by-typescript-blue)
![badge](https://img.shields.io/badge/powered%20by-sass.js-blue)

# Beatles Quiz
## A quiz based in the model Better Quiz

The Beatles Quiz is a fun and challenging game for fans of the legendary British band, The Beatles. The quiz is designed to test your ability to identify a Beatles song from just one second of listening. It requires a good ear for music and a deep knowledge of The Beatles' discography.

## Live Demo

wdpedroborges.github.io/beatles-quiz

## Features

- Filter questions by categories
- Suggestions
- Configurable timer
- Points counting
- Performance calculation
- Record storage in Local Storage
- Processes text, images, and audio

## Tech

- Vite
- React.js
- Typescript
- Sass

## Installation

Clone the repository:

```bash
git clone https://github.com/wdpedroborges/beatles-quiz
```

For production:

```sh
cd beatles-quiz
npm install
npm run dev
```

Debug in Typescript:

```bash
tsc --noEmit --watch
```

Build:

```bash
npm run build
```

## Deploy

- Add to vite.config.js:

```bash
base: "/<repo>/"
```

- Then:

```bash
npm install gh-pages --save-dev
```

- Add to package.json

```bash
 "homepage": "https://<username>.github.io/<repo>/",
  ...
  "scripts": {
...
"build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
...
```

## License

This project is licensed under the MIT License. Please see the LICENSE file for more details.