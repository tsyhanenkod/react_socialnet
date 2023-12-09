import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux_store";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App store={ store } />
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree);

reportWebVitals();
