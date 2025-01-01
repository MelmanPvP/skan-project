import BlazeSlider from 'blaze-slider'
import 'blaze-slider/dist/blaze.css'
import './slider.scss'
import {useEffect, useRef} from "react";
import data from "./data.ts";
import Slide from "./slide/slide.tsx";

export default function Slider () {
    function useBlazeSlider(config) {
        const sliderRef = useRef()
        const elRef = useRef()

        useEffect(() => {
            // if not already initialized
            if (!sliderRef.current) {
                sliderRef.current = new BlazeSlider(elRef.current, config)
            }
        }, [])

        return elRef
    }
    const elRef = useBlazeSlider({
        all: {
            slidesToShow: 3,
        },
    })
    return (
        <>
            <h1 className='title'>Почему именно мы</h1>
        <div className="blaze-slider" ref={elRef}>

            <div className="blaze-container">
                <button className="blaze-prev"><img src='/arrow-left.svg' alt='назад'/></button>

                <div className="blaze-track-container">
                    <div className="blaze-track">
                        {data.map((item, index) => (
                            <Slide img={item.img} text={item.text} key={index}/>
                        ))}
                    </div>
                </div>
                <button className="blaze-next"><img src='/arrow-right.svg' alt='далее'/></button>

            </div>
        </div>
        </>
    )
}