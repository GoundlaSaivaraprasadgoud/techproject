import { productReducer } from './ProductReducer';
import {combineReducers} from "redux";
export const combinedProductReducer=combineReducers({
    productData:productReducer
});