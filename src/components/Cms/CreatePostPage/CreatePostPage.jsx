import s from './CreatePostPage.module.css'
import {connect} from "react-redux";
import Creator from "./Creator/Creator";



const CreatePostPage = () => {
    return (<>
            <Creator />
        </>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {})(CreatePostPage)