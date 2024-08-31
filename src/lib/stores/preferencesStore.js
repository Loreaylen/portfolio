import { writable, readonly } from "svelte/store";
import lang from '../data/languages.json'

export const lightTheme = writable(true);
export const siteLanguage = writable(lang.ES);
export const readOnlyLang = readonly(siteLanguage);