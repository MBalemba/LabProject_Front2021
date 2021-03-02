import s from "./Login.module.css"
import {connect} from "react-redux";
import * as axios from "axios";
import {Component} from "react";
import {getToken} from "../../Api/api";


class Login extends Component {

    state = {
        login: '',
        password: '',
        authCancel: false,
    }

    enterData = () => {
        debugger
        const instance1 = axios.create({
            withCredentials: true,
            timeout: 3000,
        })

        instance1.post('http://localhost:5500/login',{login: this.state.login, password: this.state.password}
        ).then(
            response => {
                debugger
                console.dir(response.data)
            },
            e => {
                debugger
                this.setState({
                        authCancel: true
                    }
                )
            }
        )
    }


    change(input, type) {
        if (type === 'login')
            this.setState({
                login: input.value
            })
        else if (type === 'password') {
            this.setState({
                password: input.value
            })
        }
    }

    render() {
        return (
            <main className={s.container}>
                <form className={s.form} onSubmit={e => {
                    e.preventDefault()
                }} action="">
                    <div className={s.content}>
                        <div className={s.input}>
                            <p>Логин</p>
                            <input value={this.state.login} placeholder={'логин'} type="text" onChange={(e) => {
                                this.change(e.currentTarget, 'login')
                            }}/>
                        </div>
                        <div className={s.input}>
                            <p>Пароль</p>
                            <input value={this.state.password} placeholder={'пароль'} type="password" onChange={(e) => {
                                this.change(e.currentTarget, 'password')
                            }}/>
                        </div>
                        <div className={s.button}>
                            <button onClick={this.enterData}>
                                Войти
                            </button>
                        </div>
                        {this.state.authCancel ? <div className={s.warning}>
                            <p>Вы ввели неправильный логин или пароль!</p>
                        </div> : ''
                        }
                    </div>
                </form>
            </main>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        firstPage: state.mainPage.Posts,
    }
}

export default connect(mapStateToProps, {})(Login);