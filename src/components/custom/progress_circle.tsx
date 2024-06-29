"use client";
import { useEffect, useState } from "react";

const ProgressCircle = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const updateProgressCircle = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    let currentProgress = (window.pageYOffset / totalHeight) * 283;
    currentProgress = Math.min(currentProgress, 283);
    setProgress(283 - currentProgress);

    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      updateProgressCircle();
    };

    updateProgressCircle(); // Initial update

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`${
        showScrollToTop === true && "animate-bounce"
      } progress-circle-container`}
    >
      <svg className="progress-circle" viewBox="0 0 100 100">
        <circle className="progress-background" cx="50" cy="50" r="45"></circle>
        <circle
          className="progress-circle-bar"
          cx="50"
          cy="50"
          r="45"
          style={{ strokeDashoffset: progress }}
        ></circle>
      </svg>
      {showScrollToTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ProgressCircle;
