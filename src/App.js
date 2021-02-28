import './App.css';
import Header from "./components/Header/HeaderContainer";
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div class='app-wrapper-content'>
                <Route path='/Homepage' render = {() => <Homepage />}/>
                <Route exact path='/' render = {() => <Homepage />}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
