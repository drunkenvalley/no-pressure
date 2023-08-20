# No Pressure

Welcome to the No Pressure website repository. This is a [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/) project built on [NEXT.js](https://nextjs.org/), with [SCSS](https://sass-lang.com/) and [Tailwind CSS](https://tailwindcss.com/) available for use.

## Contributing

If you want to join the team reach out in [Issues](https://github.com/drunkenvalley/no-pressure/issues) or [Discussions](https://github.com/drunkenvalley/no-pressure/discussions), or reach out in the Discord community, or you can *Fork* and then perform *Pull Requests*.

## Requirements

This project uses [NEXT.js](https://nextjs.org/), so to run one needs to meet the minimum requirements set forth there.

With that in mind, the currently known minimum requirements are:

* Node version 14.6.0

We recommend using the latest LTS versions.

## Getting started

Clone this repo using HTTPS, and navigate to the cloned folder.

Inside the cloned folder, you must create a `.env` file which will contain the environment variables to use for this project. You can find an `.env.example` to show you which variables you will need. Then, simply ask a developer over in our [#webdev-nerds](https://discord.com/channels/1055487463734386739/1090020015589294132) channel to send you the correct values.

Once this is set up, you can run the following commands:
1. `npm ci` to install the node modules.
2. `npm run dev` to run a local server.

## API

We expose an API to allow the development of extra services that can interact with our data. You can find the documentation [here](https://no-pressure.eu/api-doc).

### Authorization

Authorization is performed by checking the API key, which is currently shared between the provider and all consumers. Just as with other environment variables, you can ask for the production API key in the [#webdev-nerds](https://discord.com/channels/1055487463734386739/1090020015589294132) channel.

For protected routes, a client's requests must provide an `Authorization` header according to the [basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) convention. For example,

``const Authorization = `Basic ${Buffer.from(CLIENT_NAME + ":" + API_KEY).toString("base64")}` ``