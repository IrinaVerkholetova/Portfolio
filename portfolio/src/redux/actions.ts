import { ActionTypes } from "./types";
import { createAction } from "@reduxjs/toolkit";
import { ILanguage } from "src/redux/types";

export const setLanguage = createAction(
  ActionTypes.SET_LANGUAGE,
  (lang: ILanguage) => ({
    payload: lang,
  })
);
