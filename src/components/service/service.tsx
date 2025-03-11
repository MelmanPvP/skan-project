import css from './service.module.scss'
import {useState} from "react";
import Slider from "../slider/slider.tsx";

export default function Service () {
    const [isLoggedIn, setIsLoggedIn] =useState(false)

    return (
        <div className={css.service}>
            <div className={css.info}>

                <span className={css.title}>Сервис по поиску публикаций о компании по его ИНН</span>
                <p className={css.text}>Комплексный анализ публикаций, получение данных в формате PDF на электронную
                    почту.</p>
                {isLoggedIn && <button className={css.button}>Запросить данные</button>}
            </div>
            <img className={css.img1} src='/service.png' alt=''/>
            <img className={css.img2} src='/service2.png' alt=''/>

        </div>
    )

}