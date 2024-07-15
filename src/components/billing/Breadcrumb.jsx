import React from 'react';
import breadcrumbImg from '../../assets/img/breadcrumb.webp';
import layerShapeImg from '../../assets/img/layer-shape-3.webp';
import { Link } from 'react-router-dom';
import { MdRoundaboutLeft } from "react-icons/md";

const Breadcrumb = () => {
  return (
    <div
      className="breadcrumb-wrapper section-padding bg-cover"
      style={{ backgroundImage: `url(${breadcrumbImg})` }}
    >
      <div
        className="layer-shape wow fadeInLeft"
        data-wow-delay=".3s"
      >
        <img src={layerShapeImg} alt="shape-img" />
      </div>
      <div className="container">
        <div className="page-heading">
          <h1
            className="wow fadeInUp"
            data-wow-delay=".3s"
          >
            Billing
          </h1>
          <ul
            className="breadcrumb-items wow fadeInUp"
            data-wow-delay=".5s"
          >
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <MdRoundaboutLeft />
            </li>
            <li>Billing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
