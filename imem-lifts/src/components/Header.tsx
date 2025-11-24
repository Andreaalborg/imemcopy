'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
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
            <Link
              href="/"
              className="text-gray-700 hover:text-[#5DADE2] transition-colors font-medium"
            >
              Hjem
            </Link>
            <Link
              href="/produkter"
              className="text-gray-700 hover:text-[#5DADE2] transition-colors font-medium"
            >
              Produkter
            </Link>
            <Link
              href="/kontakt"
              className="text-gray-700 hover:text-[#5DADE2] transition-colors font-medium"
            >
              Kontakt
            </Link>
            <a
              href="https://imem.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#5DADE2] transition-colors font-medium flex items-center gap-1"
            >
              IMEM Global
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/kontakt"
              className="btn-primary text-sm"
            >
              Kontakt oss
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#5DADE2] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hjem
              </Link>
              <Link
                href="/produkter"
                className="text-gray-700 hover:text-[#5DADE2] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produkter
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-700 hover:text-[#5DADE2] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <a
                href="https://imem.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#5DADE2] transition-colors font-medium py-2 flex items-center gap-1"
              >
                IMEM Global
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/kontakt"
                className="btn-primary text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt oss
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
