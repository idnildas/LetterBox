# Home.js

## Description

`Home.js` is a component of the "Letter Box" mobile application developed using React Native. This component represents the home screen where users can select word categories to play the game. It displays a list of categories as cards, each with an associated icon and text.

## Usage

- Import the `Home` component into your React Native project.
- Include it within your app's navigation structure to allow users to select categories and start the game.

## Component Structure

The `Home` component consists of:

- `centerView`: A sub-container that centers the content.
- `subText`: Text that indicates the purpose of the game.
- `FlatList`: A list of category cards created by the `renderCards` function.
- `renderCards`: A function that generates individual category cards with associated text and icons.

## Functions

- `renderCards({ item })`: Renders category cards, each containing the category name and icon.
  - `item`: The category data object.
  
## Example

```jsx
import Home from './Home';

// Inside your component or screen
<Home />
