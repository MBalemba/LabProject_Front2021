import {connect} from "react-redux";
import s from "./AllPosts.module.css";
import {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {
    AddElDeletedList,
    ChangeFollow,
    ClearAllPosts, thunkDeleteSelectedPosts,
    thunkGetCategory,
    thunkGetUsers
} from "../../../redux/allPosts-reducer";
import {compose} from "redux";
import {BarLoader, CircleLoader, ClimbingBoxLoader, GridLoader, PacmanLoader} from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";


class PostCreator extends Component {


    render() {
        return <>
            {this.props.allPosts.posts.length !== 0 ?
                this.props.allPosts.posts.map((el) => {
                    return <div
                        style={this.props.allPosts.activateToDeleted[el.id] === undefined || this.props.allPosts.activateToDeleted[el.id] === false ? {} : {border: '4px solid #F78306'}}
                        onClick={(e) => {
                                if(e.altKey){
                                    this.props.AddElDeletedList(el.id);
                                }
                        }}

                        className={s.card}>
                        <div className={s.category}>
                            <div>{el.type.rusName}</div>
                        </div>
                        <div className={s.img}>
                            <img draggable={false} src={el.avaImg} alt=""/>
                        </div>
                        <div className={s.content}>
                            <NavLink onClick={(e)=>{if(e.currentTarget.tagName==='A' && e.altKey){
                                console.log(e.target)
                                e.preventDefault();
                            }}} to={`/new/${el.id}`}><h2>{el.title}</h2></NavLink>
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

                                <NavLink  onClick={(e)=>{if(e.currentTarget.tagName==='A' && e.altKey){
                                    console.log(e.target)
                                    e.preventDefault();
                                }}} to={'/CMS/CreatePostPage/' + el.id}>
                                    <button>
                                        <svg id="edit" xmlns="http://www.w3.org/2000/svg" width="25.77" height="25.64"
                                             viewBox="0 0 25.77 25.64">
                                            <path id="Контур_230" data-name="Контур 230"
                                                  d="M23.784,38.891a.642.642,0,0,0-.642.642v5.7a1.927,1.927,0,0,1-1.925,1.925H3.209a1.927,1.927,0,0,1-1.925-1.925V28.506a1.928,1.928,0,0,1,1.925-1.925h5.7a.642.642,0,0,0,0-1.284h-5.7A3.213,3.213,0,0,0,0,28.506V45.231A3.213,3.213,0,0,0,3.209,48.44H21.217a3.213,3.213,0,0,0,3.209-3.209v-5.7a.642.642,0,0,0-.642-.642Zm0,0"
                                                  transform="translate(0 -22.8)"/>
                                            <path id="Контур_231" data-name="Контур 231"
                                                  d="M87.1,1.014a2.888,2.888,0,0,0-4.084,0l-11.45,11.45a.642.642,0,0,0-.165.283l-1.506,5.436a.642.642,0,0,0,.79.79l5.436-1.506A.642.642,0,0,0,76.4,17.3L87.85,5.852a2.891,2.891,0,0,0,0-4.084ZM72.961,12.881,82.332,3.51l3.022,3.022L75.983,15.9Zm-.6,1.211,2.414,2.415-3.34.925ZM86.943,4.944l-.681.681L83.24,2.6l.681-.681a1.6,1.6,0,0,1,2.269,0l.753.753A1.607,1.607,0,0,1,86.943,4.944Zm0,0"
                                                  transform="translate(-62.925 -0.168)"/>
                                        </svg>
                                    </button>
                                </NavLink>
                            </div>
                        </div>


                    </div>
                })
                : ''}
        </>
    }

    clickCard(e, id) {

    }
}

class AllPosts extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        if (this.props.allPosts.posts.length === 0) {
            this.props.thunkGetUsers();
        }
        if (this.props.allPosts.category.length === 0) {
            this.props.thunkGetCategory();
        }
    }

    componentWillUnmount() {
        this.props.ClearAllPosts();
    }



    render() {
        if(this.props.allPosts.isFetching){
            debugger
            return <div className={s.preloader}>
                <GridLoader />
            </div>
        }

        return <div>

            <div className={s.menu}>
                <div className={s.d1}>
                    <input type="text" placeholder="Искать здесь..."/>
                    <button type="submit"></button>
                </div>

                <div className={s.gridCategori}>
                    {this.props.allPosts.category.map(el => <div onClick={() => {
                        this.clickOnCategory(el.id)
                    }} className={el.isFollow ? (s.el + ' ' + s.active) : s.el}>
                        {el.rusName}
                    </div>)}
                </div>
            </div>
            {this.isButtonDraw() .length!==0?<div className={s.topMenu}>
                <a onClick={(e)=>{this.Delete(e,this.isButtonDraw())}} className={s.knopka}>УДАЛИТЬ</a>
            </div>: ''}

            <div className={s.newsBlock}>
                <PostCreator  {...this.props}/>
            </div>
        </div>

    }

    isButtonDraw() {
        let arr = [];
        for (let k in this.props.allPosts.activateToDeleted) {
            if (this.props.allPosts.activateToDeleted[k] === true) {
                arr.push(k);
            }
        }
        return arr
    }



    Delete(e, arr) {
        this.props.thunkDeleteSelectedPosts(arr);
    }

    clickOnCategory(id) {
        this.props.ChangeFollow(id)
    }


};


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    allPosts: state.allPosts,
})

export default compose(
    connect(mapStateToProps, {thunkGetUsers, thunkGetCategory, ClearAllPosts, ChangeFollow, AddElDeletedList, thunkDeleteSelectedPosts}),
)(AllPosts)