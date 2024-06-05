import { createStore } from "redux";
import reducer from "../Reducers/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistreducer = persistReducer(persistConfig , reducer);

export const store = createStore(persistreducer);

export const persistor = persistStore(store);
