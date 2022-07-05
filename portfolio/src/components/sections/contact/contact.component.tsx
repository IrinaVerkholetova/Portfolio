import React, { useContext } from "react";

import { ThemeContext } from "../../header/theme-toggle/theme";
import { useIntl } from "react-intl";
import { SectionWrapperComponent } from "../section-wrapper.component";

export const ContactComponent = () => {
  const themeContext = useContext(ThemeContext);
  const intl = useIntl();

  return (
    <SectionWrapperComponent
      background={themeContext.backgroundGrey}
      title={intl.formatMessage({
        id: "CONTACT_ME",
        defaultMessage: "Contact Me",
      })}
      children={<></>}
    />
  );
};
