import Header from "../../Header/Js/Header"
import Footer from "../../Footer/Js/Footer"
import "../Style/Css/Cart.css"
import { useState } from "react"

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) !== null ? JSON.parse(localStorage.getItem("cart")) : null

    const [products, setProducts] = useState(cart)
    const [flagOrder, setFlag] = useState(false)

    let finalPrice = 0;

    if (products !== null) {
        for (let i = 0; i < products.length; i++) {
            // console.log(typeof products[i].count);
            finalPrice = finalPrice + (products[i].count * products[i].price.slice(0, products[i].price.indexOf(' ')))
        }
    }

    let lsMas = []
    if (localStorage.getItem("like") !== null) {
        lsMas = JSON.parse(localStorage.getItem("like"))
    }

    const [like, setLike] = useState(null)

    function likeProduct(el) {

        let likeHelp = 0

        for (let i = 0; i < lsMas.length; i++) {
            if (el.id === lsMas[i].id) {
                likeHelp = 1
            }
        }

        if (likeHelp === 0) {
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
                console.log(lsMas);
                localStorage.setItem("like", JSON.stringify(lsMas))
            } else {
                lsMas.push(el)
                localStorage.setItem("like", JSON.stringify(lsMas))
            }
        } else {
            setLike(0)

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

    function getStyle(el) {

        if (localStorage.getItem("like") !== null) {
            lsMas = JSON.parse(localStorage.getItem("like"))

            for (let i = 0; i < lsMas.length; i++) {
                if (el.id === lsMas[i].id) {
                    return "red"
                }
            }
            return "transparent"
        }
    }

    const updateCount = (sign, id, count) => {

        console.log(sign, id, count);
        if (count >= 1 && sign) {
            let newCart = JSON.parse(localStorage.getItem("cart"))

            for (let i = 0; i < newCart.length; i++) {
                if (newCart[i].id === id) {
                    newCart[i].count += 1
                    setProducts(newCart)
                    localStorage.setItem("cart", JSON.stringify(newCart))
                }
            }
        } else if (count === 1 && !sign) {
            alert("Нельзя заказать меньше")
        } else {
            let newCart = JSON.parse(localStorage.getItem("cart"))

            for (let i = 0; i < newCart.length; i++) {
                if (newCart[i].id === id) {
                    newCart[i].count -= 1
                    setProducts(newCart)
                    localStorage.setItem("cart", JSON.stringify(newCart))
                }
            }
        }
    }

    function deleteProduct(id) {
        let newProducts = products
        newProducts.splice(newProducts.findIndex((elm) => elm.id === id), 1)
        setProducts([...newProducts])
        localStorage.setItem("cart", JSON.stringify([...newProducts]))
    }

    function order() {
        if (flagOrder) {
            if (products.length > 0) {
                alert("Заказ оформлен")
                setProducts([])
                localStorage.setItem("cart", JSON.stringify([]))
            } else {
                alert("В корзине пусто")
            }
        } else {
            alert("Требуется согласие с условиями правил пользования торговой площадкой и правилами возврата")
        }
    }

    return (
        <main className="main-cart">
            <Header />

            <div className="cart-head-main">
                <button >
                    <svg onClick={() => { window.location.href = "http://localhost:3000/" }} xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
                        <g filter="url(#filter0_d_94_3550)">
                            <circle cx="31.5" cy="27.5" r="21.5" transform="rotate(-90 31.5 27.5)" fill="#514A7E" />
                            <path d="M22.6464 27.6464C22.4512 27.8417 22.4512 28.1583 22.6464 28.3536L25.8284 31.5355C26.0237 31.7308 26.3403 31.7308 26.5355 31.5355C26.7308 31.3403 26.7308 31.0237 26.5355 30.8284L23.7071 28L26.5355 25.1716C26.7308 24.9763 26.7308 24.6597 26.5355 24.4645C26.3403 24.2692 26.0237 24.2692 25.8284 24.4645L22.6464 27.6464ZM40 27.5L23 27.5L23 28.5L40 28.5L40 27.5Z" fill="#FFFDF5" />
                        </g>
                        <defs>
                            <filter id="filter0_d_94_3550" x="0" y="0" width="63" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.31816 0 0 0 0 0.289236 0 0 0 0 0.495833 0 0 0 0.4 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_94_3550" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_94_3550" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </button>

                <h1 className="cart-head-h1">Корзина</h1>

                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M23.6117 11.3333V8.54715C23.6117 7.67896 23.4407 6.81928 23.1084 6.01718C22.7762 5.21509 22.2892 4.48628 21.6753 3.87238C21.0614 3.25849 20.3326 2.77152 19.5305 2.43928C18.7284 2.10704 17.8687 1.93604 17.0005 1.93604C16.1324 1.93604 15.2727 2.10704 14.4706 2.43928C13.6685 2.77152 12.9397 3.25849 12.3258 3.87238C11.7119 4.48628 11.2249 5.21509 10.8927 6.01718C10.5604 6.81928 10.3894 7.67896 10.3894 8.54715V15.1583C10.3894 15.4087 10.4889 15.649 10.6661 15.8261C10.8432 16.0032 11.0834 16.1027 11.3339 16.1027C11.5844 16.1027 11.8246 16.0032 12.0017 15.8261C12.1788 15.649 12.2783 15.4087 12.2783 15.1583V13.2221H19.8339V11.3333H12.2783V8.54715C12.2783 7.29473 12.7758 6.09362 13.6614 5.20803C14.547 4.32244 15.7481 3.82492 17.0005 3.82492C18.253 3.82492 19.4541 4.32244 20.3397 5.20803C21.2252 6.09362 21.7228 7.29473 21.7228 8.54715V15.111C21.7228 15.3615 21.8223 15.6017 21.9994 15.7789C22.1765 15.956 22.4167 16.0555 22.6672 16.0555C22.9177 16.0555 23.1579 15.956 23.335 15.7789C23.5121 15.6017 23.6117 15.3615 23.6117 15.111V13.2221H28.3339V30.2221H5.66721V13.2221H8.50054V11.3333H3.77832V30.3071C3.77832 30.7856 3.96837 31.2444 4.30667 31.5827C4.64496 31.921 5.10379 32.111 5.58221 32.111H28.4189C28.8973 32.111 29.3561 31.921 29.6944 31.5827C30.0327 31.2444 30.2228 30.7856 30.2228 30.3071V11.3333H23.6117Z" fill="#121212" />
                </svg>
            </div>
            
            <div className="products-in-bag">
                {products !== null ? products.map((el) => (
                    <div className="card-cart-for-order" >

                        <div className="img-div-card-cart">
                            <img src={el.img} alt="no img" className="img-product-cart" />
                        </div>

                        <div className="info-product-cart" >

                            <div className="info-title-product-cart">
                                <h3 className="prod-name-cart">{el.name}</h3>
                                <p className="article-cart-product">Арт. {el.id}</p>
                            </div>

                            <div className="color-size-div-cart">
                                <p className="color-text-cart-product">Цвет: {el.color}</p>
                                <p className="size-text-cart-product">Размер: {el.size}</p>
                            </div>

                            <div className="plus-minus-btns-products">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="minus-cart-product"
                                    onClick={() => updateCount(false, el.id, el.count)}>
                                    <path d="M14.4444 9.44434H5.55556C5.40821 9.44434 5.26691 9.50287 5.16272 9.60705C5.05853 9.71124 5 9.85255 5 9.99989C5 10.1472 5.05853 10.2885 5.16272 10.3927C5.26691 10.4969 5.40821 10.5554 5.55556 10.5554H14.4444C14.5918 10.5554 14.7331 10.4969 14.8373 10.3927C14.9415 10.2885 15 10.1472 15 9.99989C15 9.85255 14.9415 9.71124 14.8373 9.60705C14.7331 9.50287 14.5918 9.44434 14.4444 9.44434Z" fill="#514A7E" />
                                </svg>

                                <h3 className="el-count-product">{el.count}</h3>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="plus-card-product-cart"
                                    onClick={() => updateCount(true, el.id, el.count)}>
                                    <path d="M16.6666 9.4445H10.5555V3.33339C10.5555 3.18605 10.497 3.04474 10.3928 2.94055C10.2886 2.83636 10.1473 2.77783 9.99993 2.77783C9.85259 2.77783 9.71128 2.83636 9.60709 2.94055C9.50291 3.04474 9.44437 3.18605 9.44437 3.33339V9.4445H3.33326C3.18592 9.4445 3.04461 9.50303 2.94043 9.60722C2.83624 9.7114 2.77771 9.85271 2.77771 10.0001C2.77497 10.0723 2.78773 10.1442 2.81515 10.2111C2.84257 10.2779 2.88399 10.3381 2.93664 10.3876C2.98929 10.4371 3.05193 10.4747 3.12035 10.4979C3.18877 10.5212 3.26137 10.5295 3.33326 10.5223H9.44437V16.6667C9.44437 16.8141 9.50291 16.9554 9.60709 17.0596C9.71128 17.1637 9.85259 17.2223 9.99993 17.2223C10.1473 17.2223 10.2886 17.1637 10.3928 17.0596C10.497 16.9554 10.5555 16.8141 10.5555 16.6667V10.5556H16.6666C16.8139 10.5556 16.9552 10.4971 17.0594 10.3929C17.1636 10.2887 17.2222 10.1474 17.2222 10.0001C17.2222 9.85271 17.1636 9.7114 17.0594 9.60722C16.9552 9.50303 16.8139 9.4445 16.6666 9.4445Z" fill="#514A7E" />
                                </svg>
                            </div>

                            <div className="buttons-footer-product">
                                <div
                                    onClick={() => { likeProduct(el) }}

                                    style={like === 0 ? { backgroundColor: getStyle(el) } : { backgroundColor: getStyle(el) }}

                                    className="favorite-card-cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.99977 18.0166C9.87702 18.0162 9.75785 17.9752 9.66088 17.8999C6.57199 15.4999 4.44421 13.4333 2.95532 11.3944C1.05532 8.78883 0.621986 6.38328 1.66643 4.24439C2.41087 2.71661 4.54976 1.46661 7.04976 2.19439C8.24173 2.53869 9.2817 3.27705 9.99977 4.28883C10.7178 3.27705 11.7578 2.53869 12.9498 2.19439C15.4442 1.47772 17.5887 2.71661 18.3331 4.24439C19.3775 6.38328 18.9442 8.78883 17.0442 11.3944C15.5553 13.4333 13.4275 15.4999 10.3387 17.8999C10.2417 17.9752 10.1225 18.0162 9.99977 18.0166ZM5.62754 3.09994C5.03268 3.07679 4.44275 3.21608 3.92107 3.50286C3.39938 3.78964 2.96565 4.21308 2.66643 4.72772C1.80532 6.49439 2.19421 8.46105 3.85532 10.7333C5.62064 13.0103 7.68777 15.0363 9.99977 16.7555C12.3114 15.038 14.3785 13.0139 16.1442 10.7388C17.8109 8.46105 18.1942 6.49439 17.3331 4.73328C16.7775 3.62217 15.1109 2.73883 13.2553 3.26105C12.6603 3.43689 12.1088 3.73534 11.6361 4.13721C11.1634 4.53907 10.7801 5.03545 10.5109 5.59439C10.469 5.69628 10.3978 5.78343 10.3063 5.84477C10.2148 5.9061 10.1071 5.93885 9.99699 5.93885C9.88683 5.93885 9.77916 5.9061 9.68766 5.84477C9.59616 5.78343 9.52495 5.69628 9.4831 5.59439C9.21586 5.03405 8.83322 4.53652 8.36026 4.1344C7.88729 3.73228 7.33468 3.43467 6.73865 3.26105C6.37753 3.15617 6.00359 3.10195 5.62754 3.09994Z" fill="#121212" />
                                    </svg>

                                    <label className="title-btn-favorite-cart">В избранное</label>
                                </div>

                                <div className="delete-btn-div-cart" onClick={() => deleteProduct(el.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" >
                                        <path d="M15.0779 18.8888H4.92237C4.70859 18.8837 4.4979 18.8366 4.30233 18.7501C4.10677 18.6636 3.93016 18.5394 3.78261 18.3846C3.63506 18.2299 3.51945 18.0475 3.44238 17.8481C3.36532 17.6486 3.32831 17.4359 3.33348 17.2221V6.23877H4.44459V17.2221C4.43929 17.29 4.44746 17.3583 4.46863 17.423C4.4898 17.4877 4.52356 17.5476 4.56796 17.5992C4.61236 17.6509 4.66653 17.6932 4.72736 17.7238C4.78818 17.7544 4.85445 17.7727 4.92237 17.7777H15.0779C15.1458 17.7727 15.2121 17.7544 15.2729 17.7238C15.3338 17.6932 15.3879 17.6509 15.4323 17.5992C15.4767 17.5476 15.5105 17.4877 15.5317 17.423C15.5528 17.3583 15.561 17.29 15.5557 17.2221V6.23877H16.6668V17.2221C16.672 17.4359 16.635 17.6486 16.5579 17.8481C16.4809 18.0475 16.3652 18.2299 16.2177 18.3846C16.0701 18.5394 15.8935 18.6636 15.698 18.7501C15.5024 18.8366 15.2917 18.8837 15.0779 18.8888Z" fill="#121212" />
                                        <path d="M17.1004 4.99978H2.77821C2.63087 4.99978 2.48956 4.94125 2.38537 4.83706C2.28119 4.73288 2.22266 4.59157 2.22266 4.44423C2.22266 4.29688 2.28119 4.15558 2.38537 4.05139C2.48956 3.9472 2.63087 3.88867 2.77821 3.88867H17.1004C17.2478 3.88867 17.3891 3.9472 17.4933 4.05139C17.5975 4.15558 17.656 4.29688 17.656 4.44423C17.656 4.59157 17.5975 4.73288 17.4933 4.83706C17.3891 4.94125 17.2478 4.99978 17.1004 4.99978Z" fill="#121212" />
                                        <path d="M11.667 7.22217H12.7781V15.5555H11.667V7.22217Z" fill="#121212" />
                                        <path d="M7.22266 7.22217H8.33377V15.5555H7.22266V7.22217Z" fill="#121212" />
                                        <path d="M12.7782 3.25577H11.7227V2.22244H8.27821V3.25577H7.22266V2.22244C7.2223 1.93713 7.33171 1.66262 7.52821 1.45577C7.72472 1.24892 7.99326 1.12559 8.27821 1.11133H11.7227C12.0076 1.12559 12.2762 1.24892 12.4727 1.45577C12.6692 1.66262 12.7786 1.93713 12.7782 2.22244V3.25577Z" fill="#121212" />
                                    </svg>

                                    <label className="title-delete-btn-cart">Удалить</label>
                                </div>
                            </div>

                        </div>

                        <div className="cost-div-cart">
                            <h1 className="product-cost-title-cart">Стоимость</h1>
                            <h1 className="cost-price-cart">{el.price.slice(0, el.price.indexOf(' '))}</h1>
                            <div className="delivery-cart-information-btn">
                                <h3 className="delivery-information-cart-title">Информация о доставке</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none" className="arrow-cart-product">
                                    <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464467C7.97631 0.269205 7.65973 0.269205 7.46447 0.464467C7.2692 0.659729 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM-4.37114e-08 4.5L11 4.5L11 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#514A7E" />
                                </svg>
                            </div>
                        </div>

                    </div>
                )) : null}

                <div className="order-cart-products">
                    <div className="final-price-div-cart">
                        <h1 className="final-price-title-cart">Итого: <span className="final-sum-cart">{finalPrice}</span></h1>
                        <p className="products-count-cart">Товары, {products === null ? '0' : products.length} шт.</p>
                    </div>

                    <button className="order-button-cart"
                        onClick={order}>
                        <label className="title-order-btn-cart">Заказать</label>
                    </button>

                    <div className="checkbox-order-div-cart">
                        <input type="checkbox" className="checkbox-cart-order" onChange={flagOrder === false ? () => setFlag(true) : () => setFlag(false)} />
                        <label className="checkbox-text-order-cart">Согласен с условиями правил пользования торговой площадкой и правилами возврата</label>
                    </div>

                </div>
            </div>
            <Footer class="footer-cart-block" />
        </main>
    )
}

export default Cart