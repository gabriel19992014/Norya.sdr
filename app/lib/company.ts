export const COMPANY = {
  name: "NORYA",
  fullName: "NORYA Partners",
  siteUrl: "https://www.noryapartners.com",
  email: "gabriella@noryapartners.com",
  phoneE164: "+5493417525939",
  phoneDisplay: "+54 9 341 752-5939",
  whatsappNumber: "5493417525939"
} as const;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
