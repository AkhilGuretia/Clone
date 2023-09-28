import { useState, useEffect, useRef } from "react";
import ShoppingArea from "./ShoppingArea.jsx";


const ImageSliderData = [
  {
    url:
      "https://images.plixlife.com/banners/2deb5e6c13944994ac23259e8aeaf8ec.jpg?auto=format&fit=max&w=1200"
  },
  {
    url:
      "https://images.plixlife.com/banners/0d86ee5d2be14f2dbd32d10f9bcab68e.png?auto=format&fit=max&w=1200"
  },
  {
    url:
      "https://images.plixlife.com/banners/e9e8b3d835724ae2af132ceb549f508c.png?auto=format&fit=max&w=1200"
  },
  {
    url:
      "https://images.plixlife.com/banners/89c11b0f839449bb99e0c7ffe4e246d8.png?auto=format&fit=max&w=1200"
  },
  {
    url:
      "https://images.plixlife.com/banners/506a096b18f5410aada67aa40699501c.jpg?auto=format&fit=max&w=1200"
  },
  {
    url:
      "https://images.plixlife.com/banners/8cd67477c70c491d898afa0a3e98ae38.jpg?auto=format&fit=max&w=1200"
  },
  {
    url:
      "https://images.plixlife.com/banners/0eff8726a2444a0e9fd068d0391f7480.jpg?auto=format&fit=max&w=1200"
  }
];

const delay = 2500;

export const MainHomePage = () => {
  return (
    <>
      <div className="hompage_container">
        <ImageSlider />

        <BrandLogoWrapper />

        <IngredientFeatureWrapper />

        <PledgeTreeContainer />

        <ShoppingArea />

        <NutritionSectionContainer />

        <CleanLabel />

        <TestimonialWrapper />
      </div>
    </>
  );
}


const ImageSlider = () => {

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === ImageSliderData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {ImageSliderData.map((image) => (
          <img src={image.url} alt="travel" className="image" key={image.url} />
        ))}
      </div>

      <div className="slideshowDots">
        {ImageSliderData.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

const BrandLogoWrapper = () => {
  return (
    <div className="brandlogo_wrapper">
      <div className="inner_brandlogo">
        <div className="content">
          <h1>
            India&apos;s Leading <span>Plant Based</span> Nutrition Brand
          </h1>
          <div className="logo_wrapper">
            <div className="logo_feature">
              <span>
                <img
                  alt="Clean Label Certified"
                  src="https://images.plixlife.com/hosted/logo1-116ac93c9fa2.png?auto=format&amp;fit=max&amp;w=1200"
                  decoding="async"
                  data-nimg="fill"
                />
              </span>
              <p>Clean Label certified</p>
            </div>
            <div className="logo_feature">
              <span>
                <img
                  alt="Vegan Friendly"
                  src="https://images.plixlife.com/hosted/logo2-59959c4db8ce.png?auto=format&amp;fit=max&amp;w=1200"
                  decoding="async"
                  data-nimg="fill"
                />
              </span>
              <p>Natural &amp; Plant Based</p>
            </div>
            <div className="logo_feature">
              <span>
                <img
                  alt="Free Diet Plans"
                  src="https://images.plixlife.com/hosted/logo3-b21663dd86b8.png?auto=format&amp;fit=max&amp;w=1200"
                  decoding="async"
                  data-nimg="fill"
                />
              </span>
              <p>
                Free Diet <br />
                Plans
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="brand__logo1">
        <span>
          <img
            alt="brand-left-logo"
            src="https://images.plixlife.com/hosted/brand-left-image-0ef0062e6516-cf7df94ac207.png?auto=format&amp;fit=max&amp;w=1200"
            decoding="async"
            data-nimg="fill"
          />
        </span>
      </div>
      <div className="brand_logo2">
        <span>
          <img
            alt="brand-right-logo"
            src="https://images.plixlife.com/hosted/brand-right-image-d5a09e3d5a58-0a10efff7cba.png?auto=format&amp;fit=max&amp;w=1200"
            decoding="async"
            data-nimg="fill"
          />
        </span>
      </div>
    </div>
  );
};

const PledgeTreeContainer = () => {
  return (
    <div
      className="pledge_tree"
      style={{
        backgroundImage: `url(${"https://images.plixlife.com/hosted/pledge_background_image-bc9fe38c31ef.png"})`
      }}
    >
      <div className="inner_pledge_tree">
        <div className="pledge_icon">
          <span>
            <noscript></noscript>
            <img alt="Pledge A Tree" src="https://images.plixlife.com/hosted/pledgeTree-9e13576dc401.png?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" />
          </span>
        </div>
        <div className="content">
          <h3>Pledge A Tree!</h3>
          <p>For every order placed, we plant more trees! With your help, we can now achieve our goal of planting millions of trees in the next couple of years. </p>
          <a href="/page/pledge-a-tree">Learn More</a>
        </div>
      </div>
    </div >
  );
}




const IngredientFeatureWrapper = () => {
  return (
    <div className="ingredient_feature_wrapper">
      <div className="take_care_sideicon">
        <span >
          <img src="https://images.plixlife.com/hosted/take-care-side-icon2-f2782c37dd67-a28d65606dea.png?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" />
          <noscript></noscript>
        </span>
      </div>
      <div className="take_care_sideicon3">
        <span>
          <img src="https://images.plixlife.com/hosted/take-care-side-icon3-eb6ad84318b0-12f1aca14258.png?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" />
          <noscript></noscript>
        </span>
      </div>
      <div className="inner_ingredient_feature">
        <div className="content_section">
          <h3>Take care, have fun!</h3>
          <p>We are on a mission to make nutrition fun! Taking care of yourself and having fun need not be mutually exclusive. Our flavourful blends created from clinically backed wholefood ingredients empower your mind, body and soul.  </p>
          <span><a href="/page/our-story">Learn more</a></span>
          <div className="arrow_icon">
            <span>
              <img src="https://images.plixlife.com/hosted/take-care-arrow-4d0df733ac77-e0687e6e50b5.png?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" />
              <noscript></noscript>
            </span>
          </div>
        </div>
        <div className="feature_section">
          <div className="feature">
            <span>
              <img alt="Vegan Friendly" src="https://images.plixlife.com/hosted/logo2-1ec62251f31f.png?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" />
              <noscript></noscript>
            </span>
            <span className="Vegan">Vegan Friendly</span>
          </div>
          <div className="feature">
            <span >
              <img alt="Clean Label Certified" src="https://images.plixlife.com/hosted/logo1-fe3cf74a129a.png?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" />
              <noscript></noscript>
            </span>
            <span className="Vegan">Clean Label Certified</span>
          </div>
          <div className="feature">
            <span >
              <img alt="100% Reusable &amp; Recyclable Packaging" src="https://images.plixlife.com/hosted/feature3-c35db235692b.png?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" />
              <noscript></noscript>
            </span>
            <span className="Vegan">100% Reusable &amp; Recyclable Packaging</span>
          </div>
          <div className="feature">
            <span>
              <img alt="Gluten Free" src="https://images.plixlife.com/hosted/feature4-2ab8e442e66c.png?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" />
              <noscript></noscript>
            </span>
            <span className="Vegan">Gluten Free</span>
          </div>
        </div>
        <div className="learn_more">
          <a href="/page/our-story">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

const CleanLabel = () => {
  return (
    <div className="clean_label">
      <span >
        <img alt="Banner image" src="https://images.plixlife.com/hosted/clean_label-08f513eea7c4.png?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" />
        <noscript></noscript>
      </span>
    </div>
  );
}

const TestimonialWrapper = () => {
  return (
    <div className="testimonial_wrapper">

      <div className="inner_testimonal">
        <h2>Real People, Real Results</h2>
        <div className="testimonial_container_wrapper">
          <div className="testimonial_container">
            <div className="testimonial_image">
              <span>
                <img alt="testimonial" src="https://plixlifefcstage-media.farziengineer.co/hosted/Real_peopel_real_results_homepage_Images_ACV-b75db314a6ed.png?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" />
                <noscript></noscript>
              </span>
            </div>
            <div className="quote_icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" fill="none" viewBox="0 0 22 12">
                <path fill="#820906" d="M0 12a22.96 22.96 0 011.694-6.62C2.58 3.294 3.724 1.501 5.128 0h6.136c-1.1 1.594-2 3.479-2.702 5.655C7.891 7.801 7.51 9.915 7.418 12H0zm10.165 0a22.96 22.96 0 011.694-6.62c.885-2.085 2.03-3.878 3.434-5.38h6.136c-1.1 1.594-2 3.479-2.702 5.655-.672 2.146-1.053 4.26-1.145 6.345h-7.417z"></path>
              </svg>
            </div>
            <div className="testionial_header">Life changing ACV</div>
            <div className="description">
              <p>Plix has changed the way I will consume ACV forever! All the benefits of liquid ACV with the additional nutrition of Vitamins and Superfoods. The effervescent formula makes it absolutely convenient and a fun way to consume apple cider vinegar.</p>
            </div>
            <div className="name">Tanya</div>
            <span className="MuiRating-root MuiRating-sizeSmall MuiRating-readOnly" role="img" aria-label="5 Stars">
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss1">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss1">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss1">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss1">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss1">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss1">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss1">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss1">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss1">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss1">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className="testimonial_container">
            <div className="testimonial_image">
              <span >
                <img alt="testimonial" src="https://plixlifefcstage-media.farziengineer.co/hosted/Real_peopel_real_results_homepage_Images_Gluta-f749ab220db9.png?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" />
                <noscript></noscript>
              </span>
            </div>
            <div className="quote_icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" fill="none" viewBox="0 0 22 12">
                <path fill="#820906" d="M0 12a22.96 22.96 0 011.694-6.62C2.58 3.294 3.724 1.501 5.128 0h6.136c-1.1 1.594-2 3.479-2.702 5.655C7.891 7.801 7.51 9.915 7.418 12H0zm10.165 0a22.96 22.96 0 011.694-6.62c.885-2.085 2.03-3.878 3.434-5.38h6.136c-1.1 1.594-2 3.479-2.702 5.655-.672 2.146-1.053 4.26-1.145 6.345h-7.417z"></path>
              </svg>
            </div>
            <div className="testionial_header">Reduces Pigmentation</div>
            <div className="description">
              <p>Pineapple serum has worked wonders on my pigmented skin. I use this serum daily and my skin looks brighter. My skin feels hydrated and more clear. </p>
            </div>
            <div className="name">Samira</div>
            <span className="MuiRating-root MuiRating-sizeSmall MuiRating-readOnly" role="img" aria-label="5 Stars">
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss3">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss3">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss3">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss3">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss3">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss3">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss3">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss3">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss3">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss3">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div className="testimonial_container">
            <div className="testimonial_image">
              <span >
                <img alt="testimonial" src="https://plixlifefcstage-media.farziengineer.co/hosted/Real_peopel_real_results_homepage_Images_Strength-4d3531f6db6d.png?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" />
                <noscript></noscript>
              </span>
            </div>
            <div className="quote_icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" fill="none" viewBox="0 0 22 12">
                <path fill="#820906" d="M0 12a22.96 22.96 0 011.694-6.62C2.58 3.294 3.724 1.501 5.128 0h6.136c-1.1 1.594-2 3.479-2.702 5.655C7.891 7.801 7.51 9.915 7.418 12H0zm10.165 0a22.96 22.96 0 011.694-6.62c.885-2.085 2.03-3.878 3.434-5.38h6.136c-1.1 1.594-2 3.479-2.702 5.655-.672 2.146-1.053 4.26-1.145 6.345h-7.417z"></path>
              </svg>
            </div>
            <div className="testionial_header">Best Plant Protein</div>
            <div className="description">
              <p>I am so impressed with Plix&apos;s protein. I have always dreaded protein powders. The chocolate flavour blew my mind! I had to get in touch and leave my comments because I am so happy I have found a supplement that tastes so good! It mixes great too! Amazing job guys! Customer for life</p>
            </div>
            <div className="name">Gaurav</div>
            <span className="MuiRating-root MuiRating-sizeSmall MuiRating-readOnly" role="img" aria-label="5 Stars">
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss5">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss5">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss5">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss5">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss5">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss5">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss5">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss5">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="MuiRating-decimal">
                <span style={{ width: 0, overflow: "hidden", zIndex: 1, position: "absolute" }}>
                  <span className="MuiRating-icon MuiRating-iconFilled jss5">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
                <span>
                  <span className="MuiRating-icon MuiRating-iconFilled jss5">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

const NutritionSectionContainer = () => {

  return (
    <div className="nutritionSection container">

      <div className="show-on-desktop scss_imageSectionWrapperDesktop__e1Cgw">
        <a href="https://www.plixlife.com/page/membership">
          <span>
            <img alt="nutrition" src="https://images.plixlife.com/hosted/Plix_Club_Banner_Desktop-e40ff58e1e35.jpg?auto=format&amp;fit=max&amp;w=1200" decoding="async" data-nimg="fill" sizes="50vw" />
            <noscript></noscript>
          </span>
        </a>
      </div>

    </div>
  );
}

