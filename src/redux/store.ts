import  thunkMiddleWare  from 'redux-thunk';
import {  combineReducers, configureStore } from '@reduxjs/toolkit';
import { generalSlice } from './slices/generalSlice';
import { genreMovieListSlice } from './slices/genreMovieListSlice';
import { movieSlice } from './slices/movieSlice';
import { personSlice } from './slices/personSlice';

const rootReducer = combineReducers({
  general: generalSlice.reducer,
  genreMovieList: genreMovieListSlice.reducer,
  movie: movieSlice.reducer,
  person: personSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleWare),
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;