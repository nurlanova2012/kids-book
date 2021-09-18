import { combineReducers } from "redux";

import filterReducer from "./filters";
import bookReducer from "./book";


const rootReducer = combineReducers({
    filters: filterReducer,
    books: bookReducer,
});

export default rootReducer;