import React, { FC, useContext } from "react";
import "./menu.css";

import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { Menu, MenuProps } from "antd";
import { IdcardOutlined, AppstoreOutlined } from "@ant-design/icons";
import { ThemeContext } from "styled-components";

interface MenuComponentProps {
  settings: JSX.Element;
}

export const MenuComponent: FC<MenuComponentProps> = ({ settings }) => {
  const themeContext = useContext(ThemeContext);

  const items: MenuProps["items"] = [
    {
      label: (
        <Link to="/">
          <FormattedMessage id="PORTFOLIO" defaultMessage="Portfolio">
            {(text) => <span style={{ color: themeContext.text }}>{text}</span>}
          </FormattedMessage>
        </Link>
      ),
      key: "portfolio",
      icon: <IdcardOutlined />,
    },
    {
      label: (
        <FormattedMessage id="APPLICATIONS" defaultMessage="Applications" />
      ),
      key: "applications-SubMenu",
      icon: <AppstoreOutlined />,
      children: [
        {
          type: "group",
          children: [
            {
              label: <Link to="/example1">application:1</Link>,
              key: "application:1",
            },
            {
              label: <Link to="/example2">application:2</Link>,
              key: "application:2",
            },
          ],
        },
      ],
    },
    {
      label: settings,
      key: "settings",
    },
  ];

  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["portfolio"]}
      items={items}
      style={{ color: themeContext.text }}
    />
  );
};
