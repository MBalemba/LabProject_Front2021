import s from "./Login.module.css"
import {connect} from "react-redux";
import * as axios from "axios";
import {Component} from "react";
import {getToken} from "../../Api/api";
import {setAuth} from "../../redux/auth-reducer";
import { Redirect } from 'react-router';


class Login extends Component {

    state = {
        login: '',
        password: '',
        authCancel: false,
        authProcessing: false,

    }

    enterData = () => {

        this.setState({
            authProcessing: true,
            authCancel: false,
        })

        getToken({login: this.state.login, password: this.state.password}
        ).then(
            accessToken => {

                this.setState({
                    authProcessing: false,
                    authSucsesfull: true,
                });



                setTimeout(() => {
                    this.setState({
                        authSucsesfull: false,
                    });
                }, 1000);

                this.props.setAuth(accessToken);
            },
            e => {
                this.setState({
                    authProcessing: false
                })
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
        if (this.props.isAuth){
            return <Redirect to="/CMS"/>
        }
        return (
            <main className={s.container}>
                <form className={s.form} onSubmit={e => {
                    e.preventDefault()
                }} action="">
                    <div className={s.content}>
                        <div className={s.input}>
                            <p>Логин</p>
                            <input onFocus={() => {
                                this.setState({authCancel: false})
                            }} value={this.state.login} placeholder={'логин'} type="text" onChange={(e) => {
                                this.change(e.currentTarget, 'login')
                            }}/>
                        </div>
                        <div className={s.input}>
                            <p>Пароль</p>
                            <input onFocus={() => {
                                this.setState({authCancel: false})
                            }} value={this.state.password} placeholder={'пароль'} type="password" onChange={(e) => {
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
                        {this.state.authProcessing ? 'Загрузка...' : ''}
                        {this.state.authSucsesfull ? 'Успешно...' : ''}

                    </div>
                </form>
            </main>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        firstPage: state.mainPage.Posts,
        isAuth:state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {setAuth})(Login);