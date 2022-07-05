import React from "react";
import "./container.css";

import { FormattedMessage, IntlProvider } from "react-intl";
import { messages } from "src/constants/locales/messages";
import { LanguageComponent } from "../header/language-dropdown/language-dropdown.component";
import { useLocale } from "../header/language-dropdown/use-locale.component";

import { ThemeProvider } from "styled-components";
import { THEME, ThemeContext } from "../header/theme-toggle/theme";
import { GlobalStyles } from "./global-styles";
import { useThemeMode } from "../header/theme-toggle/use-theme-mode.component";
import { ToggleTheme } from "../header/theme-toggle/theme-toogle.component";

import { WelcomeComponent } from "../sections/welcome/welcome.component";
import { AboutMeComponent } from "../sections/about-me/about-me.component";
import { SkillsComponent } from "../sections/skills/skills.component";
import { ResumeComponent } from "../sections/resume/resume.component";
import { BannerComponent } from "../sections/banner/banner.component";
import { ContactComponent } from "../sections/contact/contact.component";
import { Footer } from "../footer/footer.component";

export const ContainerComponent = () => {
  const [theme, toggleTheme] = useThemeMode();
  const themeMode = theme === "light" ? THEME.light : THEME.dark;

  const [locale, setLocale] = useLocale();

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeContext.Provider value={themeMode}>
        <IntlProvider
          messages={messages[locale as string]}
          locale={locale as string}
          defaultLocale="en"
        >
          <GlobalStyles />
          <header
            className="headerContainer"
            style={{ backgroundColor: themeMode.backgroundGrey }}
          >
            <FormattedMessage id="PORTFOLIO" defaultMessage="Portfolio">
              {(text) => <h2>{text}</h2>}
            </FormattedMessage>
            <div>
              <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
              <LanguageComponent locale={locale} setLocale={setLocale} />
            </div>
          </header>

          <main>
            <WelcomeComponent />
            <AboutMeComponent />
            <SkillsComponent />
            <BannerComponent />
            <ResumeComponent />
            <ContactComponent />
          </main>

          <Footer />
        </IntlProvider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
