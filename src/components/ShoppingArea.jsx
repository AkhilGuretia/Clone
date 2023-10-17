/* eslint-disable react/prop-types */

const ShoppingArea = ({ shopCategory, handleAddCartItem }) => {
  return (
    <>
      {shopCategory?.map((category) => (
        <ShoppingItemsContainer
          category={category}
          handleAddCartItem={handleAddCartItem}
          key={category.categoryName}
        />
      ))}
    </>
  );
};

const ShoppingItemsContainer = ({ category, handleAddCartItem }) => {
  return (
    <div className="ShoppingItemsContainer">
      <WhatsNewContent
        category={category}
        handleAddCartItem={handleAddCartItem}
      />
    </div>
  );
};

const WhatsNewContent = ({ category, handleAddCartItem }) => {
  return (
    <div className="whatsNewContent">
      <WhatsNewLeftCard category={category} />

      <WhatsNewProductListContainer
        category={category}
        handleAddCartItem={handleAddCartItem}
      />
    </div>
  );
};

const WhatsNewLeftCard = ({ category }) => {
  return (
    <div className="whatsNewLeftCard kkV00m .jBJDnN .fxRepM">
      <img alt={category.categoryName} width="500" src={category.image} />

      <a className="whatsNewLeftCard__button" href="/">
        <span className="sc-gqjmRU bmRGVH">
          <span className="sc-dnqmqq gIWXn">Shop All</span>
        </span>
      </a>
    </div>
  );
};

const WhatsNewProductListContainer = ({ category, handleAddCartItem }) => {
  return (
    <div className="whatsNewProductListContainer">
      <div
        style={{
          width: 100 + "%",
          margin: "auto",
        }}
      >
        <div className="slick-slider slick-initialized" dir="ltr">
          <div className="slick-track">
            <ProductsContainer
              category={category}
              handleAddCartItem={handleAddCartItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsContainer = ({ category, handleAddCartItem }) => {
  const items = category.products;

  return (
    <>
      {items.map((product) => (
        <div
          className="slick-slide"
          style={{ width: "15vw !important" }}
          aria-hidden="false"
          key={product.id}
        >
          <div>
            <div className="productCardContainer undefined">
              <div className="whatsNewProductContainer__productCard sc-fjdhpX xmFhG">
                <div className="sc-VigVT gwnbrp">
                  <div className="sc-jTzLTM fyBzjJ">
                    {" "}
                    {category.categoryName}{" "}
                  </div>
                  <div className="sc-hSdWYo kkNCrl"></div>
                  <div className="discount_percentage">{product.discount}</div>
                </div>
                <a
                  className="whatsNewProductContainer__productCard__imageLink"
                  href="/"
                >
                  <div className="whatsNewProductContainer__productCard__image sc-jzJRlG fCsTGL">
                    <span>
                      <img alt="Product Image" src={product.image} />
                    </span>
                  </div>
                </a>
                <div className="whatsNewProductContainer__productCard__cardInfo sc-cSHVUG bhIYta">
                  <a href="/product/ultra-vitality-enhahnced-strength-performance/114">
                    <p className="productCard__name sc-kAzzGY eRVanq">
                      {product.name}
                    </p>
                  </a>
                  <div className="rating_and_product_type_wrapper">
                    <div className="rating">
                      <img
                        src="https://www.plixlife.com/plixlifefc/assets/rating_star.svg"
                        alt="Rating Star"
                      />
                      {product.rating}
                    </div>
                    <div className="tag_wrapper">
                      <div className="vertical_bar"></div>
                      <div className="product_type">
                        {category.categoryName}
                      </div>
                    </div>
                  </div>
                  <div className="collection-variant-name">
                    {product.quantity}
                  </div>
                </div>
                <div className="">
                  <div className="sc-jAaTju jKtitL">
                    <div>
                      <div className="sc-cvbbAY cRuOWk">
                        <span className="sc-kEYyzF JGMgo">
                          <span>₹{product.originalPrice}</span>
                        </span>
                        <div className="sc-brqgnP jCBOdm">
                          <span>₹ {product.specialPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="whatsNewProductContainer__productCard__buttonContainer sc-jKJlTe hfZloD">
                  <button
                    onClick={() => handleAddCartItem(product)}
                    data-test="addProductToCartButton"
                    color="primary"
                    className="atc-button plixlife-button sc-gPEVay TsZVX sc-bdVaJa gCxYOW"
                  >
                    <span className="sc-htpNat cysnWs">
                      <div className=" plixlife-button__leftSide  sc-iRbamj jwEVcr">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="15"
                          fill="none"
                          viewBox="0 0 14 15"
                        >
                          <path
                            fill="#FEFFED"
                            d="M13.844 7.125c0 .598-.498 1.096-1.063 1.096H8v4.781c0 .564-.498 1.03-1.063 1.03-.597 0-1.062-.466-1.062-1.03V8.221H1.094C.496 8.22.03 7.723.03 7.125c0-.564.465-1.03 1.063-1.03h4.781v-4.78c0-.598.465-1.096 1.063-1.096C7.502.219 8 .717 8 1.314v4.782h4.781c.565-.034 1.063.465 1.063 1.029z"
                          ></path>
                        </svg>
                      </div>
                      <div className="plixlife-button__mainText sc-jlyJG gmMQUh">
                        ADD{" "}
                      </div>
                      <div className="plixlife-button__rightSide sc-gipzik kPLHTt"></div>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShoppingArea;
