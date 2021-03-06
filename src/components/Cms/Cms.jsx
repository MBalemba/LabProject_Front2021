import s from './Cms.module.css'
import {connect} from "react-redux";
import {NavLink, Route} from "react-router-dom";
import Aside from "./Aside/Aside";
import CreatePostPage from "./CreatePostPage/CreatePostPage";


const Cms = () => {
    return (<>
            <Aside />
            <div className={s.container}>
                <Route path='/CMS/CreatePostPage' render={() => <CreatePostPage/>}/>
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {})(Cms)