import "../Style/Css/Header.css"
import MenuIco from "../Style/Images/clarity_menu-line.svg"
import SearchIco from "../Style/Images/clarity_search-line.svg"
import ProfileIco from "../Style/Images/clarity_avatar-line.svg"
import LikeIco from "../Style/Images/clarity_heart-line.svg"
import CartIco from "../Style/Images/clarity_shopping-bag-line.svg"
import ProfileImg from "../Style/Images/profile.svg"
import view from "../Style/Images/view.svg"
import hr from "../Style/Images/Line_68.svg"
import logo from "../Style/Images/logo.png"
import { useState } from "react"
import EnterModal from "../../EnterModal/Js/EnterModal"

const Header = (props) => {
    let nickname, profileImgUser

    let user = JSON.parse(localStorage.getItem("auth"))

    if (user !== null) {
        nickname = user.username
        profileImgUser = user.img

        console.log(nickname);
    }

    const filterBtns = [
        {
            id: 0,
            text: "Женщинам "         
        },
        {
            id: 1,
            text: "Мужчинам"         
        },
        {
            id: 2,
            text: "Детям"         
        },
        {
            id: 3,
            text: "Обувь"         
        },
        {
            id: 4,
            text: "Игрушки"         
        },
        {
            id: 5,
            text: "Аксессуары"         
        },
        {
            id: 6,
            text: "Большие размеры"         
        },
        {
            id: 7,
            text: "Дополнительно"         
        },
        {
            id: 8,
            text: "Акции"         
        },
    ]

    const defaultFilters = [
        {
            id: 0,
            text: 'Майки'
        },
        {
            id: 1,
            text: 'Костюмы'
        },
        {
            id: 2,
            text: 'Брюки'
        },
        {
            id: 3,
            text: 'Джинсы'
        },
        {
            id: 4,
            text: 'Юбки'
        },
        {
            id: 5,
            text: 'Шорты'
        },
        {
            id: 6,
            text: 'Свитшоты, худи'
        },
        {
            id: 7,
            text: 'Блузки и рубашки'
        },
        {
            id: 8,
            text: 'Пиджаки и жакеты'
        },
        {
            id: 9,
            text: 'Платья и сарафаны'
        },
        {
            id: 10,
            text: 'Верхняя одежда'
        }
    ]

    const [moreFilters, setFilter] = useState(defaultFilters)

    const [activeFilter, setActive] = useState(null)

    function getModal(){
        document.querySelector(".profile-modal").style.display === "flex" ? document.querySelector(".profile-modal").style.display = "none" : document.querySelector(".profile-modal").style.display = "flex"
    }

    function showFilter() {
        document.querySelector(".filter-header").style.display === "block" ? document.querySelector(".filter-header").style.display = "none" : document.querySelector(".filter-header").style.display = "block"
    }

    function openEnterModal () {
        document.querySelector(".EnterModal_modal_for_enter__tj504").style.display === "block" ? document.querySelector(".EnterModal_modal_for_enter__tj504").style.display = "none" : document.querySelector(".EnterModal_modal_for_enter__tj504").style.display = "block"
    }

    return (
        <div className="header-div">
            <button onClick={showFilter} className="menu-button-header">
                <img src={MenuIco} alt="Menu button" />
            </button>

            <div className="filter-header">
                <img className="logo-filter" src={logo} alt="" />
                <div className="text-filters-divs">
                    <div className="left-text-filters">
                        {
                            filterBtns.map(el => (
                                <p key={el.id} onClick={
                                    () => {
                                        setActive(el.id)
                                        if (el.id === 0) {
                                            setFilter(defaultFilters)
                                        }
                                        
                                        if (el.id === 1) {
                                            setFilter(
                                                [
                                                    {
                                                        id: 0,
                                                        text: 'Майки'
                                                    },
                                                    {
                                                        id: 1,
                                                        text: 'Костюмы'
                                                    },
                                                    {
                                                        id: 2,
                                                        text: 'Брюки'
                                                    },
                                                    {
                                                        id: 3,
                                                        text: 'Джинсы'
                                                    },
                                                    {
                                                        id: 4,
                                                        text: 'Шорты'
                                                    },
                                                    {
                                                        id: 5,
                                                        text: 'Свитшоты, худи'
                                                    },
                                                    {
                                                        id: 6,
                                                        text: 'Рубашки'
                                                    },
                                                    {
                                                        id: 7,
                                                        text: 'Пиджаки и жакеты'
                                                    },
                                                    {
                                                        id: 8,
                                                        text: 'Верхняя одежда'
                                                    }
                                                ]
                                            )
                                        } else {
                                            setFilter(defaultFilters)
                                        }
                                    }
                                
                                } style={activeFilter === el.id ? {fontSize: '1.5em'} : {fontSize: '1em'}} className="filter-text">{el.text}</p>
                            ))
                        }
                    </div>

                    <div style={activeFilter === null ? {display: "none"} : {display: "block"}} className="right-text-filters">
                        {moreFilters.map(el => (
                            <p className="more-filter-text">{el.text}</p>
                        ))}
                    </div>
                </div>

            </div>

            <div className="search-div-header">
                <button className="search-button-header">
                <img src={SearchIco} alt="" />
                </button>

                <input type="text" placeholder="Поиск" className="input-search-header" />
            </div>

            <div className="header-buttons">
                <button onClick={getModal} className="profile-button-header">
                    <img src={ProfileIco} alt="" />
                </button>
                <button className="like-button-header">
                    <img src={LikeIco} alt="" />
                </button>
                <button className="cart-button-header">
                    <img src={CartIco} alt="" />
                </button>
            </div>

            <div className="profile-modal">
                <div className="profile-modal-img">
                    <img src={ProfileImg} alt="no img" />
                </div>

                <button onClick={openEnterModal} className="enter-btn-modal">
                    Войти
                </button>

                <button className="modal-cart">
                    <img src={CartIco} alt="" />
                    Корзина
                </button>

                <img className="hr-modal" src={hr} alt="" />

                <button className="like-modal">
                    <img src={LikeIco} alt="" />
                    Избранное
                </button>

                <button className="view-modal">
                    <img src={view} alt="" />
                    Просмотренные
                </button>
            </div>

            <EnterModal users={props.users}/>
        </div>
    )
}

export default Header