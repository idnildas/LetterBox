# Button.js

## Description

`Button.tsx` is a custom component in the "Letter Box" mobile application developed using React Native. It provides a reusable button component with customizable styles. This component simplifies the process of creating buttons with specific styling and interactions.

## Usage

- Import the `Button` component into your React Native project.
- Use it within your app's screens or components wherever you need to implement a button.
- Customize the button's appearance by providing the `buttonStyle` and `textStyle` props.

## Props

- `buttonStyle`: A style object for customizing the button's appearance.
- `textStyle`: A style object for customizing the text within the button.
- `children`: The text content displayed on the button.

## Example

```jsx
import Button from './Button';

// Inside your component or screen
<Button
  buttonStyle={{ backgroundColor: 'blue' }}
  textStyle={{ color: 'white' }}
  onPress={() => {
    // Your button press logic here
  }}
>
  Click Me
</Button>
