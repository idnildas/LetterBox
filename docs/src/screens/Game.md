# Game.js

## Description

`Game.js` is a component of the "Letter Box" mobile application developed using React Native. This component represents the game interface where users form words from a shuffled set of letters to match a target word. The component provides functionalities to shuffle letters, form words, calculate points, and navigate to the result screen.

## Usage

- Import the `Game` component into your React Native project.
- Include it within your app's navigation structure to allow users to play the game.

## Component Structure

The `Game` component consists of:

- `container`: The main container that sets the background color and layout.
- `centerView`: A sub-container that centers the game content.
- `wordView`: A container for displaying the word to be formed.
- `wordItem`: Individual components that represent a letter in the word.
- `hintView`: A section that displays a hint for the word.
- `lettersList`: A container for the shuffled letters.
- `letters`: Individual components representing shuffled letters.
- `deleteText`: A button to remove the last added letter.
- "SKIP" and "SUBMIT" buttons: Buttons to navigate to the next screen.

## Functions

- `shuffleWord(word)`: Shuffles the letters of a word using the Fisher-Yates shuffle algorithm.

- `pushStringIntoEmptyPosition(str, letterIndex)`: Pushes a string into an empty position in the word if available.

- `removeLastAdded()`: Removes the last added letter and places it back in the shuffled letters.

- `getPoint()`: Calculates the points based on the formed word's length and complexity.

- `evaluate()`: Evaluates the formed word and navigates to the result screen.

## Example

```jsx
import Game from './Game';

// Inside your component or screen
<Game />
