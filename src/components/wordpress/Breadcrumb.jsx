import React from "react";
import { Link } from "react-router-dom";
import { MdRoundaboutLeft } from "react-icons/md";

const Breadcrumb = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className="breadcrumb-wrapper bg-cover section-padding"
        style={{ backgroundImage: "url('./src/assets/img/breadcrumb.webp')" }}
      >
        <div
          className="layer-shape wow fadeInLeft"
          data-wow-delay=".3s"
          style={{

            animationDelay: ".3s",
            animationName: "fadeInLeft",
          }}
        >
          <img src="./src/assets/img/layer-shape-3.webp" alt="shape-img" />
        </div>
        <div
          className="breadcrumb-shape wow fadeInRight"
          data-wow-delay=".5s"
          style={{

            animationDelay: ".5s",
            animationName: "fadeInRight",
          }}
        >
          {/* <img src="../img/breadcrumb-shape.webp" alt="shape-img" /> */}
        </div>
        <div className="container">
          <div className="page-heading">
            <h1
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{

                animationDelay: ".3s",
                animationName: "fadeInUp",
              }}
            >
              Wordpress
            </h1>
            <ul
              className="breadcrumb-items wow fadeInUp"
              data-wow-delay=".5s"
              style={{

                animationDelay: ".5s",
                animationName: "fadeInUp",
              }}
            >
              <li>
                <Link to="/" onClick={scrollToTop}>
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <MdRoundaboutLeft />
              </li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
