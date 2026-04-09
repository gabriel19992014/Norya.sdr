/**
 * Utilitários de validação
 */

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
 * Sanitiza string para CSS class names
 */
export function sanitizeClassName(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Determina classe condicional baseada em valor booleano
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string {
  return condition ? trueClass : falseClass;
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

/**
 * Valida se um valor é potencialmente um endereço IP válido
 */
export function isValidIpAddress(ip: string): boolean {
  // IPv4
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (ipv4Regex.test(ip)) {
    return ip.split(".").every((octet) => {
      const num = parseInt(octet, 10);
      return num >= 0 && num <= 255;
    });
  }

  // IPv6 simplified check
  return ip.includes(":") && ip.length > 2;
}
