import { LANGUAGES } from "src/constants/languages";
import { ActionTypes, IAppStore } from "./types";

export const initialState: IAppStore = {
  currentLanguage: LANGUAGES[0],
};

export const reducer = (state: IAppStore = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_LANGUAGE:
      return { ...state, currentLanguage: action.payload };

    default:
      return state;
  }
};
