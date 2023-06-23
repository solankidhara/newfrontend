import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    content:[],
    contentType: [],
    category: [],
    tags: [],
    tagTwo: [],
    fileTypes:[],
    licenses:[],
    sizes:[]
  },
  reducers: {
    addContentType: (state, actions) => {
      state.contentType = actions.payload;
    },
    addCategories: (state, actions) => {
      state.category = actions.payload;
    },
    addTags: (state, actions) => {
      state.tags = actions.payload;
    },
    addContent :(state, actions) => {
      state.content = actions.payload;
    },
    addFileType:(state, actions) => {
      state.fileTypes = actions.payload;
    },
    addLicense:(state, actions) => {
      state.licenses = actions.payload;
    },
    addSizes:(state, actions) => {
      state.sizes = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContentType,addCategories ,addTags ,addContent,addFileType ,addLicense , addSizes} = categorySlice.actions;

export default categorySlice.reducer;
