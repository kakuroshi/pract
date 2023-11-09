import Arrow from "../Style/Images/arrow.svg"
import Star from "../Style/Images/star.svg"
import Heart from "../Style/Images/clarity_heart-line.svg"
import Cart from "../Style/Images/clarity_shopping-bag-line.svg"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const CardProduct = (el) => {
    let lsMas = []

    const [like, setLike] = useState(null)

    function likeProduct() {

        let likeHelp = null

        if (localStorage.getItem("like") !== null) {
            lsMas = JSON.parse(localStorage.getItem("like"))

            for (let i = 0; i < lsMas.length; i++) {
                if (el.id === lsMas[i].id) {
                    likeHelp = 1
                }
            }
        }

        if (likeHelp === null) {
            setLike(1)

            if (localStorage.getItem("like") !== null) {
                for (let i = 0; i < lsMas.length; i++) {
                    if (el.id === lsMas[i].id) {
                        lsMas.splice(i, 1)
                    }
                    localStorage.setItem("like", JSON.stringify(lsMas))
                }
                lsMas = JSON.parse(localStorage.getItem("like"))
                lsMas.push(el)
                localStorage.setItem("like", JSON.stringify(lsMas))
            } else {
                lsMas.push(el)
                localStorage.setItem("like", JSON.stringify(lsMas))
            }
        } else {
            setLike(null)

            lsMas = JSON.parse(localStorage.getItem("like"))
            
            for (let i = 0; i < lsMas.length; i++) {
                if (el.id === lsMas[i].id) {
                    lsMas.splice(i, 1)
                    localStorage.setItem("like", JSON.stringify(lsMas))
                }
            }
        }  
        localStorage.setItem("like", JSON.stringify(lsMas))
    }

    function getStyle() {
        
        if (localStorage.getItem("like") !== null) {
            lsMas = JSON.parse(localStorage.getItem("like"))

            for (let i = 0; i < lsMas.length; i++) {
                if (el.id === lsMas[i].id) {
                    console.log(el.id === lsMas[i].id);
                    return "red"
                }
            }
            return "transparent"
        }
    }

    function getMore() {
        localStorage.setItem("card", JSON.stringify(el))
    }

    return (
        <div key={el.id} className={el.class}>
            <img className={el.classImg} src={el.img} alt="" />
            <div className="product-information-promotions">
                <div className="prices-promotions">
                    <p className="current-price-promotions">{el.newPrice}</p>
                    <s className="old-price-promotions">{el.oldPrice}</s>
                </div>

                <div className="product-main-information">
                    <p className="name-product">{el.name}</p>
                    <div className="main-buttns-product">
                        <button
                            onClick={likeProduct}
                            
                            style={like === null ? {backgroundColor: getStyle()} : {backgroundColor: getStyle()}}

                                className="like-button-product">
                            <img src={Heart} alt="no img" />
                        </button>
                        <button className="cart-button-product">
                            <img src={Cart} alt="no img" />
                        </button>
                    </div>
                </div>

                <div className="product-footer">
                    <NavLink to="/ProductPage">
                        <button onClick={getMore} className="more-about-product">
                            <p className="more-product-text">Подробнее</p>
                            <img className="arrow-promotions" src={Arrow} alt="" />
                        </button>
                    </NavLink>

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

export default CardProduct