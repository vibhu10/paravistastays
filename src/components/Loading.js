import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loading-icons";
import "./Loading.css";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (!isLoading) {
    return null; // Render nothing after loading is complete
  }

  return (
    <div className="loading-container">
      <ThreeDots fill="#005f53" width="80" />
    </div>
  );
}
