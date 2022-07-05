import React, { useContext } from "react";
import "./welcome.css";

import { FormattedMessage, useIntl } from "react-intl";
import { ThemeContext } from "src/components/header/theme-toggle/theme";
import { SectionWrapperComponent } from "../section-wrapper.component";

import { useLocale } from "src/components/header/language-dropdown/use-locale.component";
import moment from "moment";
require("moment/min/locales.min");

export const WelcomeComponent = () => {
  const intl = useIntl();
  const themeContext = useContext(ThemeContext);

  const [locale, setLocale] = useLocale();
  moment.locale(locale);

  return (
    <SectionWrapperComponent
      children={
        <>
          <div className="aboutDeveloper">
            <FormattedMessage id="HELLO" defaultMessage="Hello," />
            <FormattedMessage
              id="NAME"
              defaultMessage="I am {name}"
              values={{
                name: intl.formatMessage({
                  id: "DEVELOPER",
                  defaultMessage: "Irina Verkholetova",
                }),
              }}
            >
              {(text) => (
                <h1 style={{ color: themeContext.headerOrange }}>{text}</h1>
              )}
            </FormattedMessage>
            <FormattedMessage
              id="FRONTEND_DEVELOPER"
              defaultMessage="Front-end developer"
            />
            <span>
              <FormattedMessage
                id="TODAY"
                defaultMessage="Today is {date}"
                values={{ date: moment().format("LLLL") }}
              />
            </span>
          </div>
          <div className="photo" />
        </>
      }
    />
  );
};
