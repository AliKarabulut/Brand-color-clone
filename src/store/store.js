import { createSlice } from "@reduxjs/toolkit";

const initialStoreState = { copied: " ", selected: [], showCopied: false};

const CopiedSlice = createSlice({
  name: "copieds",
  initialState: initialStoreState,
  reducers: {
    addCopied(state, action) {
      state.copied = action.payload;
    },
    toggleSelected: (state, action) => {
      const payload = action.payload;
      if (state.selected.includes(payload)) {
        state.selected = state.selected.filter((item) => item !== payload);
      } else {
        state.selected = [...state.selected, payload];
      }
    },
    toggleShowCopied(state, action){
        state.showCopied = action.payload
    }
  },
});

export const copiedActions = CopiedSlice.actions;
export default CopiedSlice.reducer;
