import { configureStore } from '@reduxjs/toolkit';
import langReducer from '../features/lang/langSlice';
import pageReducer from '../features/page/pageSlice';

export const store = configureStore({
  reducer: {
    lang: langReducer,
    page: pageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
