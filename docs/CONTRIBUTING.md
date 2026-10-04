## Contribute to Recruitment Ipsum

I've created this project just for fun, so there's no real roadmap. Feel free to open a pull request if you have anything fun to add!

You can always help by sharing real recruitment messages, in any language.

### Development

You need Node.js 22.13 or newer (see `.nvmrc`).

```bash
npm install       # install dependencies
npm run dev       # dev server with hot reload at http://localhost:8080
npm test          # run the unit tests
npm run lint      # check the code with ESLint
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

### Adding messages

All text lives in [`src/assets/content.json`](../src/assets/content.json), per language:

- `sentences` – lines used for paragraphs and the message body
- `listitems` – short lines used for lists
- `openers` / `closers` – first and last lines of a message
- `salutations`, `signoffs`, `names`, `placeholderNames` – used by the message generator

Keep the original wording (typos included). Only remove names of people and companies.

### Deployment

Every push to `master` is tested, built and deployed to GitHub Pages by the [CI workflow](../.github/workflows/ci.yml).
