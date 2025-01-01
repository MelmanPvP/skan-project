import css from './signin.module.scss'
import {Header} from "../header/header.tsx";
import {useState} from "react";
import Footer from "../footer/footer.tsx";
export default function SignIn(){
    const [login,enterLogin]=useState('');
    const [password,enterPassword]=useState('');
    return (
        <>
            <Header/>
            <div className={css.signin}>
                <div className={css.info}>
                <span className={css.title}>Для оформления подписки на тариф, необходимо авторизоваться.</span>
                    <div>
                <img className={css.img} src='/key.png' alt='key'/>
                    </div>
                </div>
                <div className={css.form_wrapper}>
                    <img className={css.lock} src='/lock.svg' alt='lock'/>
                    <div className={css.form}>
                        <div className={css.options}>
                            <button className={css.log_in}>Войти</button>
                            <button disabled className={css.register}>Зарегистрироваться</button>
                        </div>
                        <div className={css.inputs}>
                            <label className={css.login}>
                                Логин или номер телефона:
                                <input value={login} onChange={e => enterLogin(e.target.value)}/>
                            </label>
                            <label className={css.password}>
                                Пароль:
                                <input value={password} onChange={e => enterPassword(e.target.value)} type="password"/>
                            </label>
                        </div>
                        <button className={`${css.button}  ${login.length === 0 || password.length === 0 ? css.disabled : ''}`} >Войти</button>
                        <p className={css.restore}>Восстановить пароль</p>
                        <span className={css.variants_text}>Войти через:</span>
                        <div className={css.variants}>
                            <img src='/google.svg' alt='google'/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}