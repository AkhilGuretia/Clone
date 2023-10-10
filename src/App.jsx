/* eslint-disable react/prop-types */
import { MainHomePage } from "./pages/MainHomepage.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import Checkout from "./pages/Checkout.jsx";
import { CartOverLay } from "./components/CartOverlay.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [isAppOnHomePage, setIsAppOnHomePage] = useState(true);

  const handleShowCart = () => {
    setShowCart((status) => !status);
  };

  return (
    <div>
      <div className="App">
        {isAppOnHomePage && <Header handleShowCart={handleShowCart} />}

        <Routes>
          <Route
            path="/"
            element={<MainHomePage handleShowCart={handleShowCart} />}
          />
          <Route
            path="/checkout"
            element={<Checkout setIsAppOnHomePage={setIsAppOnHomePage} />}
          />
        </Routes>

        <Footer />
      </div>
      {showCart && (
        <CartOverLay
          setShowCart={setShowCart}
          setIsAppOnHomePage={setIsAppOnHomePage}
        />
      )}
    </div>
  );
};

export default App;
