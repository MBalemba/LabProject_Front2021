import {Component} from "react";
import s from './MainContent.module.css'
import Creator from "./Creator/Creator";
import * as url from "url";

class MainContent extends Component {



    constructor() {
        super();
        this.state= {
            currentCard: null,
            isDragable: true
        }
    }



    render() {
        return (<div className={s.coloda}>
            < Creator/>
            {this.props.postObj.content ?
                this.props.postObj.content.map((el,index)=><div className={s.wraper}>
                    <div
                        draggable={this.state.isDragable}
                        onDragStart={(e)=>{this.dragStart(e, el, index)}}
                        onDragLeave={(e)=>{this.dragLeave(e)}}
                        onDragEnd={(e)=>{this.dragEnd(e)}}
                        onDragOver={(e)=>{this.dragOver(e)}}
                        onDrop={(e)=>{this.drop(e, el)}}
                        className={s.card}>
                    </div>
                    {
                        this.ContentCard(el)
                    }
                </div>)
                : ''
            }

        </div>)
    }

    dragStart(e, card, index) {

        console.log('dragStart: ', e.target, '\n');
        this.setState({
            currentCard: card
        })
    }

    dragEnd(e) {
        console.log('dragEnd: ', e.target, '\n');
    }

    dragLeave(e){
        if(e.target.className!== s.contentCard){
            e.target.style.border = '5px solid'
        }

    }

    dragOver(e) {
        e.preventDefault()
        // console.log('dragOver: ', e.target, '\n');
        if(e.target.className!== s.contentCard){
            e.target.style.border = '5px solid red'
        }

    }

    drop(e, card) {
        e.preventDefault();
        if(e.target.className!== s.contentCard){
            e.target.style.border = '5px solid'
        }
        console.log('drop: ',card, '\n');
    }


    ContentCard(el) {
        if(el.tag==='img'){
            return <div draggable={'false'}  className={s.contentCard}  style={{ width: '100%', height: '100%', backgroundImage: `url(${el.src})`}}></div>
        } else return <></>
    }
}

export default MainContent