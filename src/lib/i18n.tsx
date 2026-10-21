"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Content } from "@/content/types";
import { pt } from "@/content/pt";
import { en } from "@/content/en";

export const dictionaries = { pt, en } as const;

const I18nContext = createContext<Content>(pt);

export function I18nProvider({ lang, children }: { lang: Content["lang"]; children: ReactNode }) {
  return <I18nContext.Provider value={dictionaries[lang]}>{children}</I18nContext.Provider>;
}

export function useContent() {
  return useContext(I18nContext);
}
