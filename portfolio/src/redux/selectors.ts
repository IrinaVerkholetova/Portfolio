// import { createSelector } from "@reduxjs/toolkit";
import { IAppStore } from "./types";

export const getCurrentLanguage = (state: IAppStore) => state.currentLanguage;
