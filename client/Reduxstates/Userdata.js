import { createSlice } from '@reduxjs/toolkit';
const Userdata = createSlice({
    name: 'userdata',
    initialState: {
        isAuthed: false,
        uid: '',
        name: '',
        email: '',
    },
    reducers: {
        storeUserData: (state, action) => {
            state.isAuthed = action.payload.isAuthed;
            state.uid = action.payload.uid;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        clearUserData:(state)=>{
            state.isAuthed=false;
            state.uid='';
            state.name='';
            state.email='';
        }
    }
});

export const {storeUserData, clearUserData} = Userdata.actions;
export default Userdata.reducer;