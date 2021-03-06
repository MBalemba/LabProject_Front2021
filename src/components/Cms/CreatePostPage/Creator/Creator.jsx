import s from './Creator.module.css'
import {connect} from "react-redux";
import {Component} from "react";


class Creator extends Component {
    render() {
        return (<div className={s.createwind}>
                <div className={s.left}>

                    <div className={s.addTitle}>
                    <div value={'sdsd'} contentEditable={true} className={s.textarea}>
                        Добавьте текст
                    </div>
                        <button>
                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" width="78.844" height="81" viewBox="0 0 78.844 81">
                                <path id="Контур_232" data-name="Контур 232" d="M165.2,245.036H130.48a2.518,2.518,0,0,1,0-5.036H165.2a2.518,2.518,0,0,1,0,5.036Zm0,0" transform="translate(-108.416 -202.018)" fill="#28b6d9"/>
                                <path id="Контур_233" data-name="Контур 233" d="M242.48,169.228a2.531,2.531,0,0,1-2.48-2.577V130.577a2.482,2.482,0,1,1,4.959,0v36.074A2.531,2.531,0,0,1,242.48,169.228Zm0,0" transform="translate(-203.058 -108.114)" fill="#28b6d9"/>
                                <path id="Контур_234" data-name="Контур 234" d="M69.809,81H9.034A9.168,9.168,0,0,1,0,71.719V9.281A9.168,9.168,0,0,1,9.034,0H69.809a9.168,9.168,0,0,1,9.034,9.281V71.719A9.168,9.168,0,0,1,69.809,81ZM9.034,5.063A4.17,4.17,0,0,0,4.928,9.281V71.719a4.17,4.17,0,0,0,4.107,4.219H69.809a4.17,4.17,0,0,0,4.107-4.219V9.281a4.17,4.17,0,0,0-4.107-4.219Zm0,0" fill="#28b6d9"/>
                            </svg>
                        </button>
                    </div>

                    <div>
                        <textarea name="" id="" cols="30" rows="10">

                        </textarea>
                        <button>
                            <p>Добавить блок с текстом на страницу</p>
                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" width="36.058" height="37.044" viewBox="0 0 36.058 37.044">
                                <path id="Контур_232" data-name="Контур 232" d="M145.011,242.3H129.134a1.152,1.152,0,0,1,0-2.3h15.877a1.152,1.152,0,0,1,0,2.3Zm0,0" transform="translate(-119.043 -222.629)" fill="#28b6d9"/>
                                <path id="Контур_233" data-name="Контур 233" d="M241.134,146.855A1.157,1.157,0,0,1,240,145.677v-16.5a1.135,1.135,0,1,1,2.268,0v16.5A1.157,1.157,0,0,1,241.134,146.855Zm0,0" transform="translate(-223.105 -118.905)" fill="#28b6d9"/>
                                <path id="Контур_234" data-name="Контур 234" d="M31.927,37.044H4.132A4.193,4.193,0,0,1,0,32.8V4.245A4.193,4.193,0,0,1,4.132,0H31.927a4.193,4.193,0,0,1,4.132,4.245V32.8A4.193,4.193,0,0,1,31.927,37.044ZM4.132,2.315A1.907,1.907,0,0,0,2.254,4.245V32.8a1.907,1.907,0,0,0,1.878,1.929H31.927A1.907,1.907,0,0,0,33.8,32.8V4.245a1.907,1.907,0,0,0-1.878-1.929Zm0,0" fill="#28b6d9"/>
                            </svg>

                        </button>
                    </div>

                </div>


                <div className={s.right}>

                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {})(Creator)