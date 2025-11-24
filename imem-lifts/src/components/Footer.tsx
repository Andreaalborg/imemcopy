import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Image
              src="/images/imem-logo.png"
              alt="IMEM Lifts Norway"
              width={160}
              height={60}
              className="h-12 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-slate-400 mb-5 max-w-md leading-relaxed">
              IMEM Lifts Norway er en totalleverandør innen heis med full støtte fra IMEM Lifts – en av Europas mest avanserte heisprodusenter.
            </p>
            <a
              href="https://imem.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#5DADE2] hover:text-[#AED6F1] transition-colors font-medium"
            >
              Besøk IMEM Global
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Sider</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Hjem
                </Link>
              </li>
              <li>
                <Link href="/produkter" className="text-slate-400 hover:text-white transition-colors">
                  Produkter
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-slate-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:21418103" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 group-hover:bg-[#5DADE2]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#5DADE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="font-medium">21 41 81 03</span>
                </a>
              </li>
              <li>
                <a href="mailto:post@imemnorway.no" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 group-hover:bg-[#5DADE2]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#5DADE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="font-medium">post@imemnorway.no</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} IMEM Lifts Norway AS. Alle rettigheter reservert.
          </p>
          <div className="flex items-center">
            <Image
              src="/images/sentral-godkjenning.png"
              alt="Sentral godkjenning"
              width={80}
              height={80}
              className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
