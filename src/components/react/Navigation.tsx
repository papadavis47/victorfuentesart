import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { withLocale } from '../../i18n/routing';
import { t, type Locale } from '../../i18n';

interface NavigationProps {
  locale?: Locale;
}

export default function Navigation({ locale = 'en' }: NavigationProps) {
  const navLinks = [
    { href: '/paintings', label: t(locale, 'nav.paintings') },
    { href: '/poetry', label: t(locale, 'nav.poetry') },
    { href: '/contact', label: t(locale, 'nav.contact') },
  ];
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);



  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Home Link */}
          <a
            href={withLocale('/', locale)}
            className="flex items-center gap-2 group"
            style={{ color: 'var(--text-primary)' }}
          >
            <svg
              version="1.0"
              viewBox="0 0 512 512"
              className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
              style={{ fill: 'var(--accent-terracotta)' }}
            >
              <path d="M484.4 6.4c-2.2.7-6.7 3.1-10 5.3-15 10.2-31 16.1-64.4 23.8-11.3 2.6-26.6 6.8-34 9.2-20.4 6.7-26.7 6.1-38-3.7-9.2-8-16.8-10.6-23.6-8-6.2 2.4-10.8 7.7-24.9 28.9-22.6 34-31.9 44.4-54.7 60.8-15.6 11.2-19.7 13.4-25.5 13.5-6.3.2-10.3-2-18.5-9.8-4-3.9-7.5-6.4-8.8-6.4-4.5 0-9 3.3-14.4 10.4-13.8 18.3-24.4 23.2-44.5 20.6-8.6-1.1-9.4-1-13.5 1-6.5 3.1-7.8 6.6-8.7 23.3-.9 15.5-2.6 23.2-7 32.7-6.2 13.3-16 22.7-31.4 30.1-9.6 4.6-26.6 9.3-30.4 8.4-1.4-.3-6.3-2.8-10.7-5.6-9.2-5.5-12.4-6-17.5-2.6l-3.4 2.3L.2 252 0 263.5l11.9 5.8C45.6 285.6 71.3 308 103 349c13.4 17.3 28 32.3 56 57.5 22.3 20.1 41.2 38.7 50.3 49.7 6.8 8 10.1 9.2 20.9 7.1 15-2.8 27.1-1.1 59.3 8.3 22 6.4 28.6 7.6 41.5 7.7 8.8 0 13.4-.5 19.7-2.1 16.2-4.3 21.2-2.8 40.2 12.4 12.9 10.4 21 14.9 29 16.4 16.2 3 29.8-1.1 37.1-11.1 4.7-6.5 4.2-8.8-4-16.9-7.8-7.9-13-17.4-15.1-27.6-1.8-8.9-.2-15 9-34.3 9.5-19.7 11-26 8.7-35.1-1.6-6.1-3.2-9.2-7.3-14.3-1.3-1.6-2.3-3.4-2.3-4.1 0-.6 2.3-4.8 5.1-9.1 19.6-30.9 27-68.4 22.8-116-1.4-16-1.3-43.9.1-54.5 2.4-17.6 6.4-29.9 18.2-55.5 19.6-42.5 22.2-61 12-85.3-3.4-8.1-3.2-9.2 3.8-18.9 2.2-3.1 4-6.5 4-7.6 0-1.1-1.5-3.4-3.4-5.2-5.5-5.1-15.5-6.8-24.2-4.1z" />
            </svg>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={withLocale(link.href, locale)}
                className="text-sm md:text-base font-medium tracking-wide transition-colors duration-200"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-terracotta)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                {link.label}
              </a>
            ))}
            <LanguageToggle locale={locale} />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 rounded-md transition-colors duration-200"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            style={{ color: 'var(--text-primary)' }}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(45, 45, 45, 0.5)' }}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: 'var(--bg-primary)',
          boxShadow: isOpen ? 'var(--shadow-lift)' : 'none',
        }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="p-2 rounded-md transition-colors duration-200"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            style={{ color: 'var(--text-primary)' }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="px-6 py-4">
          <a
            href={withLocale('/', locale)}
            className="block py-3 text-lg font-medium transition-colors duration-200"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-serif)',
              borderBottom: '1px solid var(--border-subtle)',
            }}
            onClick={() => setIsOpen(false)}
          >
            {t(locale, 'nav.home')}
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={withLocale(link.href, locale)}
              className="block py-3 text-lg font-medium transition-colors duration-200"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-serif)',
                borderBottom: '1px solid var(--border-subtle)',
              }}
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-terracotta)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <LanguageToggle locale={locale} />
          </div>
        </nav>
      </div>
    </nav>
  );
}
