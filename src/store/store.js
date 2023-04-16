import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import navReducer from "./navReducer";
import contentReducer from "./contentReducer";


const redusers = combineReducers({
    content: contentReducer,
    nav: navReducer
})

const store = legacy_createStore(redusers,applyMiddleware(thunk))

window.st = store

export default store