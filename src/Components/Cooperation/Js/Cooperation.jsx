import "../Style/Css/Cooperation.css"
import Gear from "../Style/Images/gear.svg"
import List from "../Style/Images/list-line.svg"
import Group from "../Style/Images/group.svg"
import Bag from "../Style/Images/bag.svg"

const Cooperation = () => {

    let coopText = [
        {
            id: 0,
            textHead: 'Становитесь партнёром',
            text: 'Регистрируйтесь и переходите в свой кабинет'
        },
        {
            id: 1,
            textHead: 'Рекламируйте товары',
            text: 'Рекламируйте наши товары на форумах, сайтах, в социальных сетях'
        },
        {
            id: 2,
            textHead: 'Приводите покупателей',
            text: 'Приводите покупателей на наш сайт по уникальной ссылке'
        },
        {
            id: 3,
            textHead: 'Получайте бонусы',
            text: 'Копите бонусы от каждого оплаченного заказа'
        },
    ]

    let renderDivTxt = coopText.map(el => (
        <div key={el.id} className="coop-thing">
            <p className="coop-thing-head-text">{el.textHead}</p>
            <p className="coop-thing-text">{el.text}</p>
        </div>
    ))

    let adventages = [
        {
            id: 0,
            img: Gear,
            text: 'Автоматизация процессов'
        },
        {
            id: 1,
            img: List,
            text: 'Пополнение ассортимента'
        },
        {
            id: 2,
            img: Group,
            text: 'Поддержка и обучение'
        },
        {
            id: 3,
            img: Bag,
            text: 'Бонусы за новых клиентов'
        }
    ]

    let adventagesRender = adventages.map(el => (
        <div key={el.id} className="adventage">
            <img className="adventage-img" src={el.img} alt="no img" />
            <p className="adventage-text">{el.text}</p>
        </div>
    ))

    return (
        <section className="cooperation">
            <h1 className="cooperation-header-text">Сотрудничество с нами</h1>
            <p className="cooperation-head-text-p">Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах и рассматриваем новые проекты, которые могут быть привлекательны и интересны с коммерческой точки зрения. </p>

            <div className="coop-things">
                {renderDivTxt}
            </div>

            <p className="advantages">Это выгодно. Какие преимущества?</p>

            <div className="adventages-div">
                {adventagesRender}
            </div>
        </section>
    )
}

export default Cooperation