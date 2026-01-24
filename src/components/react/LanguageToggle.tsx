import { useState } from 'react';
import { Globe } from 'lucide-react';
import { withLocale, stripLocalePrefix } from '../../i18n/routing';

interface LanguageToggleProps {
  locale: 'en' | 'es';
}

export default function LanguageToggle({ locale }: LanguageToggleProps) {
  const [isHovered, setIsHovered] = useState(false);

  const targetLocale = locale === 'en' ? 'es' : 'en';
  const ariaLabel = locale === 'en' ? 'Switch to Spanish' : 'Switch to English';

  const handleClick = () => {
    localStorage.setItem('preferredLocale', targetLocale);

    const currentPath = window.location.pathname;
    const strippedPath = stripLocalePrefix(currentPath);
    const newPath = withLocale(strippedPath, targetLocale);

    window.location.href = newPath;
  };

  const buttonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: isHovered ? 'var(--accent-terracotta)' : 'var(--text-primary)',
    transition: 'color 0.2s ease',
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyle}
      aria-label={ariaLabel}
      type="button"
    >
      <Globe className="w-5 h-5" />
    </button>
  );
}
