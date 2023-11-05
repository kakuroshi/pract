import "../Style/Css/Feedback.css"
import Star from "../Style/Images/star.svg"
import Client from "../Style/Images/Ellipse_8.svg"
import Client2 from "../Style/Images/Ellipse_9.svg"
import Arrow from "../Style/Images/arrow.svg"

const Feedback = () => {

    let feedback = [
        {
            img: Client,
            name: "Элина Шуклина",
            message: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.",
            rating: 5,
            date: "23.05.2021"
        },
        {
            img: Client2,
            name: "Анастасия Чаро",
            message: "Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! Приятные менеджеры! Все быстро, доступно, удобно! Спасибо.",
            rating: 5,
            date: "вчира"
        }
    ]

    let renderFeedback = feedback.map(el => {
        return (
            <div className="user-feedback">
                <img className="feedback-user-img" src={el.img} alt="" />
                <div className="feedback-user-information">
                    <div className="rating">

                    {new Array(el.rating).fill(1).map((item, index) => (
                        <img className="star" src={Star} alt="no img" />
                    ))}
                    </div>
                    
                    <p className="feedback-user-text">{el.message} </p>
                    <div className="feddback-user-footer">
                        <p className="user-feedback-name">{el.name}</p>
                        <p className="date-feedback">{el.date} </p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="feedback">
            <h1 className="feedback-head-text">Отзывы наших покупателей</h1>

            <div className="feedback-div">
                {renderFeedback}
                <button>
                    <img src={Arrow} alt="" />
                </button>
            </div>
            
            <button className="feedback-add-button"><p className="text-button-feedback">Добавить отзыв</p></button>
        </div>
    )
}

export default Feedback