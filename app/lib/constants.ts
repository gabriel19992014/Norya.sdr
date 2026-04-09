/**
 * Constantes de cores e estilos do projeto
 */
export const COLORS = {
  whatsapp: {
    main: "#25D366",
    dark: "#128C7E",
  },
  norya: {
    ink: "#071722",
    slate: "#475569",
    mist: "#f1f5f9",
    tide: "#0891b2",
  },
} as const;

/**
 * Configurações de animação
 */
export const ANIMATIONS = {
  INTERSECTION_OBSERVER_MARGIN: "-28% 0px -52% 0px",
  INTERSECTION_OBSERVER_THRESHOLD: [0.25, 0.45, 0.65],
} as const;

/**
 * Rate limiting e validação
 */
export const VALIDATION = {
  RATE_LIMIT_WINDOW_MS: 10 * 60 * 1000,
  RATE_LIMIT_MAX_REQUESTS: 5,
  NAME_MAX_LENGTH: 80,
  EMAIL_MAX_LENGTH: 160,
  MESSAGE_MAX_LENGTH: 2000,
  MIN_RENDERED_DELAY_MS: 1500,
} as const;

/**
 * Labels por locale
 */
export const LOCALE_LABELS = {
  pt: "PT",
  es: "ES",
} as const;

export type Locale = keyof typeof LOCALE_LABELS;
