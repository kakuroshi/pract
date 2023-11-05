import "../Style/Css/Header.css"
import MenuIco from "../Style/Images/clarity_menu-line.svg"
import SearchIco from "../Style/Images/clarity_search-line.svg"
import ProfileIco from "../Style/Images/clarity_avatar-line.svg"
import LikeIco from "../Style/Images/clarity_heart-line.svg"
import CartIco from "../Style/Images/clarity_shopping-bag-line.svg"

const Header = () => {
    return (
        <div className="header-div">
            <button className="menu-button-header">
                <img src={MenuIco} alt="Menu button" />
            </button>

            <div className="search-div-header">
                <button className="search-button-header">
                <img src={SearchIco} alt="" />
                </button>

                <input type="text" placeholder="Поиск" className="input-search-header" />
            </div>

            <div className="header-buttons">
                <button className="profile-button-header">
                    <img src={ProfileIco} alt="" />
                </button>
                <button className="like-button-header">
                    <img src={LikeIco} alt="" />
                </button>
                <button className="cart-button-header">
                    <img src={CartIco} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Header