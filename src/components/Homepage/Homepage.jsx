import s from "./Homepage.module.css"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";


const Homepage = (props) => {


    return (
        <main className={s.container}>


            <section className={s.sec}>

                <Section2 SecondBlock = {props.SecondBlock}/>

            </section>

            {/*<section className={s.sec}>*/}
            {/*    <h2>Посмотреть новости по тематике</h2>*/}
            {/*    <p>Вы можете воспользоваться нашими фильтрами и выбрать просмотр статьи или новости по интересующий вас рубрике</p>*/}
            {/*    <div className={s.changeBlock}>*/}
            {/*        <div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <footer>

            </footer>
        </main>
    )
}



let mapStateToProps = (state) => {
    return {
        FirstBlock: state.mainPage.firstPage.newsFirstBlock,
        SecondBlock: state.mainPage.firstPage.newsSecondBlock[0],
    }
}

export default connect(mapStateToProps, {})(Homepage);