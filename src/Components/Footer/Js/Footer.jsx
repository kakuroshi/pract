import "../Style/Css/Footer.css"
import Socials from "../Style/Images/Socials.svg"
import Phone from "../Style/Images/Phone.svg"
import Clock from "../Style/Images/Clock.svg"
import logo from "../Style/Images/lof.png"

const Footer = () => {

    let information = [
        {
            id: 0,
            text: ["Главная", "Акции", "Каталог", "Ворзврат", "Доставка", "Партнёрам", "Способ оплаты", "Как сделать заказ?"]
        },
        {
            id: 1,
            text: ["Мои заказы", "Мои адреса", "Мои скидки", "Моя информация"]
        }
    ]

    return (
        <div className="footer-div">
            <div className="information-footer">
                <p className="footer-information-head-text">Информация</p>
                    <div className="information-block">
                        {information[0].text.map(el => (
                            <p className="information-element">{el}</p>
                        ))}
                    </div>
            </div>
            <div className="my-cab-footer">
                <p className="my-cab-head-text">Мой кабинет</p>
                <div className="my-cab-block">
                    {information[1].text.map(el =>(
                        <p className="my-cab-element">{el}</p>
                    ))}
                </div>
            </div>
            <div className="contact-information">
                <p className="contact-information-head-text">Контактная информация</p>
                <div className="contact-information-text">
                    <p>ИП Вишневский Иван Сергеевич <br />
                    государственная регистрация №690867884 от 31.07.2020. <br />
                    Логойским горисполкомом <br />
                    Защита прав потребителей +375259990755</p>
                </div>
            </div>
            <div className="social-footer">
                <p className="socials-head-text">Соц. сети</p>
                <img src={Socials} alt="" /> 
                <div className="phone-footer">
                    <img className="phone-img" src={Phone} alt="" />
                    <p>+375255990755</p>
                </div>
                <div className="time-footer">
                    <img className="clock-img" src={Clock} alt="" />
                    <p>круглосуточно, без выходных</p>
                </div>
            </div>

            <img className="logo-footer" src={logo} alt="" />
        </div>
    )
}

export default Footer