import Header from "../../Header/Js/Header"
import Footer from "../../Footer/Js/Footer"
import arrow from "../Style/Images/arrow.svg"
import up from "../Style/Images/up.svg"
import CardProduct from "../../CardProduct/Js/CardProduct"
import "../Style/Css/Catalog.css"
import Test from "../Style/Images/Rectangle_23.png"
import Test2 from "../Style/Images/Rectangle_24.png"
import Test3 from "../Style/Images/Rectangle_25.png"
import Test4 from "../Style/Images/Rectangle_26.png"
import {users} from "../../../user"
import { useState } from "react"

const Catalog = () => {
    let path = 'Главная/ Женщинам /'
    let path2 = 'Блузки и рубашки'
    let path3 = 'Блузки и рубашки для женщин'

    let products = [
        {
            name: "Блузка",
            newPrice: "50.00 Р",
            rating: 3,
            img: Test,
            id: 0
        },
        {
            name: "Сережа",
            newPrice: "500.00 Р",
            rating: 3,
            img: Test2,
            id: 1
        },
        {
            name: "Вилсон",
            newPrice: "5000.00 Р",
            rating: 4,
            img: Test3,
            id: 2
        },
        {
            name: "Данечка",
            newPrice: "500000000.00 Р",
            rating: 3,
            img: Test4,
            id: 3
        },
        {
            name: "Вилсон",
            newPrice: "5000.00 Р",
            rating: 4,
            img: Test3,
            id: 2
        },
        {
            name: "Вилсон",
            newPrice: "5000.00 Р",
            rating: 4,
            img: Test3,
            id: 2
        },
        {
            name: "Вилсон",
            newPrice: "5000.00 Р",
            rating: 4,
            img: Test3,
            id: 2
        },
        {
            name: "Вилсон",
            newPrice: "5000.00 Р",
            rating: 4,
            img: Test3,
            id: 2
        },
        {
            name: "Вилсон",
            newPrice: "5000.00 Р",
            rating: 4,
            img: Test3,
            id: 2
        }
    ]

    const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL', '36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56', 'Универсальный']
    const colors = ['white', '#000', '#A61F1F', '#3D7B52', '#EAD943', '#296297', '#C4C4C4', '#C4C4C4', '#C4C4C4', '#C4C4C4']

    const [size, setSize] = useState('none')
    const [color, setColor] = useState('none')

    const handlerScrollUp = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          window.scrollBy(0, -50);
          setTimeout(handlerScrollUp, 10);
        }
      }

    return (
        <main className="catalog-main">
            <Header users={users}/>

            <div className="path-catalog">
                <h3 className="catalog-path-text">{path}</h3>
                <h3 className="catalog-path-text-help">{path2}</h3>
            </div>
            

            <h1 className="name-catalog-h1">{path3}</h1>

            <div className="main-catalog">
                <div className="left-filter-catalog">
                <h3 className="sort-catalog-text">Сортировать по:</h3>
                    <div className="filter-price">
                        <p>Цена, б.р</p>
                        <input type="range" ></input>
                    </div>
                    
                    <div className="size-div-catalog">
                        <button onClick={size === 'none' ? () => setSize('block') : () => setSize('none')} className="size-button-catalog">
                            <label>Размер</label>
                            <img style={size === 'block' ? {rotate: '180deg'} : {rotate: '0deg'}} src={arrow} alt=""></img>
                        </button>
                        <div style={{display: size}}>
                            {sizes.map(size => (
                                <div className="size-handler-catalog">
                                    <input type='checkbox' className="checkbox-colors-catalog"/>
                                    <label className="checkbox-label-colors-catalog">{size}</label>
                                </div>
                            ))}
                        </div>
                    </div>  

                    <div className="colors-catalog-div">
                        <button
                        onClick={color === 'none' ? () => setColor('flex') : () => setColor('none')}
                        className="colors-button-catalog">
                            <label>Цвета</label>
                            <img style={color === 'flex' ? {rotate: "180deg"} : {rotate: "0deg"}} src={arrow} alt="no img" />
                        </button>
                        <div style={{display: color}} className="color-handler-catalog">
                            {colors.map(color => (
                                <div className="catalog-color" style={{backgroundColor: color}}></div>
                            ))}
                        </div>
                    </div>

                    <button onClick={handlerScrollUp} className="up-catalog-button">
                        <img src={up} alt="" />
                    </button>
                </div>

                <div className="right-block-catalog">

                    <div className="semicircle-catalog"></div>

                    <div className="catalog-sort-div">
                        <h3 className="sort-catalog-text">Популярности</h3>
                        <h3 className="sort-catalog-text">Рейтингу</h3>
                        <h3 className="sort-catalog-text">Цене</h3>
                        <h3 className="sort-catalog-text">Скидке</h3>
                        <h3 className="sort-catalog-text">Обновлению</h3>
                    </div>

                    <div className="products-catalog-div">
                    {
                            products.map(el =>
                            <CardProduct class="catalog-product" classImg="catalog-img-product" name={el.name} newPrice={el.newPrice} oldPrice={el.oldPrice} rating={el.rating} img={el.img} id={el.id} />
                            )
                        }
                    </div>
                </div>
                
            </div>

            <Footer class="footer-catalog" />
        </main>
    )
}

export default Catalog