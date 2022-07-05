import React, { useContext } from "react";
import "./banner.css";
import TweenOne from "rc-tween-one";
import { ThemeContext } from "src/components/header/theme-toggle/theme";

const duration = 7000;
const ease = "easeInOutSine";
const loop = {
  yoyo: true,
  repeat: -1,
  duration,
  ease,
};

const animate = {
  smallCircle: {
    ...loop,
    y: 100,
    duration: 3000,
    delay: 200,
  },
  bigCircle: {
    ...loop,
    y: 330,
    duration: 5000,
    delay: 200,
    repeat: -1,
  },
  bigTriangle: {
    ...loop,
    x: 150,
    y: 180,
    rotate: 90,
  },
  smallTriangle: {
    ...loop,
    x: 50,
    y: 80,
    rotate: 120,
  },
};

export const BannerImage = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="wrapper-banner">
      <svg width="450px" height="200px" viewBox="0 0 500 500">
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          transform="translate(0, 30)"
        >
          <g id="Group-14" transform="translate(-250.000000, 10.000000)">
            <TweenOne component="g" animation={animate.smallTriangle}>
              <svg
                width="5em"
                height="4em"
                viewBox="0 0 2 2"
                preserveAspectRatio="none"
              >
                <polygon
                  fill={themeContext.backgroundDarkGrey}
                  points="0,0 2,0 1,2"
                />
              </svg>
            </TweenOne>
          </g>
          <g id="Group-13" transform="translate(0.000000, 41.000000)">
            <TweenOne component="g" animation={animate.smallCircle}>
              <circle
                cx="25"
                cy="75"
                r="40"
                stroke={themeContext.backgroundDarkGrey}
                strokeWidth="1.6"
                fill={themeContext.backgroundDarkGrey}
                transform="translate(184.000000, 18.000000) translate(-184.000000, -18.000000) "
                x="176.8"
                y="150.8"
                width="34.4"
                height="34.4"
                rx="3.6"
              />
            </TweenOne>
          </g>
          <g id="Group-14" transform="translate(150.000000, 170.000000)">
            <TweenOne component="g" animation={animate.bigTriangle}>
              <svg
                width="8em"
                height="7em"
                viewBox="0 0 2 2"
                preserveAspectRatio="none"
              >
                <polygon
                  fill={themeContext.backgroundDarkGrey}
                  points="0,0 2,0 1,2"
                />
              </svg>
            </TweenOne>
          </g>
          <g id="Group-13" transform="translate(500.000000, 10.000000)">
            <TweenOne component="g" animation={animate.bigCircle}>
              <circle
                cx="50"
                cy="75"
                r="60"
                stroke={themeContext.backgroundDarkGrey}
                strokeWidth="1.6"
                fill={themeContext.backgroundDarkGrey}
                transform="translate(184.000000, 18.000000) translate(-184.000000, -18.000000) "
                x="176.8"
                y="150.8"
                width="34.4"
                height="34.4"
                rx="3.6"
              />
            </TweenOne>
          </g>
        </g>
      </svg>
    </div>
  );
};
