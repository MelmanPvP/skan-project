import css from './header.module.scss'
import {Link} from "react-router-dom";
export function Header() {
    return (
        <header className={css.header}>

            <img className={css.logo} src='/skan.svg' alt='logo' />
            <ul className={css.links}>
                <Link to='/'>
                    <li className={css.links_title}><a className={css.links_title} href='#'>Главная</a></li>
                </Link>
                <li className={css.links_title}><a className={css.links_title} href='#'>Тарифы</a></li>
                <li className={css.links_title}><a className={css.links_title} href='#'>FAQ</a></li>
            </ul>
            <div className={css.buttons}>
                <button disabled className={css.register}>Зарегистрироваться</button>
                <hr></hr>
                <Link to='/signin'>
                    <button className={css.signin}>Войти</button>
                </Link>
            </div>
        </header>
    )
}