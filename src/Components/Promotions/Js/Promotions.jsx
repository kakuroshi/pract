import "../Style/Css/Promotions.css"
import Heart from "../Style/Images/clarity_heart-line.svg"
import Cart from "../Style/Images/clarity_shopping-bag-line.svg"
import Test from "../Style/Images/Rectangle_23.png"
import Arrow from "../Style/Images/arrow.svg"
import Star from "../Style/Images/star.svg"
import Test2 from "../Style/Images/Rectangle_24.png"
import Test3 from "../Style/Images/Rectangle_25.png"
import Test4 from "../Style/Images/Rectangle_26.png"

const Promotions = () => {

    let products = [
        {
            name: "Блузка",
            newPrice: "50.00 Р",
            oldPrice: "65.00 Р",
            rating: 3,
            img: Test,
            id: 0
        },
        {
            name: "Сережа",
            newPrice: "500.00 Р",
            oldPrice: "650.00 Р",
            rating: 3,
            img: Test2,
            id: 1
        },
        {
            name: "Вилсон",
            newPrice: "5000.00 Р",
            oldPrice: "6500.00 Р",
            rating: 4,
            img: Test3,
            id: 2
        },
        {
            name: "Данечка",
            newPrice: "500000000.00 Р",
            oldPrice: "6.00 Р",
            rating: 3,
            img: Test4,
            id: 3
        }
    ]

    return (
        <div className="promotions-div">
            <h1 className="promotions-head-text">Успей купить!</h1>
            <h1 className="promotions-head-help">Акции</h1>

            <div className="products">
                {
                    products.map(el =>
                        <div key={el.id} className="product-promotions">
                            <img className="img-product" src={el.img} alt="" />
                            <div className="product-information-promotions">
                                <div className="prices-promotions">
                                    <p className="current-price-promotions">{el.newPrice}</p>
                                    <s className="old-price-promotions">{el.oldPrice}</s>
                                </div>

                                <div className="product-main-information">
                                    <p className="name-product">{el.name}</p>
                                    <div className="main-buttns-product">
                                        <button className="like-button-product">
                                            <img src={Heart} alt="no img" />
                                        </button>
                                        <button className="cart-button-product">
                                            <img src={Cart} alt="no img" />
                                        </button>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <button className="more-about-product">
                                        <p className="more-product-text">Подробнее</p>
                                        <img className="arrow-promotions" src={Arrow} alt="" />
                                    </button>

                                    <div className="stars-product">

                                        {new Array(el.rating).fill(1).map((item, index) => (
                                            <img className="star" src={Star} alt="no img" />
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* <button className="arrow-btn-promotions">
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="47" viewBox="0 0 85 47" fill="none">
                    <rect width="85" height="47" fill="#FFFDF5"/>
                    <path d="M66.3536 24.3536C66.5488 24.1583 66.5488 23.8417 66.3536 23.6464L63.1716 20.4645C62.9763 20.2692 62.6597 20.2692 62.4645 20.4645C62.2692 20.6597 62.2692 20.9763 62.4645 21.1716L65.2929 24L62.4645 26.8284C62.2692 27.0237 62.2692 27.3403 62.4645 27.5355C62.6597 27.7308 62.9763 27.7308 63.1716 27.5355L66.3536 24.3536ZM20 24.5H66V23.5H20V24.5Z" fill="#514A7E"/>
                </svg>
            </button> */}
        </div>
    )
}

export default Promotions