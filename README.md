# trip-sim-genius

Build a web app that allow the user to simulate synthetic car trips data for a generic driver.

The input should be the address of the user, and there should be a button to simulate a trip and display it on a map.

Given the address entered by the user, an web research is then performed to find places nearby the address and randomely select one of these places as the trip destination.

The trip direction should be driven by a direction tool available online, such as Google maps for example.

It is assumed that driver come back home, which is the addresses he originally provided, after each destinations.

Synthetic data should include second by second GPS points with randomely simulated speed and acceleration metrics, and corresponding calculations of of arch breacking, accelerations and speeding evnets, indicated on the trip map with corresponding pictograms.

The simulated trip is then returned on a maps on the sreen

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/trip-sim-genius.git
cd trip-sim-genius
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
