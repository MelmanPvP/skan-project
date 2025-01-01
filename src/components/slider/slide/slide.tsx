import css from './slide.module.scss'
interface SlideProps {
    img:string,
    text:string,
    key:number
}
export default function Slide (props: SlideProps) {
    return (
        <div className={css.slide}>
            <img className={css.img} src={props.img} alt='logo'/>
            <span className={css.text}>{props.text}</span>
        </div>
    )
}