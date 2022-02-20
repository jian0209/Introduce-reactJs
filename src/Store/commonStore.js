import { Store } from "pullstate";

export const CommonStore = new Store({
  isLoading: false,
  navCode: 0,
  testing: {},

  isEnglishContact: false,
  isEnglish: true,

  isMandarinContact: false,
  isMandarin: false,
});