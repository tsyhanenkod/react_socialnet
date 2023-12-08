import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import state, {addNewPost, updateNewPostText, subscribe} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={ state } addNewPost={addNewPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(state, addNewPost, updateNewPostText)
subscribe(rerenderEntireTree);

reportWebVitals();
