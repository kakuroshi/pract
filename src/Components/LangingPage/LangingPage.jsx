import Header from "../Header/Js/Header"
import Welcome from "../Welcome/Js/Welcome"
import CatalogButton from "../Welcome/Js/CatalogButton"
import WhyChooseUs from "../WhyChooseUs/Js/WhyChooseUs"
import Promotions from "../Promotions/Js/Promotions"
import Feedback from "../Feedback/Js/Feedback"
import Faq from "../FAQ/Js/FAQ"
import Cooperation from "../Cooperation/Js/Cooperation"
import WelcomeToJoin from "../WelcomeToJoin/Js/WelcomeToJoin"
import Footer from "../Footer/Js/Footer"
import { users } from "../../user";

const LandingPage = () => {
    return (
        <main className="App">
        <Header users = {users} />
        <Welcome />
        <CatalogButton />
        <WhyChooseUs />
        <Promotions />
        <Feedback head="Отзывы наших покупателей" />
        <Faq />
        <Cooperation />
        <WelcomeToJoin />
        <Footer class="footer-div-landing" />
      </main>
    )
}

export default LandingPage