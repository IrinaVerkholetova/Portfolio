import React, { useContext, useState } from "react";

import { FormattedMessage } from "react-intl";

import { Button, Drawer } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { ToggleTheme } from "../../theme-toggle/theme-toogle.component";
import { LanguageComponent } from "../../language-dropdown/language-dropdown.component";
import { ThemeContext } from "styled-components";

interface SettingsProps {
  theme: string;
  toggleTheme: () => void;
  locale: string;
  setLocale: (locale: string) => void;
}

export const SettingsComponent: React.FC<SettingsProps> = ({
  theme,
  toggleTheme,
  locale,
  setLocale,
}) => {
  const themeContext = useContext(ThemeContext);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        type="text"
        onClick={showDrawer}
        style={{ color: themeContext.text }}
      >
        <SettingOutlined />{" "}
        <FormattedMessage id="SETTINGS" defaultMessage="Settings" />
      </Button>
      <Drawer
        title={<FormattedMessage id="SETTINGS" defaultMessage="Settings" />}
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        <LanguageComponent locale={locale} setLocale={setLocale} />
      </Drawer>
    </>
  );
};
