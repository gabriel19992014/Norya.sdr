/**
 * Valida email com regex mais rigorosa
 */
export function validateEmail(email: string): boolean {
  // RFC 5322 simplified mas mais abrangente
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  
  // Validações adicionais
  if (email.length > 160) return false;
  if (email.startsWith(".") || email.endsWith(".")) return false;
  if (email.includes("..")) return false;
  if (email.startsWith("@") || email.endsWith("@")) return false;
  
  return emailRegex.test(email);
}

/**
 * Escape para HTML para prevenir XSS
 */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

