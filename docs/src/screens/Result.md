# Result.js

## Description

`Result.js` is a component of the "Letter Box" mobile application developed using React Native. This component displays the result of a game, informing the user whether they answered correctly or not. If the user answers correctly, it provides the points they earned, and if not, it encourages them to try again.

## Usage

- Import the `Result` component into your React Native project.
- Include it in your app's navigation structure to display game results.

## Component Structure

The `Result` component consists of:

- `centerView`: A sub-container that centers the content.
- Conditional rendering based on `route.params.data` to display the result of the game.
- A button that allows the user to navigate back to the home screen.

## Functions

- `useEffect(() => {...}, [route])`: A `useEffect` hook that dispatches an action when the component mounts to add points to the user. It relies on data passed via the `route` object.

## Example

```jsx
import Result from './Result';

// Inside your component or screen
<Result route={/* your route data */} />
