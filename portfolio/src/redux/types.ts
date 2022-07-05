export const ActionTypes = {
  SET_LANGUAGE: "SET_LANGUAGE",
};

export interface ILanguage {
  key: string;
  id: string;
  defaultMessage: string;
  label: JSX.Element;
}

export interface IAppStore {
  currentLanguage: ILanguage;
}

export type AppAction = {
  type: string;
  state: IAppStore;
};

export type DispatchType = (args: AppAction) => AppAction;
