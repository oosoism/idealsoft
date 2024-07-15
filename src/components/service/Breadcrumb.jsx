import React from 'react';
import breadcrumbImg from '../../assets/img/breadcrumb.webp';
import layerShapeImg from '../../assets/img/layer-shape-3.webp';
import { Link } from 'react-router-dom';
import { FcServices } from "react-icons/fc";

const Breadcrumb = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div
      className="breadcrumb-wrapper section-padding bg-cover"
      style={{ backgroundImage: `url(${breadcrumbImg})` }}
    >
      <div
        className="layer-shape wow fadeInLeft"
        data-wow-delay=".3s"
        style={{

          animationDelay: "0.3s",
          animationName: "fadeInLeft"
        }}
      >
        <img src={layerShapeImg} alt="shape-img" />
      </div>
      <div className="container">
        <div className="page-heading">
          <h1
            className="wow fadeInUp"
            data-wow-delay=".3s"
            style={{

              animationDelay: "0.3s",
              animationName: "fadeInUp"
            }}
          >
            Services
          </h1>
          <ul
            className="breadcrumb-items wow fadeInUp"
            data-wow-delay=".5s"
            style={{

              animationDelay: "0.5s",
              animationName: "fadeInUp"
            }}
          >
            <li>
              <Link to="/" onClick={scrollToTop} > Home</Link>
            </li>
            <li>
              <FcServices />
            </li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
