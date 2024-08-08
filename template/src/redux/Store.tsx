import {combineReducers, configureStore} from '@reduxjs/toolkit';
import HomeReducer from './slices/HomeSlice'

/**
 * Contains list of reducers
 * Add reducers here
 */
const reducers = combineReducers({
    Home: HomeReducer
});

export const Store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
