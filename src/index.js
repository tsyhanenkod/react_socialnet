import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux_store";
import StoreContext from "./storeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree);

reportWebVitals();
