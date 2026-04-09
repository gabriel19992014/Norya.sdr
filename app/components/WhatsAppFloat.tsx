type WhatsAppFloatProps = {
  whatsappUrl: string;
  label: string;
};

export default function WhatsAppFloat({ whatsappUrl, label }: WhatsAppFloatProps) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      data-cta="whatsapp-floating"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_-14px_rgba(18,140,126,0.9)] transition hover:scale-105 hover:bg-[#20bc5a]"
    >
      <span className="inline-flex h-5 w-5 items-center justify-center" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" focusable="false" aria-hidden="true">
          <path
            d="M20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 13.188 3.49238 14.761 4.34157 16.0833L3.5 20.5L7.9167 19.6584C9.23901 20.5076 10.812 21 12.5 21C17.1944 21 21 17.1944 21 12.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
