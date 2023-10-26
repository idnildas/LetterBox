# Heading.js

## Description

`Heading.tsx` is a custom component used in the "Letter Box" mobile application developed using React Native. This component provides a flexible and reusable header for screens, with optional back navigation. It is designed to maintain a consistent header style throughout the application.

## Usage

- Import the `Heading` component into your React Native project.
- Use it within your app's screens to create headers with varying content, including back buttons or titles.

## Props

- `navType` (string): Determines the type of header to display:
  - `'back'`: Displays a header with a back button.
  - `'none'`: Displays a simple title header.

## Example

```jsx
import Heading from './Heading';

// Inside your component or screen
<Heading navType="back" />
