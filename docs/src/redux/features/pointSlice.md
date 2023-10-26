# `pointSlice.js` - Redux Slice Documentation

This document provides an overview and detailed documentation for the `pointSlice` in your Redux setup.

## Overview

The `pointSlice` is a Redux Toolkit slice that manages the state of a user's points and a leaderboard of users with their points. It includes actions to add or update the user's points and maintain the leaderboard.

## Initial State

The initial state for the `pointSlice` includes two main properties:

- `userPoints` (number): The total points of the current user.
- `leaderList` (Array): An array containing leaderboard objects for multiple users. Each leaderboard object consists of:
  - `rank` (number): The user's rank.
  - `userId` (string): The user's ID.
  - `username` (string): The user's username.
  - `totalPoints` (number): The user's total points.

```javascript
const initialState = {
  userPoints: 0,
  leaderList: [
    // User leaderboard entries
  ],
};
```

## Reducer Actions

The `pointSlice` defines two reducer actions:

### `addUserPoint`

- Description: Updates the user's points and the leaderboard. It also uses async storage to persist the user's points.

- Parameters:
  - `state` (Object): The current state.
  - `action` (Object): The action containing the number of points to add.
  
- Behavior: It adds the points specified in the action payload to the user's `userPoints`, updates the leaderboard based on the new points, and persists the points in async storage.

### `updateUserPoint`

- Description: Updates the user's points and the leaderboard.

- Parameters:
  - `state` (Object): The current state.
  - `action` (Object): The action containing the updated total points for the user.
  
- Behavior: It sets the user's `userPoints` to the value specified in the action payload and updates the leaderboard based on the new points.

## Exported Actions and Reducer

The `pointSlice` exports two action creators and the reducer itself:

```javascript
export const { addUserPoint, updateUserPoint } = pointSlice.actions;
export default pointSlice.reducer;
```

These exported items allow you to dispatch actions to modify the `pointSlice` state and maintain the user's points and leaderboard.

## Helper Function: `updateLeaderboard`

The `pointSlice` includes a helper function, `updateLeaderboard`, to update the leaderboard based on a user's new points. This function is used internally by the `pointSlice` actions.

Here's how it works:

1. Find the user's entry in the leaderboard array based on the user's ID.
2. If the user is found, update the user's total points.
3. Re-sort the leaderboard array based on total points in descending order.
4. Update the ranks based on the new order.

This function ensures that the leaderboard is correctly updated when the user earns more points.

## Example Usage

Here's an example of how to use the `addUserPoint` and `updateUserPoint` actions:

```javascript
import { useDispatch } from 'react-redux';
import { addUserPoint, updateUserPoint } from './pointSlice';

// Dispatch an action to add points
dispatch(addUserPoint(50));

// Dispatch an action to update points
dispatch(updateUserPoint(100));
```

These actions will update the user's points and the leaderboard accordingly.

Remember to configure your Redux store to include this slice reducer so that you can use these actions.

This documentation should help you understand how to use and work with the `pointSlice` in your Redux application.