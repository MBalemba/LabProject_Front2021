import s from './Header.module.css'
import {NavLink} from "react-router-dom";


let Header = () => {
    return (
        <header>
            <div className={s.container}>
                <div className={s.leftHeader}>
                    <div className={s.mainLink}>
                        <NavLink to="/Homepage" >Актуальное на сегодня</NavLink>
                    </div>

                    <div >
                        <div className={s.menu}>
                            <div className={s.divActive}>
                            </div>
                            <p>Категории</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22">
                                <path id="Menu" d="M0,22V18.856H15.626V22Zm0-9.428V9.428H25v3.144ZM0,3.144V0H25V3.144Z"
                                      transform="translate(25 22) rotate(180)"/>
                            </svg>
                            <div className={s.menuButtom}>
                                <div className={s.rubrik}>
                                    <NavLink to="/news" className={s.linkButton}>Спорт</NavLink>
                                    <NavLink to="/news" className={s.linkButton}>Образование</NavLink>
                                    <NavLink to="/news" className={s.linkButton}>Технологии</NavLink>
                                    <NavLink to="/news" className={s.linkButton}>Туризм</NavLink>
                                    <NavLink to="/news" className={s.linkButton}>Культура</NavLink>
                                    <NavLink to="/news" className={s.linkButton}>Экономика</NavLink>
                                    <NavLink to="/news" className={s.linkButton}>Спорт</NavLink>
                                </div>
                                <NavLink to="/news" className={s.linkButton}>Фильтр новостей</NavLink>

                            </div>
                        </div>
                    </div>

                </div>
                <div className={s.rightHeader}>
                    <input className={s.input} type="text"/>
                    <button className={s.buttonSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45.9" height="45.9" viewBox="0 0 45.9 45.9">
                            <path id="Контур_208" data-name="Контур 208" d="M45.9,41.858l-9.526-9.526a19.765,19.765,0,0,0,4.042-12.125A20.083,20.083,0,0,0,20.208,0,20.083,20.083,0,0,0,0,20.208,20.083,20.083,0,0,0,20.208,40.415a19.765,19.765,0,0,0,12.125-4.042L41.858,45.9ZM5.774,20.208A14.294,14.294,0,0,1,20.208,5.774,14.294,14.294,0,0,1,34.642,20.208,14.294,14.294,0,0,1,20.208,34.642,14.294,14.294,0,0,1,5.774,20.208Z" fill="#2699fb"/>
                        </svg>
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header;