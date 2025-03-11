import css from './mainpage.module.scss'
import {Header} from "../header/header.tsx";
import {useState} from "react";
import Service from "../service/service.tsx";
import Slider from "../slider/slider.tsx";
import Rates from "../rates/rates.tsx";
import Footer from "../footer/footer.tsx";
export default function MainPage (){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
           <Header/>
            <Service/>
            <Slider/>
            <Rates/>
            <Footer/>
        </>
    )
}