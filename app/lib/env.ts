import { z } from "zod";

/**
 * Schema de validação para variáveis de ambiente
 */
export const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1).optional(),
  CONTACT_TO_EMAIL: z.string().email().optional(),
  CONTACT_FROM_EMAIL: z.string().optional(),
  NODE_ENV: z.enum(["development", "production", "test"]).optional(),
});

export type Env = z.infer<typeof envSchema>;

/**
 * Valida e retorna variáveis de ambiente tipadas
 */
export function getValidatedEnv(): Env {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missing = error.errors.map((e) => e.path.join("."));
      console.warn(
        `Variáveis de ambiente faltando ou inválidas: ${missing.join(", ")}`
      );
    }
    return envSchema.parse({});
  }
}
