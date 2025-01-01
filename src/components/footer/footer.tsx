import css from './footer.module.scss'
export default function Footer(){
    return(
        <footer className={css.footer}>
           <img src='/skan2.svg' alt='logo'/>
            <div>
                       <span>г. Москва, Цветной б-р, 40
                             +7 495 771 21 11
                           &nbsp;&nbsp;info@skan.ru
                       </span>
                <span className={css.copyright}>Copyright. 2024</span>
            </div>


        </footer>
    )
}