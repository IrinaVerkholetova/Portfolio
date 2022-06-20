import React, { useEffect, useState } from "react";
import "./container.css";
import { FormattedMessage, IntlProvider } from "react-intl";
import { shallowEqual, useSelector } from "react-redux";
import { messages } from "src/constants/locales/messages";
import { getCurrentLanguage } from "src/redux/selectors";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../header/theme-toggle/theme";
import { GlobalStyles } from "./global-styles";
import { useDarkMode } from "../header/theme-toggle/use-dark-mode.component";

import moment from "moment";
import { ToggleTheme } from "../header/theme-toggle/theme-toogle.component";
import { LanguageComponent } from "../header/language-dropdown/language-dropdown.component";
require("moment/min/locales.min");

export const ContainerComponent = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const currentLanguage = useSelector(getCurrentLanguage, shallowEqual);
  const [locale, setLocale] = useState(currentLanguage.key);

  useEffect(() => {
    if (currentLanguage.key) {
      setLocale(currentLanguage.key);
    }
  }, [currentLanguage.key]);

  moment.locale(locale);

  return (
    <ThemeProvider theme={themeMode}>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale="en"
      >
        <GlobalStyles />
        <header className="headerContainer">
          <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
          <LanguageComponent />
        </header>

        <FormattedMessage
          id="TODAY"
          defaultMessage="Today is {date}"
          values={{ date: moment().format("LLLL") }}
        />
      </IntlProvider>
    </ThemeProvider>
  );
};
