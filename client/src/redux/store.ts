import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux"; 

import usersReducer from './features/users'


const reducers = combineReducers({
  user: usersReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};


const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   // user: usersReducer,
  // },
  middleware: (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})
export let persistor = persistStore(store);
