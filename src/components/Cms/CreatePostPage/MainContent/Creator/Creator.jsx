import s from './Creator.module.css'
import {connect} from "react-redux";
import {Component} from "react";
import React from 'react';
import {addContent, AddSubtitle, AddText, getBase64toState} from "../../../../../redux/creatorPost-reducer";


class Creator extends Component {
    constructor() {
        super();
        this.state = {
            modaldown: true,
            refFile: React.createRef(),
            textInfo: '',
            subTitleInfo: ''
        }
    }

    modalMove() {
        const flag = !this.state.modaldown;
        this.setState({
            modaldown: flag
        })
    }

    loadFile(e){
        this.props.getBase64toState(e);
    }

    addText(e) {
        if(e.target.tagName === 'TEXTAREA' && e.type === 'change'){
            this.setState({
                textInfo: e.target.value
            })
        }
        if (e.currentTarget.tagName === 'BUTTON' && e.type === 'click'){
           this.props.AddText(this.state.textInfo);
           this.setState({
               textInfo: ''
           })
        }
    }

    onChangeSubtitle = (e)=>{
        if(e.target.value.length<=92){
            this.setState({
                subTitleInfo: e.target.value
            })
        }
    }

    onClickSubtitle = () => {
        this.props.AddSubtitle(this.state.subTitleInfo);
        this.setState({
            subTitleInfo: '',
        })
    }


    render() {
        return (<>
                <div className={this.state.modaldown ? (s.createwind + ' ' + s.down) : s.createwind}>
                    <div className={s.left}>

                        <div className={s.addTitle}>
                            <input onChange={this.onChangeSubtitle} value={this.state.subTitleInfo} contentEditable={true} className={s.textarea}>

                            </input>

                            <button disabled={this.state.subTitleInfo.trim()?false:true} onClick={this.onClickSubtitle}>
                                <p>Добавить подзаголовок</p>
                                <svg id="plus" xmlns="http://www.w3.org/2000/svg" width="38" height="38"
                                     viewBox="0 0 78.844 81">
                                    <path id="Контур_232" data-name="Контур 232"
                                          d="M165.2,245.036H130.48a2.518,2.518,0,0,1,0-5.036H165.2a2.518,2.518,0,0,1,0,5.036Zm0,0"
                                          transform="translate(-108.416 -202.018)" fill="#28b6d9"/>
                                    <path id="Контур_233" data-name="Контур 233"
                                          d="M242.48,169.228a2.531,2.531,0,0,1-2.48-2.577V130.577a2.482,2.482,0,1,1,4.959,0v36.074A2.531,2.531,0,0,1,242.48,169.228Zm0,0"
                                          transform="translate(-203.058 -108.114)" fill="#28b6d9"/>
                                    <path id="Контур_234" data-name="Контур 234"
                                          d="M69.809,81H9.034A9.168,9.168,0,0,1,0,71.719V9.281A9.168,9.168,0,0,1,9.034,0H69.809a9.168,9.168,0,0,1,9.034,9.281V71.719A9.168,9.168,0,0,1,69.809,81ZM9.034,5.063A4.17,4.17,0,0,0,4.928,9.281V71.719a4.17,4.17,0,0,0,4.107,4.219H69.809a4.17,4.17,0,0,0,4.107-4.219V9.281a4.17,4.17,0,0,0-4.107-4.219Zm0,0"
                                          fill="#28b6d9"/>
                                </svg>
                            </button>
                        </div>

                        <div onChange={this.addText.bind(this)} className={s.addText}>
                        <textarea value={this.state.textInfo} >

                        </textarea>
                            <button onClick={this.addText.bind(this)} disabled={!this.state.textInfo.trim()?true:false} >
                                <p>Добавить текст</p>
                                <svg id="plus" xmlns="http://www.w3.org/2000/svg" width="36.058" height="37.044"
                                     viewBox="0 0 36.058 37.044">
                                    <path id="Контур_232" data-name="Контур 232"
                                          d="M145.011,242.3H129.134a1.152,1.152,0,0,1,0-2.3h15.877a1.152,1.152,0,0,1,0,2.3Zm0,0"
                                          transform="translate(-119.043 -222.629)" fill="#28b6d9"/>
                                    <path id="Контур_233" data-name="Контур 233"
                                          d="M241.134,146.855A1.157,1.157,0,0,1,240,145.677v-16.5a1.135,1.135,0,1,1,2.268,0v16.5A1.157,1.157,0,0,1,241.134,146.855Zm0,0"
                                          transform="translate(-223.105 -118.905)" fill="#28b6d9"/>
                                    <path id="Контур_234" data-name="Контур 234"
                                          d="M31.927,37.044H4.132A4.193,4.193,0,0,1,0,32.8V4.245A4.193,4.193,0,0,1,4.132,0H31.927a4.193,4.193,0,0,1,4.132,4.245V32.8A4.193,4.193,0,0,1,31.927,37.044ZM4.132,2.315A1.907,1.907,0,0,0,2.254,4.245V32.8a1.907,1.907,0,0,0,1.878,1.929H31.927A1.907,1.907,0,0,0,33.8,32.8V4.245a1.907,1.907,0,0,0-1.878-1.929Zm0,0"
                                          fill="#28b6d9"/>
                                </svg>

                            </button>
                        </div>

                    </div>


                    <div className={s.right}>
                        <input multiple={'true'} accept=".png,.jpg,.jpeg" onChange={this.loadFile.bind(this)}  ref={this.state.refFile} style={{display: 'none'}} type="file"/>
                        <button dropzone="move" onClick={(e) => {
                            this.state.refFile.current.click();
                        }} className={s.uploadfile}>
                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" width="127.5" height="127.5"
                                 viewBox="0 0 127.5 127.5">
                                <path id="Контур_232" data-name="Контур 232"
                                      d="M188.151,248.02H132.01a4.01,4.01,0,1,1,0-8.02h56.141a4.01,4.01,0,0,1,0,8.02Zm0,0"
                                      transform="translate(-96.33 -180.26)" fill="#28b6d9"/>
                                <path id="Контур_233" data-name="Контур 233"
                                      d="M244.01,192.161a4.012,4.012,0,0,1-4.01-4.01V132.01a4.01,4.01,0,1,1,8.02,0v56.141A4.011,4.011,0,0,1,244.01,192.161Zm0,0"
                                      transform="translate(-180.26 -96.33)" fill="#28b6d9"/>
                                <path id="Контур_234" data-name="Контур 234"
                                      d="M112.89,127.5H14.61A14.622,14.622,0,0,1,0,112.89V14.61A14.622,14.622,0,0,1,14.61,0H112.89A14.622,14.622,0,0,1,127.5,14.61V112.89A14.622,14.622,0,0,1,112.89,127.5ZM14.61,7.969A6.65,6.65,0,0,0,7.969,14.61V112.89a6.65,6.65,0,0,0,6.641,6.641H112.89a6.65,6.65,0,0,0,6.641-6.641V14.61a6.65,6.65,0,0,0-6.641-6.641Zm0,0"
                                      fill="#28b6d9"/>
                            </svg>
                            <div className={s.addImg}>
                                <p>
                                    Добавить img в предпросмотр
                                </p>

                            </div>
                        </button>

                        <div onClick={this.modalMove.bind(this)}
                             className={this.state.modaldown ? s.grip + ' ' + s.down : s.grip}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35.86" height="36.659"
                                 viewBox="0 0 35.86 36.659">
                                <g id="_3f4f8e5619fbbf55669bece66b224fc5" data-name="3f4f8e5619fbbf55669bece66b224fc5"
                                   transform="translate(-30.592 -30.209)">
                                    <g id="Сгруппировать_53" data-name="Сгруппировать 53" transform="translate(10 10)">
                                        <path id="Контур_240" data-name="Контур 240"
                                              d="M282.32,291.871a1.527,1.527,0,0,0,1.525,1.525h22.42a1.525,1.525,0,0,0,1.242-2.406l-16.391-23.309a1.582,1.582,0,0,0-2.492,0L272.218,291a1.52,1.52,0,0,0,1.242,2.4,1.539,1.539,0,0,0,1.25-.645l15.156-21.54,13.466,19.134H283.845A1.527,1.527,0,0,0,282.32,291.871Z"
                                              transform="translate(-251.347 -246.866)"/>
                                        <path id="Контур_241" data-name="Контур 241"
                                              d="M273.525,697.65h32.8a1.525,1.525,0,0,0,0-3.05h-32.8a1.525,1.525,0,0,0,0,3.05Z"
                                              transform="translate(-251.404 -640.782)"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                </div>
            </>
        )
    }


}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {addContent, getBase64toState, AddText, AddSubtitle})(Creator)