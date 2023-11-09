import "../Style/Css/EnterModal.css"
import exit from '../Style/Images/exit.svg'
import { useState } from "react"

const EnterModal = (props) => {

    const [exitModal, setExit] = useState(0)

    const [mail, setMail] = useState(null)

    const [password, setPassword] = useState(null)

    function auth() {
        const users = props.users
        
        for (let i = 0; i < users.length; i++) {
            users[i].email === mail ? users[i].password === password ? localStorage.setItem("auth", JSON.stringify(users[i])) : console.log("wrong password") : console.log("wrong email");
        }

        window.location.reload()
    }

    return (
        <div style=
        {
            exitModal === 1 || props.openEnterModal === null ? {display: "none"} : {display: "block"}
        } className="modal_for_enter" >
            <button onClick={
                () => {
                if (exitModal === 0 || props.EnterModal === null) {
                    setExit(1)
                    props.setEnterModal(null);
                    } else{
                        setExit(0)
                        props.setEnterModal(1)
                    }
                }
            }
            className="exit_modal">
                <img src={exit} alt="" />
            </button>
            <div className="form_enter">
                <h1 className="enter_text_h1">Вход в личный кабинет</h1>

                <div className="inputs_div_enter">
                    <input value={mail} onInput={e => setMail(e.target.value)} type="text" placeholder="Электронная почта" className="input_email" />
                    <input value={password} onInput={e => setPassword(e.target.value)} type="text" placeholder="Пароль" className="input_password" />
                    <p className="forgot_password_text_enter">Не помню пароль</p>
                </div>

                <div className="buttons_div_enter">
                    <button onClick={auth} className="enter_cabinet_btn">Войти в кабинет</button>
                    <button className="register_btn_enter">Регистрация</button>
                </div>
            </div>

            <div className="semicircle_modal">

            </div>
        </div>
    )
}

export default EnterModal