import LandingPage from "./Components/LangingPage/LangingPage";
import Catalog from "./Components/Catalog/Js/Catalog";
import Favorites from "./Components/Favorites/Js/Favorites";
import ProductPage from "./Components/ProductPage/Js/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/Catalog" element={<Catalog />}/>
      <Route path="/Favorites" element={<Favorites />} />
      <Route path="/ProductPage" element={<ProductPage />} />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
