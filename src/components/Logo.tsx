import { useTranslation } from 'react-i18next';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 158 }: LogoProps) {
  const { t } = useTranslation();
  return (
    <img
      src="/assets/images/logo-efi-new.png"
      alt={t('brand.logoAlt')}
      width={size}
      height={size}
      className={`object-contain rounded-full select-none ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}

