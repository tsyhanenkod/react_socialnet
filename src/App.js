import './App.css';

const App = () => {
    return (
        <div className="page_wrapper">
            <header className="header">
                <a href="/" className="logo">
                    <h2 className="logo_text">Secret Chat</h2>
                </a>
                <div className="login_nav">
                    <a href="/" className="log_button login">Log in</a>
                    <p className="between">|</p>
                    <a href="/" className="log_button signup">Sign up</a>
                </div>
            </header>
            <nav className="navbar">
                <div className="nav_item">
                    <a href="/">Profile</a>
                </div>
                <div className="nav_item">
                    <a href="/">Messages</a>
                </div>

            </nav>
            <div className="content">
                Content
            </div>
        </div>
    );
}

export default App;
