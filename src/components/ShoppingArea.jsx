/* eslint-disable react/prop-types */
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
        originalPrice: "₹1,400",
        specialPrice: "₹1,249",
        discount: "-11%",
      },

      {
        id: 12,
        name: "L-Carnitine ACV",
        image:
          "https://images.plixlife.com/hosted/L-Carnitine_Acv_Effervescent_aqualogica_image-91711fc819e7.png?auto=format&fit=max&w=420",
        rating: 5.0,
        quantity: "Pack of 4 tubes",
        originalPrice: "₹1,600",
        specialPrice: "₹1,299",
        discount: "-19%",
      },

      {
        id: 13,
        name: "KSM-66 Aswaghandha",
        image:
          "https://images.plixlife.com/hosted/Ashwa-6895b63b605c.png?auto=format&fit=max&w=420",
        rating: 4.7,
        quantity: "Pack of 4 tubes",
        originalPrice: "₹1,400",
        specialPrice: "₹1,249",
        discount: "-11%",
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
        originalPrice: "₹1,400",
        specialPrice: "₹1,249",
        discount: "-11%",
      },

      {
        id: 22,
        name: "ACV Multi Power",
        image:
          "https://images.plixlife.com/hosted/ACV_Multipower_Effervescent-babcbdd36c8b.jpg?auto=format&fit=max&w=420",
        rating: 4.5,
        quantity: "Pack of 4 tubes",
        originalPrice: "₹1,400",
        specialPrice: "₹1,249",
        discount: "-11%",
      },

      {
        id: 23,
        name: "Drink Sleep Burn",
        image:
          "https://images.plixlife.com/hosted/drink_sleep_burm-fad108166509.jpg?auto=format&fit=max&w=420",
        rating: 4.8,
        quantity: "Pack of 1 KG",
        originalPrice: "₹2,499",
        specialPrice: "₹1,800",
        discount: "-28%",
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
        originalPrice: "₹1,199",
        specialPrice: "₹899",
        discount: "-26%",
      },

      {
        id: 32,
        name: "Flaunt Your Hair",
        image:
          "https://images.plixlife.com/hosted/Flaunt_your_Hair_-b87d062b20e0.jpg?auto=format&fit=max&w=420",
        rating: 4.8,
        quantity: "Pack of 4 tubes",
        originalPrice: "₹1,400",
        specialPrice: "₹1,249",
        discount: "-11%",
      },

      {
        id: 33,
        name: "Healthier Hair Gummies",
        image:
          "https://images.plixlife.com/hosted/Healthier_Hair_Gummies_aqualogica_image-9ec8b53fc2b5.png?auto=format&fit=max&w=420",
        rating: 4.8,
        quantity: "Pack of 1 ",
        originalPrice: "₹999",
        specialPrice: "₹699",
        discount: "-28%",
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
        originalPrice: "₹850",
        specialPrice: "₹849",
        discount: "-1%",
      },

      {
        id: 42,
        name: "Jamun Acne Marks Serum",
        image:
          "https://images.plixlife.com/hosted/Jamun_Acne_Marks-816b5f357f7c.png?auto=format&fit=max&w=420",
        rating: 4.6,
        quantity: "Pack of 1",
        originalPrice: "₹575",
        specialPrice: "₹549",
        discount: "-5%",
      },

      {
        id: 43,
        name: "Pineapple Facewash & Serum",
        image:
          "https://images.plixlife.com/hosted/Pineapple_Serum__Facewash-c8a467012c39.png?auto=format&fit=max&w=420",
        rating: 4.6,
        quantity: "Pack of 1 ",
        originalPrice: "₹1075",
        specialPrice: "₹699",
        discount: "-35%",
      },
    ],
  },
];

const ShoppingArea = () => {
  return (
    <>
      {shopCategory.map((category) => (
        <ShoppingItemsContainer
          category={category}
          key={category.categoryName}
        />
      ))}
    </>
  );
};

const ShoppingItemsContainer = ({ category }) => {
  return (
    <div className="ShoppingItemsContainer">
      <WhatsNewContent category={category} />
    </div>
  );
};

const WhatsNewContent = ({ category }) => {
  return (
    <div className="whatsNewContent">
      <WhatsNewLeftCard category={category} />

      <WhatsNewProductListContainer category={category} />
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

const WhatsNewProductListContainer = ({ category }) => {
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
            <ProductsContainer category={category} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsContainer = ({ category }) => {
  const item = category.products;
  return (
    <>
      {item.map((product) => (
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
                          <span>{product.originalPrice}</span>
                        </span>
                        <div className="sc-brqgnP jCBOdm">
                          <span>{product.specialPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="whatsNewProductContainer__productCard__buttonContainer sc-jKJlTe hfZloD">
                  <button
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
