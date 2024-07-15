import React from 'react'
import { Link } from 'react-router-dom'

const ErrorSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  };
  return (
    <>
        <div className="error-section fix section-padding">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="error-items text-center">
          <div
            className="error-image wow fadeInUp"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp"
            }}
          >
            <img src="./src/assets/img/error.webp" alt="img" />
          </div>
          <Link
            to="/" onClick={scrollToTop}
            className="theme-btn wow fadeInUp"
            data-wow-delay=".5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeInUp"
            }}
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ErrorSection