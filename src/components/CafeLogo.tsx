interface CafeLogoProps {
  size?: number;
  className?: string;
}

export default function CafeLogo({ size = 40, className = '' }: CafeLogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="Nib & Nosh logo"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={`rounded-full object-cover ${className}`}
    />
  );
}
