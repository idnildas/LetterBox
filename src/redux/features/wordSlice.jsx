import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: null,  // Initially, no word is selected.
  wordLists: [
    {
      id: 1,
      name: 'Animals',
      wordlist: [
        {id: 1, word: 'Elephant', hint: 'Large mammal with a trunk'},
        {id: 2, word: 'Lion', hint: 'King of the jungle'},
        {id: 3, word: 'Giraffe', hint: 'Tall with a long neck'},
        {id: 4, word: 'Penguin', hint: 'Black and white bird'},
      ],
    },
    {
      id: 2,
      name: 'Fruits',
      wordlist: [
        {id: 5, word: 'Apple', hint: 'Red or green and crunchy'},
        {id: 6, word: 'Banana', hint: 'Yellow and curved'},
        {id: 7, word: 'Strawberry', hint: 'Small and red'},
        {id: 8, word: 'Grapes', hint: 'Small, round, and purple'},
      ],
    },
    {
      id: 3,
      name: 'Countries',
      wordlist: [
        {id: 9, word: 'USA', hint: 'United States of America'},
        {id: 10, word: 'France', hint: 'Known for the Eiffel Tower'},
        {id: 11, word: 'Japan', hint: 'Land of the rising sun'},
        {id: 12, word: 'Australia', hint: 'Down under'},
      ],
    },
  ],
};

export const wordSlice = createSlice({
  name: 'wordSlice',
  initialState,
  reducers: {
    updateSelectedWord: (state, action) => {
      // Update only the fields specified in the action payload
      const { categoryId } = action.payload;

      // Find the category based on categoryId
      const category = state.wordLists.find(cat => cat.id === categoryId);

      if (category) {
        // Check if there's a selected word in the category
        if (!state.selected || state.selected.categoryId !== categoryId) {
          // If no word is selected or the selected word is from a different category, select a random word
          const wordList = category.wordlist;
          const randomIndex = Math.floor(Math.random() * wordList.length);
          state.selected = {
            word: wordList[randomIndex].word,
            hint: wordList[randomIndex].hint,
            categoryId,
          };
        } else {
          // If a word is already selected from the same category, select another random word
          const wordList = category.wordlist;
          let randomIndex = Math.floor(Math.random() * wordList.length);

          // Make sure the new random word is not the same as the previously selected word
          while (wordList[randomIndex].word === state.selected.word) {
            randomIndex = Math.floor(Math.random() * wordList.length);
          }

          state.selected = {
            word: wordList[randomIndex].word,
            hint: wordList[randomIndex].hint,
            categoryId,
          };
        }
      }
    },
    resetSelectedWord: (state, action) => {
      state.selected = null;  // Reset the selected word to null.
    },
  },
});

export const { updateSelectedWord, resetSelectedWord } = wordSlice.actions;
export default wordSlice.reducer;
