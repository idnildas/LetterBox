# BigText.js

## Description

`BigText.tsx` is a custom component in the "Letter Box" mobile application developed using React Native. It provides a way to display large text with custom styling. The component is designed to render text with a unique font, font size, and color, making it suitable for titles, headers, or any text that requires emphasis in the app.

## Usage

- Import this `BigText` component into your React Native project.
- Include it in your app's screens or components where you need to display large, stylized text.
- You can customize the styling of the text by passing a `textStyle` prop.

## Props

- `textStyle` (optional): A style object to further customize the appearance of the text.
- `children`: The text content to be displayed using the `BigText` component.

## Example

```jsx
import BigText from './BigText';

// Inside your component or screen
<BigText textStyle={{ color: 'red' }}>Welcome to Letter Box</BigText>
