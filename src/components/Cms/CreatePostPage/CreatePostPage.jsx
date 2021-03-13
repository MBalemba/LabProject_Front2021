import s from './CreatePostPage.module.css'
import {connect} from "react-redux";
import {Component} from "react";
import ClipLoader from "react-spinners/ClipLoader"
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

//
// class ServerComponent extends Component {
//     componentWillUnmount() {
//         debugger
//     }
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             AfterRequest: false
//         }
//     }
//
//     saveChange(e) {
//         debugger
//
//         this.props.sendData(this.props.postObj);
//     }
//
//     render() {
//
//         return (<div className={s.bottom}>
//                 {(this.props.postObj.title === '' || this.props.postObj.content.length === 0 || this.props.postObj.avaImg=== '') ? '' :
//                     <button onMouseDown={() => {
//                         this.setState({
//                             AfterRequest: true,
//                         })
//                     }} onClick={this.saveChange.bind(this)} className={s.button}>Применить изменения</button>}
//                 {this.state.AfterRequest === true && this.props.postObj.title != ''?<div>warn</div>: ''}
//
//             </div>
//
//         );
//     }
// };

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
                < ClipLoader/>
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