import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Layout from "./components/layout/Layout.jsx";
import Checkout from "./pages/checkout/Checkout";
import CartContextProvider from "./context/CartContext.jsx";
import NotFound from "./components/notFound/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" duration={4000} />
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
