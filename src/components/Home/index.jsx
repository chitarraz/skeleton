import { createSlice } from '@reduxjs/toolkit';

//initial state
const initialState = {

};

const home = createSlice({
  name: 'home',
  initialState: { center: [51.505, -0.09], zoom: 13 },
  reducers: {
    setCenter: (state, action) => {
      state.center = action.payload;
    },
    setZoom: (state, action) => {
      state.zoom = action.payload;
    },
    reset: () => initialState,
  },
});

export const { setCenter, setZoom } = home.actions;

export default home.reducer;