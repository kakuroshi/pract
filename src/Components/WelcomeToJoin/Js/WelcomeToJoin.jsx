import "../Style/Css/WelcomeToJoin.css"

const WelcomeToJoin = () => {
    return (
        <div className="welcome-to-join">
            <form className="form-join">
                <div className="text-join-div">
                    <p className="join-text">Приглашаем  к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</p>
                </div>
                <div className="inputs-join">
                    <input type="text" placeholder="Ваше имя" />
                    <input type="text" placeholder="Номер телефона" />
                    <input type="text" placeholder="Электронная почта" />
                </div>
                
                <div className="check-join">
                    <input className="checkbox-join" type="checkbox" />
                    <p className="check-text">Даю согласие на обработку персональных данных</p>
                </div>

                <button className="send-form">
                    Отправить
                    <svg className="arrow-join" xmlns="http://www.w3.org/2000/svg" width="26" height="5" viewBox="0 0 26 5" fill="none">
                        <path d="M25.1768 2.83693C25.2744 2.7393 25.2744 2.58101 25.1768 2.48338L23.5858 0.892389C23.4882 0.794758 23.3299 0.794758 23.2322 0.892389C23.1346 0.99002 23.1346 1.14831 23.2322 1.24594L24.6464 2.66016L23.2322 4.07437C23.1346 4.172 23.1346 4.33029 23.2322 4.42792C23.3299 4.52555 23.4882 4.52555 23.5858 4.42792L25.1768 2.83693ZM0 2.91016H25V2.41016H0V2.91016Z" fill="#FFFDF5"/>
                    </svg>
                </button>
            </form>

            <svg className="ss" xmlns="http://www.w3.org/2000/svg" width="100" height="201" viewBox="0 0 100 201" fill="none">
                <mask id="path-1-inside-1_211_97" fill="white">
                    <path d="M100.023 0.0114919C86.8908 0.00998279 73.8869 2.59507 61.7538 7.61914C49.6206 12.6432 38.5959 20.0079 29.3089 29.2927C20.022 38.5775 12.6548 49.6006 7.62793 61.7325C2.60107 73.8645 0.0130005 86.8678 0.0114919 100C0.00998336 113.132 2.59507 126.136 7.61914 138.269C12.6432 150.402 20.0079 161.427 29.2927 170.714C38.5775 180.001 49.6006 187.368 61.7325 192.395C73.8645 197.422 86.8678 200.01 100 200.011L100.011 100.011L100.023 0.0114919Z"/>
                </mask>
                <path d="M100.023 0.0114919C86.8908 0.00998279 73.8869 2.59507 61.7538 7.61914C49.6206 12.6432 38.5959 20.0079 29.3089 29.2927C20.022 38.5775 12.6548 49.6006 7.62793 61.7325C2.60107 73.8645 0.0130005 86.8678 0.0114919 100C0.00998336 113.132 2.59507 126.136 7.61914 138.269C12.6432 150.402 20.0079 161.427 29.2927 170.714C38.5775 180.001 49.6006 187.368 61.7325 192.395C73.8645 197.422 86.8678 200.01 100 200.011L100.011 100.011L100.023 0.0114919Z" fill="#514A7E" stroke="#514A7E" stroke-width="2" mask="url(#path-1-inside-1_211_97)"/>
            </svg>

            <div className="semicircle-join"></div>
        </div>
    )
}

export default WelcomeToJoin