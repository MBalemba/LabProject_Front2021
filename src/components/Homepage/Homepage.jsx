import s from "./Homepage.module.css"
import {connect} from "react-redux";
import Section2 from "./section2/Section2";
import {Component} from "react";
import {thunkGetPosts} from "../../redux/mainpage-reducer";
import {GridLoader} from "react-spinners";


class Homepage extends Component {

    componentDidMount() {
        this.props.thunkGetPosts()
    }

    render() {

        if(this.props.posts.length===0){
            return (
                <div className={s.preloader}>
                    <GridLoader/>
                </div>
            )
        }
        console.log(this.props);
        return (
            <main className={s.container}>
                <section className={s.sec}>
                    <Section2 posts={this.props.posts}/>
                </section>
            </main>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        posts: state.mainPage.Posts,
    }
}

export default connect(mapStateToProps, {thunkGetPosts})(Homepage);