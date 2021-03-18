import s from "./New.module.css"
import {connect} from "react-redux";
import * as axios from "axios";
import {Component} from "react";
import {getToken} from "../../Api/api";
import {setAuth} from "../../redux/auth-reducer";
import { Redirect } from 'react-router';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {GridLoader} from "react-spinners";
import {thunkGetPost} from "../../redux/new-reducer";


class New extends Component {
    componentDidMount() {
        this.props.thunkGetPost(this.props.match.params.postId);
    }

    render() {

        if(Object.keys(this.props.postData).length===0){
            return (
                <div className={s.preloader}>
                    <GridLoader/>
                </div>
            )
        }
        return <div className={s.wrapper}>
            <div className={s.top}>
                <h1>{this.props.postData.title}</h1>
                <div className={s.underTitle}>
                    <div className={s.time}>
                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="16"
                             height="16" viewBox="0 0 13.451 16.451">
                            <path id="Контур_222" data-name="Контур 222"
                                  d="M9.726,19.451C6.011,19.451,3,15.768,3,11.226S6.011,3,9.726,3s6.726,3.683,6.726,8.226S13.44,19.451,9.726,19.451Zm0-15.186c-3.143,0-5.691,3.116-5.691,6.96s2.548,6.96,5.691,6.96,5.691-3.116,5.691-6.96S12.869,4.265,9.726,4.265Z"
                                  transform="translate(-3 -3)"/>
                            <path id="Контур_223" data-name="Контур 223"
                                  d="M18.363,15.019a.517.517,0,0,1-.367-.15L15.15,12.023a.517.517,0,0,1-.15-.367V7.517a.517.517,0,1,1,1.035,0v3.927l2.7,2.69a.517.517,0,0,1-.367.885Z"
                                  transform="translate(-8.792 -3.788)" fill="#2699fb"/>
                        </svg>
                        <time>
                            {this.props.postData.data.month + ' ' + this.props.postData.data.day + ', ' + this.props.postData.data.year}
                        </time>
                    </div>
                    <div className={s.rubrick}>Рубрика: {this.props.postData.type.rusName}</div>
                </div>

                <div className={s.img}>
                    <img src={this.props.postData.avaImg} alt=""/>
                </div>
            </div>

            <div className={s.content}>
                {this.props.postData.content.map((el)=>{
                    if(el.tag==='img'){
                        return <div className={s.elemContent+' '+s.img}>
                            <img src={el.src} alt=""/>
                        </div>
                    }
                    if(el.tag==='p'){
                        return <div className={s.elemContent+' '+s.p}>
                            {el.src.split('\n').map(el=>{return <>{'\n'+'     '+el}</>})}
                        </div>
                    }
                    if(el.tag==='h'){
                        return <div className={s.elemContent+' '+s.h}>
                            <h2>
                                {el.src}
                            </h2>
                        </div>
                    }

                })}
            </div>

        </div>

    }
}


let mapStateToProps = (state) => {
    return {
        postData: state.new.Post,
        isAuth:state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps, {setAuth, thunkGetPost}),
    withRouter
)(New);