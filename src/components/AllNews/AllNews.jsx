import s from "./AllNews.module.css"
import {connect} from "react-redux";
import {Component} from "react";
import {setAuth} from "../../redux/auth-reducer";
import {compose} from "redux";
import {NavLink, withRouter} from "react-router-dom";
import {thunkGetPost} from "../../redux/new-reducer";
import {firstNeedPosts, requestNextPosts} from "../../redux/AllNews-reducer";
import ClipLoader from "react-spinners/ClipLoader";




class PostCreator extends Component {




    render() {
        return <>
            {this.props.AllNews.Posts.length !== 0 ?
                this.props.AllNews.Posts.map((el) => {
                    return <div
                        className={s.card}>
                        <div className={s.category}>
                            <div>{el.type.rusName}</div>
                        </div>
                        <div className={s.img}>
                            <img draggable={false} src={el.avaImg} alt=""/>
                        </div>
                        <div className={s.content}>
                            <NavLink to={`/new/${el.id}`}><h2>{el.title}</h2></NavLink>
                            <div className={s.also}>
                                <div className={s.time}>
                                    <svg id="clock_hour_minute_second_time_timer_watch_icon_123193"
                                         xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                        <g id="Layer_2" data-name="Layer 2" transform="translate(1.552 1.552)">
                                            <path id="Контур_222" data-name="Контур 222"
                                                  d="M9.726,16.451a6.726,6.726,0,1,1,6.726-6.726A6.726,6.726,0,0,1,9.726,16.451Zm0-12.416a5.691,5.691,0,1,0,5.691,5.691A5.691,5.691,0,0,0,9.726,4.035Z"
                                                  transform="translate(-3 -3)"/>
                                            <path id="Контур_223" data-name="Контур 223"
                                                  d="M18.363,15.019a.517.517,0,0,1-.367-.15L15.15,12.023a.517.517,0,0,1-.15-.367V7.517a.517.517,0,1,1,1.035,0v3.927l2.7,2.69a.517.517,0,0,1-.367.885Z"
                                                  transform="translate(-8.792 -4.931)" fill="#2699fb"/>
                                        </g>
                                        <g id="frame">
                                            <rect id="Прямоугольник_723" data-name="Прямоугольник 723" width="21"
                                                  height="21" fill="none"/>
                                        </g>
                                    </svg>
                                    <time>{el.data.day + ' ' + el.data.month + ' ' + el.data.year}</time>
                                </div>
                            </div>
                        </div>


                    </div>
                })
                : ''}
        </>
    }
}



class AllNews extends Component {
    componentDidMount() {
        if(this.props.AllNews.Posts.length===0){
            this.props.firstNeedPosts('');
        }
    }

    render() {
        return <div className={s.wrapper}>
            <div className={s.title}>
                <h1>
                    Выбранные новости
                </h1>
            </div>

            <div className={s.newsBlock}>
                <PostCreator {...this.props}/>
            </div>

            {this.props.AllNews.isFetchingPosts?<div className={s.preloader}>
                <ClipLoader />
            </div> :''}


            {this.props.AllNews.quantityRequest!==this.props.AllNews.pageQuantity ?<div className={s.wrapperButton}>
                <a onClick={(e)=>{if(!this.props.AllNews.isFetchingPosts){this.props.requestNextPosts(this.props.AllNews.params,this.props.AllNews.quantityRequest)}}} className={s.knopka}>Показать еще</a>
            </div>: ''}

        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        AllNews: state.AllNews,
    }
}

export default compose(
    connect(mapStateToProps, {setAuth, thunkGetPost, requestNextPosts, firstNeedPosts}),
    withRouter
)(AllNews);