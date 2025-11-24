import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontakt IMEM Lifts Norway for heisløsninger, service og vedlikehold. Ring 21 41 81 03 eller send e-post til post@imemnorway.no.',
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2874A6] to-[#5DADE2] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Kontakt oss
            </h1>
            <p className="text-xl text-blue-100">
              Vi er her for å hjelpe deg med alle heisrelaterte spørsmål.
              Ta gjerne kontakt – vi svarer så raskt vi kan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Phone */}
              <div className="card text-center">
                <div className="w-16 h-16 bg-[#5DADE2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#5DADE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Ring oss</h2>
                <a
                  href="tel:21418103"
                  className="text-3xl lg:text-4xl font-bold text-[#5DADE2] hover:text-[#2874A6] transition-colors"
                >
                  21 41 81 03
                </a>
                <p className="text-gray-600 mt-4">
                  Vi tar gjerne en prat om dine behov
                </p>
              </div>

              {/* Email */}
              <div className="card text-center">
                <div className="w-16 h-16 bg-[#5DADE2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#5DADE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Send e-post</h2>
                <a
                  href="mailto:post@imemnorway.no"
                  className="text-2xl lg:text-3xl font-bold text-[#5DADE2] hover:text-[#2874A6] transition-colors break-all"
                >
                  post@imemnorway.no
                </a>
                <p className="text-gray-600 mt-4">
                  Vi svarer normalt innen 24 timer
                </p>
              </div>
            </div>

            {/* Company Info */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-6">IMEM Lifts Norway AS</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Vi er en totalleverandør innen heis med full støtte fra IMEM Lifts i Spania –
                en av Europas mest avanserte heisprodusenter. Et dedikert team med lang erfaring
                i Norge står klare til å følge opp dine behov.
              </p>
              <div className="flex justify-center">
                <Image
                  src="/images/sentral-godkjenning.png"
                  alt="Sentral godkjenning"
                  width={120}
                  height={120}
                  className="h-24 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Reminder */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Hva kan vi hjelpe deg med?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi tilbyr komplette heisløsninger for alle behov
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#5DADE2]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#5DADE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold">Installasjon</h3>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#5DADE2]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#5DADE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold">Service</h3>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#5DADE2]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#5DADE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-semibold">Modernisering</h3>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#5DADE2]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#5DADE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold">Tilstandsrapporter</h3>
            </div>
          </div>
        </div>
      </section>

      {/* IMEM Global Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Del av IMEM-familien</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Med IMEM Lifts Norway får du det beste fra to verdener: personlig oppfølging og korte
            beslutningslinjer i Norge – kombinert med solid erfaring og produksjonskraft fra IMEM sentralt.
          </p>
          <a
            href="https://imem.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Besøk IMEM Global
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
