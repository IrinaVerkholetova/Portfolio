import React, { useContext } from "react";
import "./banner.css";

import { ThemeContext } from "../../header/theme-toggle/theme";
import { FormattedMessage } from "react-intl";
import { SectionWrapperComponent } from "../section-wrapper.component";
import { BannerImage } from "./banner-image.component";

export const BannerComponent = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <SectionWrapperComponent
      background={themeContext.backgroundGrey}
      children={
        <div className="banner">
          <BannerImage />
          <FormattedMessage
            id="AVALIABLE"
            defaultMessage="I am Avaliable for Projects"
          >
            {(text) => (
              <span style={{ color: themeContext.paragraph }}>{text}</span>
            )}
          </FormattedMessage>
        </div>
      }
    />
  );
};
