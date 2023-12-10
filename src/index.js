import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux_store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree);

reportWebVitals();
