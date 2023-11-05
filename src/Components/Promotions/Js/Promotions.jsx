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
            img: Test
        },
        {
            name: "Сережа",
            newPrice: "500.00 Р",
            oldPrice: "650.00 Р",
            rating: 3,
            img: Test2
        },
        {
            name: "Вилсон",
            newPrice: "5000.00 Р",
            oldPrice: "6500.00 Р",
            rating: 4,
            img: Test3
        },
        {
            name: "Данечка",
            newPrice: "500000000.00 Р",
            oldPrice: "6.00 Р",
            rating: 3,
            img: Test4
        }
    ]

    let productsRender = products.map(el => {
        return (
        <div className="product-promotions">
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
                            <img src={Arrow} alt="" />
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
    })

    return (
        <div className="promotions-div">
            <h1 className="promotions-head-text">Успей купить!</h1>
            <h1 className="promotions-head-help">Акции</h1>

            <div className="products">
                {productsRender}
            </div>
        </div>
    )
}

export default Promotions