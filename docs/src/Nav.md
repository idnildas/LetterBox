# Nav.js

## Description

`Nav.js` is a navigation component for the "Letter Box" mobile application, developed using React Native. It defines the app's navigation structure using the [React Navigation](https://reactnavigation.org/docs/getting-started) library. The component configures the stack navigator, sets navigation options, and defines the initial route. It also provides options for customizing the navigation experience, such as hiding the header and specifying animation and gesture settings.

## Components and Libraries

- React Native: The core library for building mobile apps.
- React Navigation: A library for creating navigation structures in React Native.
- Home: A screen component for the home screen of the app.
- Game: A screen component for the game screen.
- Ranks: A screen component for displaying rankings.
- Result: A screen component for showing game results.
- StatusBar: A React Native component for configuring the status bar.

## Usage

- The component specifies the initial route to be displayed when the app loads (`initialRouteName`).
- It sets options such as hiding the header (`headerShown`), configuring the animation type (`animation`), gesture direction (`gestureDirection`), and enabling full-screen gestures (`fullScreenGestureEnabled`).
- The app starts with the home screen (`Home`) and provides the ability to navigate to other screens using the specified navigation options.

## How to Integrate

- To integrate this navigation component into your app, you must have a properly set up React Native environment and [React Navigation](https://reactnavigation.org/docs/getting-started) installed.
- Import the required screen components (e.g., `Home`, `Game`, `Ranks`, `Result`) into your project.
- Define the `Stack.Navigator` structure with the desired navigation options and initial route.
- Place this component (`Nav`) within the main structure of your app, ensuring that it manages the navigation between different screens.

## Dependencies

- React Native: The core library for building mobile apps.
- React Navigation: A library for creating navigation structures in React Native.

## How to Run

- This component does not run as a standalone app but must be integrated into a complete React Native project.
- Ensure your React Native project environment is set up according to the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) guidelines.
- You can include this navigation structure in your app's entry point (e.g., `App.js`) to define how the navigation will work.

---

This documentation file provides an overview of the `Nav.js` navigation component, its usage, and its dependencies. It explains how to integrate this component into your React Native project and how to set up the navigation structure using React Navigation.

[React Native Website](https://reactnative.dev)
[React Navigation Documentation](https://reactnavigation.org/docs/getting-started)

Please refer to the respective documentation and resources for more information on these tools and libraries.
