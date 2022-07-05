import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../header/theme-toggle/theme";

export const DividerH3Component = () => {
  const themeContext = useContext(ThemeContext);
  const lineRef = useRef(null);

  const drawLine = (
    canvasRef: any,
    x0: number,
    y0: number,
    xn: number,
    yn: number,
    color: string
  ) => {
    const ctx = canvasRef.getContext("2d");
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(xn, yn);
    ctx.width = 4;
    ctx.stroke();
  };

  useEffect(() => {
    drawLine(lineRef.current, 0, 1, 100, 1, themeContext.headerOrange);
    drawLine(lineRef.current, 0, 5, 70, 5, themeContext.text);
  }, [themeContext.text]);

  return <canvas ref={lineRef} width={112} height={13} />;
};
