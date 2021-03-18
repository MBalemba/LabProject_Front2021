import s from './ServerComponent.module.css'
import {Component} from "react";


class ServerComponent extends Component {
    componentWillUnmount() {
    }

    constructor(props) {
        super(props);
    }

    saveChange(e) {
        if(this.props.id){
            this.props.putRequestServer(this.props.postObj);
        } else{
            this.props.sendData(this.props.postObj);
        }

    }

    render() {

        return (<div className={s.bottom}>
                {(this.props.postObj.title === '' || this.props.postObj.content.length === 0 || this.props.postObj.avaImg=== '') ? '' :
                    <button onMouseDown={() => {
                    }} onClick={this.saveChange.bind(this)} className={s.button}>Применить изменения</button>}
                {this.props.isRequest === 'error'?<div onClick={(e)=>{e.preventDefault()}} className={s.warning}>Ошибка отправки на сервер</div>: ''}
                {this.props.isRequest === 'successful'?<div onClick={(e)=>{e.preventDefault()}} className={s.successful}>Изменения успешны</div>: ''}
            </div>

        );
    }
};

export default ServerComponent
