# Stonks-Frontend

Reproducing Twitch chat UI for Stonks Frontend Assessment. Check it out here on my [`GitHub Pages`](https://spanishiwa.github.io/stonks-frontend/).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Progress

I added the tag a user and command menu functionality. The UI isn't an exact replica - some buttons, text descriptors, and styles are missing.

I did not reach the custom emotes part of the assessment, but I would have used a npm package to handle inserting the custom emoji. I'm not sure how to convert custom images into a unicode format, which is what I imagine I would need to render the emojis in a text input. Without unicode, I think I would need to create a Rich Text Editor-like component to handle inserting and deleting emojis within text inputs - that sounds really difficult as there are problems with contentEditable and sanitizing HTML input.

Anyway, my two choices came down to [`emoji-picker-react`](https://www.npmjs.com/package/emoji-picker-react) and [`emoji-mart`](https://www.npmjs.com/package/@emoji-mart/react). I would pick emoji-picker-react because Next.js is mentioned in their Readme and emoji-mart custom emojis only support SVGs and GIFs, but I was provided .webp. Although emoji-picker-react does have less GitHub stars and fewer weekly downloads on average.

I didn't do the stop on scroll either - but I've done it before. I would leverage the Observer API, specifically Intersection Observer, to flag a useState whenever the chat is scrolled. I can attach the observer with a useRef or useCallbackRef, and would need to clean up the side effect with a return function in a useEffect. I could then include this boolean flag to my update chat logic and only update when the observer is not intersecting.

Any NPM libraries I included were just for the linter rules I added.

## Challenges

It's been awhile since I've set up or deployed a Next.js project, usually I'm just working on something that is already established.

- I was really trying to get base 10 font size going, so I could use REM units, but it was taking too much time
- Messing with the tailwind configs and linters took a lot of time, some of my deployments failed because of linter warnings
- My node version was too old for the latest Next version too, so I had to update with nvm.
- The images provided aren't rich assets like Figma files either, so I had to manually scrape most styles from the actual Twitch site or with my Web Dev Tools

## Getting Started

Clone the project, npm install, then use the typical commands to run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
