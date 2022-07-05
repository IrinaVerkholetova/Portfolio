import React, { useContext } from "react";
import "./resume.css";

import { ThemeContext } from "../../header/theme-toggle/theme";
import { FormattedMessage, useIntl } from "react-intl";
import { SectionWrapperComponent } from "../section-wrapper.component";
import { DividerH3Component } from "src/components/graphics-elements/divider-h3.component";
import { ResumeCardComponent } from "./resume-card.component";
import { ResumeData } from "src/constants/resume-data";

export const ResumeComponent = () => {
  const themeContext = useContext(ThemeContext);
  const intl = useIntl();

  const getSubTitle = (id: string, defaultMessage: string) => (
    <>
      <FormattedMessage id={id} defaultMessage={defaultMessage}>
        {(text) => <h3 style={{ color: themeContext.headerOrange }}>{text}</h3>}
      </FormattedMessage>
      <DividerH3Component />
    </>
  );

  return (
    <SectionWrapperComponent
      title={intl.formatMessage({
        id: "RESUME",
        defaultMessage: "Resume",
      })}
      children={
        <>
          <div className="column">
            {getSubTitle("EDICATION", "Education")}
            {ResumeData.education.map((item) => (
              <ResumeCardComponent
                key={item.key}
                duration_start={item.duration_start}
                duration_end={item.duration_end}
                position={item.position}
                company={item.company}
                description={item.description}
              />
            ))}
          </div>
          <div className="column">
            {getSubTitle("EXPERIENCE", "Experience")}
            {ResumeData.experience.map((item) => (
              <ResumeCardComponent
                key={item.key}
                duration_start={item.duration_start}
                duration_end={item.duration_end}
                position={item.position}
                company={item.company}
                description={item.description}
              />
            ))}
          </div>
        </>
      }
    />
  );
};
