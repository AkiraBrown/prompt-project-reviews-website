import { useState, useEffect } from "react";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "1000",
            fontSize: "16px",
            padding: "10px 15px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 123, 255, 0.7)",
            color: "white",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s",
          }}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
