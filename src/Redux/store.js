import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./Slice/image-slice";
import categoryReducer from "./Slice/category-slice";

export default configureStore({
  reducer: {
    images: imageReducer,
    categories:categoryReducer,
  },
});
