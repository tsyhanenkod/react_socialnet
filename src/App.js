import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

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
