# `store.js` - Redux Store Configuration Documentation

This document provides an overview and detailed documentation for your Redux store configuration in `store.js`.

## Overview

The `store.js` file configures your Redux store using Redux Toolkit. It combines the reducers from the `homeSlice`, `wordSlice`, and `pointSlice` to create a single store that manages your application's global state.

## Redux Store Configuration

The store is configured using the `configureStore` function from Redux Toolkit. The key part of the configuration is specifying the reducers from the different slices.

Here's the code snippet from your `store.js`:

```javascript
import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './features/homeSlice';
import wordSlice from './features/wordSlice';
import pointSlice from './features/pointSlice';

export default configureStore({
  reducer: {
    homeSlice,  
    wordSlice,  
    pointSlice,
  }
});
```

In this configuration:

- `homeSlice` manages the state related to your home component, such as categories and their icons.
- `wordSlice` handles the state of selected words, word lists, and categories.
- `pointSlice` is responsible for tracking user points and the leaderboard.

All these reducers are combined into the store using the `reducer` field in the `configureStore` function.

## Export

The `configureStore` function returns the Redux store, which you can then use in your application to manage the global state.

## Example Usage

Here's an example of how to set up and use this Redux store in your application:

```javascript
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store

function App() {
  return (
    <Provider store={store}>
      {/* Your application components */}
    </Provider>
  );
}
```

You wrap your entire application with the `Provider` component, passing your Redux store as a prop. This provides access to the store's state and actions throughout your application.

This documentation should help you understand how your Redux store is configured and how to integrate it into your application.