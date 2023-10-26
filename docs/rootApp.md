# App.js

## Description

`App.js` is the main component for the "Letter Box" mobile application, built using React Native. It manages the application's startup process, including fetching user data from local storage and rendering the splash screen. Once the initialization is complete, it renders the main navigation component, `Nav`, for the app's user interface.

## Components

- React: The main library for building the app.
- StatusBar: A React Native component for configuring the status bar.
- View: A fundamental component for building the app's user interface.
- Colors: A custom module for managing app color schemes.
- Constants: A module for storing app constants.
- Metrics: A utility module for scaling dimensions based on the device's screen size.
- LottieView: A library for rendering Lottie animations.
- Assets: Resources, including splash animations.
- Nav: The primary navigation component for the app.
- Redux: A state management library for managing user points.
- AsyncstorageFunction: A utility function for reading data from local storage.

## Usage

- The app first displays a splash screen while it fetches data.
- Data (e.g., user points) is fetched using the `getAsyncData` function.
- Once data retrieval is complete, the app displays the main navigation component, `Nav`.
- Users can interact with the app through the navigation component to explore the word puzzle game.

## Functions

- `getAsyncData`: This function fetches user data (e.g., points) from local storage using the `asyncstorageMultiGet` function. Once the data is retrieved, it is updated in the Redux store using the `updateUserPoint` action. After a brief delay (1 second), the splash screen is hidden, and the main app interface is displayed.

## Dependencies

- React Native: The core library for building mobile apps.
- Lottie: A library for rendering animations.
- Redux: A state management library.
- React Navigation: A library for building navigation components in React Native.

## How to Run

- To run the app, ensure you have the necessary development environment set up for React Native.
- Start the Metro bundler using `npm start` or `yarn start`.
- Run the app on either Android or iOS using `npm run android` or `npm run ios` (or equivalent `yarn` commands).
- If set up correctly, the app should run on your emulator or device, first showing a splash screen and then transitioning to the main app interface.

---

This documentation file provides an overview of the `App.js` component, its usage, and its dependencies. It also includes instructions on how to run the app locally for development and testing.

[GitHub Repository](https://github.com/facebook/react-native)
[React Native Website](https://reactnative.dev)
[React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
[Lottie for React Native](https://github.com/react-native-community/lottie-react-native)

Please refer to the respective documentation and resources for more information on these tools and libraries.
