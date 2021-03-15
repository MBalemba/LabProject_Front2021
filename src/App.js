import './App.css';
import Header from "./components/Header/HeaderContainer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import New from "./components/New/New";
import {Component} from "react";
import Cms from "./components/Cms/Cms";
import Login from "./components/Login/Login";

class App extends Component {
    render() {
        return (
            <BrowserRouter>

                <Route exact path='/'render={() => <Redirect to={'/homepage'} />}/>
                <Route path='/homepage' render={() => <>
                    <Header/>
                    <div class='app-wrapper-content'>
                        <Homepage/>
                    </div>
                </>}/>
                <Route path='/allNews' render={() => <>
                    <Header/>
                    <div class='app-wrapper-content'>
                    </div>
                </>}/>


                <div className='app-wrapper-content'>
                    <Route path='/new/:postId' render={()=><New />} />
                    <Route path='/login' render={() => <Login />}/>
                </div>

                <Route path='/CMS' render={() => <Cms/>}/>


            </BrowserRouter>
        );
    }
};


export default App;
