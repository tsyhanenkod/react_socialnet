import reportWebVitals from './reportWebVitals';
import state, {addNewPost, updateNewPostText} from './redux/state';
import {rerenderEntireTree} from "./render";

rerenderEntireTree(state, addNewPost, updateNewPostText)

reportWebVitals();
