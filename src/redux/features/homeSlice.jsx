import { createSlice } from '@reduxjs/toolkit'
import assets from '../../assets';

const initialState={
    list:[
        {id:1,name:"Animals",icon: assets.homeAnimal},
        {id:2,name:"Fruits",icon: assets.homeFruit},
        {id:3,name:"Countries",icon: assets.homeCountry},
    ]
}

export const homeSlice = createSlice({
    name: 'homeSlice',
    initialState,
    reducers: {
        updateHomeList: (state, action) => {
            // Update only the fields specified in the action payload
            state.list = action?.payload ?? state.list;
        },
        resetHome: (state, action) => {
            state.list = [
                {id:1,name:"Animals",icon: assets.homeAnimal},
                {id:2,name:"Fruits",icon: assets.homeFruit},
                {id:3,name:"Countries",icon: assets.homeCountry},
            ];
        }
    }
})
export const {updateHomeList,resetHome}=homeSlice.actions;
export default homeSlice.reducer;
