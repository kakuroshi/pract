import "../Style/Css/Feedback.css"
import { useState } from 'react';
import Star from "../Style/Images/star.svg"
import Client from "../Style/Images/Ellipse_8.svg"
import Client2 from "../Style/Images/Ellipse_9.svg"
// import Arrow from "../Style/Images/arrow.svg"

const Feedback = (props) => {

    const [feedback, setFeedback] = useState([
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
    ])

    function addFeedback() {
        const feedbackUs = {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Vladimir_Putin_September_5%2C_2022_%28cropped%29.jpg/260px-Vladimir_Putin_September_5%2C_2022_%28cropped%29.jpg",
            name: "Putin",
            message: "PUUUUUTIIIIIIIN",
            rating: 5,
            date: "24.02.2022"
        }

        setFeedback([...feedback, feedbackUs])
    }

    return (
        <section className="feedback">
            <h1 className="feedback-head-text">{props.head}</h1>

            <div className="feedback-div">

                {
                    feedback.map(el => (
                        <div className="user-feedback">
                            <img className="feedback-user-img" src={el.img} alt="" />
                            <div className="feedback-user-information">
                                <div className="rating">

                                    {new Array(el.rating).fill(1).map((item, index) => (
                                        <img className="star" src={Star} alt="no img" />
                                    ))}
                                </div>

                                <p className="feedback-user-text">{el.message} </p>
                                <div className="fee dback-user-footer">
                                    <p className="user-feedback-name">{el.name}</p>
                                    <p className="date-feedback">{el.date} </p>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {/* <button onClick={swiping} className="arrow-btn-feedback">
                    <img className="arrow-feedback" src={Arrow} alt="" />
                </button> */}
            </div>

            <button onClick={addFeedback} className="feedback-add-button"><p className="text-button-feedback">Добавить отзыв</p></button>
        </section>
    )
}

export default Feedback