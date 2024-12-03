# Nomadia - Minimalist E-Commerce Store

Nomadia is a minimalist e-commerce project showcasing handcrafted products such as candles and jewelry. Built with SvelteKit and styled using Tailwind CSS, it offers a clean, modern, and responsive user experience.

🚀 Getting Started
🛠️ Creating the Project
This repository contains the setup for your Nomadia project. If you're starting from scratch, you can use the SvelteKit starter:

```bash
Copier le code
# create a new SvelteKit project
npx create-svelte@latest nomadia
📂 Cloning this Repository
Clone the existing repository to get the latest version of the Nomadia project:
```


```bash
Copier le code
git clone https://github.com/MatthieuGriffon/nomadia.git
cd nomadia
💻 Developing
Install dependencies using your preferred package manager (npm, pnpm, or yarn) and start the development server:
```

```bash
Copier le code
npm install
npm run dev
You can also open the app automatically in your browser:
```

```bash
Copier le code
npm run dev -- --open
🏗️ Building
To build a production-ready version of your app, run:
```

```bash
Copier le code
npm run build
Preview the production build locally:
```

```bash
Copier le code
npm run preview
```
For deployment, use an appropriate adapter for your hosting platform.

# ✨ Features
Static Data: Products are managed using a simple JSON file.
Dynamic Cart: Built with Svelte stores, enabling real-time updates.
Responsive Design: Styled with Tailwind CSS for seamless viewing on any device.
Light Animations: Enhancing user interaction with subtle effects.











# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
