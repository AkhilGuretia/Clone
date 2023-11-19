/* eslint-disable react/prop-types */
import { MainHomePage } from "./pages/MainHomepage.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import Checkout from "./pages/Checkout.jsx";
import { CartOverLay } from "./components/CartOverlay.jsx";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const shopCategory = [
  {
    categoryName: "Performance",
    image:
      "https://images.plixlife.com/sections/Homepage_category-_504_by_411-_Performance_with_text-6c244d878616-2d58c1f7b189.png?auto=format&amp;sharp=20&amp;ixlib=react-9.3.0&amp;w=500",
    products: [
      {
        id: 11,
        name: "Ultra Vitality Effervescent",
        image:
          "https://images.plixlife.com/hosted/Ultra_Vitality_Effervescent_aqualogica_image-ab82b152e2fd.png?auto=format&fit=max&w=1024",
        rating: 4.7,
        quantity: "Pack of 4 tubes",
        originalBasePrice: 1400,
        originalPrice: 1400,
        specialBasePrice: 1246,
        specialPrice: 1246,
        discount: "-11%",
        itemDiscount: 154,
        orderedQuantity: 1,
      },

      {
        id: 12,
        name: "L-Carnitine ACV",
        image:
          "https://images.plixlife.com/hosted/L-Carnitine_Acv_Effervescent_aqualogica_image-91711fc819e7.png?auto=format&fit=max&w=420",
        rating: 5.0,
        quantity: "Pack of 4 tubes",
        originalBasePrice: 1600,
        originalPrice: 1600,
        specialBasePrice: 1296,
        specialPrice: 1296,
        discount: "-19%",
        itemDiscount: 304,
        orderedQuantity: 1,
      },

      {
        id: 13,
        name: "KSM-66 Aswaghandha",
        image:
          "https://images.plixlife.com/hosted/Ashwa-6895b63b605c.png?auto=format&fit=max&w=420",
        rating: 4.7,
        quantity: "Pack of 4 tubes",
        originalPrice: 1400,
        specialPrice: 1246,
        originalBasePrice: 1400,
        specialBasePrice: 1246,
        discount: "-11%",
        itemDiscount: 154,
        orderedQuantity: 1,
      },
    ],
  },

  {
    categoryName: "Weight",
    image:
      "https://images.plixlife.com/hosted/Homepage_category-_504_by_411-_Weight_with_text-b5789bdad8f4.png?auto=format&fit=max&w=768",
    products: [
      {
        id: 21,
        name: "Apple Cider Vinegar",
        image:
          "https://images.plixlife.com/hosted/ACV-98916cba8f9f.png?auto=format&fit=max&w=420",
        rating: 4.8,
        quantity: "Pack of 4 tubes",
        originalPrice: 1400,
        specialPrice: 1246,
        originalBasePrice: 1400,
        specialBasePrice: 1246,
        discount: "-11%",
        itemDiscount: 154,
        orderedQuantity: 1,
      },

      {
        id: 22,
        name: "ACV Multi Power",
        image:
          "https://images.plixlife.com/hosted/ACV_Multipower_Effervescent-babcbdd36c8b.jpg?auto=format&fit=max&w=420",
        rating: 4.5,
        quantity: "Pack of 4 tubes",
        originalPrice: 1400,
        specialPrice: 1246,
        originalBasePrice: 1400,
        specialBasePrice: 1246,
        discount: "-11%",
        itemDiscount: 154,
        orderedQuantity: 1,
      },

      {
        id: 23,
        name: "Drink Sleep Burn",
        image:
          "https://images.plixlife.com/hosted/drink_sleep_burm-fad108166509.jpg?auto=format&fit=max&w=420",
        rating: 4.8,
        quantity: "Pack of 1 KG",
        originalPrice: 2499,
        specialPrice: 1800,
        originalBasePrice: 2499,
        specialBasePrice: 1800,
        discount: "-28%",
        itemDiscount: 699,
        orderedQuantity: 1,
      },
    ],
  },

  {
    categoryName: "Hair",
    image:
      "https://images.plixlife.com/hosted/Homepage_category-_504_by_411-_Hair_with_text-17cf7b693f43.png?auto=format&fit=max&w=768",
    products: [
      {
        id: 31,
        name: "Hair Growth Serum",
        image:
          "https://images.plixlife.com/hosted/Hair_Growth_Serum_aqualogica_image-0306652cdc3b.png?auto=format&fit=max&w=420",
        rating: 4.8,
        quantity: "Pack of 1",
        originalPrice: 1199,
        specialPrice: 888,
        originalBasePrice: 1199,
        specialBasePrice: 888,
        discount: "-26%",
        itemDiscount: 311,
        orderedQuantity: 1,
      },

      {
        id: 32,
        name: "Flaunt Your Hair",
        image:
          "https://images.plixlife.com/hosted/Flaunt_your_Hair_-b87d062b20e0.jpg?auto=format&fit=max&w=420",
        rating: 4.8,
        quantity: "Pack of 4 tubes",
        originalPrice: 1400,
        specialPrice: 1246,
        originalBasePrice: 1400,
        specialBasePrice: 1246,
        discount: "-11%",
        itemDiscount: 154,
        orderedQuantity: 1,
      },

      {
        id: 33,
        name: "Healthier Hair Gummies",
        image:
          "https://images.plixlife.com/hosted/Healthier_Hair_Gummies_aqualogica_image-9ec8b53fc2b5.png?auto=format&fit=max&w=420",
        rating: 4.8,
        quantity: "Pack of 1 ",
        originalPrice: 999,
        specialPrice: 720,
        originalBasePrice: 999,
        specialBasePrice: 720,
        discount: "-28%",
        itemDiscount: 279,
        orderedQuantity: 1,
      },
    ],
  },

  {
    categoryName: "Skin",
    image:
      "https://images.plixlife.com/sections/Homepage_category-_504_by_411-_Skin_with_text-f34b1d8160bc-bacd51a6e32c.avif?auto=format&sharp=20&ixlib=react-9.3.0&w=500&dpr=1&q=75",
    products: [
      {
        id: 41,
        name: "Glowy Skin Effervescent",
        image:
          "https://images.plixlife.com/hosted/Gluta-902e447a093e.png?auto=format&fit=max&w=420",
        rating: 4.7,
        quantity: "Pack of 1 Tube",
        originalPrice: 850,
        specialPrice: 849,
        originalBasePrice: 850,
        specialBasePrice: 849,
        discount: "-1%",
        itemDiscount: 1,
        orderedQuantity: 1,
      },

      {
        id: 42,
        name: "Jamun Acne Marks Serum",
        image:
          "https://images.plixlife.com/hosted/Jamun_Acne_Marks-816b5f357f7c.png?auto=format&fit=max&w=420",
        rating: 4.6,
        quantity: "Pack of 1",
        originalPrice: 575,
        specialPrice: 547,
        originalBasePrice: 575,
        specialBasePrice: 547,
        discount: "-5%",
        itemDiscount: 28,
        orderedQuantity: 1,
      },

      {
        id: 43,
        name: "Pineapple Facewash & Serum",
        image:
          "https://images.plixlife.com/hosted/Pineapple_Serum__Facewash-c8a467012c39.png?auto=format&fit=max&w=420",
        rating: 4.6,
        quantity: "Pack of 1 ",
        originalPrice: 1075,
        specialPrice: 699,
        originalBasePrice: 1075,
        specialBasePrice: 699,
        discount: "-35%",
        itemDiscount: 376,
        orderedQuantity: 1,
      },
    ],
  },
];

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [isAppOnHomePage, setIsAppOnHomePage] = useState(true);

  const [cartItems, setCartItems] = useState([]);

  const [paymentSummary, setPaymentSummary] = useState({
    mrp: 0,
    sPrice: 0,
    discount: 0,
  });

  useEffect(() => {
    if (!isAppOnHomePage) document.title = "Checkout Page";

    return () => (document.title = "Plixlife");
  }, [isAppOnHomePage]);

  useEffect(() => {
    const handlePaymentSummary = () => {
      if (cartItems.length > 0) {
        let mrp = 0;
        let sPrice = 0;
        let discount = 0;
        cartItems.forEach((item) => {
          mrp += item.originalBasePrice * item.orderedQuantity;
          sPrice += item.specialBasePrice * item.orderedQuantity;
          discount += item.itemDiscount * item.orderedQuantity;
        });
        setPaymentSummary({ mrp, sPrice, discount });
      } else {
        let mrp = 0;
        let sPrice = 0;
        let discount = 0;
        setPaymentSummary({ mrp, sPrice, discount });
      }
    };
    handlePaymentSummary();
  }, [cartItems]);

  const handleShowCart = () => {
    setShowCart((status) => !status);
  };

  const handleAddCartItem = (newItem) => {
    let approve = true;
    cartItems.forEach((item) => {
      if (item.id === newItem.id) approve = false;
    });
    approve && setCartItems((cartItems) => [...cartItems, newItem]);
  };

  const handleRemoveItem = (id) => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  };

  const handleIncreaseUpdateItemQuantity = (id, ItemQuantity) => {
    setCartItems((cartItems) => {
      return cartItems.map((item) => {
        const newOgPrice = item.originalBasePrice * ItemQuantity;
        const newSprice = item.specialBasePrice * ItemQuantity;
        return item.id === id
          ? {
              ...item,
              orderedQuantity: ItemQuantity,
              originalPrice: newOgPrice,
              specialPrice: newSprice,
            }
          : item;
      });
    });
  };

  const handleDecreaseUpdateItemQuantity = (id, ItemQuantity) => {
    setCartItems((cartItems) => {
      return cartItems.map((item) => {
        return item.id === id
          ? {
              ...item,
              orderedQuantity: ItemQuantity,
              originalPrice: item.originalBasePrice * ItemQuantity,
              specialPrice: item.specialBasePrice * ItemQuantity,
            }
          : item;
      });
    });
  };

  const appStyles = {
    position: "fixed",
  };

  return (
    <div>
      <div className="App" style={showCart ? appStyles : {}}>
        {isAppOnHomePage && (
          <Header
            handleShowCart={handleShowCart}
            cartItemsLength={cartItems.length}
          />
        )}

        {showCart && (
          <CartOverLay
            setShowCart={setShowCart}
            setIsAppOnHomePage={setIsAppOnHomePage}
            cartItems={cartItems}
            handleRemoveItem={handleRemoveItem}
            handleDecreaseUpdateItemQuantity={handleDecreaseUpdateItemQuantity}
            handleIncreaseUpdateItemQuantity={handleIncreaseUpdateItemQuantity}
            paymentSummary={paymentSummary}
          />
        )}

        <Routes>
          <Route
            path="/"
            element={
              <MainHomePage
                handleShowCart={handleShowCart}
                shopCategory={shopCategory}
                handleAddCartItem={handleAddCartItem}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                setIsAppOnHomePage={setIsAppOnHomePage}
                cartItems={cartItems}
                paymentSummary={paymentSummary}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default App;
