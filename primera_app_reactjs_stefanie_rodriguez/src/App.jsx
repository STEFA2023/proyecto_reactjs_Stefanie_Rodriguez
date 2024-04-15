import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Cart } from "./components/pages/Cart/Cart";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Category } from "./components/pages/Category";
import { Layout } from "./components/layout/Layout";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
          </Route>
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
