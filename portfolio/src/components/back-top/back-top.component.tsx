import React, { useContext, useEffect, useRef, useState } from "react";
import "./back-top.css";

import { ThemeContext } from "../header/theme-toggle/theme";
import { VerticalAlignTopOutlined } from "@ant-design/icons";

export const BackTopComponent = () => {
  const themeContext = useContext(ThemeContext);

  let buttonRef = useRef<null | HTMLDivElement>(null);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY / document.documentElement.clientHeight >= 0.2) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleBackToTop = () => {
    if (buttonRef.current) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {scroll && (
        <div
          ref={buttonRef}
          className="backToTop"
          style={{ background: themeContext.headerOrange }}
          onClick={handleBackToTop}
        >
          <VerticalAlignTopOutlined />
        </div>
      )}
    </>
  );
};
