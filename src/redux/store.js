import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactSlice";
import filtersReducer from "./filterSlice";
    
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
})

const store = configureStore({
    reducer:rootReducer,
})

export default store;