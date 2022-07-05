import { FormattedMessage } from "react-intl";

export const ResumeData = {
  education: [
    {
      key: "1-1",
      duration_start: "2012-9-1",
      duration_end: "2017-6-27",
      company: (
        <FormattedMessage
          id="UNIVERSITY"
          defaultMessage="Kozma Minin Nizhny Novgorod State Pedagogical University (Minin University)"
        />
      ),
      position: (
        <FormattedMessage
          id="DIRECTION"
          defaultMessage="Mathematics and Computer science"
        />
      ),
      description: "",
    },
  ],
  experience: [
    {
      key: "2-1",
      duration_start: "2017-9-1",
      duration_end: "2021-3-4",
      company: (
        <FormattedMessage
          id="COLLEGE"
          defaultMessage="Nizhny Novgorod provincial Сollege"
        />
      ),
      position: <FormattedMessage id="TEACHER" defaultMessage="Teacter" />,
      description: "",
    },
    {
      key: "2-2",
      duration_start: "2021-3-9",
      duration_end: "2022-6-6",
      company: <FormattedMessage id="COMPANY_MERA" defaultMessage="MERA NN" />,
      position: (
        <FormattedMessage
          id="FRONTEND_DEVELOPER"
          defaultMessage="Front-end developer"
        />
      ),
      description: "",
    },
  ],
};
