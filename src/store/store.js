import { createSlice } from "@reduxjs/toolkit";

const initialStoreState = {
  copied: "",
  selected: [],
  showCopied: false,
  search: "",
};

const CopiedSlice = createSlice({
  name: "copieds",
  initialState: initialStoreState,
  reducers: {
    addCopied(state, action) {
      state.copied = action.payload;
    },
    toggleSelected: (state, action) => {
      const payload = action.payload;
      const selectedItems = [...state.selected];

      if (selectedItems.some((item) => item.slug === payload.slug)) {
        state.selected = selectedItems.filter(
          (item) => item.slug !== payload.slug
        );
      } else {
        state.selected = [...selectedItems, payload];
      }
    },
    toggleShowCopied(state, action) {
      state.showCopied = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    clearSelected(state) {
      state.selected = [];
    },
  },
});

export const copiedActions = CopiedSlice.actions;
export default CopiedSlice.reducer;
