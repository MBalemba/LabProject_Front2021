import './App.css';
import Header from "./components/Header/HeaderContainer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import New from "./components/New/New";
import {Component} from "react";
import Cms from "./components/Cms/Cms";
import Login from "./components/Login/Login";
import AllNews from "./components/AllNews/AllNews";

class App extends Component {
    render() {
        return (
            <>

                <Route exact path='/'render={() => <Redirect to={'/homepage'} />}/>
                <Route exact path='/CMS'render={() =>  <Redirect to={'/CMS/CreatePostPage'} />}/>

                <Route path='/homepage' render={() => <>
                    <Header/>
                    <div class='app-wrapper-content'>
                        <Homepage/>
                    </div>
                </>}/>

                <Route path='/allNews' render={() => <>
                    <Header/>
                    <div class='app-wrapper-content'>
                        <AllNews />
                    </div>
                </>}/>


                <div className='app-wrapper-content'>
                    <Route path='/new/:postId' render={()=><New />} />
                    <Route path='/login' render={() => <Login />}/>
                </div>

                <Route path='/CMS' render={() => <Cms/>}/>


            </>
        );
    }
};


export default App;
