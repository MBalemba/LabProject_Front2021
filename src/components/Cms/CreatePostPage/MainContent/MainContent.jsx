import {Component} from "react";
import s from './MainContent.module.css'

class MainContent extends Component {

    constructor() {
        super();
        this.state= {
            arr:[
                {id:1 , order: 3, text: 'Карточка 3'},
                {id:2 , order: 2, text: 'Карточка 2'},
                {id:3 , order: 1, text: 'Карточка 1'},
                {id:4 , order: 4, text: 'Карточка 4'},

            ]
        }
    }

    render() {
        return (<div className={s.coloda}>
            {this.state.arr.map(el=><div
                draggable={true}
                onDragStart={(e)=>{this.dragStart(e, el)}}
                onDragLeave={(e)=>{this.dragEnd(e)}}
                onDragEnd={(e)=>{this.dragEnd(e)}}
                onDragOver={(e)=>{this.dragOver(e)}}
                onDrop={(e)=>{this.drop(e, el)}}
                className={s.card}>
                {el.text}
            </div>)}
        </div>)
    }

    dragStart(e, card) {
        console.log('dragstart', card, e)
    }

    dragEnd(e) {
        console.log('dragEnd', e)
    }

    dragOver(e) {
        e.preventDefault()
    }

    drop(e, card) {
        e.preventDefault();
        console.log('drop', card, e)
    }
}

export default MainContent