# `wordSlice.js` - Redux Slice Documentation

This document provides an overview and detailed documentation for the `wordSlice` in your Redux setup.

## Overview

The `wordSlice` is a Redux Toolkit slice that manages the state of selected words, word lists, and categories. It includes actions to update the selected word or reset it.

## Initial State

The initial state for the `wordSlice` includes two main properties:

- `selected` (Object): Represents the currently selected word. Initially set to `null`.
- `wordLists` (Array): Contains a list of categories, each with its wordlist. Each category has an `id`, `name`, and an array of `wordlist` items. Each `wordlist` item includes `id`, `word`, and `hint` properties.

Here's an example of the initial state:

```javascript
const initialState = {
  selected: null,
  wordLists: [
    {
      id: 1,
      name: 'Animals',
      wordlist: [
        // List of words and hints
      ],
    },
    // Other categories...
  ],
};
```

## Reducer Actions

The `wordSlice` defines two reducer actions:

### `updateSelectedWord`

- Description: Updates the `selected` property with a randomly selected word from a specified category. If a word from the same category is already selected, it ensures that the new selection is different.

- Parameters:
  - `state` (Object): The current state.
  - `action` (Object): The action containing the `categoryId` of the category from which to select a word.

- Behavior:
  1. It retrieves the category based on the `categoryId` from the `wordLists`.
  2. It checks if there's a currently selected word or if the selected word is from a different category.
  3. If no word is selected or the selected word is from a different category, it randomly selects a word from the category and updates the `selected` property.
  4. If a word from the same category is already selected, it selects a different word from the category.

### `resetSelectedWord`

- Description: Resets the `selected` property to `null`.

- Parameters:
  - `state` (Object): The current state.
  - `action` (Object): The action (unused in this case).

- Behavior: It sets the `selected` property to `null`, effectively resetting the selected word.

## Exported Actions and Reducer

The `wordSlice` exports two action creators and the reducer itself:

```javascript
export const { updateSelectedWord, resetSelectedWord } = wordSlice.actions;
export default wordSlice.reducer;
```

These exported items allow you to dispatch actions to modify the `wordSlice` state, select new words, and reset the selected word.

## Example Usage

Here's an example of how to use the `updateSelectedWord` and `resetSelectedWord` actions:

```javascript
import { useDispatch } from 'react-redux';
import { updateSelectedWord, resetSelectedWord } from './wordSlice';

// Dispatch an action to select a word from a specific category
dispatch(updateSelectedWord({ categoryId: 2 }));

// Dispatch an action to reset the selected word
dispatch(resetSelectedWord());
```

These actions will update the selected word based on the provided category or reset the selection to `null`.

Remember to configure your Redux store to include this slice reducer so that you can use these actions.

This documentation should help you understand how to use and work with the `wordSlice` in your Redux application.