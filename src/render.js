import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state, addNewPost, updateNewPostText) => {
    root.render(
        <React.StrictMode>
            <App state={ state } addNewPost={addNewPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}