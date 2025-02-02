import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./ContactSlice";
import filtersReducer from "./FilterSlice";
    
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
})

const store = configureStore({
    reducer:rootReducer,
})

export default store;