import React, { useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./container.css";

import { IntlProvider } from "react-intl";
import { messages } from "src/constants/locales/messages";
import { useLocale } from "../header/language-dropdown/use-locale.component";

import { ThemeProvider } from "styled-components";
import { THEME, ThemeContext } from "../header/theme-toggle/theme";
import { GlobalStyles } from "./global-styles";
import { useThemeMode } from "../header/theme-toggle/use-theme-mode.component";

import { PortfolioPageComponent } from "src/pages/portfolio/portfolio-page.component";
import { HeaderComponent } from "../header/header/header.component";
import { SettingsComponent } from "../header/header/menu/settings.component";

export const ContainerComponent = () => {
  const [theme, toggleTheme] = useThemeMode();
  const themeMode = theme === "light" ? THEME.light : THEME.dark;

  const [locale, setLocale] = useLocale();

  const settings = useMemo(() => {
    return (
      <SettingsComponent
        theme={theme}
        toggleTheme={toggleTheme}
        locale={locale}
        setLocale={setLocale}
      />
    );
  }, [theme, toggleTheme, locale, setLocale]);

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeContext.Provider value={themeMode}>
        <IntlProvider
          messages={messages[locale as string]}
          locale={locale as string}
          defaultLocale="en"
        >
          <GlobalStyles />
          <HeaderComponent settings={settings} />
          <Routes>
            <Route path="/" element={<PortfolioPageComponent />} />
            <Route path="/example1" element={<>example1</>} />
            <Route path="/example2" element={<>example2</>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </IntlProvider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
