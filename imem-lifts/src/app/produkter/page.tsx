import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Produkter',
  description: 'IMEM Lifts tilbyr et bredt utvalg av heisløsninger - personheiser, vareheiser, plattformheiser og mer. Se hele produktkatalogen hos IMEM.',
};

const products = [
  {
    title: 'Personheiser',
    description: 'Moderne personheiser med høy komfort og sikkerhet for boligbygg, kontorer og offentlige bygg.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    link: 'https://imem.com/en/products/passenger-lifts/',
  },
  {
    title: 'Vareheiser',
    description: 'Robuste vareheiser for effektiv transport av gods i industri, handel og logistikkbygg.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    link: 'https://imem.com/en/products/goods-lifts/',
  },
  {
    title: 'Plattformheiser',
    description: 'Tilgjengelige plattformheiser for universell utforming og enkel adkomst.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    link: 'https://imem.com/en/products/platform-lifts/',
  },
  {
    title: 'Boligheiser',
    description: 'Elegante hjemmeheiser som kombinerer funksjonalitet med estetikk for private boliger.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    link: 'https://imem.com/en/products/home-lifts/',
  },
  {
    title: 'Bilheiser',
    description: 'Kraftige bilheiser for parkering og garasjeanlegg med høy kapasitet.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: 'https://imem.com/en/products/car-lifts/',
  },
  {
    title: 'Spesialheiser',
    description: 'Skreddersydde løsninger for spesielle behov og unike prosjekter.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    link: 'https://imem.com/en/products/',
  },
];

export default function ProdukterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2874A6] to-[#5DADE2] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Produkter
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              IMEM tilbyr et komplett utvalg av heisløsninger for alle behov - fra personheiser
              til spesialløsninger. Alle produkter er utviklet og produsert i Europa med
              fokus på kvalitet, sikkerhet og bærekraft.
            </p>
            <a
              href="https://imem.com/en/products/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Se full produktkatalog hos IMEM
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Våre heisløsninger</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Som totalleverandør tilbyr vi et bredt spekter av heisløsninger tilpasset dine behov
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card group cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#5DADE2]/10 rounded-xl flex items-center justify-center mb-4 text-[#5DADE2] group-hover:bg-[#5DADE2] group-hover:text-white transition-colors">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#5DADE2] transition-colors">
                  {product.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#5DADE2] font-medium">
                  Les mer hos IMEM
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">IMEM Connectivity</h2>
              <p className="text-xl text-[#5DADE2] mb-4">
                Fremtidens heis – intelligent, trygg og alltid oppdatert
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Med IMEM Connectivity får du mer enn bare en heis. Du får full oversikt, smartere
                vedlikehold og økt driftssikkerhet – levert med presisjon og omtanke.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#27AE60] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>24/7 overvåking</strong> – Kontinuerlig oversikt over heisen din</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#27AE60] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Proaktivt vedlikehold</strong> – Basert på faktisk bruk og belastning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#27AE60] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Avviksregistrering</strong> – Sanntidsdata for rask respons</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#27AE60] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Smart reservedelshåndtering</strong> – Riktige deler til rett tid</span>
                </li>
              </ul>
              <p className="text-lg font-medium text-slate-700 italic">
                &ldquo;Heisen din snakker. Vi lytter.&rdquo;
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Resultatet</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Færre driftsavbrudd</h4>
                    <p className="text-slate-600">Forutse og forebygg problemer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Bedre planlegging</h4>
                    <p className="text-slate-600">Optimal vedlikeholdsplanlegging</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Forutsigbare kostnader</h4>
                    <p className="text-slate-600">Kontroll over utgiftene</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#2874A6] text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Trenger du hjelp med å velge?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vi tilbyr uforpliktende tilstandsrapporter og vurderinger. Ta kontakt så hjelper vi deg med å finne den beste løsningen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Kontakt oss
            </Link>
            <a
              href="https://imem.com/en/products/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#2874A6] px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              Utforsk alle produkter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
