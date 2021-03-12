import s from './ServerComponent.module.css'
import {Component} from "react";


class ServerComponent extends Component {
    componentWillUnmount() {
        debugger
    }

    constructor(props) {
        super(props);
    }

    saveChange(e) {
        this.props.sendData(this.props.postObj);
    }

    render() {
        console.log(this.props.isRequest);
        if(this.props.isRequest===true){
            setTimeout(()=>{this.props.setRequest(false)},3000)
        }
        return (<div className={s.bottom}>
                {(this.props.postObj.title === '' || this.props.postObj.content.length === 0 || this.props.postObj.avaImg=== '') ? '' :
                    <button onMouseDown={() => {
                        this.setState({
                            AfterRequest: true,
                        })
                    }} onClick={this.saveChange.bind(this)} className={s.button}>Применить изменения</button>}
                {this.props.isRequest === true && this.props.postObj.title !== ''?<div onClick={(e)=>{e.preventDefault()}} className={s.warning}>Ошибка отправки на сервер</div>: ''}

            </div>

        );
    }
};

export default ServerComponent
