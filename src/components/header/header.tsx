import css from './header.module.scss'
import {Link} from "react-router-dom";
import {useState} from "react";
export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <header className={`${css.header} ${isOpen ? css.header2 : ''}`}>

            {!isOpen && <img className={css.logo} src='/skan.svg' alt='logo'/>}
            {isOpen && <img className={css.logo2} src='/skan2.svg' alt='logo'/>}
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
            <div className={`${css.mobile_menu} ${isOpen ? css.open : ""}`}>
            <ul className={`${css.mobile_links} ${isOpen ? css.open : ""}`}>
                <li className={css.mobile_links_title}><a href='#'>Главная</a></li>
                <li className={css.mobile_links_title}><a href='#'>Тарифы</a></li>
                <li className={css.mobile_links_title}><a href='#'>FAQ</a></li>
            </ul>

            <div className={`${css.mobile_buttons} ${isOpen ? css.open : ""}`}>
                <button disabled className={css.mobile_register}>Зарегистрироваться</button>
                <button className={css.mobile_signin}>Войти</button>
            </div>
            </div>
            <div className={`${css.burgermenu} ${isOpen ? css.open : ""}`} onClick={toggleMenu}>
                <div className={`${css.line} ${isOpen ? css.white_line : ''}`}></div>
                <div className={`${css.line} ${isOpen ? css.white_line : ''}`}></div>
                <div className={`${css.line} ${isOpen ? css.white_line : ''}`}></div>
            </div>
        </header>
    )
}