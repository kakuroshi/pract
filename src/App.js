import Header from "./Components/Header/Js/Header"
import Welcome from "./Components/Welcome/Js/Welcome"
import CatalogButton from "./Components/Welcome/Js/CatalogButton";
import WhyChooseUs from "./Components/WhyChooseUs/Js/WhyChooseUs";
import Promotions from "./Components/Promotions/Js/Promotions";
import Feedback from "./Components/Feedback/Js/Feedback";
import Faq from "./Components/FAQ/Js/FAQ";
import Cooperation from "./Components/Cooperation/Js/Cooperation";
import WelcomeToJoin from "./Components/WelcomeToJoin/Js/WelcomeToJoin";
import Footer from "./Components/Footer/Js/Footer";
import { users } from "./user";

function App() {
  return (
    <div className="App">
      <Header users = {users} />
      <Welcome />
      <CatalogButton />
      <WhyChooseUs />
      <Promotions />
      <Feedback />
      <Faq />
      <Cooperation />
      <WelcomeToJoin />
      <Footer />
    </div>
  );
}

export default App;
