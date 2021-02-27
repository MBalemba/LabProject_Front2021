import s from "./Section1.module.css"
import {NavLink} from "react-router-dom";



let Section1 = (props) => {

    let array = props.FirstBlock.map((el) => {
        return <div className={s.newsContent}>
            <div className={s.divimg}>
                <img src={el.getSrc()} alt="img"/>
            </div>
            <div className={s.partContent}>
                <NavLink to={`/news/${el.type+'/'+el.id}`}>
                    <h3>
                        {el.title}
                    </h3>
                </NavLink>
                <p>{el.content[0].slice(0, 55)}...</p>
            </div>
        </div>
    })



    return(
        <>
            <div className={s.themes}>

                <NavLink to="/news" className={s.them1 + ' ' + s.them}>
                    <div className={s.blur}></div>
                    <button>Образование</button>
                </NavLink>

                <NavLink to="/news" className={s.them2 + ' ' + s.them}>
                    <div className={s.blur}></div>
                    <button>Спорт</button>
                </NavLink>

                <NavLink to="/news" className={s.them3 + ' ' + s.them}>
                    <div className={s.blur}></div>
                    <button>Технологии</button>
                </NavLink>

                <NavLink to="/news" className={s.them4 + ' ' + s.them}>
                    <div className={s.blur}></div>
                    <button>Все новости</button>
                </NavLink>

            </div>

            <div className={s.news}>
                {array}
            </div>
        </>
    )
}

export default Section1