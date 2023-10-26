# Project Overview: Letter Box

## Introduction
"Letter Box" is a mobile application developed in React Native. It offers an engaging and educational word puzzle game for users. In "Letter Box," users can select a category (e.g., animals, countries, fruits) and start a new game. The primary goal is to create words by selecting letters provided on the screen.

## Features

### 1. Word Puzzle Game
- Users can choose from a variety of categories (e.g., animals, countries, fruits) to start a new word puzzle game.
- The game provides a set of letters on the screen, and users must form words using these letters.

### 2. Word Creation
- Users can select letters from the provided set and arrange them to create words.
- Words can be formed horizontally or vertically.

### 3. Points System
- "Letter Box" implements a points system to reward users based on the length and complexity of the words they create.
- Longer and more complex words earn users more points.

### 4. Categories
- The app offers a range of word categories, providing users with diverse word puzzles to solve.
- Each category may have its own unique set of words and challenges.

## Purpose
"Letter Box" aims to offer an enjoyable and educational word puzzle experience. It encourages users to enhance their vocabulary, spelling, and word-forming skills in a fun and interactive way. This application can be an entertaining pastime and a valuable tool for language development.

## Target Audience
- Students looking to improve their language skills.
- Word game enthusiasts seeking a challenging and enjoyable experience.
- Anyone interested in exploring new words and expanding their vocabulary.

## Development Team
The "Letter Box" project is developed by Indranil Das.

## Contact Information
For inquiries or support related to "Letter Box," please contact the development team at [idmaster15@gmail.com].

## Disclaimer
This project, "Letter Box," is intended for entertainment and educational purposes. It is not affiliated with any specific organizations or entities. Any similarities to existing word puzzle games are purely coincidental.

## Version History
- **v1.0 (Initial Release)**: Basic word puzzle game with category selection, word creation, and points system.

This project overview provides a high-level understanding of the "Letter Box" project. For more detailed information, please refer to the project's documentation and user guides.

## Project Structure

This document outlines the directory structure of the "Letter Box" project.

```plaintext
.
├── App.jsx
└── src/
    ├── assets/
    |   ├── homeIcons/             # Home screen icons
    |   |   ├── .DS_Store
    |   |   ├── animal.png
    |   |   ├── countries.png
    |   |   ├── fruit.png
    |   |   └── leaderboard.png
    |   ├── lotties/               # Lottie animations
    |   |   └── splash.json
    |   └── result/
    |       └── stars.png
    ├── components/                # React components
    |   ├── BigText.tsx
    |   ├── Button.tsx
    |   └── Heading.tsx
    ├── fonts/                     # Custom fonts
    |   └── BigelowRules-Regular.ttf
    ├── redux/                     # Redux store and features
    |   ├── features/
    |   |   ├── homeSlice.jsx
    |   |   ├── pointSlice.jsx
    |   |   └── wordSlice.jsx
    |   └── store.jsx
    ├── screens/                   # App screens
    |   ├── Game.jsx
    |   ├── Home.jsx
    |   ├── Ranks.jsx
    |   └── Result.jsx
    ├── utils/                     # Utility functions and constants
    |   ├── AsyncstorageFunction.jsx
    |   ├── Colors.jsx
    |   ├── Constants.jsx
    |   └── Metrices.jsx
    └── Nav.jsx                    # Navigation component
``````

Here's a brief description of each directory:

- `assets`: Contains images, icons, and animations used in the application.
- `components`: Contains reusable React components used across different screens.
- `fonts`: Contains custom fonts used in the application (if any).
- `redux`: Contains the Redux store, slices, and features used for state management.
- `screens`: Contains individual screens or pages of the application.
- `utils`: Contains utility functions and constants used throughout the project.
- `Nav.jsx`: The main navigation component for the application.

This structured organization makes it easier to locate and manage different parts of your project.

Feel free to provide more detailed information about each directory or any specific conventions used in your project as needed.


This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

