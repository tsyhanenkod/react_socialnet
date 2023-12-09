import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="page_wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/profile" element={<Profile state={ props.state.profilePage } dispatch={props.dispatch}/>}/>
                        <Route path="/messages/*" element={<Messages state={ props.state.chatsPage } />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
