import cl from "../Style/Css/EnterModal.module.css"
import exit from '../Style/Images/exit.svg'

const EnterModal = () => {
    
    return (
        <div className={cl.modal_for_enter}>
            <button className={cl.exit_modal}>
                <img src={exit} alt="" />
            </button>
            <form>
                <h1>Вход в личный кабинет</h1>

                <div className={cl.inputs_div_enter}>
                    <input type="text" className={cl.input_email} />
                    <input type="text" className={cl.input_password} />
                    <p className={cl.forgot_password_text_enter}>Не помню пароль</p>
                </div>

                <div className={cl.buttons_div_enter}>
                    <button className={cl.enter_cabinet_btn}>Войти в кабинет</button>
                    <button className={cl.register_btn_enter}>Регистрация</button>
                </div>
            </form>
        </div>
    )
}

export default EnterModal