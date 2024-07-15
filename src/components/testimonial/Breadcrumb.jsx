import React from 'react';
import breadcrumbImage from '../../assets/img/breadcrumb.webp';
import layerShapeImage from '../../assets/img/layer-shape-3.webp';
import { Link } from 'react-router-dom';
import { MdRoundaboutLeft } from "react-icons/md";
const BreadCrumb = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div
        className="breadcrumb-wrapper section-padding bg-cover"
        style={{ backgroundImage: `url(${breadcrumbImage})` }}
      >
        <div
          className="layer-shape wow fadeInLeft"
          data-wow-delay=".3s"
          style={{
            visibility: 'visible',
            animationDelay: '0.3s',
            animationName: 'fadeInLeft'
          }}
        >
          <img src={layerShapeImage} alt="shape-img" />
        </div>
        <div className="container">
          <div className="page-heading">
            <h1
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: 'visible',
                animationDelay: '0.3s',
                animationName: 'fadeInUp'
              }}
            >
              Tesimonial
            </h1>
            <ul
              className="breadcrumb-items wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: 'visible',
                animationDelay: '0.5s',
                animationName: 'fadeInUp'
              }}
            >
              <li>
                <Link to="/" onClick={scrollToTop} > Home</Link>
              </li>
              <li>
                <MdRoundaboutLeft />
              </li>
              <li>Tesimonial</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
