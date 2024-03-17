import { combineReducers } from "redux";
import { reducer } from "./reducers";
import { profileReducer } from "./profile/reducer";
import { productReducer } from "./products/productsreducer";




export const rootReducer=combineReducers({
    profile:profileReducer,
    ticket:reducer,
    productListing:productReducer

})