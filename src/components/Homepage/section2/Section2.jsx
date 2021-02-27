import s from "./Section2.module.css"
import {NavLink} from "react-router-dom";



let Section2 = (props) => {


    return(
        <>
            <h1 className={s.title}>Актульное на сегодня</h1>
            <div className={s.newsBlock}>
                <div className={s.child1}>
                    <NewContent SecondBlock={props.SecondBlock}/>
                </div>
                <div className={s.child2}>
                    <NewContent SecondBlock={props.SecondBlock}/>
                </div>
                <div className={s.child3}>
                    <NewContent SecondBlock={props.SecondBlock}/>
                </div>
                <div className={s.child4}>
                    <NewContent SecondBlock={props.SecondBlock}/>
                </div>
                <div className={s.child5}>
                    <NewContent SecondBlock={props.SecondBlock}/>
                </div>
            </div>
        </>
    )
}

const NewContent = (props) => {
    return (
        <div className={s.Blockingrid}>

            <img src={props.SecondBlock.getSrc()} alt=""/>
            <div className={s.contentBlock}>
                <div></div>

                <div >
                    <h2>{props.SecondBlock.title}</h2>
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
                        <p className={s.data}>{props.SecondBlock.data.day + ' ' + props.SecondBlock.data.month + ' ' + props.SecondBlock.data.year}</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section2