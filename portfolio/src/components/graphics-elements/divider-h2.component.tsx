import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../header/theme-toggle/theme";

export const DividerH2Component = () => {
  const themeContext = useContext(ThemeContext);
  const lineRef = useRef(null);

  const drawArc = (canvasRef: any, x: number, y: number) => {
    const ctx = canvasRef.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = themeContext.text;
    ctx.arc(x, y, 5, 0, Math.PI * 2, true);
    ctx.width = 4;
    ctx.stroke();
  };

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
    drawArc(lineRef.current, 6, 6);
    drawLine(lineRef.current, 12, 6, 100, 6, themeContext.headerOrange);
    drawArc(lineRef.current, 106, 6);
    drawLine(lineRef.current, 24, 12, 88, 12, themeContext.text);
  }, [themeContext.text]);

  return <canvas ref={lineRef} width={112} height={13} />;
};
