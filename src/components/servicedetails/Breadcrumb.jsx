import React from 'react';
import { Link } from 'react-router-dom'
import breadcrumbImage from '../../assets/img/breadcrumb.webp';
import layerShapeImage from '../../assets/img/layer-shape-3.webp';
import breadcrumbShapeImage from '../../assets/img/breadcrumb.webp';



const BreadCrumb = () => {
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
            
            animationDelay: '0.3s',
            animationName: 'fadeInLeft'
          }}
        >
          <img src={layerShapeImage} alt="shape-img" />
        </div>
        <div
          className="breadcrumb-shape wow fadeInRight"
          data-wow-delay=".5s"
          style={{
            
            animationDelay: '0.5s',
            animationName: 'fadeInRight'
          }}
        >
          <img src={breadcrumbShapeImage} alt="shape-img" />
        </div>
        <div className="container">
          <div className="page-heading">
            <h1
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                
                animationDelay: '0.3s',
                animationName: 'fadeInUp'
              }}
            >
              App Development
            </h1>
            <ul
              className="breadcrumb-items wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                
                animationDelay: '0.5s',
                animationName: 'fadeInUp'
              }}
            >
              <li>
              <Link to="/"> Home</Link>
              </li>
              <li>
                <i className="fal fa-minus" />
              </li>
              <li>App Development</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
