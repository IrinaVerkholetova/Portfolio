import React, { useContext } from "react";
import "./about-me.css";

import { ThemeContext } from "../../header/theme-toggle/theme";
import { FormattedMessage, useIntl } from "react-intl";
import { SectionWrapperComponent } from "../section-wrapper.component";

export const AboutMeComponent = () => {
  const themeContext = useContext(ThemeContext);
  const intl = useIntl();

  return (
    <SectionWrapperComponent
      background={themeContext.backgroundGrey}
      title={intl.formatMessage({
        id: "ABOUT_ME_TITLE",
        defaultMessage: "About Me",
      })}
      section="about"
      children={
        <>
          <div
            className="aboutMe_photo"
            style={{ borderColor: themeContext.headerOrange }}
          />
          <div className="aboutMe_description">
            <FormattedMessage
              id="ABOUT_ME_TEXT"
              defaultMessage="Hello I'm {name}, I'm {developer} from Nizniy Novgorod"
              values={{
                name: intl.formatMessage({
                  id: "DEVELOPER",
                  defaultMessage: "Irina Verkholetova",
                }),
                developer: intl.formatMessage({
                  id: "FRONTEND_DEVELOPER",
                  defaultMessage: "Front-end developer",
                }),
              }}
            >
              {(text) => <p>{text}</p>}
            </FormattedMessage>
          </div>
        </>
      }
    />
  );
};
