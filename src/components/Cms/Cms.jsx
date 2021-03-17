import s from './Cms.module.css'
import {connect} from "react-redux";
import {NavLink, Redirect, Route} from "react-router-dom";
import Aside from "./Aside/Aside";
import AllPosts from "./AllPosts/AllPosts";
import CreatePostPage from "./CreatePostPage/CreatePostPage";


const Cms = (props) => {

    if(props.isAuth===false){
        return <Redirect to={'/login'} />
    }


    return (<div    className={s.backgr}>
            <Aside />
            <div className={s.container}>
                <Route  path='/CMS/CreatePostPage/:postId' render={() => <CreatePostPage/>}/>
                <Route  exact path='/CMS/CreatePostPage' render={() => <CreatePostPage/>}/>
                <Route path='/CMS/AllPosts' render={() => <AllPosts/>}/>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {})(Cms)