import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

const App = () => {
    return (
        <div className="page_wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                <Profile/>
            </div>
        </div>
    );
}

export default App;
