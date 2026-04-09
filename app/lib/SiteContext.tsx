"use client";

import { createContext, useContext, ReactNode } from "react";
import type { Locale } from "./constants";
import type { LandingContent } from "../content";

export type SiteContextType = {
  locale: Locale;
  content: LandingContent;
  whatsappUrls: Record<string, string>;
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: SiteContextType;
}) {
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

/**
 * Hook para acessar contexto do site
 * @throws Error se usado fora do SiteProvider
 */
export function useSiteContext(): SiteContextType {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSiteContext deve ser usado dentro de SiteProvider");
  }
  return context;
}

/**
 * Hook seguro que retorna contexto ou undefined
 */
export function useSiteContextOptional(): SiteContextType | undefined {
  return useContext(SiteContext);
}
