'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Hjem' },
    { href: '/produkter', label: 'Produkter' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/imem-logo.png"
              alt="IMEM Lifts Norway"
              width={140}
              height={50}
              className="h-10 lg:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-[#5DADE2] transition-colors font-medium text-[15px]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://imem.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-[#5DADE2] transition-colors font-medium text-[15px] inline-flex items-center gap-1.5"
            >
              IMEM Global
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/kontakt" className="btn-primary">
              Kontakt oss
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Lukk meny' : 'Åpne meny'}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-[#5DADE2] hover:bg-slate-50 transition-colors font-medium py-3 px-2 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://imem.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-[#5DADE2] hover:bg-slate-50 transition-colors font-medium py-3 px-2 rounded-lg inline-flex items-center gap-1.5"
              >
                IMEM Global
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <div className="pt-4 mt-2 border-t border-slate-100">
                <Link
                  href="/kontakt"
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt oss
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
