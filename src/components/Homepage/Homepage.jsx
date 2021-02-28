import s from "./Homepage.module.css"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";


const Homepage = (props) => {
    let i = 0, j ;
    let arr = [];
    for (let key in props.firstPage){
        if(props.firstPage[key][0]){
            arr.push(props.firstPage[key][0]);
        } else{
            arr.push(props.firstPage.default[0])
        }

    i++;
    if(i===5){
        break;
    }
    }

    return (
        <main className={s.container}>

            <section className={s.sec}>
                <Section2 SecondBlock = {arr}/>
            </section>

            <footer>

            </footer>
        </main>
    )
}



let mapStateToProps = (state) => {
    return {
        firstPage: state.mainPage.Posts,
    }
}

export default connect(mapStateToProps, {})(Homepage);