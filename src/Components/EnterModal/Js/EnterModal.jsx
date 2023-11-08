import cl from "../Style/Css/EnterModal.module.css"
import exit from '../Style/Images/exit.svg'

const EnterModal = (props) => {



    function auth() {
        const mail = document.querySelector('.EnterModal_input_email__KZvKv').value
        const password = document.querySelector('.EnterModal_input_password__ICoqC').value
        const users = props.users
        
        for (let i = 0; i < users.length; i++) {
            users[i].email === mail ? users[i].password === password ? localStorage.setItem("auth", JSON.stringify(users[i])) : console.log("wrong password") : console.log("wrong email");
        }

        document.querySelector('.EnterModal_input_email__KZvKv').value = ""
        document.querySelector('.EnterModal_input_password__ICoqC').value = ""

        document.querySelector('.EnterModal_modal_for_enter__tj504').style.display = "none"
        document.querySelector('.profile-modal').style.display = "none"
    }
    
    function ge() {
        document.querySelector('.EnterModal_modal_for_enter__tj504').style.display = "none"
    }

    return (
        <div className={cl.modal_for_enter}>
            <button onClick={ge} className={cl.exit_modal}>
                <img src={exit} alt="" />
            </button>
            <div className={cl.form_enter}>
                <h1 className={cl.enter_text_h1}>Вход в личный кабинет</h1>

                <div className={cl.inputs_div_enter}>
                    <input type="text" placeholder="Электронная почта" className={cl.input_email} />
                    <input type="text" placeholder="Пароль" className={cl.input_password} />
                    <p className={cl.forgot_password_text_enter}>Не помню пароль</p>
                </div>

                <div className={cl.buttons_div_enter}>
                    <button onClick={auth} className={cl.enter_cabinet_btn}>Войти в кабинет</button>
                    <button className={cl.register_btn_enter}>Регистрация</button>
                </div>
            </div>

            <div className={cl.semicircle_modal}>

            </div>
        </div>
    )
}

export default EnterModal