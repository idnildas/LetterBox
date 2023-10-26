import { createSlice } from '@reduxjs/toolkit'
import assets from '../../assets';

/**
 * Initial state for the homeSlice, containing a list of categories with their icons.
 */
const initialState = {
    list: [
        { id: 1, name: "Animals", icon: assets.homeAnimal },
        { id: 2, name: "Fruits", icon: assets.homeFruit },
        { id: 3, name: "Countries", icon: assets.homeCountry },
    ]
}

export const homeSlice = createSlice({
    name: 'homeSlice',
    initialState,
    reducers: {
        /**
         * Update the home list with new categories.
         * @param {Object} state - The current state.
         * @param {Object} action - The action containing the updated list of categories.
         */
        updateHomeList: (state, action) => {
            // Update only the fields specified in the action payload
            state.list = action?.payload ?? state.list;
        },
        /**
         * Reset the home list to its initial state.
         * @param {Object} state - The current state.
         * @param {Object} action - The action (unused in this case).
         */
        resetHome: (state, action) => {
            state.list = [
                { id: 1, name: "Animals", icon: assets.homeAnimal },
                { id: 2, name: "Fruits", icon: assets.homeFruit },
                { id: 3, name: "Countries", icon: assets.homeCountry },
            ];
        }
    }
})

export const { updateHomeList, resetHome } = homeSlice.actions;
export default homeSlice.reducer;
