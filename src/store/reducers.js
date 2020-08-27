import {combineReducers} from "redux";
import {photosReducers} from "./photos/redusers";
import {authReducers} from "./auth/redusers";

export default combineReducers({
    photos: photosReducers,
    auth: authReducers,
})