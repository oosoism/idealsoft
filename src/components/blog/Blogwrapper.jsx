import React from 'react';
import img04 from '../../assets/img/news/04.webp';
import img05 from '../../assets/img/news/05.webp';
import img06 from '../../assets/img/news/06.webp';
import img10 from '../../assets/img/news/10.webp';
import img12 from '../../assets/img/news/12.webp';
import img13 from '../../assets/img/news/13.webp';
import { BsBagCheckFill } from "react-icons/bs";

const newsItems = [
  {
    date: '20 Feb',
    image: img04,
    category: 'Startup',
    title: 'Crafting a digital identity: the art of agency web design',
    comments: '02 Comments',
  },
  {
    date: '22 April',
    image: img05,
    category: 'Consulting',
    title: 'How to manage business’s online reputation',
    comments: '02 Comments',
  },
  {
    date: '20 Feb',
    image: img06,
    category: 'Business',
    title: 'Top crypto exchange systems influencers in china',
    comments: '02 Comments',
  },
  {
    date: '20 Feb',
    image: img10,
    category: 'Startup',
    title: 'Crafting a digital identity: the art of agency web design',
    comments: '02 Comments',
  },
  {
    date: '22 April',
    image: img12,
    category: 'Consulting',
    title: 'How to manage business’s online reputation',
    comments: '02 Comments',
  },
  {
    date: '20 Feb',
    image: img13,
    category: 'Business',
    title: 'Top crypto exchange systems influencers in china',
    comments: '02 Comments',
  },
];

const Blogwrapper = () => {
  return (
    <section className="news-section fix section-padding">
      <div className="container">
        <div className="row">
          {newsItems.map((item, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.3 + 0.2 * index}s`}>
              <div className={`single-news-items-2 ${index === 1 ? '' : ''}`}>
                <div className="news-image bg-cover" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="post-date">
                    <h5>{item.date.split(' ')[0]}</h5>
                    <span>{item.date.split(' ')[1]}</span>
                  </div>
                  <div className="news-content">
                    <div className="icon">
                      <BsBagCheckFill  className='inline text-white mr-2'/>
                      <span>{item.category}</span>
                    </div>
                    <h4>
                      <a href="news-details.html">
                        {item.title}
                      </a>
                    </h4>
                    <ul className="post-list">
                      <li>
                        <i className="far fa-comment-alt"></i>
                        <span>{item.comments}</span>
                      </li>
                      <li>
                        <a href="news-details.html"><i className="fas fa-long-arrow-right"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="page-nav-wrap mt-5 text-center">
          <ul>
            <li>
              <a className="page-numbers" href="#"><i className="fas fa-long-arrow-left"></i></a>
            </li>
            <li><a className="page-numbers" href="#">01</a></li>
            <li><a className="page-numbers" href="#">02</a></li>
            <li><a className="page-numbers" href="#">..</a></li>
            <li><a className="page-numbers" href="#">10</a></li>
            <li><a className="page-numbers" href="#">11</a></li>
            <li>
              <a className="page-numbers" href="#"><i className="fas fa-long-arrow-right"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blogwrapper;
