import React, { useEffect, useState } from "react";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <div className="scroll-to-top">
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-button">
          <i class="fa-solid fa-arrow-up"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default ScrollToTopBtn;
