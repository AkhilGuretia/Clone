import { useState, useEffect, useRef } from "react";

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

const App = () => {
  return (
    <div className='App' >
      <Header />
      <Main />
    </div>
  )
}

const Header = () => {
  return (
    <header className='header-menu' >
      <nav className='nav-menu' id='header' >
        <div className='placeholder-nav-main' >

          <TopNavigation />

        </div>

        <BottomNavigation />
      </nav>
    </header>
  );
}

const Main = () => {
  return (
    <>
      <div className="hompage_container">
        <ImageSlider />

        <BrandLogoWrapper />

        <IngredientFeatureWrapper />

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

const TopNavigation = () => {
  return (
    <>
      <div className='nav-menu-left' >

        <div className="sidebar">
          <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.7" d="M20.4375 2.625C20.5781 2.625 20.7188 2.57812 20.8125 2.48438C20.9062 2.39062 21 2.25 21 2.0625V0.5625C21 0.421875 20.9062 0.28125 20.8125 0.1875C20.7188 0.09375 20.5781 0 20.4375 0H0.5625C0.375 0 0.234375 0.09375 0.140625 0.1875C0.046875 0.28125 0 0.421875 0 0.5625V2.0625C0 2.25 0.046875 2.39062 0.140625 2.48438C0.234375 2.57812 0.375 2.625 0.5625 2.625H20.4375ZM20.4375 10.125C20.5781 10.125 20.7188 10.0781 20.8125 9.98438C20.9062 9.89062 21 9.75 21 9.5625V8.0625C21 7.92188 20.9062 7.78125 20.8125 7.6875C20.7188 7.59375 20.5781 7.5 20.4375 7.5H0.5625C0.375 7.5 0.234375 7.59375 0.140625 7.6875C0.046875 7.78125 0 7.92188 0 8.0625V9.5625C0 9.75 0.046875 9.89062 0.140625 9.98438C0.234375 10.0781 0.375 10.125 0.5625 10.125H20.4375ZM20.4375 17.625C20.5781 17.625 20.7188 17.5781 20.8125 17.4844C20.9062 17.3906 21 17.25 21 17.0625V15.5625C21 15.4219 20.9062 15.2812 20.8125 15.1875C20.7188 15.0938 20.5781 15 20.4375 15H0.5625C0.375 15 0.234375 15.0938 0.140625 15.1875C0.046875 15.2812 0 15.4219 0 15.5625V17.0625C0 17.25 0.046875 17.3906 0.140625 17.4844C0.234375 17.5781 0.375 17.625 0.5625 17.625H20.4375Z" fill="#FCFCEC">
            </path>
          </svg>
        </div>

        <a href="/">
          <svg width="86" height="28" viewBox="0 0 86 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M78.3211 14.9518C77.0257 15.5674 74.8373 16.3091 73.291 16.5519C73.0523 16.5895 72.9507 16.2603 73.1691 16.1557C74.9735 15.2931 78.2286 14.331 82.2752 7.58704L85.5842 1.86209L85.8433 1.39982C86.0241 1.04221 85.7986 0.655124 85.3901 0.654108L75.322 0.634805C75.131 0.634805 74.9542 0.734369 74.8546 0.897939L72.4336 5.50127C72.3066 5.71157 72.0008 5.71157 71.8738 5.50127L69.3359 0.843077C69.2577 0.713034 69.1165 0.633789 68.9641 0.633789L58.7242 0.653092C58.3909 0.653092 58.1837 1.01478 58.3503 1.30331L65.6469 13.4725C65.8024 13.7407 65.7983 14.0729 65.6388 14.3381L58.4732 26.553C58.2548 26.9147 58.5139 27.377 58.9365 27.379L68.895 27.442C69.09 27.443 69.2719 27.3394 69.3694 27.1697L71.8088 22.5583C71.9805 22.1631 72.3625 22.3144 72.458 22.5583L74.8759 27.2266C74.9542 27.3607 75.0974 27.444 75.2529 27.443L85.569 27.378C85.9052 27.376 86.1115 27.0082 85.9367 26.7207L78.9276 15.1316C78.8016 14.9233 78.5395 14.8461 78.3201 14.9497" fill="#FEFFED"></path><path d="M42.1587 16.4677C42.0571 16.3844 41.9291 16.3397 41.798 16.3447C36.6999 16.55 32.3313 19.7929 31.0034 21.7497C30.9079 21.8899 30.6895 21.7903 30.7362 21.6278C30.9719 20.8099 31.6953 19.4648 33.0597 18.018C33.5403 17.508 34.1214 17.0488 34.5938 16.6038C34.8041 16.4047 34.925 16.1294 34.925 15.8398V3.7915H34.9098C34.9118 2.98788 34.9139 2.26654 34.9169 1.42025C34.9189 0.94884 34.7096 0.618652 34.2901 0.618652C30.2628 0.618652 28.176 0.629828 24.1487 0.630844C23.7342 0.630844 23.3979 0.967128 23.3969 1.38266C23.3969 9.79483 23.3969 18.2619 23.3969 26.674C23.3969 26.7899 23.404 26.9047 23.3989 27.0205C23.3878 27.2481 23.5686 27.438 23.7962 27.434C24.0319 27.4299 24.2686 27.434 24.5043 27.434C30.6214 27.434 35.6271 27.4309 41.7452 27.4431C42.2115 27.4431 42.3974 27.3415 42.3954 26.8254C42.3792 23.5327 42.3771 20.2399 42.3863 16.9472C42.3863 16.7613 42.304 16.5845 42.1597 16.4667" fill="#FEFFED"></path><path d="M11.4753 22.212V20.8495C11.4753 20.7114 11.39 20.5884 11.262 20.5387C9.91681 20.0195 8.74439 19.4668 7.61667 17.7854C7.61363 17.7813 7.61058 17.7763 7.60855 17.7702C7.54353 17.6188 7.63801 17.4887 7.79345 17.5456C7.81784 17.5548 7.84527 17.5649 7.8727 17.5781C8.34004 17.7925 9.00753 18.1511 10.1312 18.5311C11.9183 19.1356 13.8506 19.1986 15.6682 18.6927C15.8998 18.6287 16.61 18.3889 16.7959 18.3127C21.7182 16.3153 23.0288 8.59805 19.9088 4.29748C18.1685 1.89981 15.8399 0.628835 12.9932 0.652202V0.641027L5.25253 0.636963C5.22611 0.636963 5.20071 0.637979 5.17532 0.641027H0.346443C0.155442 0.643059 0 0.798501 0 0.989502V27.1363C0 27.2948 0.128011 27.4228 0.286502 27.4228H4.77401C4.82684 27.4371 4.88983 27.4431 4.96603 27.4431C7.50594 27.434 8.49243 27.435 11.0323 27.4431C11.3595 27.4442 11.4712 27.3355 11.4702 26.9992C11.4631 25.5108 11.4601 23.5998 11.4611 22.212H11.4773H11.4753Z" fill="#FEFFED"></path><path d="M57.3542 7.41641C57.3542 11.1389 54.3367 14.1563 50.6143 14.1563C46.8918 14.1563 43.8744 11.1389 43.8744 7.41641C43.8744 3.69392 46.8918 0.676514 50.6143 0.676514C54.3367 0.676514 57.3542 3.69392 57.3542 7.41641Z" fill="#FEFFED"></path><path d="M56.9187 15.4466V13.7438C56.9187 13.5102 56.6343 13.4055 56.4859 13.5843C55.0697 15.2891 52.9565 16.0856 50.5964 16.0856C48.2363 16.0856 46.1546 15.3054 44.7384 13.6219C44.59 13.4452 44.3066 13.5498 44.3066 13.7835C44.3066 20.6514 44.3066 19.0919 44.3066 26.7136C44.3066 27.4299 44.3066 27.4329 45.0086 27.4329C48.7809 27.4339 52.5531 27.4248 56.3254 27.4451C56.805 27.4472 56.9137 27.2765 56.9127 26.8254C56.9015 23.1496 56.9005 19.1224 56.9096 15.4476H56.9177L56.9187 15.4466Z" fill="#FEFFED">
            </path></svg>
        </a>

        <ul className="plixlife-main-menu__lower__desktop-left__nav-row">
          <li className="plixlife-main-menu__searchInput">

            <div className="input">
              <span className="input__icon-left">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" fontSize="16px" xmlns="http://www.w3.org/2000/svg"><path d="M17.7188 17.5261L13.0078 12.8152C14.0273 11.5847 14.5898 10.0027 14.5898 8.28003C14.5898 4.27222 11.2852 0.967529 7.27734 0.967529C3.23438 0.967529 0 4.27222 0 8.28003C0 12.323 3.26953 15.5925 7.27734 15.5925C8.96484 15.5925 10.5469 15.03 11.8125 14.0105L16.5234 18.7214C16.6992 18.8972 16.9102 18.9675 17.1562 18.9675C17.3672 18.9675 17.5781 18.8972 17.7188 18.7214C18.0703 18.405 18.0703 17.8777 17.7188 17.5261ZM1.6875 8.28003C1.6875 5.18628 4.18359 2.65503 7.3125 2.65503C10.4062 2.65503 12.9375 5.18628 12.9375 8.28003C12.9375 11.4089 10.4062 13.905 7.3125 13.905C4.18359 13.905 1.6875 11.4089 1.6875 8.28003Z" fill="white">
                </path>
                </svg>
              </span>
              <div className="input__content">
                <input className="input__field input__field--left-icon" value="search for products..." />
              </div>
            </div>

          </li>
        </ul>

      </div>

      < div className='nav-menu-right' >

        <ul className="plixlife-main-menu__lower__desktop-right__ul">

          <li><a href="/page/track-your-order">
            <svg width="28" height="28" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2184_8414)">
                <path d="M2.17498 11.1072C2.17498 10.6354 2.55744 10.2529 3.02923 10.2529H13.1266C13.5984 10.2529 13.9809 10.6354 13.9809 11.1072C13.9809 11.5789 13.5984 11.9614 13.1266 11.9614H3.02923C2.55744 11.9614 2.17498 11.5789 2.17498 11.1072ZM0.155501 6.05845C0.155501 5.58666 0.537958 5.20421 1.00974 5.20421H9.08768C9.55946 5.20421 9.94192 5.58666 9.94192 6.05845C9.94192 6.53023 9.55946 6.91269 9.08768 6.91269H1.00974C0.537959 6.91269 0.155501 6.53023 0.155501 6.05845Z" fill="#CCF0CA" stroke="#5DD37C" strokeWidth="0.311001"></path>
                <path d="M28.0457 10.7706L28.0457 10.7707C28.0914 10.877 28.1149 10.9914 28.1149 11.1071V11.1072V18.1754C28.1149 18.4019 28.0249 18.6192 27.8647 18.7794C27.7045 18.9396 27.4872 19.0296 27.2607 19.0296H25.0978H24.9768L24.9471 19.1469C24.7359 19.98 24.253 20.7188 23.5747 21.2466C22.8965 21.7744 22.0616 22.061 21.2022 22.061C20.3428 22.061 19.5079 21.7744 18.8297 21.2466C18.1514 20.7188 17.6685 19.98 17.4574 19.1469L17.4276 19.0296H17.3066H10.9614H10.841L10.8108 19.1462C10.5745 20.0614 10.0126 20.859 9.23026 21.3895C8.44796 21.92 7.49903 22.147 6.56135 22.0279C5.62368 21.9088 4.76163 21.4518 4.13679 20.7426C3.51195 20.0333 3.16722 19.1206 3.16722 18.1754C3.16722 17.2301 3.51195 16.3174 4.13679 15.6082C4.76163 14.8989 5.62368 14.4419 6.56135 14.3228C7.49903 14.2037 8.44796 14.4307 9.23026 14.9612C10.0126 15.4917 10.5745 16.2893 10.8108 17.2045L10.841 17.3211H10.9614H17.3066H17.4267L17.4571 17.2049C17.5863 16.7099 17.8122 16.2455 18.1217 15.8383C18.4313 15.431 18.8184 15.0891 19.2608 14.8323L19.3382 14.7873V14.6978V2.01948V1.86398H19.1827H5.04633C4.57455 1.86398 4.19209 1.48153 4.19209 1.00974C4.19209 0.537957 4.57455 0.155501 5.04633 0.155501H20.1925C20.419 0.155501 20.6363 0.245501 20.7965 0.405702C20.9567 0.565904 21.0467 0.783183 21.0467 1.00974V3.02923V3.18473H21.2022H24.2314H24.2315C24.3987 3.18464 24.5622 3.23364 24.7017 3.32565C24.8412 3.41766 24.9507 3.54863 25.0164 3.7023L25.0165 3.70238L28.0457 10.7706ZM7.06582 20.3503H7.06597C7.6426 20.3498 8.19544 20.1205 8.60317 19.7127C9.01091 19.305 9.24023 18.7521 9.2408 18.1755V18.1754C9.2408 17.7452 9.11324 17.3247 8.87425 16.967C8.63526 16.6093 8.29557 16.3306 7.89815 16.1659C7.50072 16.0013 7.0634 15.9582 6.6415 16.0422C6.21959 16.1261 5.83205 16.3332 5.52787 16.6374C5.22369 16.9416 5.01655 17.3291 4.93262 17.751C4.8487 18.1729 4.89177 18.6103 5.05639 19.0077C5.22101 19.4051 5.49979 19.7448 5.85746 19.9838C6.21513 20.2228 6.63565 20.3503 7.06582 20.3503ZM21.2022 4.89321H21.0467V5.04871V10.0974V10.2529H21.2022H25.7299H25.9658L25.8728 10.0361L23.7079 4.98743L23.6675 4.89321H23.565H21.2022ZM23.3772 18.1755V18.1754C23.3772 17.7452 23.2496 17.3247 23.0106 16.967C22.7716 16.6093 22.432 16.3306 22.0345 16.1659C21.6371 16.0013 21.1998 15.9582 20.7779 16.0422C20.356 16.1261 19.9684 16.3332 19.6643 16.6374C19.3601 16.9416 19.1529 17.3291 19.069 17.751C18.9851 18.1729 19.0282 18.6103 19.1928 19.0077C19.3574 19.4051 19.6362 19.7448 19.9939 19.9838C20.3515 20.2228 20.772 20.3503 21.2022 20.3503H21.2024C21.779 20.3498 22.3318 20.1205 22.7396 19.7127C23.1473 19.305 23.3766 18.7521 23.3772 18.1755ZM26.2509 17.3211H26.4064V17.1656V12.1169V11.9614H26.2509H21.2022H21.0467V12.1169V14.1364V14.2915L21.2018 14.2919C22.0604 14.2943 22.894 14.5815 23.5718 15.1086C24.2496 15.6357 24.7333 16.3728 24.9472 17.2043L24.9772 17.3211H25.0978H26.2509Z" fill="#CCF0CA" stroke="#5DD37C" strokeWidth="0.311001">
                </path>
              </g>
              <defs><clipPath id="clip0_2184_8414">
                <rect width="30" height="22" fill="white">
                </rect>
              </clipPath>
              </defs>
            </svg>
          </a>
          </li>

          <li className="plixlife-main-menu__icon main-menu__cart" >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.9375 21.9375C9.38623 21.9375 9.75 21.5737 9.75 21.125C9.75 20.6763 9.38623 20.3125 8.9375 20.3125C8.48877 20.3125 8.125 20.6763 8.125 21.125C8.125 21.5737 8.48877 21.9375 8.9375 21.9375Z" stroke="#FCFCEC" strokeWidth="1.68304" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M20.3125 21.9375C20.7612 21.9375 21.125 21.5737 21.125 21.125C21.125 20.6763 20.7612 20.3125 20.3125 20.3125C19.8638 20.3125 19.5 20.6763 19.5 21.125C19.5 21.5737 19.8638 21.9375 20.3125 21.9375Z" stroke="#FCFCEC" strokeWidth="1.68304" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M2.4375 4.0625H5.6875L8.125 17.875H21.125" stroke="#FCFCEC" strokeWidth="1.68304" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M8.125 14.625H20.7919C20.8858 14.6251 20.9769 14.5926 21.0496 14.533C21.1223 14.4735 21.1721 14.3906 21.1905 14.2985L22.653 6.98598C22.6648 6.92701 22.6634 6.86616 22.6488 6.80782C22.6342 6.74948 22.6069 6.6951 22.5688 6.6486C22.5306 6.60211 22.4826 6.56466 22.4283 6.53896C22.3739 6.51327 22.3145 6.49996 22.2544 6.5H6.5" stroke="#FCFCEC" strokeWidth="1.68304" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span className="plixlife-main-menu__cart__quantity">
              1
            </span>
          </li>

          <li>
            <div data-test="userButton" className="menu-dropdown">
              <span className="main-menu__icon main-menu__user--active">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4999 2.08203C6.74679 2.08203 2.08325 6.74557 2.08325 12.4987C2.08325 18.2518 6.74679 22.9154 12.4999 22.9154C18.253 22.9154 22.9166 18.2518 22.9166 12.4987C22.9166 6.74557 18.253 2.08203 12.4999 2.08203Z" stroke="#FCFCEC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M4.44885 19.1091C4.44885 19.1091 6.77073 16.1445 12.4999 16.1445C18.2291 16.1445 20.552 19.1091 20.552 19.1091" stroke="#FCFCEC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12.5 12.5C13.3288 12.5 14.1237 12.1708 14.7097 11.5847C15.2958 10.9987 15.625 10.2038 15.625 9.375C15.625 8.5462 15.2958 7.75134 14.7097 7.16529C14.1237 6.57924 13.3288 6.25 12.5 6.25C11.6712 6.25 10.8763 6.57924 10.2903 7.16529C9.70424 7.75134 9.375 8.5462 9.375 9.375C9.375 10.2038 9.70424 10.9987 10.2903 11.5847C10.8763 12.1708 11.6712 12.5 12.5 12.5V12.5Z" stroke="#FCFCEC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>

              <div className="menu-dropdown__body menu-dropdown__body">
                <ul className="main-menu__dropdown">

                  <a href="/page/login">
                    <li data-test="desktopMenuMyAccountLink">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="none" viewBox="0 0 15 14">
                        <path fill="#5DD37C" d="M9.545.002c.48 0 .95.136 1.364.395.415.258.76.63.999 1.079.24.448.365.956.365 1.473 0 .518-.126 1.026-.366 1.474H15v1.473h-1.364v7.367a.768.768 0 01-.2.521.657.657 0 01-.482.216H2.045a.657.657 0 01-.482-.216.768.768 0 01-.2-.52V5.895H0V4.422l3.093.001a3.153 3.153 0 01-.306-2.095A2.974 2.974 0 013.862.554 2.577 2.577 0 015.76.019 2.669 2.669 0 017.5 1c.255-.314.57-.566.922-.738.353-.172.735-.26 1.122-.26zM8.182 5.896H6.818v7.367h1.364V5.896zm-2.727-4.42c-.353 0-.691.149-.944.413a1.53 1.53 0 00-.416 1.005c-.013.38.11.751.345 1.035.234.284.561.46.912.489l.103.004h1.363V2.95c0-.352-.116-.693-.329-.96a1.34 1.34 0 00-.828-.497l-.105-.013-.102-.004zm4.09 0c-.344 0-.675.14-.927.393-.252.252-.407.599-.433.97l-.003.11v1.473h1.363c.344 0 .676-.14.928-.393s.406-.599.432-.97l.004-.11c0-.39-.144-.766-.4-1.042a1.314 1.314 0 00-.964-.432z"></path>
                      </svg>
                      Order history
                    </li>
                  </a>

                  <a href="/page/login">
                    <li data-test="desktopMenuOrderHistoryLink">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="none" viewBox="0 0 14 12">
                        <path fill="#5DD37C" d="M11.756.438c.432 0 .813.38.813.812 0 .457-.381.813-.813.813H2.413a.418.418 0 00-.407.406c0 .228.178.406.407.406h9.343c.889 0 1.625.736 1.625 1.625v5.688a1.62 1.62 0 01-1.625 1.624h-9.75c-.914 0-1.625-.71-1.625-1.624V2.062c0-.888.711-1.624 1.625-1.624h9.75zm-.812 7.718a.818.818 0 00.812-.812.835.835 0 00-.812-.813.818.818 0 00-.813.813c0 .457.356.812.813.812z"></path>
                      </svg>
                      Wallet
                    </li>
                  </a>

                  <a href="/page/login">
                    <li data-test="desktopMenuLogoutLink">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                        <path fill="#5DD37C" d="M1 12s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6z">
                        </path>
                      </svg>Login / Register
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </li>
          <li data-test="shopAllButton">
            <a href="/page/shop">
              <div className="shopAllButton">Shop All</div>
            </a>
          </li>
        </ul>

      </div>

    </>
  );
}

const BottomNavigation = () => {
  return (
    <>
      <div className="nav-lower">

        <ul className="plixlife-main-menu-sub__lower__desktop__nav-row">
          <li data-test="mainMenuItem" className="plixlife-main-menu__item">
            <ul className="plixlife-main-menu__nav-dropdown plixlife-main-menu__nav-dropdown__remainingNav">
              <li>
                <a href="/page/plix-flashsale">
                  🤑 Sale
                </a>
              </li>
              <li className="plixlife-main-menu__nav-dropdown__body plixlife-main-menu__nav-dropdown__remainingLinks">
              </li>
            </ul>
          </li>
          <li data-test="mainMenuItem" className="plixlife-main-menu__item">
            <ul className="plixlife-main-menu__nav-dropdown plixlife-main-menu__nav-dropdown__remainingNav">
              <li>
                <a href="/page/membership"> 🌱 Loyalty Membership
                </a>
              </li>
              <li className="plixlife-main-menu__nav-dropdown__body plixlife-main-menu__nav-dropdown__remainingLinks">
              </li>
            </ul>
          </li>
          <li data-test="mainMenuItem" className="plixlife-main-menu__item">
            <ul className="plixlife-main-menu__nav-dropdown plixlife-main-menu__nav-dropdown__remainingNav">
              <li>
                <a href="/collection/new-launches/149"> 🤩 New Launches</a>
              </li>
              <li className="plixlife-main-menu__nav-dropdown__body plixlife-main-menu__nav-dropdown__remainingLinks">
              </li>
            </ul>
          </li>
          <li data-test="mainMenuItem" className="plixlife-main-menu__item">
            <ul className="plixlife-main-menu__nav-dropdown plixlife-main-menu__nav-dropdown__remainingNav">
              <li><a href="/page/build-your-box-5"> 🎁Build Your Own Box</a>
              </li>
              <li className="plixlife-main-menu__nav-dropdown__body plixlife-main-menu__nav-dropdown__remainingLinks">
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="https://www.plixlife.com/page/build-your-box">Box of 4 at ₹ 1200</a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul">
                  </ul>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="https://www.plixlife.com/page/build-your-box-5">Box of 5 at ₹ 1400</a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul">
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li data-test="mainMenuItem" className="plixlife-main-menu__item">
            <ul className="plixlife-main-menu__nav-dropdown plixlife-main-menu__nav-dropdown__remainingNav">
              <li>
                <span>Shop By Concern</span>
              </li>
              <li className="plixlife-main-menu__nav-dropdown__body plixlife-main-menu__nav-dropdown__remainingLinks">
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="/collection/weight-management/134">Weight Loss</a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul">
                  </ul>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="/collection/pre-workout/229">Pre-Workout</a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul">
                  </ul>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="/collection/post-workout/230">Post-Workout</a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul">
                  </ul>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="/collection/sexual-wellness/136">Sexual Health</a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul">
                  </ul>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="/collection/hair/76">Hair Loss</a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul">
                  </ul>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="/collection/womens-health/138">Women&apos;s Health </a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul"></ul>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="/collection/daily-wellbeing/73"> Daily Wellness </a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul"></ul>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="/collection/dull-skin/208"> Dry &amp; Dull Skin </a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul">
                  </ul>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="https://www.plixlife.com/collection/pigmentation-and-dark-spots/209">Pigmentation and Dark Spots</a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul">
                  </ul>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="https://www.plixlife.com/collection/dark-circles/210">Dark Circles</a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul">
                  </ul>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="https://www.plixlife.com/collection/acne/207">Acne Care</a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul"></ul>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__heading heading">
                    <a href="https://www.plixlife.com/collection/anti-aging/235">Anti Ageing</a>
                  </div>
                  <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__new__list__ul"></ul>
                </div>
              </li>
            </ul>
          </li>
          <li data-test="mainMenuItem" className="plixlife-main-menu__item">
            <ul className="plixlife-main-menu__nav-dropdown">
              <li><span>Shop By Category</span>
              </li>
              <li className="plixlife-main-menu__nav-dropdown__body">
                <div className="plixlife-main-menu__nav-dropdown__body__mainContainer">
                  <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks">
                    <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list">
                      <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__heading heading">Nutrition</div>
                      <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul">
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/weight-management/134">🍎Weight Loss</a>
                        </li>
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/skin-and-hair/228">🙆🏻‍♀️Skin &amp; Hair Nutrition</a>
                        </li>
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/sexual-wellness/136">🍑Sexual Wellness</a>
                        </li>
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/proteins/227">🌱Plant Proteins</a>
                        </li>
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/daily-wellbeing/73">💊Daily Wellness</a>
                        </li>
                      </ul>
                    </div>
                    <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list">
                      <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__heading heading">SkinCare</div>
                      <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul">
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/facewash/215">✨Facewash</a>
                        </li>
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/skin-care-serum/213">😍 Face Serum</a>
                        </li>
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/moisturizers/217">💧Face Moisturizer</a>
                        </li>
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/sunscreen/218">☀️Suncreen</a>
                        </li>
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/lip-care/219">💋Dry &amp; Dark Lips</a>
                        </li>
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/undereye/220">👁️Under Eye Care</a>
                        </li>
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/skin-care/75">💯All</a>
                        </li>
                      </ul>
                    </div>
                    <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list">
                      <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__heading heading">Body Care</div>
                      <ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul">
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/intimate-lightening/224">🍑Intimate lightening</a>
                        </li>
                        <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                          <a href="https://www.plixlife.com/collection/bodycare/222">💯All</a>
                        </li>
                      </ul>
                    </div>
                    <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list"><div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__heading heading">Hair</div><ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul"><li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                      <a href="https://www.plixlife.com/collection/hair-serum/221">😍Hair Serum</a>
                    </li>
                      <li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                        <a href="https://www.plixlife.com/collection/hair/76">💯All</a>
                      </li>
                    </ul>
                    </div>
                    <div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list"><div className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__heading heading">Accessories</div><ul className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul"><li className="plixlife-main-menu__nav-dropdown__body__mainContainer__remainingNavLinks__list__ul__li list-item">
                      <a href="https://www.plixlife.com/collection/accessories/225">💯All</a>
                    </li>
                    </ul>
                    </div>
                  </div>
                  <div className="plixlife-main-menu__nav-dropdown__body__withImagesContainer"><div className="productTile">
                    <div className="plixlife-main-menu__nav-dropdown__body__withImagesContainer__imageDiv">
                      <a href="/collection/skin-care/75">
                        <span className="plixlife-main-menu__nav-dropdown__body__withImagesContainer__imageDiv_span1">
                          <span className="plixlife-main-menu__nav-dropdown__body__withImagesContainer__imageDiv_span1">
                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27280%27%20height=%27240%27/%3e"
                              style={{ background: "none", maxWidth: 100 + "%", opacity: 1 }} />
                          </span>
                          <img alt="Skin" src="https://images.plixlife.com/hosted/Mobile_search_banner-_Skin-1-dd417b21b5de.jpg?auto=format&amp;fit=max&amp;w=768" decoding="async" data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block"
                            }} />
                        </span>
                      </a>
                      <div className="plixlife-main-menu__nav-dropdown__body__withImagesContainer__textContainer">
                        <div className="plixlife-main-menu__nav-dropdown__body__withImagesContainer__textContainer__title">Skin</div>
                        <div>
                          <a href="/collection/skin-care/75">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#5DD37C"></circle>
                              <path fill="#FEFFED" d="M13.195 7.796l4.297 4.102a.611.611 0 01.195.439.602.602 0 01-.195.415l-4.297 4.101c-.22.22-.61.22-.83-.024a.583.583 0 01.025-.83l3.247-3.076H7.336a.578.578 0 01-.586-.586c0-.342.244-.586.586-.586h8.3l-3.246-3.1a.583.583 0 01-.025-.83c.22-.245.586-.245.83-.025z"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="productTile">
                      <div className="plixlife-main-menu__nav-dropdown__body__withImagesContainer__imageDiv">
                        <a href="/collection/weight-management/134">
                          <span >
                            <span>
                              <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27280%27%20height=%27240%27/%3e" />
                            </span>
                            <img alt="Weight Loss" src="https://images.plixlife.com/hosted/Mobile_search_banner-_weight-1-866fb59514ad.jpg?auto=format&amp;fit=max&amp;w=768" decoding="async" data-nimg="intrinsic" />
                          </span>
                        </a>
                        <div className="plixlife-main-menu__nav-dropdown__body__withImagesContainer__textContainer">
                          <div className="plixlife-main-menu__nav-dropdown__body__withImagesContainer__textContainer__title">Weight Loss</div>
                          <div>
                            <a href="/collection/weight-management/134">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#5DD37C"></circle>
                                <path fill="#FEFFED" d="M13.195 7.796l4.297 4.102a.611.611 0 01.195.439.602.602 0 01-.195.415l-4.297 4.101c-.22.22-.61.22-.83-.024a.583.583 0 01.025-.83l3.247-3.076H7.336a.578.578 0 01-.586-.586c0-.342.244-.586.586-.586h8.3l-3.246-3.1a.583.583 0 01-.025-.83c.22-.245.586-.245.83-.025z"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="plixlife-main-menu__nav-dropdown__body__svg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="82" height="121" fill="none" viewBox="0 0 82 121">
                    <path fill="#FBE558" d="M90.99 34.385c.365.065.708 0 1.009-.225 2.737.73 4.497-1.814 7.02-2.029 9.435-.826 18.848-.354 28.262.15 3.22.172 4.497 1.793 4.347 5.185-.386 8.383-1.106 16.81-4.841 24.323-2.93 5.893-6.805 11.11-13.246 14.64-4.315 2.362-8.887 1.89-12.923 3.908-.891-.043-2.265-.773-2.383.612-.054.708 1.449.504 2.297.418l-.032-.053c.687 2.801 2.286 4.487 5.367 4.347l-.033-.032c-.397 1.127-.021 1.857 1.128 2.179l-.086-.086c5.431 9.413 6.741 19.246 3.155 29.657-.515 1.482-.794 2.62-2.672 2.544-8.652-.343-17.357 1.17-25.88-2.35-6.773-2.802-11.184-7.213-13.481-14.427-4.949 2.941-8.566 7.342-13.547 9.833-7.481 3.735-14.866 7.664-23.668 7.03-5.195-.375-6.397-1.266-6.032-6.569.698-9.939 1.793-19.782 7.546-28.498 1.878-2.845 4.326-4.809 7.095-6.72-1.524-1.567-2.877-.633-4.186-.493-11.904 1.31-22.53-.763-30.334-10.97C1.33 62.122.75 56.637.03 51.237c-.344-2.608 2.254-4.025 4.38-4.84 10.465-3.993 21.08-4.1 31.922-1.256 3.832 1.009 7.105 3.681 11.227 4.078.312-2.801-1.781-3.831-2.65-5.506-6.87-13.396-3.725-25.793 3.745-37.6 4.712-7.45 7.492-7.697 17.142-2.867 2.684 1.342 5.228 3.017 8.297 3.414 1.181 1.857 2.276 3.8 4.756 4.165 6.01 7.792 9.467 16.433 8.318 27.22 1.707-1.62 2.77-2.63 3.832-3.649l-.01-.01zM88.38 57.84c-1.502-3.575-2.672-7.439-7.256-8.33-1.33-.44-2.673-.687-3.94-1.481-6.01-3.725-10.186-2.555-14.769 2.78-4.23 4.927-6.01 10.884-7.728 16.734-2.684 9.145.246 14.867 8.587 16.477 6.859 1.33 14.19 1.878 20.287-3.017 6.29-5.034 10.132-14.469 4.83-23.163h-.01z"></path>
                    <path fill="#fff" d="M88.38 57.838c5.303 8.694 1.46 18.13-4.83 23.163-6.097 4.884-13.418 4.337-20.287 3.017-8.34-1.61-11.26-7.332-8.587-16.477 1.717-5.85 3.499-11.796 7.728-16.734 4.583-5.345 8.759-6.515 14.77-2.78 1.277.794 2.608 1.052 3.94 1.481 2.124 3.038 3.52 6.709 7.255 8.33h.011z"></path>
                  </svg>
                </div>
              </li>
            </ul>
          </li>
          <li data-test="mainMenuItem" className="plixlife-main-menu__item" >
            <ul className="plixlife-main-menu__nav-dropdown plixlife-main-menu__nav-dropdown__remainingNav">
              <li><a href="/collection/all-products/91">💯All Products </a>
              </li>
              <li className="plixlife-main-menu__nav-dropdown__body plixlife-main-menu__nav-dropdown__remainingLinks">
              </li>
            </ul>
          </li>
          <li data-test="mainMenuItem" className="plixlife-main-menu__item" >
            <ul className="plixlife-main-menu__nav-dropdown plixlife-main-menu__nav-dropdown__remainingNav">
              <li>
                <a href="/collection/hot-prices-page/184">🔥Hot Prices </a>
              </li>
              <li className="plixlife-main-menu__nav-dropdown__body plixlife-main-menu__nav-dropdown__remainingLinks"></li>
            </ul>
          </li>
          <li data-test="mainMenuItem" className="plixlife-main-menu__item" >
            <ul className="plixlife-main-menu__nav-dropdown plixlife-main-menu__nav-dropdown__remainingNav">
              <li>
                <a href="/page/patch-test">Patch Test Guide </a>
              </li>
              <li className="plixlife-main-menu__nav-dropdown__body plixlife-main-menu__nav-dropdown__remainingLinks"></li>
            </ul>
          </li>
        </ul >

      </div >
    </>
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

export default App;
