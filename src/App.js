import './App.css';
import Header from "./components/Header/HeaderContainer";
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path='/Homepage' render={() => <>
                    <Header/>
                    <div class='app-wrapper-content'>
                        <Homepage/>
                    </div>
                </>}/>

                <div className='app-wrapper-content'>
                    <Route path='/Login' render={() => <Login/>}/>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
