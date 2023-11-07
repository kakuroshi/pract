import Plus from "../Style/Images/plus.svg"
import "../Style/Css/Faq.css"
import { useState } from "react"

const Faq = () => {

    const faq = [
        {
            text: "Как сделать заказ?",
            id: 0,
            subTxt: "выава"
        },
        {
            text: "Способы оплаты",
            id: 1,
            subTxt: "ААААААААААjвап"
        },
        {
            text: "Доставка",
            id: 2,
            subTxt: "АААААА"
        },
        {
            text: "Сроки доставки",
            id: 3,
            subTxt: "ку"
        },
        {
            text: "Как сделать обмен?",
            id: 4,
            subTxt: "ПРИВЕТ))"
        },
        {
            text: "Как сделать возврат?",
            id: 5,
            subTxt: "ААААААААААААААА"
        },
        {
            text: "Куда и когда вернутся деньги за возвращённый товар?",
            id: 6,
            subTxt: "ААААААААААААААА"
        }
    ]

    const [faqOpen, setOpen] = useState(null)



    return (
        <div className="faq">
            <div className="header-faq">
                <h1 className="faq-header-text">Часто задаваемые вопросы</h1>
                <h1 className="faq-header-faq-text">FAQ</h1>
            </div>

            <div className="faq-body">
                {
                    faq.map(el => (
                        <div onClick={
                            faqOpen === el.id ? () => setOpen(null) : () => setOpen(el.id)
                            } key={el.id} className="faq-questions">
                            <div className="faq-question">
                                <p className="faq-text">{el.text}</p>
                                <img src={Plus} alt="" style={faqOpen === el.id ? {rotate: '45deg'} : {rotate: '0deg'}}/>
                            </div>
                            <p className="text-faq-open" style={faqOpen === el.id ? {display: 'block'} : {display: 'none'}
                            }>{el.subTxt}</p>
                            <hr style={faqOpen === el.id ? {display: 'none'} : {display: 'block'}} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Faq