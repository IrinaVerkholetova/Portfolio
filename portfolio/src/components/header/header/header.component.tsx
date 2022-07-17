import React, { FC, useContext } from "react";
import "./header.css";

import { Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";

import { ThemeContext } from "styled-components";

import { MenuComponent } from "./menu/menu.component";

interface HeaderProps {
  settings: JSX.Element;
}

export const HeaderComponent: FC<HeaderProps> = ({ settings }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <header
      className="headerContainer"
      style={{ backgroundColor: themeContext.backgroundGrey }}
    >
      <Link to="/">
        <FormattedMessage id="PORTFOLIO" defaultMessage="Portfolio">
          {(text) => (
            <h2 style={{ color: themeContext.headerOrange }}>{text}</h2>
          )}
        </FormattedMessage>
      </Link>
      <MenuComponent settings={settings} />
    </header>
  );
};
