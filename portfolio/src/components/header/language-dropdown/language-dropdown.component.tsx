import React, { useState } from "react";
import "./language-dropdown.css";

import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";

import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../constants/languages";

import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getCurrentLanguage } from "../../../redux/selectors";
import { setLanguage } from "../../../redux/actions";
import { Dispatch } from "redux";
import { ILanguage } from "src/redux/types";

export const LanguageComponent = () => {
  // Redux
  const currentLanguage = useSelector(getCurrentLanguage, shallowEqual);

  const dispatch: Dispatch<any> = useDispatch();
  const setLanguageAction = (lang: any) => dispatch(setLanguage(lang));

  const [value, setValue] = useState<ILanguage | null>(currentLanguage);

  return (
    <Autocomplete
      value={value as ILanguage}
      onChange={(event: any, newValue: ILanguage | null) => {
        console.log("newValue", newValue);

        setValue(newValue);
        setLanguageAction(newValue);
      }}
      getOptionLabel={(option) => option.key}
      id="language"
      options={LANGUAGES}
      style={{ width: 200 }}
      disableClearable
      renderInput={(params) => (
        <TextField
          {...params}
          label={
            <div>
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
