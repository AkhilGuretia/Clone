import { useState } from "react";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export const CartOverLay = ({
  setShowCart,
  setIsAppOnHomePage,
  cartItems,
  handleRemoveItem,
  handleDecreaseUpdateItemQuantity,
  handleIncreaseUpdateItemQuantity,
  paymentSummary,
}) => {
  return (
    <div className="overlayFarzicom overlayFarzicom--plixlifefcCart">
      <div className="overlayFarzicom__right">
        <div className="cart-plix">
          <div className="overlayFarzicom__header">
            <div className="overlayFarzicom__header__text">Shopping Cart</div>
            <div
              type="button"
              aria-label="Close"
              onClick={() => {
                setShowCart(false);
              }}
              className="cart_closebutton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  fill="#FEFFED"
                  d="M20.508 17.469c.562.625.562 1.562 0 2.125-.625.625-1.563.625-2.125 0l-7.375-7.438-7.438 7.438c-.625.625-1.562.625-2.125 0-.625-.563-.625-1.5 0-2.125l7.438-7.438-7.438-7.437C.82 1.969.82 1.03 1.445.469a1.369 1.369 0 012.063 0l7.5 7.5L18.445.53a1.369 1.369 0 012.063 0c.625.563.625 1.5 0 2.125l-7.438 7.375 7.438 7.438z"
                ></path>
              </svg>
            </div>
          </div>
          <div> </div>
          <div
            className="cart-plix__info__container"
            id="cart-plix-scrollable-area"
          >
            <div className="cart-plix__sectionHeader">Products Added:</div>
            <div className="cart-plix__info">
              <div className="popup_wrapper_box"></div>
              <div className="sc-bGZrDQ KZpUv">
                {cartItems.length > 0 &&
                  cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      handleRemoveItem={handleRemoveItem}
                      handleDecreaseUpdateItemQuantity={
                        handleDecreaseUpdateItemQuantity
                      }
                      handleIncreaseUpdateItemQuantity={
                        handleIncreaseUpdateItemQuantity
                      }
                    />
                  ))}
              </div>
            </div>
            <hr className="sc-eXoFXb eaeJrc" />

            <div className="cart_footer">
              <div className="sc-eMigcr kSuHr">
                <div className="sc-fzsDOv itnVKs">Payment Summary:</div>
                <div className="sc-gPWkxV kRHEZA">
                  <div className="plixlife sc-itybZL ktvXNP">
                    <div>MRP</div>
                    <div>
                      <span>₹{paymentSummary.mrp}</span>
                    </div>
                  </div>
                  <div className="plixlife-itemDiscount sc-itybZL ktvXNP">
                    <div>Item Discount</div>
                    <div>
                      <span>₹{paymentSummary.discount}</span>
                    </div>
                  </div>
                  <div className="plixlife sc-itybZL ktvXNP">
                    <div>Net Price</div>
                    <div>
                      <span>₹{paymentSummary.sPrice}</span>
                    </div>
                  </div>
                  <div className="plixlife sc-itybZL ktvXNP">
                    <div>Coupon Discount</div>
                    <div>
                      <span>₹0.00</span>
                    </div>
                  </div>
                </div>
                <div className="sc-gPWkxV kRHEZA"> </div>
                <div className="sc-gPWkxV kRHEZA">
                  <hr className="sc-jVODtj hvsSAu" />
                </div>
                <div className="sc-gPWkxV kRHEZA">
                  <div className="plixlife-sub-total sc-itybZL ktvXNP">
                    <div>Sub Total</div>
                    <div>
                      <span>₹{paymentSummary.sPrice}</span>
                    </div>
                  </div>
                </div>
                <div className="sc-gPWkxV kRHEZA">
                  <div className="plixlife-grand-total sc-itybZL ktvXNP">
                    <div>Grand Total</div>
                    <div>
                      <span>₹{paymentSummary.sPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-plix__footer__wrapper">
            <div className="cart-plix__footer">
              <div className="cart-plix__footer__totalPrice">
                <div>
                  <span className="cart-plix__footer__totalPrice__key">
                    Total
                  </span>
                  <span className="cart-plix__footer__totalPrice__value">
                    <span data-test="totalPrice">₹{paymentSummary.sPrice}</span>
                  </span>
                </div>
                <div className="free-shipping">
                  <div className="Sticker truckicon_andtext">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="9"
                      fill="none"
                      viewBox="0 0 13 9"
                    >
                      <path
                        fill="#1EAF6D"
                        d="M1.16 0h8.113v2.125h1.738L12.75 4.25v2.656h-1.16c0 .423-.182.828-.508 1.127a1.822 1.822 0 01-1.23.467c-.46 0-.903-.168-1.23-.467a1.53 1.53 0 01-.508-1.127H4.636c0 .423-.183.828-.509 1.127a1.822 1.822 0 01-1.23.467c-.46 0-.903-.168-1.229-.467a1.53 1.53 0 01-.509-1.127H0V1.063C0 .473.522 0 1.16 0zm8.113 2.922V4.25h2.59l-1.141-1.328h-1.45zM2.898 6.109a.911.911 0 00-.615.234.765.765 0 00-.255.563c0 .212.092.414.255.564.163.15.384.233.615.233.23 0 .451-.084.614-.233a.765.765 0 00.255-.564.765.765 0 00-.255-.563.911.911 0 00-.614-.234zm6.954 0a.911.911 0 00-.614.234.765.765 0 00-.255.563c0 .212.092.414.255.564.163.15.384.233.614.233.23 0 .452-.084.615-.233a.765.765 0 00.255-.564.765.765 0 00-.255-.563.911.911 0 00-.615-.234zm-5.795-.796l3.477-3.188-.817-.754-2.66 2.438L2.846 2.7l-.818.754 2.029 1.86z"
                      ></path>
                    </svg>
                    Free Shipping
                  </div>
                </div>
              </div>
              <div className="cart-plix__footer__button">
                <NavLink
                  to="/checkout"
                  onClick={() => setIsAppOnHomePage(false)}
                >
                  <button onClick={() => setShowCart(false)}>
                    <span>Proceed to Pay</span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="cart-alert"></div>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({
  handleRemoveItem,
  item,
  handleIncreaseUpdateItemQuantity,
  handleDecreaseUpdateItemQuantity,
}) => {
  const [ItemQuantity, setItemQuantity] = useState(1);

  const handleDecreaseQuant = (id) => {
    if (ItemQuantity === 1) return;
    setItemQuantity((quantity) => quantity - 1);
    handleDecreaseUpdateItemQuantity(id, ItemQuantity - 1);
  };

  const handleIncreaseQuant = (id) => {
    setItemQuantity((quantity) => quantity + 1);
    handleIncreaseUpdateItemQuantity(id, ItemQuantity + 1);
  };

  return (
    <div data-test="cartRow" className="sc-hgkeyV jbOjdq" key={item.id}>
      <div className="sc-dHThnQ icVOSq">
        <div className="sc-ijbeYI kkXsRg">
          <img width="80" height="80" src={item.image} />
        </div>
        <div className="sc-iQkRNw kcKpjl">
          <div>
            <p className="sc-hxTMRp hQCcye">{item.name}</p>
            <div className="sc-hnKQEj hfjgMI">{item.quantity}</div>
          </div>
          <p></p>
        </div>
        <span
          className="sc-bRrYFZ hFWJbD"
          onClick={() => handleRemoveItem(item.id)}
        >
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8125 2.1875H9.54297L8.61328 0.65625C8.39453 0.300781 7.90234 0 7.49219 0H4.73047C4.32031 0 3.82812 0.300781 3.60938 0.65625L2.67969 2.1875H0.4375C0.191406 2.1875 0 2.40625 0 2.625V3.0625C0 3.30859 0.191406 3.5 0.4375 3.5H0.875L1.44922 12.7695C1.47656 13.4531 2.07812 14 2.76172 14H9.46094C10.1445 14 10.7461 13.4531 10.7734 12.7695L11.375 3.5H11.8125C12.0312 3.5 12.25 3.30859 12.25 3.0625V2.625C12.25 2.40625 12.0312 2.1875 11.8125 2.1875ZM4.73047 1.3125H7.49219L8.01172 2.1875H4.21094L4.73047 1.3125ZM9.46094 12.6875H2.76172L2.1875 3.5H10.0352L9.46094 12.6875Z"
              fill="#AAAAAA"
            ></path>
          </svg>
        </span>
      </div>
      <div className="sc-hmkDWj ipZKxN">
        <div className="plixlife__QuntityField__div sc-NGAnU jxkCzA">
          <div className="sc-exAgwC ASfQV">
            <div className="sc-gqPbQI eoixQf">
              <span
                onClick={() => handleDecreaseQuant(item.id)}
                className="sc-hORach dOAjLC"
              >
                <div className="sc-ellAub iVaTsP">
                  <div>
                    <svg height="10" viewBox="0 0 32 32" width="10">
                      <path
                        d="M0 13.818h32v4.364h-32v-4.364z"
                        fill="#444444"
                      ></path>
                    </svg>
                  </div>
                </div>
              </span>
              <div className="sc-bMVAic leyXbG">
                <input
                  name="quantity"
                  className="sc-ctDIWD klXQeF sc-bAeIUo fOjzft"
                  value={item.orderedQuantity}
                />
              </div>
              <span
                onClick={() => handleIncreaseQuant(item.id)}
                className="sc-hORach dOAjLC"
              >
                <div className="sc-henqWA iOIcOy">
                  <div>
                    <svg height="10" viewBox="0 0 32 32" width="10">
                      <path
                        d="M18 14v-12c0-1.104-0.896-2-2-2s-2 0.896-2 2v12h-12c-1.104 0-2 0.896-2 2s0.896 2 2 2h12v12c0 1.104 0.896 2 2 2s2-0.896 2-2v-12h12c1.104 0 2-0.896 2-2s-0.896-2-2-2h-12z"
                        fill="#21125E"
                      ></path>
                    </svg>
                  </div>
                </div>
              </span>
            </div>
            <div className="sc-gojNiO lbqugr"></div>
          </div>
        </div>
        <div className="upsell-price-wrapper sc-csJRnm kyNnUq">
          <div>
            <div className="sc-cvbbAY cRuOWk">
              <span className="sc-kEYyzF JGMgo">
                <span>₹{item.originalPrice}</span>
              </span>
              <div className="sc-brqgnP jCBOdm">
                <span>₹{item.specialPrice}</span>
              </div>
            </div>
            <div className="sc-cMljjf bDaOyf">
              <button>{item.discount}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
