import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Cart } from "./components/pages/Cart/Cart";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Category } from "./components/pages/Category";



function App() {

  return (
<>

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <ItemListContainer/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/item/:id" element={ < ItemDetailContainer />  } />
        <Route path="/category/:id" element={ < Category />  } />
      </Routes>
    </BrowserRouter>
      <Footer />
</>
  )
}

export default App
