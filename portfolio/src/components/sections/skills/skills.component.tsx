import React from "react";
import "./skills.css";

import { useIntl } from "react-intl";
import { SectionWrapperComponent } from "../section-wrapper.component";

export const SkillsComponent = () => {
  const intl = useIntl();

  return (
    <SectionWrapperComponent
      title={intl.formatMessage({
        id: "MY_SKILLS",
        defaultMessage: "My Skills",
      })}
      children={
        <>
          <p className="skills">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsam
            saepe beatae aut ea id minima illum modi, provident, voluptas,
            nostrum fugit! Molestias error quo aspernatur obcaecati rerum
            laborum repellendus.
          </p>
          <p className="skills">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            dolores, labore neque laudantium facilis ab culpa. Molestiae
            delectus distinctio minus ex nihil, illum magni, dignissimos,
            reprehenderit ut accusantium harum sequi.
          </p>
        </>
      }
    />
  );
};
