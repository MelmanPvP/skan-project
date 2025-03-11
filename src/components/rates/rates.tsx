import css from './rates.module.scss'
import data from "./data.ts";
import Card from "./card/card.tsx";
export default function Rates() {
    return (
        <div>
            <h1 className={css.title}>Наши тарифы</h1>
            <div className={css.rates}>
                {data.map((item) => (
                    <Card key={item.id} img={item.img} color={item.color} title={item.title} description={item.description}
                          price={item.price} old_price={item.old_price}
                          price_description={item.price_description}
                          first_item={item.first_item} second_item={item.second_item} third_item={item.third_item}
                          // yellow={item.yellow} blue={item.blue} black={item.black}
                    />
                ))}
            </div>
        </div>
    )
}