import React, { FC } from "react";
import { useIntl } from "react-intl";
import {
  Card,
  CardBody,
  CardTitle,
  Triangle,
} from "src/components/container/global-styles";

interface IResumeCardProps {
  duration_start: string;
  duration_end: string;
  position: JSX.Element;
  company: JSX.Element;
  description: string;
}

export const ResumeCardComponent: FC<IResumeCardProps> = ({
  duration_start,
  duration_end,
  position,
  company,
  description,
}) => {
  const intl = useIntl();

  const duration = intl.formatDateTimeRange(
    new Date(duration_start),
    new Date(duration_end)
  );

  return (
    <Card>
      <Triangle />
      <CardBody>
        <span>{duration}</span>
        <CardTitle>{company}</CardTitle>
        {position && <p>{position}</p>}
        <p>{description}</p>
      </CardBody>
    </Card>
  );
};
