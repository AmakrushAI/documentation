---
title: Installing Dependencies
sidebar_label: Installing Dependencies
---

<head>
  <title>How to Install The Project Dependencies</title>
  <meta name="description" content="your meta content goes here" />
</head>

Installing dependencies is a crucial step in setting up your development environment for AKAI. In this document, we'll outline the steps to install project dependencies with Node Package Manager (npm), as well as how to run and build the app.

Before proceeding, make sure your computer has [Node.js](../reference/glossary.md#node) installed. See [these instructions](environment.md) to set up an environment for AKAI.

## Installing dependencies

Install the dependencies with npm:

```shell
npm i
```
The command above installs all the required packages as dependencies in your project.

## Run the App

To run the app in development mode:

```shell
npm run dev
```
Using this command will start the Next.js development server and allow you to preview changes made to the app's codebase in real-time, without having to manually recompile the code each time.

## Build the App

To build the app:

```shell
npm run build
```
The build command creates an optimized production build of your Next.js app. This command can take several minutes to complete and requires you to have all the necessary dependencies installed beforehand.
