import React, { FC, useContext, useState } from "react";
import "./language-dropdown.css";

import { ThemeContext } from "../theme-toggle/theme";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";

import { FormattedMessage, useIntl } from "react-intl";
import { LANGUAGES } from "../../../constants/languages";
import { ILanguage } from "src/redux/types";
interface ILanguageProps {
  locale: string;
  setLocale: (locale: string) => void;
}

export const LanguageComponent: FC<ILanguageProps> = ({
  locale,
  setLocale,
}) => {
  const intl = useIntl();

  const themeContext = useContext(ThemeContext);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      input: {
        color: themeContext.text,
      },
    })
  );
  const classes = useStyles();

  const initialValue =
    LANGUAGES.find((item) => item.key === locale) || LANGUAGES[0];

  const [value, setValue] = useState<ILanguage | null>(initialValue);

  return (
    <Autocomplete
      value={value as ILanguage}
      onChange={(event: any, newValue: ILanguage | null) => {
        setValue(newValue);
        setLocale(newValue?.key || initialValue.key);
      }}
      getOptionLabel={(option) =>
        intl.formatMessage({
          id: option.id,
          defaultMessage: option.defaultMessage,
        })
      }
      id="language"
      options={LANGUAGES}
      className="autocomplete"
      classes={classes}
      disableClearable
      renderInput={(params) => (
        <TextField
          {...params}
          label={
            <div className="languageLabel" style={{ color: themeContext.text }}>
              <TranslateIcon />
              <FormattedMessage id="LANGUAGE" defaultMessage="Language" />
            </div>
          }
          variant="outlined"
        />
      )}
    />
  );
};
