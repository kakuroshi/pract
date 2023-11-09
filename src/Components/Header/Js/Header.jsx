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
import exit from "../Style/Images/exit.svg"
import { NavLink } from "react-router-dom"

const Header = (props) => {
    let nickname = ""
    let profileImgUser = ProfileImg

    let user = JSON.parse(localStorage.getItem("auth"))

    if (user !== null) {
        nickname = user.username
        profileImgUser = user.img
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

    const [getModal, setModal] = useState(null)

    const [showFilter, setFilters] = useState(null)

    const [openEnterModal, setEnterModal] = useState(null)

    return (
        <header className="header-div">
            <button onClick={showFilter === null ? () => {setFilters(1)} : () => {setFilters(null)}} className="menu-button-header">
                <img src={MenuIco} alt="Menu button" />
            </button>

            <div style={showFilter !== null ? {display: "block"} : {display: "none"}
            } className="filter-header">
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
                <button onClick={
                    getModal === null ? () => {setModal(1)} : () => {setModal(null)} 
                    } className="profile-button-header">
                    <img src={ProfileIco} alt="" />
                </button>
                <NavLink to="/Favorites">
                    <button className="like-button-header">
                        <img src={LikeIco} alt="" />
                    </button>
                </NavLink>
                    
                <NavLink to="/Cart">
                    <button className="cart-button-header">
                        <img src={CartIco} alt="" />
                    </button>
                </NavLink>
            </div>

            <div style={getModal !== null ? {display: "flex"} : {display: "none"}} className="profile-modal">
                <div className="profile-modal-img">
                    <img className="user-image-profile-modal" src={profileImgUser} alt="no img" />
                    <p style={nickname !== "" ? {display: "block"} : {display: "none"}} className="name-user-auth">{nickname}</p>
                </div>

                <button onClick={
                    openEnterModal === null ? () => {setEnterModal(1)} : () => {setEnterModal(null)}
                } style={user !== null ? {display: "none"} : {display: "block"}} className="enter-btn-modal">
                    Войти
                </button>

                <NavLink to="/Cart">
                    <button className="modal-cart">
                        <img src={CartIco} alt="" />
                        Корзина
                    </button>
                </NavLink>

                <img className="hr-modal" src={hr} alt="" />

                <NavLink to="/Favorites">
                    <button className="like-modal">
                        <img src={LikeIco} alt="" />
                        Избранное
                    </button>
                </NavLink>
                

                <button className="view-modal">
                    <img src={view} alt="" />
                    Просмотренные
                </button>

                <img style={user !== null ? {display: "block"} : {display: "none"}} className="hr-modal" src={hr} alt="" />

                <button onClick={ () => {
                    localStorage.removeItem('auth')
                    window.location.reload()
                }   
                } style={user !== null ? {display: "block"} : {display: "none"}} className="exit-account">
                    <img src={exit} alt="" />
                    Выйти
                </button>
            </div>

            <EnterModal setEnterModal={setEnterModal} openEnterModal={openEnterModal} users={props.users}/>
        </header>
    )
}

export default Header