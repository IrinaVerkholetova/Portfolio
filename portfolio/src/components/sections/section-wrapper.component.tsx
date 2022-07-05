import React, { FC, useContext } from "react";
import "./section-wrapper.css";

import { ThemeContext } from "../header/theme-toggle/theme";
import { DividerH2Component } from "../graphics-elements/divider-h2.component";
import classNames from "classnames";

interface ISectionWrapperProps {
  background?: string;
  title?: string;
  section?: string;
  children: JSX.Element;
}

export const SectionWrapperComponent: FC<ISectionWrapperProps> = ({
  background,
  title,
  section,
  children,
}) => {
  const themeContext = useContext(ThemeContext);
  return (
    <section
      className="sectionContainer"
      style={background ? { background: background } : {}}
    >
      {title && (
        <>
          <h2 style={{ color: themeContext.text }}>{title}</h2>
          <DividerH2Component />
        </>
      )}

      <div className={classNames("columns", { section })}>{children}</div>
    </section>
  );
};
