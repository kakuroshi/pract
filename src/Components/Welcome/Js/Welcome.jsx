import "../Style/Css/Welcome.css"
import FirstImg from "../Style/Image/Rectangle_22.png"
import SecondImage from "../Style/Image/Rectangle_21.png"

const Welcome = () => {
    return (
        <div className="welcome-page-div">
            <div className="left-information-welcome">
                <img className="first-image-welcome" src={FirstImg} alt="" />
                <div className="left-text">
                    <h1 className="welcome-text">Добро пожаловать в <span className="welcome-text-coctail">Cocteil</span> </h1>
                    <p className="welcome-subtext">Экономим Ваше время! <br />
                    Предлагаем лучшие цены! <br />
                    Доставляем в кратчайшие сроки!</p>
                </div>
            </div>

            <div className="right-information">
                <img className="second-image-welcome" src={SecondImage} alt="" />
            </div>
        </div>
    )
}

export default Welcome