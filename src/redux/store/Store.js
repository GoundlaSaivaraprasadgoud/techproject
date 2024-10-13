import {createStore}  from "redux";
import { combinedProductReducer } from "../reducerFunction/CombineReducer";

export const Store=createStore(combinedProductReducer,{});