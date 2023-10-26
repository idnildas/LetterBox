import { createSlice } from '@reduxjs/toolkit';
import assets from '../../assets';
import { asyncstorageMultiSet } from '../../utils/AsyncstorageFunction';

/**
 * A helper function to update the leaderboard based on a user's new points.
 *
 * @param {Array} leaderboard - The array of leaderboard objects.
 * @param {string} userId - The user's ID.
 * @param {number} newPoints - The new points to set.
 * @returns {Array} - The updated leaderboard array.
 */
const updateLeaderboard = (leaderboard, userId, newPoints) => {
    // Find the user's entry in the leaderboard array
    const userIndex = leaderboard.findIndex(user => user.userId === userId);

    if (userIndex !== -1) {
        // Update the user's total points
        leaderboard[userIndex].totalPoints = newPoints;

        // Re-sort the array based on total points in descending order
        leaderboard.sort((a, b) => b.totalPoints - a.totalPoints);

        // Update the ranks based on the new order
        leaderboard.forEach((user, index) => {
            user.rank = index + 1;
        });

        return leaderboard;
    } else {
        // User not found, return the original array
        return leaderboard;
    }
}

const initialState = {
  userPoints: 0,
  leaderList: [
    {
      rank: 1,
      userId: 'user123',
      username: 'JohnDoe',
      totalPoints: 150,
    },
    {
      rank: 2,
      userId: 'user456',
      username: 'JaneSmith',
      totalPoints: 120,
    },
    {
      rank: 3,
      userId: 'user789',
      username: 'AliceJohnson',
      totalPoints: 110,
    },
    {
      rank: 4,
      userId: 'user101',
      username: 'BobWilson',
      totalPoints: 100,
    },
    {
      rank: 5,
      userId: 'user202',
      username: 'EveAdams',
      totalPoints: 95,
    },
    {
      rank: 6,
      userId: 'user001',
      username: 'YOU',
      totalPoints: 0,
    },
  ],
};

export const pointSlice = createSlice({
  name: 'pointSlice',
  initialState,
  reducers: {
    addUserPoint: (state, action) => {
      // Update the user's points and leaderboard
      state.userPoints += action?.payload ?? 0;
      asyncstorageMultiSet([["points", JSON.stringify(state.userPoints)]]);
      state.leaderList = updateLeaderboard(state.leaderList, 'user001', state.userPoints);
    },
    updateUserPoint: (state, action) => {
      // Update the user's points and leaderboard
      state.userPoints = action?.payload ?? state.userPoints;
      state.leaderList = updateLeaderboard(state.leaderList, 'user001', state.userPoints);
    },
  },
});
export const { addUserPoint, updateUserPoint } = pointSlice.actions;
export default pointSlice.reducer;
