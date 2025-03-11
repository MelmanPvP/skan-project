import css from './button.module.scss'
interface ButtonProps{
    text: string
}
export default function Button (props: ButtonProps){
    return (
        <button className={css.button}>
            {props.text}
        </button>
    )
}