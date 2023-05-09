---
title: AKAI Documentation
sidebar_label: Overview
slug: /
hide_table_of_contents: true
demoUrl: https://amakrushai.samagra.io/
demoSourceUrl: https://github.com/AmakrushAI
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>AKAI Docs</title>
  <meta
    name="description"
    content="your meta description"
  />
  <link rel="rel" href="href" />

  <meta property="og:url" content="https://amakrushai.samagra.io/" />
</head>





<intro-end />

<DocsCards>
  <DocsCard header="Installation Guide" href="/intro/installing-deps" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>Step-by-step guides to setting up your system and installing the framework.</p>
  </DocsCard>



</DocsCards>

## About AKAI :farmer:

The vision of the AI assistant is to empower farmers with the timely knowledge and insights they need to thrive in an ever-changing agricultural landscape. Providing personalised and vernacular assistance through the AI-powered assistant aims to help farmers make informed decisions, increase their crop yields, and ultimately contribute to the increase in farmer income.


## Features :dart:

- **Ama Krushi** (advisory dep of Odisha) maintains a vetted advisory database on key agriculture and allied sector activities relevant to Odisha 
- Information in the curated Database is encoded using BERT to compute the similarity of information  to any query
- Each query passes through an algorithm that scans the DB for relevant information using the similarity score
- A threshold for the similarity score is defined which determines if the DB has information relevant to the prompt
- If the similarity index <  threshold, then GPT3 directly responds to the  query (based on its global learning)
- If the similarity index >  threshold, then GPT3 fine-tunes its response based on the information learnt from the DB
- **Bhashini** is being used to translate queries and responses from Odia to English and vice versa
- Farmers can ask questions in multiple Indian languages (Odia, Hindi, Punjabi, English) 
- Bhashini will detect the language and will provide the response in the input language used 
- The user interface will allow users to toggle between the most commonly used languages (English & Odia) 


## What's inside?

This repo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This repo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting


## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)


## License

Your Project license
