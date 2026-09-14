interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 158 }: LogoProps) {
  return (
    <img
      src="/assets/images/logo-efi-new.png"
      alt="Engagement für Integration e.V. Logo"
      width={size}
      height={size}
      className={`object-contain rounded-full select-none ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}

