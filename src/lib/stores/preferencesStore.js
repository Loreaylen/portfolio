import { writable, readonly } from "svelte/store";
import lang from '../data/languages.json'

export const lightTheme = writable(true);

const siteLanguage = writable(lang.ES);
export const readOnlyLang = readonly(siteLanguage);

const updateLang = (selected) => {
siteLanguage.set(lang[selected]);
}

export const languageSettings = {
  subscribe: siteLanguage.subscribe,
  updateStore: (val) => updateLang(val)
}