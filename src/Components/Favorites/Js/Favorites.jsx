import "../Style/Css/Favorites.css"
import Header from "../../Header/Js/Header"
import Footer from "../../Footer/Js/Footer"
import {users} from "../../../user"
import CartIco from "../Style/Images/clarity_shopping-bag-line.svg"
import LikeIco from "../Style/Images/clarity_heart-line.svg"
import view from "../Style/Images/view.svg"
import CardProduct from "../../CardProduct/Js/CardProduct"

const Favorites = () => {

    let favorites = JSON.parse(localStorage.getItem("like"))
    // console.log(favorites);

    function getEmpty() {
        if (favorites.length === 0) {
            return (<h1 className="empty-favorite">В избранном пусто</h1>)
        }
    }

    return (
        <main className="favorites-main">
            <Header users={users} />
            <div>
                <h1 className="favorite-h1">Избранное</h1>

                <div className="main-favorite">
                    <div className="left-favorite">
                        <button className="modal-cart">
                            <img src={CartIco} alt="" />
                            Корзина
                        </button>

                        <hr />

                        <div className="favorite-btns-down">
                            <button className="like-left-favorite">
                                <img className="like-ico-product-" src={LikeIco} alt="" />
                                Избранное
                            </button>
                            

                            <button className="view-modal">
                                <img src={view} alt="" />
                                Просмотренные
                            </button>
                        </div>
                    </div>

                    <div className="right-favorite">

                        {
                            getEmpty()
                        }
                        {favorites.map( el => (
                            <CardProduct class="favourite-product" classImg="img-favorite" name={el.name} newPrice={el.newPrice} oldPrice={el.oldPrice} rating={el.rating} img={el.img} id={el.id} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer class="footer-favorites" />
        </main>
    )
}

export default Favorites