import s from './Prevue.module.css'
import {Component} from "react";
import {getRubrick} from "../../../../Api/api";
import React from 'react';
import {avaThunk, setTitle} from "../../../../redux/creatorPost-reducer";


class Prevue extends Component {

    constructor() {
        super();
        this.mainRef = React.createRef();
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        getRubrick().then(response => {
                this.props.setRubrick(response.data);
            },
        ).catch((response) => {
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.editModeMainTitle === true) {
            this.mainRef.current.focus();
        }
    }

    state = {
        rubrickActive: false,
        editModeMainTitle: false,
    }

    rubricActivate() {
        const flag = !this.state.rubrickActive;
        this.setState({
            rubrickActive: flag
        })
    }

    selectRubrick({rusName, pathName}) {
        const obj = {
            rusName: rusName,
            pathName: pathName,
        }
        this.props.setType(obj);
    }

    editMain = (e) => {
        this.setState({
            editModeMainTitle: !this.state.editModeMainTitle
        })
    }

    changeForm(e) {
        if (e.currentTarget.value.length >= 100) {
            e.currentTarget.parentNode.lastChild.style.display = 'inline-block'
            return
        }else{
            e.currentTarget.parentNode.lastChild.style.display = 'none'
        }
        this.props.setTitle(e.currentTarget.value)
    }

    openCatalog(e){
        this.inputRef.current.click();
    }
    loadFile(e){
        this.props.avaThunk(e);
    }

    render() {

        return (
            <div className={s.firstPart}>
                <p className={s.ph}>Предпросмотр</p>

                <div className={s.mainTitle}>
                    <div style={this.state.editModeMainTitle ? {} : {display: 'none'}} className={s.edit}>
                        <input
                            value={this.props.creatorPost.postObj.title}
                            onChange={this.changeForm.bind(this)} contentEditable={true} className={s.editMainInput}
                            ref={this.mainRef} onBlur={(e) => {
                            this.props.setTitle(e.currentTarget.value.trim());
                            this.editMain()
                        }}
                        >

                        </input>
                        <div style={{display: "none", color: 'red', margin: '10px'}}>максимальная длина 100 символов</div>
                    </div>

                    <div className={s.TitleBlock} style={this.state.editModeMainTitle ? {display: 'none'} : {}}
                         onClick={this.editMain}>
                        <h1>{this.props.creatorPost.postObj.title === '' ? 'Добавьте заголовок' : this.props.creatorPost.postObj.title}</h1>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.468" height="32.305"
                                 viewBox="0 0 32.468 32.305">
                                <g id="edit" transform="translate(0 -0.168)">
                                    <path id="Контур_230" data-name="Контур 230"
                                          d="M29.966,42.424a.809.809,0,0,0-.809.809v7.18a2.428,2.428,0,0,1-2.426,2.426H4.043a2.428,2.428,0,0,1-2.426-2.426V29.34a2.429,2.429,0,0,1,2.426-2.426h7.18a.809.809,0,0,0,0-1.617H4.043A4.048,4.048,0,0,0,0,29.34V50.412a4.048,4.048,0,0,0,4.043,4.043H26.732a4.048,4.048,0,0,0,4.043-4.043v-7.18a.809.809,0,0,0-.809-.809Zm0,0"
                                          transform="translate(0 -21.982)"/>
                                    <path id="Контур_231" data-name="Контур 231"
                                          d="M91.575,1.234a3.639,3.639,0,0,0-5.146,0L72,15.66a.808.808,0,0,0-.208.356l-1.9,6.849a.808.808,0,0,0,.995,1l6.849-1.9a.808.808,0,0,0,.356-.208L92.524,7.329a3.643,3.643,0,0,0,0-5.146ZM73.765,16.186,85.572,4.379l3.808,3.808L77.572,19.994ZM73,17.712l3.042,3.042L71.839,21.92ZM91.381,6.186l-.858.858L86.715,3.235l.858-.858a2.021,2.021,0,0,1,2.859,0l.949.949A2.024,2.024,0,0,1,91.381,6.186Zm0,0"
                                          transform="translate(-61.121)"/>
                                </g>
                            </svg>
                        </button>
                    </div>

                </div>


                <div className={s.underHead}>

                    <div className={s.time}>
                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="13.451"
                             height="16.451" viewBox="0 0 13.451 16.451">
                            <path id="Контур_222" data-name="Контур 222"
                                  d="M9.726,19.451C6.011,19.451,3,15.768,3,11.226S6.011,3,9.726,3s6.726,3.683,6.726,8.226S13.44,19.451,9.726,19.451Zm0-15.186c-3.143,0-5.691,3.116-5.691,6.96s2.548,6.96,5.691,6.96,5.691-3.116,5.691-6.96S12.869,4.265,9.726,4.265Z"
                                  transform="translate(-3 -3)"/>
                            <path id="Контур_223" data-name="Контур 223"
                                  d="M18.363,15.019a.517.517,0,0,1-.367-.15L15.15,12.023a.517.517,0,0,1-.15-.367V7.517a.517.517,0,1,1,1.035,0v3.927l2.7,2.69a.517.517,0,0,1-.367.885Z"
                                  transform="translate(-8.792 -3.788)" fill="#2699fb"/>
                        </svg>

                        <time>
                            {this.props.creatorPost.postObj.data.month + ' ' + this.props.creatorPost.postObj.data.day + ', ' + this.props.creatorPost.postObj.data.year}
                        </time>
                    </div>

                    <div className={s.rubrick} onClick={this.rubricActivate.bind(this)}>
                        <p>{this.props.creatorPost.postObj.type.rusName}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22">
                            <path id="Menu" d="M0,22V18.856H15.626V22Zm0-9.428V9.428H25v3.144ZM0,3.144V0H25V3.144Z"
                                  transform="translate(25 22) rotate(180)" fill="#1f2024"/>
                        </svg>

                        {this.state.rubrickActive ? <div className={s.modalRubrick}>
                            {this.props.creatorPost.rubrick.map((el) => {
                                return (
                                    <div
                                        className={s.list + ' ' + (this.props.creatorPost.postObj.type.pathName === el.pathName ? s.active : '')}
                                        onClick={() => {
                                            this.selectRubrick(el)
                                        }}>
                                        {el.rusName}
                                    </div>
                                )
                            })}
                        </div> : ''}
                    </div>
                </div>
                
                <div className={s.avatarBlock}>
                   <div className={s.wrapAva}>
                       <input ref={this.inputRef} onChange={this.loadFile.bind(this)} type="file"/>
                       <button onClick={this.openCatalog.bind(this)}>
                           Выберите главное изображение
                       </button>
                       <img src={this.props.creatorPost.postObj.avaImg} className={s.img}/>
                   </div>

                </div>

            </div>


        );
    }
}

export default Prevue