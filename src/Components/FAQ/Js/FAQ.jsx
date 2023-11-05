import Plus from "../Style/Images/plus.svg"
import "../Style/Css/Faq.css"

const Faq = () => {

    let faq = [
        {
            text: "Как сделать заказ?"
        },
        {
            text: "Способы оплаты"
        },
        {
            text: "Доставка"
        },
        {
            text: "Сроки доставки"
        },
        {
            text: "Как сделать обмен?"
        },
        {
            text: "Как сделать возврат?"
        },
        {
            text: "Куда и когда вернутся деньги за возвращённый товар?"
        }
    ]

    let faqRender = faq.map(el => (
        <div className="faq-questions">
            <div className="faq-question">
                <p className="faq-text">{el.text}</p>
                <img src={Plus} alt="" />
            </div>
            <hr />
        </div>
    ))

    return (
        <div className="faq">
            <div className="header-faq">
                <h1 className="faq-header-text">Часто задаваемые вопросы</h1>
                <h1 className="faq-header-faq-text">FAQ</h1>
            </div>

            <div className="faq-body">
                {faqRender}
            </div>
        </div>
    )
}

export default Faq