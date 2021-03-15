import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {changeFollow, changeOld, filterClearCategory, getCategory} from "../../redux/header-reducer";
import {Component} from "react";


class HeaderContainer extends Component {

    componentDidMount() {
        if(this.props.headerdata.length === 0){
            this.props.getCategory();
        }
    }

    constructor(props) {
        super(props);
        let obj = {};
        this.props.headerdata.forEach((el) => {
            obj[el.pathName] = false;
        })
        this.state = {
            ...obj,
            isMenuButtom: false
        };
    }

    clicknav(obj) {
        this.setState({
            ...this.state
        })
        debugger
        obj.isFollow = !obj.isFollow;
        this.props.changeFollow(obj);
    }

    navElemCreator() {
        const arr = this.props.headerdata.map((el) => {
            return <div>

                <div onClick={() => {
                    this.clicknav(el)
                }}
                     onMouseDown={e => {
                         e.preventDefault()
                     }}
                     onMouseEnter={(e) => {
                         this.setState({
                             [el.pathName]: true,
                         })
                     }}
                     onMouseLeave={(e) => {
                         this.setState({
                             [el.pathName]: false,
                         })
                     }}
                     className={el.isFollow ? s.linkButtonFollow : (this.state[el.pathName] ? s.linkButtonHover : s.linkButton)}>
                    <p onMouseDown={e => {
                        e.preventDefault()
                    }}>{el.rusName}</p>

                    {el.isFollow ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="_Color" data-name=" ↳Color"
                                  d="M16,18H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H16a2,2,0,0,1,2,2V16A2,2,0,0,1,16,18ZM3.41,7.59h0L2,9l5,5,9-9L14.59,3.58,7,11.17,3.41,7.59Z"
                                  fill="#2699fb"/>
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="_Color" data-name=" ↳Color"
                                  d="M16,18H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H16a2,2,0,0,1,2,2V16A2,2,0,0,1,16,18ZM2,2V16H16V2Z"/>
                        </svg>


                    }
                </div>

            </div>
        });

        return arr
    }


    render() {

        return (
            <header>
                <div className={s.container}>
                    <div className={s.leftHeader}>
                        <div className={s.mainLink}>
                            <NavLink to="/Homepage">Актуальное на сегодня</NavLink>
                        </div>

                        <div>
                            <div onClick={(e) => {
                                this.setState({isMenuButtom: !this.state.isMenuButtom})
                            }} className={this.state.isMenuButtom ? s.menu + ' ' + s.active : s.menu}>

                                <div className={s.divActive}>
                                </div>

                                <p>Категории</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22">
                                    <path id="Menu"
                                          d="M0,22V18.856H15.626V22Zm0-9.428V9.428H25v3.144ZM0,3.144V0H25V3.144Z"
                                          transform="translate(25 22) rotate(180)"/>
                                </svg>
                            </div>
                            <div className={this.state.isMenuButtom ? s.menuButtom + ' ' + s.active : s.menuButtom}>
                                <div className={s.rubrik}>
                                    {this.navElemCreator()}
                                </div>

                                <div className={s.calculator}>
                                    {/*<div className={s.search}>*/}
                                    {/*    <input className={s.input} type="text"/>*/}
                                    {/*    <div className={s.buttonSearch}>*/}
                                    {/*        <svg xmlns="http://www.w3.org/2000/svg" width="45.9" height="45.9"*/}
                                    {/*             viewBox="0 0 45.9 45.9">*/}
                                    {/*            <path id="Контур_208" data-name="Контур 208"*/}
                                    {/*                  d="M45.9,41.858l-9.526-9.526a19.765,19.765,0,0,0,4.042-12.125A20.083,20.083,0,0,0,20.208,0,20.083,20.083,0,0,0,0,20.208,20.083,20.083,0,0,0,20.208,40.415a19.765,19.765,0,0,0,12.125-4.042L41.858,45.9ZM5.774,20.208A14.294,14.294,0,0,1,20.208,5.774,14.294,14.294,0,0,1,34.642,20.208,14.294,14.294,0,0,1,20.208,34.642,14.294,14.294,0,0,1,5.774,20.208Z"*/}
                                    {/*                  fill="#2699fb"/>*/}
                                    {/*        </svg>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <div className={s.blockCalcButtons}>
                                        <div onClick={(e)=>{ e.preventDefault();this.props.changeOld(true)}} className={this.props.isOld?s.calcButton+' '+s.active:s.calcButton }>
                                            Сначала старые
                                        </div>
                                        <div onClick={(e)=>{ e.preventDefault();this.props.changeOld(false)}} className={!this.props.isOld?s.calcButton+' '+s.active:s.calcButton}>
                                            Сначала новые
                                        </div>
                                        <div onClick={(e)=>{ e.preventDefault();this.props.filterClearCategory()}} className={s.calcButton}>
                                            Очистить
                                        </div>
                                        <div onClick={()=>{}} className={s.calcButton}>
                                            Применить фильтр
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </header>
        )
    }


}


let mapStateToProps = (state) => ({
    headerdata: state.header.category,
    isOld: state.header.isOld
})


export default connect(mapStateToProps, {changeFollow, getCategory, changeOld, filterClearCategory})(HeaderContainer);