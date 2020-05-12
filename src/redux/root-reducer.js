import  { combineReducers } from "redux"
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"

// Default reducers
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";


const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

//Session storage configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
}

export default persistReducer(persistConfig, rootReducer);
