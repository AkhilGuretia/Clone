/* eslint-disable react/prop-types */
import { Header } from "./components/Header.jsx";
import { MainHomePage } from "./components/MainHomepage.jsx";
import { Footer } from "./components/Footer.jsx";
import { CartOverLay } from "./components/CartOverlay.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart((status) => (!status));
  }

  return (
    <div>
      <div className='App' >
        <Header handleShowCart={handleShowCart} />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainHomePage />} />

          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
      {showCart && <CartOverLay setShowCart={setShowCart} />}
    </div>
  )
}

export default App;
