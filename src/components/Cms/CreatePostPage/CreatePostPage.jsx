import s from './CreatePostPage.module.css'
import {connect} from "react-redux";
import {Component} from "react";
import {
    AddSubtitle, avaThunk, clearPostPage,
    deleteContent,
    editText, getPostsServer, putRequestServer, sendData, setRequest,
    setRubrick,
    setTitle,
    setType,
    updateAllContent
} from "../../../redux/creatorPost-reducer";
import Prevue from "./Prevue/Prevue";
import MainContent from "./MainContent/MainContent";
import ServerComponent from "./ServerComponent/ServerComponent";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {GridLoader} from "react-spinners";



class CreatePostPage extends Component {

    componentWillUnmount() {
        if(this.props.match.params.postId) this.props.clearPostPage();
    }

    componentDidMount() {
        if(this.props.match.params.postId){
            this.props.getPostsServer(this.props.match.params.postId)
        }
    }


    render() {
        if (this.props.creatorPost.isFetching) return (
            <div className={s.preloader}>
                <GridLoader/>
            </div>
        )

        return (<>
                <Prevue  {...this.props}/>
                <MainContent updateAllContent={this.props.updateAllContent} deleteContent={this.props.deleteContent}
                             editText={this.props.editText}
                             postObj={this.props.creatorPost.postObj}

                />
                <ServerComponent putRequestServer={this.props.putRequestServer} id={this.props.match.params.postId} setRequest={this.props.setRequest} sendData={this.props.sendData}
                                 isRequest={this.props.creatorPost.isRequest} postObj={this.props.creatorPost.postObj}/>
            </>
        )
    }
};


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    creatorPost: state.creatorPost,

})

export default compose(
    connect(mapStateToProps, {
        setRubrick,
        clearPostPage,
        setType,
        setTitle,
        editText,
        deleteContent,
        updateAllContent,
        sendData,
        avaThunk,
        setRequest,
        getPostsServer,
        putRequestServer,

    }), withRouter)(CreatePostPage)