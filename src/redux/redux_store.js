import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from './dialogs_reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    chatsPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;