/* eslint-disable react/prop-types */
import { Header } from "./components/Header.jsx";
import { MainHomePage } from "./components/MainHomepage.jsx";
import { Footer } from "./components/Footer.jsx";
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
      {showCart && <CartOverLay showCart={showCart} setShowCart={setShowCart} />}
    </div>
  )
}


const CartOverLay = ({ showCart, setShowCart }) => {

  return (
    <div
      className={showCart ? "modal-dialog show" : "modal-dialog"}
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setShowCart(false);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="modal-body">
          <p>Yeah</p>
        </div>
      </div>
    </div>
  );
}



export default App;
