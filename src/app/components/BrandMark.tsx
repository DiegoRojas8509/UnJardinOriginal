type BrandMarkProps = {
  className?: string;
};

/**
 * Emblema de la marca: una ramita floral minimalista (tallo, hoja y flor).
 * Usa `currentColor`, así que hereda el color del texto donde se coloque.
 */
export default function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* tallo */}
      <path
        d="M20 37V17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* hoja izquierda */}
      <path
        d="M20 27C16.5 27 13.2 25 12 21.5C15.5 20.8 18.8 22.4 20 25.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* hoja derecha */}
      <path
        d="M20 23C23.5 23 26.8 21 28 17.5C24.5 16.8 21.2 18.4 20 21.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* pétalos de la flor */}
      <g stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M20 15C20 15 16 13.5 16 9.5C16 6.5 18 4 20 4C22 4 24 6.5 24 9.5C24 13.5 20 15 20 15Z" />
        <path d="M20 15C20 15 15.5 16.2 12.6 13.4C10.5 11.3 10.4 8 11.8 6.6C13.2 5.2 16.5 5.3 18.6 7.4C21.4 10.3 20 15 20 15Z" />
        <path d="M20 15C20 15 24.5 16.2 27.4 13.4C29.5 11.3 29.6 8 28.2 6.6C26.8 5.2 23.5 5.3 21.4 7.4C18.6 10.3 20 15 20 15Z" />
      </g>
      {/* centro de la flor */}
      <circle cx="20" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
