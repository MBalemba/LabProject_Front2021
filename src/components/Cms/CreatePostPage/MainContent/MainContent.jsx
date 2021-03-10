import React, {Component} from "react";
import s from './MainContent.module.css'
import Creator from "./Creator/Creator";
import * as url from "url";
import {editText} from "../../../../redux/creatorPost-reducer";

class MainContent extends Component {



    constructor() {
        super();
        this.state= {
            currentCard: null,
            isDragable: true,
            editModeCard:{
                index: null,
                content: null,
                isEdit: false,
            }
        }
    }

    editModeCard(el,index){
        alert(index);
        this.setState({
            editModeCard:{
                index: index,
                content: el.src,
                isEdit: true,

        }
        })
    }

    editCardMethodTextarea(e){
        debugger
        this.setState({
            editModeCard:{
                index: this.state.editModeCard.index,
                content: e.target.value,
                isEdit: true,
            }
        })
    }

    closeEditModal(isEdit){
        if(isEdit){
            debugger
            this.props.editText(this.state.editModeCard.content, this.state.editModeCard.index);
            this.setState({
                editModeCard:{
                    index: null,
                    content: null,
                    isEdit: false,
                }
            })
        } else{

        }
    }


    deleteContent(index) {
        debugger
        this.props.deleteContent(index);
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
                    {
                        this.cardButtons(el, index)
                    }
                </div>)
                : ''
            }

            {this.state.editModeCard.isEdit? <div className={s.editModal}>
               <div className={s.wrapTextArea}>
                    <textarea value={this.state.editModeCard.content} onChange={this.editCardMethodTextarea.bind(this)}>

                        </textarea>
                   <button disabled={!this.state.editModeCard.content.trim()?true:false} onClick={()=>{this.closeEditModal(true)}} >
                       <p>Применить редактирование</p>
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
            </div>: '' }


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
            e.target.style.border = ''
        }

    }

    dragOver(e) {
        e.preventDefault()
        // console.log('dragOver: ', e.target, '\n');
        if(e.target.className!== s.contentCard){
            e.target.style.border = '5px solid  #F78306'
        }

    }

    drop(e, card) {
        e.preventDefault();
        if(e.target.className!== s.contentCard){
            e.target.style.border = ''
        }
        console.log('drop: ',card, '\n');
    }


    ContentCard(el) {
        if(el.tag==='img'){
            return <img draggable={'false'}  className={s.contentCard +' '+ s.img} src={el.src}></img>
        } else if(el.tag==='p'){

            return <div className={s.contentCard+' '+s.p}> {el.src.split('\n').map(el=>{return <>{'\n'+'     '+el}</>})}
            </div>
        } else return <></>
    }

    cardButtons(el, index) {

            return <div className={s.controlPanel}>
                <button onClick={()=>{this.deleteContent(index)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19.248 25.639">
                        <g id="delete" transform="translate(-63.818 0)">
                            <path id="Контур_226" data-name="Контур 226" d="M83.066,8.232H71.208l5.31-5.31a.751.751,0,0,0,0-1.062L75.172.514a1.753,1.753,0,0,0-2.479,0L71.31,1.9,70.6,1.189a2.005,2.005,0,0,0-2.833,0L65.007,3.951a2.005,2.005,0,0,0,0,2.833l.708.708L64.332,8.876a1.753,1.753,0,0,0,0,2.479L65.677,12.7a.751.751,0,0,0,1.062,0l1.9-1.9V22.385A3.255,3.255,0,0,0,71.9,25.64h7.912a3.255,3.255,0,0,0,3.255-3.255ZM66.778,6.43l-.708-.708a.5.5,0,0,1,0-.708l2.762-2.762a.5.5,0,0,1,.708,0l.708.708Zm6.486,15a.751.751,0,1,1-1.5,0V12.439a.751.751,0,1,1,1.5,0Zm3.342,0a.751.751,0,0,1-1.5,0V12.439a.751.751,0,0,1,1.5,0Zm3.342,0a.751.751,0,0,1-1.5,0V12.439a.751.751,0,1,1,1.5,0Z" transform="translate(0)" fill="#d6287f"/>
                            <path id="Контур_227" data-name="Контур 227" d="M305.1,85.895a1.254,1.254,0,0,0-.833,1.044h7.207V85.69a1.253,1.253,0,0,0-1.654-1.186l-4.705,1.386Z" transform="translate(-228.408 -80.208)" fill="#d6287f"/>
                        </g>
                    </svg>
                </button>
                {el.tag === 'p'? <button onClick={()=>{this.editModeCard(el,index)}}>
                    <svg id="edit" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25.77 25.64">
                        <path id="Контур_230" data-name="Контур 230" d="M23.784,38.891a.642.642,0,0,0-.642.642v5.7a1.927,1.927,0,0,1-1.925,1.925H3.209a1.927,1.927,0,0,1-1.925-1.925V28.506a1.928,1.928,0,0,1,1.925-1.925h5.7a.642.642,0,0,0,0-1.284h-5.7A3.213,3.213,0,0,0,0,28.506V45.231A3.213,3.213,0,0,0,3.209,48.44H21.217a3.213,3.213,0,0,0,3.209-3.209v-5.7a.642.642,0,0,0-.642-.642Zm0,0" transform="translate(0 -22.8)"/>
                        <path id="Контур_231" data-name="Контур 231" d="M87.1,1.014a2.888,2.888,0,0,0-4.084,0l-11.45,11.45a.642.642,0,0,0-.165.283l-1.506,5.436a.642.642,0,0,0,.79.79l5.436-1.506A.642.642,0,0,0,76.4,17.3L87.85,5.852a2.891,2.891,0,0,0,0-4.084ZM72.961,12.881,82.332,3.51l3.022,3.022L75.983,15.9Zm-.6,1.211,2.414,2.415-3.34.925ZM86.943,4.944l-.681.681L83.24,2.6l.681-.681a1.6,1.6,0,0,1,2.269,0l.753.753A1.607,1.607,0,0,1,86.943,4.944Zm0,0" transform="translate(-62.925 -0.168)"/>
                    </svg>

                </button>: '' }
            </div>
    }

}

export default MainContent