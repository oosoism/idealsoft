import shapeImage from "../../assets/img/shape-5.webp";
import chooseImage1 from "../../assets/img/choose/03.webp";
import chooseImage2 from "../../assets/img/choose/04.webp";
import boxShapeImage from "../../assets/img/about/box-shape.webp";
import circleTextImage from "../../assets/img/circle-text.webp";
import { Command, UserRoundSearch } from "lucide-react";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="choose-us-section fix section-padding">
    <div className="left-shape float-bob-y">
      <img src={shapeImage} alt="shape-img" />
    </div>
    <div className="container">
      <div className="choose-wrapper style-2 mb-0">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="choose-image-items">
              <div
                className="choose-image bg-cover wow fadeInUp"
                data-wow-delay=".3s"
                style={{ backgroundImage: `url(${chooseImage1})` }}
              >
                <div className="box-shape">
                  <img src={boxShapeImage} alt="shape-img" />
                </div>
              </div>
              <div
                className="choose-image-2 wow fadeInRight"
                data-wow-delay=".5s"
              >
                <img src={chooseImage2} alt="choose-img" />
              </div>
              <div className="icon-box">
                <i className="flaticon-send" />
                <div className="circle-text">
                  <img
                    src={circleTextImage}
                    alt="img"
                    className="text-circle"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
            <div className="choose-content">
              <div
                className="section-title wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl md:mt-20 sm:mt-20 mt-20 lg:mt-0 xl:mt-0">
                  The Way We Work
                </h2>
              </div>
              <p
                className="mt-4 mt-md-0 wow fadeInUp text-justify"
                data-wow-delay=".5s"
              >
                In the ever-evolving landscape of digital marketing, staying
                ahead of the curve is crucial. Discover Jaipur's leading
                digital marketing agency that is setting new benchmarks in
                the industry. Our platform connects you with top-tier
                services that offer innovative solutions tailored to your
                business needs.
              </p>
              <div
                className="icon-area style-2 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon-items flex items-start space-x-4">
                  <div className="icon">
                    <Command size={40} />
                  </div>
                  <div className="content">
                    <h5>Advanced ORM</h5>
                    <p className="text-justify">
                      Our Advanced Online Reputation Management (ORM)
                      services are designed to enhance and protect your
                      brand's online presence. We employ cutting-edge
                      techniques to monitor, manage, and improve your
                      digital reputation, ensuring your business is
                      perceived positively by your audience.
                    </p>
                  </div>
                </div>
                <div className="icon-items flex items-start space-x-4">
                  <div className="icon">
                    <UserRoundSearch size={40} />
                  </div>
                  <div className="content">
                    <h5>Research & Strategy</h5>
                    <p className="text-justify">
                      Exceptional technical support is the backbone of any
                      successful digital marketing strategy. Our agency
                      offers round-the-clock technical support to address
                      any issues promptly and keep your campaigns running
                      without a hitch. With expert assistance at your
                      fingertips, we ensure your business stays ahead.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="about-author wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="about-button">
                  <Link
                    to="/about"
                    onClick={scrollToTop}
                    className="theme-btn"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default ChooseUs;
