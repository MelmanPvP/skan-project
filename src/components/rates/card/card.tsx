import  css from './card.module.scss'
import {useState} from "react";
import Button from "./button/button.tsx";
interface CardProps {
    img:string
    color:string
    title:string
    description:string
    price:number
    old_price:number
    price_description:string
    first_item:string
    second_item:string
    third_item:string
    key:number,
}
export default function Card(props: CardProps) {
    return (
        <div className={css.card}>
            <div className={ props.color === 'yellow' ? css.yellow : props.color === 'blue' ? css.blue : props.color === 'black' ? css.black : ' '}>
                <div className={css.content}>
                    <span className={props.color === 'black' ? css.white + ' ' + css.title : '' + ' ' + css.title}>{props.title}</span>
                    <p className={props.color === 'black' ? css.white + ' ' + css.description : '' + ' ' + css.description}>{props.description}</p>
                </div>
                <img className={css.img} src={props.img} alt=''/>
            </div>
            <div className={css.price_info}>
                <div className={css.prices}>
                    <p className={css.price}>{props.price}₽</p>
                    <p className={css.old_price}>{props.old_price}₽</p>
                </div>
                <p className={css.price_description}>{props.price_description}</p>
            </div>
          <p className={css.list_text}>В тариф входит</p>
            <ul className={css.list}>
                <li><img src='/mark.svg' alt=''/>{props.first_item}</li>
                <li><img src='/mark.svg' alt=''/>{props.second_item}</li>
                <li><img src='/mark.svg' alt=''/>{props.third_item}</li>
            </ul>

            <Button text='Подробнее'/>
        </div>
    )
}