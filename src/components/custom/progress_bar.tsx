"use client"
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const updateProgressBar = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const currentProgress = (window.pageYOffset / totalHeight) * 100;
    setProgress(currentProgress);
  };

  useEffect(() => {
    const handleScroll = () => {
      updateProgressBar();
    };

    updateProgressBar(); // Initial update

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
