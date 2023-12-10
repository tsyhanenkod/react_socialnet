import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import MessagesContainer from './components/Messages/MessagesContainer'
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="page_wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/messages/*" element={<MessagesContainer />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
