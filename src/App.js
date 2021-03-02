import './App.css';
import Header from "./components/Header/HeaderContainer";
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div class='app-wrapper-content'>
                <Route path='/Homepage' render = {() => <Homepage />}/>
                <Route path='/Login' render = {() => <Login />}/>
                <Route exact path='/' render = {() => <Homepage />}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
