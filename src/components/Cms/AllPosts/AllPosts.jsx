import {connect} from "react-redux";
import s from "./AllPosts.module.css";
import {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {
    AddElDeletedList,
    ChangeFollow, changeOld, changeSearchStr,
    ClearAllPosts, filterClearCategory, firstNeedPosts, requestNextPosts, thunkDeleteSelectedPosts,
    thunkGetCategory,
    thunkGetUsers
} from "../../../redux/allPosts-reducer";
import {compose} from "redux";
import {BarLoader, CircleLoader, ClimbingBoxLoader, GridLoader, PacmanLoader} from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";


class PostCreator extends Component {


    render() {
        return <>
            {this.props.allPosts.Posts.length !== 0 ?
                this.props.allPosts.Posts.map((el) => {
                    return <div
                        style={this.props.allPosts.activateToDeleted[el.id] === undefined || this.props.allPosts.activateToDeleted[el.id] === false ? {} : {border: '4px solid #F78306'}}
                        onClick={(e) => {
                            this.props.AddElDeletedList(el.id);
                        }}

                        className={s.card}>
                        <div className={s.category}>
                            <div>{el.type.rusName}</div>
                        </div>
                        <div className={s.img}>
                            <img draggable={false} src={el.avaImg} alt=""/>
                        </div>
                        <div className={s.content}>
                            <NavLink onClick={(e) => {
                                this.props.AddElDeletedList(el.id);
                            }} to={`/new/${el.id}`}><h2>{el.title}</h2></NavLink>
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

                                <NavLink onClick={(e) => {
                                    this.props.AddElDeletedList(el.id);
                                }} to={'/CMS/CreatePostPage/' + el.id}>
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
        if (this.props.allPosts.Posts.length === 0) {
            this.props.firstNeedPosts(this.props.allPosts.category.filter((el) => el.isFollow === true).map(el => {
                return el.pathName
            }).join('&type.pathName='), this.props.allPosts.params.isOld);
        }
        if (this.props.allPosts.category.length === 0) {
            this.props.thunkGetCategory();
        }
    }

    componentWillUnmount() {
        this.props.ClearAllPosts();
    }


    render() {
        console.log(this.props.allPosts.params)
        if (this.props.allPosts.isFetching) {
            debugger
            return <div className={s.preloader}>
                <GridLoader/>
            </div>
        }

        return <div>

            <div className={s.menu}>
                <div onClick={(e) => {
                    e.currentTarget.parentNode.classList.toggle(s.menuActive)
                }
                } className={s.modal}>
                    <svg id="setting" xmlns="http://www.w3.org/2000/svg" width="82.384" height="75.519"
                         viewBox="0 0 82.384 75.519">
                        <path id="Контур_242" data-name="Контур 242"
                              d="M274.632,42.668H241.387a23.726,23.726,0,0,1,0,20.6h33.245a10.3,10.3,0,1,0,0-20.6Zm0,0"
                              transform="translate(-202.546 -35.802)"/>
                        <path id="Контур_243" data-name="Контур 243"
                              d="M34.326,17.164A17.163,17.163,0,1,1,17.164,0,17.163,17.163,0,0,1,34.326,17.164Zm0,0"/>
                        <path id="Контур_244" data-name="Контур 244"
                              d="M41.192,308.966a23.811,23.811,0,0,1,2.351-10.3H10.3a10.3,10.3,0,1,0,0,20.6H43.544A23.814,23.814,0,0,1,41.192,308.966Zm0,0"
                              transform="translate(0 -250.61)"/>
                        <path id="Контур_245" data-name="Контур 245"
                              d="M332.994,273.164A17.163,17.163,0,1,1,315.831,256,17.163,17.163,0,0,1,332.994,273.164Zm0,0"
                              transform="translate(-250.61 -214.808)"/>
                    </svg>
                </div>
                <div className={s.leftPart}>

                    <div className={s.gridCategory}>
                        {this.props.allPosts.category.map(el => <div onClick={(e) => {
                            this.clickOnCategory(el.id)
                        }} className={el.isFollow ? (s.el + ' ' + s.active) : s.el}>
                            <p>{el.rusName}</p>
                        </div>)}
                    </div>
                </div>

                <div className={s.calculator}>
                    <div className={s.blockCalcButtons}>
                        <div onClick={(e) => {
                            e.preventDefault();
                            this.props.changeOld(true)
                        }} className={this.props.allPosts.params.isOld ? s.calcButton + ' ' + s.active : s.calcButton}>
                            Сначала старые
                        </div>
                        <div onClick={(e) => {
                            e.preventDefault();
                            this.props.changeOld(false)
                        }} className={!this.props.allPosts.params.isOld ? s.calcButton + ' ' + s.active : s.calcButton}>
                            Сначала новые
                        </div>
                        <div onClick={(e) => {
                            e.preventDefault();
                            this.props.filterClearCategory()
                        }} className={s.calcButton}>
                            Сбросить фильтр
                        </div>
                        <div to={'/allNews'} onClick={() => {
                            this.props.firstNeedPosts(this.props.allPosts.category.filter((el) => el.isFollow === true).map(el => {
                                return el.pathName
                            }).join('&type.pathName='), this.props.allPosts.params.isOld)
                        }} className={s.calcButton}>
                            <p>Применить фильтр</p>
                        </div>

                    </div>
                </div>

            </div>

            {this.isButtonDraw().length !== 0 ? <div className={s.topMenu}>
                <a onClick={(e) => {
                    this.Delete(e, this.isButtonDraw())
                }} className={s.knopka}>УДАЛИТЬ</a>
            </div> : ''}

            <div className={s.d1}>
                <input value={this.props.allPosts.params.searchStr} onChange={(e) => {

                    this.props.changeSearchStr(e.currentTarget.value)
                }} type="text" placeholder="Искать здесь..."/>
                <button disabled={this.props.allPosts.params.searchStr.trim() === '' ? true : false} onClick={(e) => {
                    this.props.firstNeedPosts(this.props.allPosts.category.filter((el) => el.isFollow === true).map(el => {
                        return el.pathName
                    }).join('&type.pathName='), this.props.allPosts.params.isOld, this.props.allPosts.params.searchStr)
                }} type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                        <path id="search"
                              d="M69.92,63.758,52.664,46.431a27.594,27.594,0,0,0,6.868-18.169C59.531,12.679,46.4,0,30.258,0S.984,12.679.984,28.262,14.116,56.525,30.258,56.525A29.68,29.68,0,0,0,47.029,51.41L64.416,68.869a3.916,3.916,0,0,0,5.4.1A3.6,3.6,0,0,0,69.92,63.758ZM30.258,7.373c11.931,0,21.637,9.371,21.637,20.89s-9.706,20.89-21.637,20.89S8.621,39.781,8.621,28.262,18.327,7.373,30.258,7.373Z"
                              transform="translate(-0.984)"/>
                    </svg>
                </button>
            </div>

            <div className={s.newsBlock}>
                <PostCreator  {...this.props}/>
            </div>


            {this.props.allPosts.quantityRequest < this.props.allPosts.pageQuantity ?
                <div className={s.wrapperButton}>
                    <a onClick={(e) => {
                        if (!this.props.allPosts.isFetchingPosts) {
                            this.props.requestNextPosts(this.props.allPosts.params, this.props.allPosts.quantityRequest)
                        }
                    }} className={s.knopka}>Показать еще</a>
                </div> : (this.props.allPosts.Posts.length === 0 ? <h1 className={s.h1}>Ничего не найдено</h1> : '')}

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
    connect(mapStateToProps, {
        thunkGetUsers,
        thunkGetCategory,
        ClearAllPosts,
        ChangeFollow,
        AddElDeletedList,
        thunkDeleteSelectedPosts,
        changeOld,
        firstNeedPosts,
        requestNextPosts,
        filterClearCategory,
        changeSearchStr,
    }),
)(AllPosts)