import { createSlice } from "@reduxjs/toolkit";

const animationsSlice = createSlice({
    name: "animations",
    initialState: {
        isRendered: false,
        heroAnimationFinished: false
    },
    reducers: {
        setFirstRender: (state, action) => {
            state.isRendered = action.payload.isRendered;
        },
        setHeroAnimationFinished: (state, action) => {
            state.heroAnimationFinished = action.payload.heroAnimationFinished;
            
        }
    }

})

export const {setFirstRender, setHeroAnimationFinished} = animationsSlice.actions;

export default animationsSlice.reducer;