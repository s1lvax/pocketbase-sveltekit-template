# PocketBase + SvelteKit + Tailwind CSS Template

This repo is forked from [![this video](https://img.youtube.com/vi/AxPB3e-3yEM/0.jpg)](https://youtu.be/AxPB3e-3yEM). All I did was remove the DaisyUI.


## Developing

To get started with this project, you will need to have PocketBase installed and running on your system. You can find more information about installing and setting up PocketBase at the [PocketBase website](https://pocketbase.io/).

```
./pocketbase serve
```

Copy `.env.example` to `.env` and make changes as necessary.

Once you've created a project and installed dependencies with `pnpm install`.

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
