import s from './CreatePostPage.module.css'
import {connect} from "react-redux";
import Creator from "./MainContent/Creator/Creator";
import {Component} from "react";
import {getRubrick} from "../../../Api/api";
import {
    AddSubtitle,
    deleteContent,
    editText,
    setRubrick,
    setTitle,
    setType,
    updateAllContent
} from "../../../redux/creatorPost-reducer";
import Prevue from "./Prevue/Prevue";
import MainContent from "./MainContent/MainContent";


class CreatePostPage extends Component {


    render() {
        return (<>
                <Prevue  {...this.props}/>
                <MainContent updateAllContent={this.props.updateAllContent} deleteContent={this.props.deleteContent} editText={this.props.editText}
                             postObj={this.props.creatorPost.postObj}/>
            </>
        )
    }
};


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    creatorPost: state.creatorPost,

})

export default connect(mapStateToProps, {
    setRubrick,
    setType,
    setTitle,
    editText,
    deleteContent,
    updateAllContent,
})(CreatePostPage)