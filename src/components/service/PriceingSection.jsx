import React from 'react';
import arrowShape from '../../assets/img/services/arrow-shape.webp';
import wordpressicon from '../../assets/img/icon/Wordpress.webp';
import ecommerce from '../../assets/img/icon/ecommerce.webp';
import digital from '../../assets/img/icon/digital.webp';
import seo from '../../assets/img/icon/seo.webp';
import googleAds from '../../assets/img/icon/googleAds.webp';
import Shopify from '../../assets/img/icon/Shopify.webp';

import shapeImage from '../../assets/img/shape-2.webp';
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const PriceingSection = () => {
  return (
    <section className="pricing-section section-padding pt-0">
      <div className="shape-image">
        <img src={arrowShape} alt="shape-img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">Our pricing plans</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Choose Your Optimal <br /> Pricing Plans
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="single-pricing-items">
              <div className="pricing-header">
                <h2>Wordpress</h2>
                <span>Perfect Plan for Starters.</span>
                <div className="icon-area">
                  <img src={wordpressicon} alt="icon-img" className='w-32 h-32' />
                </div>
              </div>
              <ul>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> 24*7 premium support site optimisation</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> SEO &amp; Digital Marketing Analysing</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> Customer Management</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> Full Access Library</li>
                <li className="last-list"><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> 24 Hours Support</li>
              </ul>
              <div className="pricing-button">
                <a href="#" className="theme-btn header-color">CHOOSE PLAN</a>
              </div>
              <div className="shape-image">
                <img src={shapeImage} alt="shape-img" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="single-pricing-items">
              <div className="pricing-header">
                <h2>Ecommerce</h2>
                <span>Collaborate Professionally.</span>
                <div className="icon-area ">
                  <img src={ecommerce} alt="icon-img" className='w-32 h-32' />
                </div>
              </div>
              <ul>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> 24*7 premium support site optimisation</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> SEO &amp; Digital Marketing Analysing</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> Customer Management</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> Full Access Library</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> 24 Hours Support</li>
              </ul>
              <div className="pricing-button">
                <a href="#" className="theme-btn">CHOOSE PLAN</a>
              </div>
              <div className="shape-image">
                <img src={shapeImage} alt="shape-img" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="single-pricing-items">
              <div className="pricing-header">
                <h2>Digital Marketing</h2>
                <span>True Power of Management</span>
                <div className="icon-area">
                  <img src={digital} alt="icon-img" className='w-32 h-32' />
                </div>
              </div>
              <ul>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> 24*7 premium support site optimisation</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> SEO &amp; Digital Marketing Analysing</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> Customer Management</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> Full Access Library</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> 24 Hours Support</li>
              </ul>
              <div className="pricing-button">
                <a href="#" className="theme-btn header-color">CHOOSE PLAN</a>
              </div>
              <div className="shape-image">
                <img src={shapeImage} alt="shape-img" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="single-pricing-items">
              <div className="pricing-header">
                <h2>SEO</h2>
                <span>Perfect Plan for Starters.</span>
                <div className="icon-area">
                  <img src={seo} alt="icon-img" className='w-32 h-32' />
                </div>
              </div>
              <ul>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> 24*7 premium support site optimisation</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> SEO &amp; Digital Marketing Analysing</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> Customer Management</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> Full Access Library</li>
                <li className="last-list"><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> 24 Hours Support</li>
              </ul>
              <div className="pricing-button">
                <a href="#" className="theme-btn header-color">CHOOSE PLAN</a>
              </div>
              <div className="shape-image">
                <img src={shapeImage} alt="shape-img" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="single-pricing-items">
              <div className="pricing-header">
                <h2>Google Ads</h2>
                <span>Perfect Plan for Starters.</span>
                <div className="icon-area">
                  <img src={googleAds} alt="icon-img" className='w-32 h-32' />
                </div>
              </div>
              <ul>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> 24*7 premium support site optimisation</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> SEO &amp; Digital Marketing Analysing</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> Customer Management</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> Full Access Library</li>
                <li className="last-list"><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> 24 Hours Support</li>
              </ul>
              <div className="pricing-button">
                <a href="#" className="theme-btn header-color">CHOOSE PLAN</a>
              </div>
              <div className="shape-image">
                <img src={shapeImage} alt="shape-img" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="single-pricing-items">
              <div className="pricing-header">
                <h2>Shopify</h2>
                <span>Perfect Plan for Starters.</span>
                <div className="icon-area">
                  <img src={Shopify} alt="icon-img" className='w-32 h-32' />
                </div>
              </div>
              <ul>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> 24*7 premium support site optimisation</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> SEO &amp; Digital Marketing Analysing</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> Customer Management</li>
                <li><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> Full Access Library</li>
                <li className="last-list"><IoCheckmarkDoneSharp className='inline text-green-500 -mt-3 fs-5' /> 24 Hours Support</li>
              </ul>
              <div className="pricing-button">
                <a href="#" className="theme-btn header-color">CHOOSE PLAN</a>
              </div>
              <div className="shape-image">
                <img src={shapeImage} alt="shape-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceingSection;
