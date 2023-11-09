import "../Style/Css/ProductPage.css"
import Header from "../../Header/Js/Header"
import arrow from "../Style/Images/arrow.svg"
import FeedBack from "../../Feedback/Js/Feedback"
import Footer from "../../Footer/Js/Footer";
import { useState } from "react";

const ProductPage = () => {
    let card = JSON.parse(localStorage.getItem("card"))
    let title = card.name
    let article = card.id

    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)

    const colors = [
        {id: 1, color:'white', name:"белый"}, 
        {id: 2, color:'#121212',  name:"черный"}, 
        {id: 3, color:'#1FA68E',  name:"зеленый"}, 
        {id: 4, color:'#DC39CC',  name:"розовый"}, 
        {id: 5, color:'#FFF385',  name:"желтый"}
    ]

    const sizes = [
        { id: 1, num: 42, letter: 'S' },
        { id: 2, num: 44, letter: 'M' },
        { id: 3, num: 46, letter: 'L' },
        { id: 4, num: 48, letter: 'XL' }
    ]

    

    return (
        <main className="product-page">
            <Header/>
            <section>
                <div className="product-page-head">
                    <button className="back-btn-product-page">
                        <img src={arrow} alt="Назад" />
                    </button>

                    <div className="about-product-pr-page">
                        <h1 className="title-product-page">{title}</h1>
                        <p className="article-product-page">Арт {article}</p>
                    </div>
                </div>

                <div className="main-product-page">
                    <div className="image-div-product-page">
                        <img className="product-page-image" src={card.img} alt="" />
                    </div>

                    <div className="more-information-product-page">
                        <h2 className="price-product-page">{card.oldPrice}</h2>

                        
                        <div className="colors-product-page">
                            <h3 className="colors-title-product-page">Цвета</h3>
                            <div className="colors-all-product-page">
                                {colors.map(el => (
                                    <div className="color-product-page" style={
                                        selectedColor === el.name 
                                        ? 
                                        {backgroundColor: el.color, border: "3px solid rgb(255, 188, 188)"} 
                                        :
                                        {backgroundColor: el.color, border: "0.5px solid gray"}
                                    }
                                    onClick={
                                        selectedColor === el.name 
                                        ?
                                        () => setSelectedColor(null) 
                                        :
                                        () => setSelectedColor(el.name)
                                    }
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="sizes-product-page">
                            <h3 className="sizes-title-product-page">Размер</h3>
                            <div className="sizes-block-product-page">
                                {sizes.map(size => (
                                    <div className="size-div-product-page" 
                                    style={ size.num === selectedSize ? {backgroundColor: "#514A7E"} : {backgroundColor: "#FFFDF5"}}
                                    onClick={ size.num === selectedSize ? () => setSelectedSize(null) : () => setSelectedSize(size.num)}>
                                        <p className="letter-product-page"
                                        style={ size.num === selectedSize ? {color: "#FFFDF5"} : {color: "#514A7E"}}>{size.letter}</p>
                                        <p className="number-size-product-page"
                                        style={ size.num === selectedSize ? {color: "#FFFDF5"} : {color: "#7D7D7D"}}>{size.num}</p>
                                    </div>
                                ))}
                            </div>

                            <button className="table-sizws-product-page">
                                <label htmlFor="">Таблица размеров</label>
                            </button>
                        </div>

                        <div className="buttons-head-product-page">
                                <button className="in-cart-button-product-page">
                                    <label htmlFor="">В корзину</label>
                                    <svg className="svg-cart" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M13.8893 6.66645V5.02756C13.8893 4.51686 13.7887 4.01117 13.5933 3.53935C13.3979 3.06753 13.1114 2.63882 12.7503 2.2777C12.3892 1.91658 11.9605 1.63013 11.4886 1.4347C11.0168 1.23926 10.5111 1.13867 10.0004 1.13867C9.48974 1.13867 8.98404 1.23926 8.51222 1.4347C8.0404 1.63013 7.61169 1.91658 7.25057 2.2777C6.88946 2.63882 6.603 3.06753 6.40757 3.53935C6.21213 4.01117 6.11154 4.51686 6.11154 5.02756V8.91645C6.11154 9.06379 6.17008 9.2051 6.27426 9.30929C6.37845 9.41347 6.51976 9.472 6.6671 9.472C6.81444 9.472 6.95575 9.41347 7.05994 9.30929C7.16412 9.2051 7.22266 9.06379 7.22266 8.91645V7.77756H11.6671V6.66645H7.22266V5.02756C7.22266 4.29085 7.51531 3.58431 8.03625 3.06338C8.55718 2.54244 9.26372 2.24978 10.0004 2.24978C10.7371 2.24978 11.4437 2.54244 11.9646 3.06338C12.4856 3.58431 12.7782 4.29085 12.7782 5.02756V8.88867C12.7782 9.03601 12.8367 9.17732 12.9409 9.28151C13.0451 9.3857 13.1864 9.44423 13.3338 9.44423C13.4811 9.44423 13.6224 9.3857 13.7266 9.28151C13.8308 9.17732 13.8893 9.03601 13.8893 8.88867V7.77756H16.6671V17.7776H3.33377V7.77756H5.00043V6.66645H2.22266V17.8276C2.22266 18.109 2.33445 18.3789 2.53345 18.5779C2.73245 18.7769 3.00234 18.8887 3.28377 18.8887H16.7171C16.9985 18.8887 17.2684 18.7769 17.4674 18.5779C17.6664 18.3789 17.7782 18.109 17.7782 17.8276V6.66645H13.8893Z" fill="#FFFDF5"/>
                                    </svg>
                                </button>

                                <button className="like-button-product-page">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                                        <path d="M18.7797 33.3306C18.5526 33.3299 18.3321 33.254 18.1527 33.1147C12.4383 28.6747 8.50191 24.8514 5.74747 21.0795C2.23247 16.2592 1.4308 11.8089 3.36302 7.85197C4.74025 5.02558 8.69719 2.71308 13.3222 4.05947C15.5273 4.69643 17.4513 6.06239 18.7797 7.93419C20.1081 6.06239 22.0321 4.69643 24.2372 4.05947C28.8519 2.73364 32.8191 5.02558 34.1964 7.85197C36.1286 11.8089 35.3269 16.2592 31.8119 21.0795C29.0575 24.8514 25.1211 28.6747 19.4066 33.1147C19.2272 33.254 19.0068 33.3299 18.7797 33.3306ZM10.6911 5.73475C9.59059 5.69192 8.49921 5.9496 7.5341 6.48014C6.56899 7.01068 5.76659 7.79405 5.21302 8.74614C3.61997 12.0145 4.33941 15.6528 7.41247 19.8564C10.6783 24.0688 14.5025 27.817 18.7797 30.9975C23.0562 27.8201 26.8804 24.0755 30.1469 19.8667C33.2303 15.6528 33.9394 12.0145 32.3464 8.75642C31.3186 6.70086 28.2353 5.06669 24.8025 6.03281C23.7018 6.3581 22.6814 6.91024 21.8069 7.65369C20.9325 8.39714 20.2234 9.31543 19.7252 10.3495C19.6478 10.538 19.5161 10.6992 19.3468 10.8127C19.1775 10.9261 18.9783 10.9867 18.7746 10.9867C18.5708 10.9867 18.3716 10.9261 18.2023 10.8127C18.033 10.6992 17.9013 10.538 17.8239 10.3495C17.3295 9.31285 16.6216 8.39241 15.7466 7.64849C14.8716 6.90458 13.8493 6.35398 12.7466 6.03281C12.0786 5.83876 11.3868 5.73845 10.6911 5.73475Z" fill="#514A7E"/>
                                    </svg>
                                </button>
                        </div>

                        <div className="description-product-page">
                            <h3 className="description-h3-product-page">Описание</h3>
                            <p className="desc-product-page">Здесь будет какое-то неболшое описание о вещи <br/>
                            Здесь будет какое-то неболшое описание о вещи </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <ProductItem/> */}
            <FeedBack head="Отзывы о товаре"/>
            <Footer class="footer-product-page" />
        </main>
    )
}

export default ProductPage