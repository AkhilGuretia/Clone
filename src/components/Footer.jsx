export const Footer = () => {
  return (
    <div className="footer_container">
      <ClientFooterContainer />

      <FooterPaymentContainer />
    </div>
  );
};

const ClientFooterContainer = () => {
  return (
    <div className="ClientFooterContainer ">
      <div className="container lower">
        <div className="footer_wrapper__desktop">
          <div className="list">
            <div>
              <div className="undefined__heading heading">Concerns</div>
              <ul className="undefined__ul">
                <li className="undefined__ul__li list-item">
                  <a href="/collection/weight-management/134">Weight</a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/collection/skin-care/75">Skin</a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/collection/performance/135">Performance</a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/collection/daily-wellbeing/73">Daily Wellbeing</a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/collection/hair/76">Hair</a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/collection/womens-health/138">
                    Women&apos;s Health
                  </a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/page/report-a-bug">Report An Error</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="list">
            <div>
              <div className="undefined__heading heading">Learn</div>
              <ul className="undefined__ul">
                <li className="undefined__ul__li list-item">
                  {" "}
                  <a href="https://plixlife.com/blog/">Blog</a>{" "}
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/page/our-story">Our Story</a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/page/guidance">Personal Guidance</a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/page/terms-and-conditions-cashaback">Cashback</a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/page/clean-label-certified">Clean Label Project</a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/page/pledge-a-tree">Pledge A Tree</a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/page/patch-test">Patch Test Guide</a>
                </li>
                <li className="undefined__ul__li list-item">
                  {" "}
                  <a href="https://www.plixlife.com/page/membership">
                    Loyalty Club Membership
                  </a>{" "}
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/page/press">Press</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="undefined__heading heading">Connect</div>
              <ul className="undefined__ul">
                <li className="undefined__ul__li list-item">
                  <a href="/page/contact-us">Consumer Care Details</a>
                </li>
                <li className="undefined__ul__li list-item">
                  {" "}
                  <a href="https://www.plixlife.com/page/track-your-order">
                    Track your order
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="list">
            <div>
              <div className="undefined__heading heading">Legal</div>
              <ul className="undefined__ul">
                <li className="undefined__ul__li list-item">
                  <a href="/page/refund-and-cancellation">
                    Refund &amp; Cancellation
                  </a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/page/privacy-policy">Privacy Policy</a>
                </li>
                <li className="undefined__ul__li list-item">
                  <a href="/page/terms-conditions">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div className="footerIcon">
              <div className="footerIcon__heading heading">My Account</div>
              <ul className="footerIcon__ul">
                <li className="footerIcon__ul__li list-item">
                  <a href="/page/login">Login</a>
                  <svg width="1em" height="1em" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M5.96.103l-.546.52c-.137.136-.137.355 0 .464l4.238 4.238H.328A.332.332 0 000 5.653v.766c0 .191.137.328.328.328h9.324l-4.238 4.266c-.137.11-.137.328 0 .464l.547.52c.11.137.328.137.465 0l5.715-5.715a.315.315 0 000-.465L6.426.103c-.137-.137-.356-.137-.465 0z"
                      fill="#E7E7E7"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container contactUsIcons">
        <div className="logo_social_block">
          <div className="lazyload-wrapper ">
            <div className="contactUsIcons_section">
              <a target="_blank" href="/">
                <svg
                  width="86"
                  height="28"
                  viewBox="0 0 86 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M78.3211 14.9518C77.0257 15.5674 74.8373 16.3091 73.291 16.5519C73.0523 16.5895 72.9507 16.2603 73.1691 16.1557C74.9735 15.2931 78.2286 14.331 82.2752 7.58704L85.5842 1.86209L85.8433 1.39982C86.0241 1.04221 85.7986 0.655124 85.3901 0.654108L75.322 0.634805C75.131 0.634805 74.9542 0.734369 74.8546 0.897939L72.4336 5.50127C72.3066 5.71157 72.0008 5.71157 71.8738 5.50127L69.3359 0.843077C69.2577 0.713034 69.1165 0.633789 68.9641 0.633789L58.7242 0.653092C58.3909 0.653092 58.1837 1.01478 58.3503 1.30331L65.6469 13.4725C65.8024 13.7407 65.7983 14.0729 65.6388 14.3381L58.4732 26.553C58.2548 26.9147 58.5139 27.377 58.9365 27.379L68.895 27.442C69.09 27.443 69.2719 27.3394 69.3694 27.1697L71.8088 22.5583C71.9805 22.1631 72.3625 22.3144 72.458 22.5583L74.8759 27.2266C74.9542 27.3607 75.0974 27.444 75.2529 27.443L85.569 27.378C85.9052 27.376 86.1115 27.0082 85.9367 26.7207L78.9276 15.1316C78.8016 14.9233 78.5395 14.8461 78.3201 14.9497"
                    fill="#FEFFED"
                  ></path>
                  <path
                    d="M42.1587 16.4677C42.0571 16.3844 41.9291 16.3397 41.798 16.3447C36.6999 16.55 32.3313 19.7929 31.0034 21.7497C30.9079 21.8899 30.6895 21.7903 30.7362 21.6278C30.9719 20.8099 31.6953 19.4648 33.0597 18.018C33.5403 17.508 34.1214 17.0488 34.5938 16.6038C34.8041 16.4047 34.925 16.1294 34.925 15.8398V3.7915H34.9098C34.9118 2.98788 34.9139 2.26654 34.9169 1.42025C34.9189 0.94884 34.7096 0.618652 34.2901 0.618652C30.2628 0.618652 28.176 0.629828 24.1487 0.630844C23.7342 0.630844 23.3979 0.967128 23.3969 1.38266C23.3969 9.79483 23.3969 18.2619 23.3969 26.674C23.3969 26.7899 23.404 26.9047 23.3989 27.0205C23.3878 27.2481 23.5686 27.438 23.7962 27.434C24.0319 27.4299 24.2686 27.434 24.5043 27.434C30.6214 27.434 35.6271 27.4309 41.7452 27.4431C42.2115 27.4431 42.3974 27.3415 42.3954 26.8254C42.3792 23.5327 42.3771 20.2399 42.3863 16.9472C42.3863 16.7613 42.304 16.5845 42.1597 16.4667"
                    fill="#FEFFED"
                  ></path>
                  <path
                    d="M11.4753 22.212V20.8495C11.4753 20.7114 11.39 20.5884 11.262 20.5387C9.91681 20.0195 8.74439 19.4668 7.61667 17.7854C7.61363 17.7813 7.61058 17.7763 7.60855 17.7702C7.54353 17.6188 7.63801 17.4887 7.79345 17.5456C7.81784 17.5548 7.84527 17.5649 7.8727 17.5781C8.34004 17.7925 9.00753 18.1511 10.1312 18.5311C11.9183 19.1356 13.8506 19.1986 15.6682 18.6927C15.8998 18.6287 16.61 18.3889 16.7959 18.3127C21.7182 16.3153 23.0288 8.59805 19.9088 4.29748C18.1685 1.89981 15.8399 0.628835 12.9932 0.652202V0.641027L5.25253 0.636963C5.22611 0.636963 5.20071 0.637979 5.17532 0.641027H0.346443C0.155442 0.643059 0 0.798501 0 0.989502V27.1363C0 27.2948 0.128011 27.4228 0.286502 27.4228H4.77401C4.82684 27.4371 4.88983 27.4431 4.96603 27.4431C7.50594 27.434 8.49243 27.435 11.0323 27.4431C11.3595 27.4442 11.4712 27.3355 11.4702 26.9992C11.4631 25.5108 11.4601 23.5998 11.4611 22.212H11.4773H11.4753Z"
                    fill="#FEFFED"
                  ></path>
                  <path
                    d="M57.3542 7.41641C57.3542 11.1389 54.3367 14.1563 50.6143 14.1563C46.8918 14.1563 43.8744 11.1389 43.8744 7.41641C43.8744 3.69392 46.8918 0.676514 50.6143 0.676514C54.3367 0.676514 57.3542 3.69392 57.3542 7.41641Z"
                    fill="#FEFFED"
                  ></path>
                  <path
                    d="M56.9187 15.4466V13.7438C56.9187 13.5102 56.6343 13.4055 56.4859 13.5843C55.0697 15.2891 52.9565 16.0856 50.5964 16.0856C48.2363 16.0856 46.1546 15.3054 44.7384 13.6219C44.59 13.4452 44.3066 13.5498 44.3066 13.7835C44.3066 20.6514 44.3066 19.0919 44.3066 26.7136C44.3066 27.4299 44.3066 27.4329 45.0086 27.4329C48.7809 27.4339 52.5531 27.4248 56.3254 27.4451C56.805 27.4472 56.9137 27.2765 56.9127 26.8254C56.9015 23.1496 56.9005 19.1224 56.9096 15.4476H56.9177L56.9187 15.4466Z"
                    fill="#FEFFED"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="social_link_section">
            <span>Stalk our socials</span>
            <div className="lazyload-wrapper ">
              <div>
                <a
                  className="social-icons"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/myplixlife/"
                >
                  <span>
                    <span>
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e"
                      />
                    </span>
                    <img
                      alt="Insta"
                      src="https://plixlifefc-media.farziengineer.co/hosted/original_insta_icon-2dd8fa98f9ce.png?auto=format&amp;fit=max&amp;w=64"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="social_media_icon"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="signup_instant">
          <p>Sign up for exclusive deals and offers</p>
        </div>
        <div className="signup_button">
          <a href="/page/login">Sign up</a>
        </div>
        <div className="signup_titletext">
          <p>By signing up, you agree to our Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

const FooterPaymentContainer = () => {
  return (
    <div className="container paymentContainer">
      <div className="rightIconGroupWrapper">
        <p>© Plix The Plant Fix</p>
        <div>
          <p>Affiliated Certificates</p>
        </div>
      </div>
      <div className="lazyload-wrapper ">
        <div className="paymentIconGroup">
          <div className="paymentGroup_title">
            <svg
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.1875 6V4.6875C2.1875 2.52734 3.9375 0.75 6.125 0.75C8.28516 0.75 10.0625 2.52734 10.0625 4.6875V6H10.5C11.457 6 12.25 6.79297 12.25 7.75V13C12.25 13.9844 11.457 14.75 10.5 14.75H1.75C0.765625 14.75 0 13.9844 0 13V7.75C0 6.79297 0.765625 6 1.75 6H2.1875ZM3.9375 6H8.3125V4.6875C8.3125 3.48438 7.32812 2.5 6.125 2.5C4.89453 2.5 3.9375 3.48438 3.9375 4.6875V6Z"
                fill="#5DD37C"
              ></path>
            </svg>
            <p>Safe &amp; Secure Payment Processing</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              width="38"
              height="24"
              fill="none"
              data-src="/images/p1.svg"
            >
              <path fill="url(#pattern0-101)" d="M0 0h38v24H0z"></path>
              <defs>
                <pattern
                  id="pattern0-101"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_128:4220"
                    transform="scale(.02632 .04167)"
                  ></use>
                </pattern>
                <image
                  id="image0_128:4220"
                  width="38"
                  height="24"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAAB2UlEQVRIDc2XvU7DMBDH8ywsjB1gBAkYQYIVJFhBMINgBnXnY0fsiAfgQ4INXgBeADactK5aRILg0N9w1SU0+COVGkuWZSfO/e7+9sWOoiiKWq3WjFLqNo5jGmUFA1jAZKC01pRlGY26gAEsBk4pdVcHKA5KmqYEpgjSVS1fWlN6dUOdnT1KFpbodWzc1PbKGnUPmvTx+ORlAkyVwD6fXwyMakz2YRiq2PaOTpzhgsEYqGjc1u8dHjvBBYGll9fkEqEySDhlK95gne1dq2RlQDzuEjUvsO5+0wsqmV+k9vLqnzlDBUP42eP/WtWYIDgg5cruH3JzhwpmkxBAMIi0MahIZ97PLwa9khtzllKvb+a8loYALSOUs/Dbke+Xwct5zmBIkIiKNOACBGNSShcZMccZjL2BEZ8sjujE03PGoXhqtlRq/j633mA8kVuA6o0tk/0HSSR3Mt51LZXAihuiKBMWOaTHEvCBAnwwGCDkekPOkhF7Oz3rQ/lIzxENBpMbQUIBDtICGuO23cogxTYIDLJwtOSChnT4h3JOKxrz6QeBQRoG4/MW7zzXFGKDDALDR+Vuw/8Qa0quMZth23MDVtujNQ7+dbqMJEnycxnhmxIihxCOsoKBr2/f6AvVF7BBo9QAAAAASUVORK5CYII="
                ></image>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              width="38"
              height="24"
              fill="none"
              data-src="/images/p2.svg"
            >
              <path fill="url(#pattern0-102)" d="M0 0h38v24H0z"></path>
              <defs>
                <pattern
                  id="pattern0-102"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_128:4228"
                    transform="scale(.02632 .04167)"
                  ></use>
                </pattern>
                <image
                  id="image0_128:4228"
                  width="38"
                  height="24"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAAB2klEQVRIDe2Xu04CQRSGD500IIkvoIW1lwcQH0BeQH0AL7Um2mqiFYmFdFhpRyeVdlqY2BFiYQdWdtDZLGu+yf4rIbs6mBAo9iTLzJydc+ab/8wmjJlZzszyZlY0s9KUHxjmLLJ8u93eCoKgE07ZYIBFcMVZgJImsJhZAdFKcs5KGx2nDMy7IJli3lJFE1MVu7x6Cnf2GuHC8oV7ajevce7nl47zrZSvw85Hz/UX16ruffPhPVxar8Zx9Hv9rziWGHKenD3GvqROKpgmt94+XaJypS5XeHB073zAAsJCbEKQWlibU+Bdo+Xm8r6yfSt3YvsnGFHaJX12T2IUos/ijIGUkqjEhkYNGHKhFjG/mReYErEwACRFNYzFGPMO0I1K3Y3xnZ7/lEvKEy/liEkzLzCVC3WkHmXDAOCRAadS4ycGk484KQtkmnmBqXw61DofUgGVRk0qM1fx2oRaqT4ay9gLjInDJUJBTCXRF4aau/uN8PC4GX+ZqKJzyHtAVf7VzZrLk/TjDSYFSC5TeQClRHyZWpgWcEzlH/4gBIeaSeYNlhQ8SV8GNq66mWL/VawwGAz64wZPan4QBF0zm+evtS4j3Ukt5psXqOgywq3NGVcmLgDTvr6hFFC5bwpca1Of9NbcAAAAAElFTkSuQmCC"
                ></image>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              width="38"
              height="24"
              fill="none"
              data-src="/images/p3.svg"
            >
              <path fill="url(#pattern0-103)" d="M0 0h38v24H0z"></path>
              <defs>
                <pattern
                  id="pattern0-103"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_128:4227"
                    transform="scale(.02632 .04167)"
                  ></use>
                </pattern>
                <image
                  id="image0_128:4227"
                  width="38"
                  height="24"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAACWklEQVRIDe2XPU8UURSGp6Cx9wf4D7CyETsL116wVUi0MMEEYgzBQgvjYkWhSIlSmBAjJBZa8GFCIbAmJkLcYibDLhKyhRLRgBujxzx3eWd3ZpDdRnYKTnL2zpx77j3Pfc9kM+N5Nevwfb8nDMMHQRC0xaldKpWueZ7X4ZAKhcLJSqXysVqtWrsNBlgcXLlcvp4FKIkCi+/7lz0kVDArYxAEeY+frACJ4xhMSrQ6HqjYyvK6FVbqvrm5feh+yfydnb1D81uZTIFR5HTnvZif6/r3Iwh0Mr+vd6KV2lHO789rtr333da/bkWxFNhI/rUrNDdbNCC7L427e64pODP9wVBE15PP3rn5sccLLj93YdRwjDnycO2nddqDddUXd2355X3rm6oLkAITyJOxt/Zw5I2hFrACABA4VKLYzf7n7np+rmisIX5neNooyLUO2nt1woETY05xFN/N52zjdqedGDofqRYDO6gtbISxcdfZ2okEQ5z5RicPNSh+MTdqPd01xQHRYwK4AG33m/3oP+X8yq0zkWoxMKmCEoIRGKOKoiJw5BFXUbfILAIgR4cgt/hpKzoEncF+LU01B9MmKoBC2gCARucQagcFG01tRC0OwTqZ9kA97OfkQKTW4KtHSrOYYmzI8yPjHgCME2uekbaTy3XS1ErW4sohDhgHkvF8DYzfsKfv6zHmYmBK/h8jgEDRAQCxP182jL+KmbXFVMkjA0Nh2ieoFEkicGRgibpNb4/BmkqUSMisYry8epl9td7/GFnNwnv//sfIauxLiQ+AMAzz9LcdTm26J6i/632gc/K0nrIAAAAASUVORK5CYII="
                ></image>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              width="38"
              height="24"
              fill="none"
              data-src="/images/p4.svg"
            >
              <path fill="url(#pattern0-104)" d="M0 0h38v24H0z"></path>
              <defs>
                <pattern
                  id="pattern0-104"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_128:4226"
                    transform="scale(.02632 .04167)"
                  ></use>
                </pattern>
                <image
                  id="image0_128:4226"
                  width="38"
                  height="24"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAABPklEQVRIDe2XsU7DMBCGb+gj8AZsPAs7hQFGeBQ60UrlmQhRtna0ZSWwZOjQpVJUVUZ/6B+Zym5LqBKr4qTrtZdT7/NvO7JFvm2glLoxxjxrrXtx9M7z/FFEBjVSlmUXZVnOqqqyfRsYwFLDFUXxFAMURQGLUmookJDJWKLWeiT4iAWIHK3AFpdX1ufrt3cL9z1D7jd2nmDL23u7Gk8b33x8WribQw0V7EwxABwy1PyDUQFXMbl+sa5TyU4V4+7DeqK5UPhOQw3rmTsmttqVdaMkrRc6m+wFS1K7TlKWHhVbgUU7lT6wkAydrrHowZZ3D3Y1eW28ecE6OdRwICFVffk/rTE2ZOTu4+/d6AMI5c4LLDTKU+ZbKXZKgNB/4fAq0R6tt5eReQzn/u1lZP7jpoQLgDFmhPntw9Ebs0eoL6DF13Jnf9poAAAAAElFTkSuQmCC"
                ></image>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              width="38"
              height="24"
              fill="none"
              data-src="/images/p5.svg"
            >
              <path fill="url(#pattern0-105)" d="M0 0h38v24H0z"></path>
              <defs>
                <pattern
                  id="pattern0-105"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_128:4225"
                    transform="scale(.02632 .04167)"
                  ></use>
                </pattern>
                <image
                  id="image0_128:4225"
                  width="38"
                  height="24"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAACQUlEQVRIDc2Xz0tUURSA33/VpkVoiS0qFxJYQm2KwpVF1KpdK0lBNLIIbYqMfqCYBG2cKSwJdGihC3VcFUXDmxleupiZzYnvyHk8hOzeK8PMgfPeu/fde8/3zjn3vnujKIqiWq12Io7jfKVSkXYqDLDApFBJkkiz2ZR2CwywKFwcx4VOgDKnNBoNgSkidKGy+v2bPF55Ktdf35DuB2dVeaaOd6ECUxDYn/qujBYm5dhY96FKG9r6ShDYZnlbBp9fPRQoC0xb+vhIENjFZ1ecoQwQOB/xBnu0MuMNZXD0dRUvsJ/JL4Uiya+9GlbF6PHxLrmzeFNuv9ufANly78Mz6YfQjzFcxAusUFpOwWxwQtQ3fUqS+m+tItnP505KeW9Hyy+Lb1MwPoIxXMQLLBvGrXIpNTw01yOrP+a0/LG0LMMLPbK0M6Vl87JvOL3ACJ8ZwDMIs+3eUq/MrA1pmcv4536Z+nopLfc9uZD2YwwXCQbDmAkQwO3W97Tq/eZ9Gfl0Wsyr2fWuJWDZUOI5M0zYCOfixgcF246/aDjJLwSvmqddZ6aXxyz5zYiFExAmwK2FuwrC5fLsOV2ErcLC2ZLkP5jI/dMDMr+eUwWWZeJFMafKO+r4Z6LM3q7JFi0XfP3BcJr3XO6zxTfmwP/evUJpo4X8klyT3mwEgZHMPnC0dV3xjwRGZ9325CfS2favUI7mJ8yW1z3IY1kLbAbJO0JFcqM8U3fkjWLHbq3Z+HfSYaRare4fRuykhOeIbTsVBju+/QWNrYcCg+pKmAAAAABJRU5ErkJggg=="
                ></image>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              width="38"
              height="24"
              fill="none"
              data-src="/images/p6.svg"
            >
              <path fill="url(#pattern0-106)" d="M0 0h38v24H0z"></path>
              <defs>
                <pattern
                  id="pattern0-106"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_128:4224"
                    transform="scale(.02632 .04167)"
                  ></use>
                </pattern>
                <image
                  id="image0_128:4224"
                  width="38"
                  height="24"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAACiElEQVRIDc2XwWrUUBSGs+gj+AaCG3e6ceFCwbWuqgXd1yfQF1Bot/oA+gLaB5iBDiXY6XRKQadCS9IwKQ1MS2sthTLt4sp3zbmeDMn0ZhBmDmRyk3PuPd/978mdJAj+2lwURS+SJFmK43gqB7n7/f5iEARzFqnb7d4aDAY/hsOhmbbBAIuFS9P09SxAiSiwRFG0ECCh3Jzk/Ovqamy39ump+Zpl5nOajo3TzjiOlwN+9M067eTiwoX/PD+3AB/3982rrS3zOAzNnWazcBDz+/ra9alqTAQmCgCwcnjoxn7Z7RYgRqG4bhwdWWDXqaLhBcZgKHC/1SokBkSbBpvvdKzrQxy7PviZFIA3mRdY2cxl9jqBBhMlBYR4/J/6fXvW/craE4M9W19340nNCJj2abA3OzsGBYmj1igF/GU2MZhWRAYXsG8nJy6XBgPq3e6uXUpiAa1a1onAtCIk0GCL29sOisYomMBTs4A9CsNCvFzUBrvdaLgnUZJqMK3WKBgPkYChFFAsaZnVBpvf2HDjSBIB+5JlzidtgQeE9r3VVVtnVUAyQC0w1OrlMyQxySQhAx5cXtpx8VFPmAYDRsfbgIqfWmC6fliGUTDJga8MjKeXPjepxTjeYFVqjSoAEPfKwEQ9mcC4szfYQudfbWm1NBiKyL/D0t6ezSswT9ttt6zjgMTnBXa32TTfz85sH3ZuYPRBckzUwvdwbc2sZJl5vrlpY3lQ8HP2MS8wUUsrosEetFrmfb5x6vu6zZsGe9d/BXsShqZ5fGze5ju1TujbZvmBYi/zMS/FqA9fgLI49i5Zbh8oYnh5DWb21Tr/GOnNwnt//jHSK3wp8QGQJMky6zuNg9ysnkD9AdGFeIhVGsBEAAAAAElFTkSuQmCC"
                ></image>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              width="38"
              height="24"
              fill="none"
              data-src="/images/p7.svg"
            >
              <path fill="url(#pattern0-107)" d="M0 0h38v24H0z"></path>
              <defs>
                <pattern
                  id="pattern0-107"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_128:4223"
                    transform="scale(.02632 .04167)"
                  ></use>
                </pattern>
                <image
                  id="image0_128:4223"
                  width="38"
                  height="24"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAABxUlEQVRIDd2Xv07CUBTGDwuRQQpOGgb/sMALQJx008U4yG5EZx/BBzAxMJfEBRZ8AFYn3qA+gCwOQqwhoRS5HPPd9KLBttSAtPEmJ/f23qG/fPf0Oz1ERDEiShCRRkTpkAMMa+SMhGEYJ0KIZw55gAEsCk6LApTSBCxElIRoabUZldlJp38ANnkzeVCtsXlY4m4qLwNr7OGMbZPHTzW2WyW2GnkZWGMPZ0HHrxQbPba5t1PkV8q4Rv84y6O7XbbuM64xfCiyeGkHYgsMBigvIOz399PM5yTDvt1wBVPAQeACgeGK/JTqaZvM5dgUjC9jbOlbnnBQbt61BgIbVHRftazT5BeUo9rHzbonGJQbG7rvlQYCMw/OfMHEVfwHmLiO+4LZrbPFwbpazhdM5dbsrHLKdW7kIwpWzy0OFtmrjGzyS7vYLnjmmbSLi292UZ5jF83CcuwCyRBJg1VZKkuSj3L9oz0eVbOeNjFsFpZfkhScLOIVnfFBwEYQWCMPp0Xc0Bk+ZdVzMrCWhvpXRVzBrWIO5PyrAJl9hwJLTiaT99nDsJ6FEB0iSuHXWjUjnbBg1HsB5TQj6NrkQMuEBiDs9g1KASr2CVgytrRaCewbAAAAAElFTkSuQmCC"
                ></image>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              width="38"
              height="24"
              fill="none"
              data-src="/images/p8.svg"
            >
              <path fill="url(#pattern0-108)" d="M0 0h38v24H0z"></path>
              <defs>
                <pattern
                  id="pattern0-108"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_128:4222"
                    transform="scale(.02632 .04167)"
                  ></use>
                </pattern>
                <image
                  id="image0_128:4222"
                  width="38"
                  height="24"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAABy0lEQVRIDc2XsU7DMBCG82i8ADPMZUeMdCxiYwAJNmBsV9hgQKIjYoQRwUCpoGrSEFQVGqEafUaHQnEaX0TUnmQ5cs/21/8u5zgIgiCI43gpDMPLKIrMPBsMsMBkoZIkMWmamnkbDLBYuDAM24sAJaKMx2MDU0DoytrH3Y1Jzlumd1A3nfqqbTwzxm9lDaZSYJPR0PSPt83jxvLMhg++WisFlj7dm+7W2kygLDC+zNGYGox/r4ESQOZolFOD9Y/yw0eOvbVPbW4Nry/+KBq19rxFU4GRzKKAqx/dXtmN6eOTQ6ev7wuhAns9azo3AxK1sLT7kOuDH2v4mAqst193bvq8s/6T3J/Riw2lS1HGWMPHVGCdzRUnGCVBwsimrvwSUFG2CO5fwNiUgloEhR9/zsdUYHmhRAVKAbWKsIo6rr6SUOYlv6g1eR8WglWS/LPKBW9jkVooWEm5IDdcBZbk94GKmrs+6WV9VDnGDHskNWq/8ogcc+VTdqzbqFV7JAFnD/EpuCzE9DNQlR/iEguUc4V1GorwaQ5vWV8dSpkoPcnMm0YZoEbReGbMN9FlrWxvwRb205oP/0W6jAwGg+/LiNyUUA4J59lgkOvbF9ykyrb8h1SXAAAAAElFTkSuQmCC"
                ></image>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              width="38"
              height="24"
              fill="none"
              data-src="/images/p9.svg"
            >
              <path fill="url(#pattern0-109)" d="M0 0h38v24H0z"></path>
              <defs>
                <pattern
                  id="pattern0-109"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_128:4221"
                    transform="scale(.02632 .04167)"
                  ></use>
                </pattern>
                <image
                  id="image0_128:4221"
                  width="38"
                  height="24"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAYCAYAAACWTY9zAAAB8UlEQVRIDe2Xv0oDQRCHJ51p8ucNfAQfwRcQfAHBFzC2dmpro2AraGMnaKVl0gqGSEAQAmokIAQOI8JBQNjw7d0ce/FySVS8FLcw7O7c7G+/md1AVkSkICJFESmLSDVjg2FJwlaUjYs1qTW7st0ymRoMsIRw5YWA0qIAJ1KiaNVMq6RAbh9cqRxs9vubV8y9P7OMp1Vs4H+ZtLZ63DF7N29pIbFvxK4cPJr3Md2zWy9+zGlgm+dd8+INowWMafoLZhMEgQcQP32j8xnFaCwwGLFAoV3ZaZtWz7caGhf1aWD3Pd8KLO8/WBHEXDCEacQhyNwFA7AeGgB8B86FumoPviVh4SaBaXYEHTX69rgQJmN8iNNTMcbEA+WC6ZyeBpzdNFxHQmiqL9ZPAmNDjopgNsUYA0nPt/WTJ0M1mRMPAD49SmJ2rwMDTPWIJxmSVF18MUsCIwsam7KZiiOiIGzCMSGGj0YsfgVjrgY4sSR26oy5b4lVSwJD/NkbWiB6RLkLHIVCAkU7rPfNZXtgx2yIX9dqrPbEUiWOkDX4AdP7N7VigJC1GhlhOv9Nr1Uf19ArEsElVSz6OH7u/znPweatdl6xH1asJLXmx0JcehLYunsVkQp/rYPHCI55M/vreBiCxwivNtt4MvEAyPr5RqWAKowAVNi5TMxqqb8AAAAASUVORK5CYII="
                ></image>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
