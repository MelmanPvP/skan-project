import css from './card.module.scss'
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
    key:number
}
export default function Card(props: CardProps) {
    return (
        <div className={css.card}>
            <div className={css.header + ' ' + props.color === 'yellow' ? css.yellow : props.color === 'blue' ? css.blue : props.color === 'black' ? css.black : ''}>

            </div>
            <div>
                <p>{props.price}</p> <span>{props.old_price}</span>
                <p>{props.price_description}</p>
            </div>

        </div>
    )
}