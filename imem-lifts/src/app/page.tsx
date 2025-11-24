import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2874A6] text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-[1.1]">
                Heisløsninger av høy kvalitet
              </h1>
              <p className="text-xl lg:text-2xl mb-4 text-white/90 font-medium">
                Utviklet og produsert i Europa
              </p>
              <p className="text-lg mb-8 text-white/80 leading-relaxed">
                IMEM Lifts Norway er en totalleverandør innen heis med full støtte fra IMEM Lifts – en av Europas mest avanserte heisprodusenter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="btn-primary text-center">
                  Kontakt oss
                </Link>
                <Link
                  href="/produkter"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold py-3.5 px-7 rounded-lg hover:bg-white hover:text-[#2874A6] transition-all"
                >
                  Se produkter
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/images/imem-lifts-hero.jpg"
                alt="IMEM Lifts heisløsninger"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Tjenester vi tilbyr</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Vi er en totalleverandør innen heis og tilbyr komplette løsninger for alle behov
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-[#5DADE2]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#5DADE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Installasjon</h3>
              <p className="text-slate-600">
                Installasjon av nye heiser i nybygg eller eksisterende bygg.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-[#5DADE2]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#5DADE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Service & Vedlikehold</h3>
              <p className="text-slate-600">
                Service og vedlikehold med raske responstider og lokal tilstedeværelse.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-[#5DADE2]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#5DADE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Modernisering</h3>
              <p className="text-slate-600">
                Modernisering og full utskifting av eksisterende heiser.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-[#5DADE2]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#5DADE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Tilstandsrapporter</h3>
              <p className="text-slate-600">
                Uforpliktende tilstandsrapporter og vurderinger av heisanlegg.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://imem.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2874A6] hover:text-[#5DADE2] font-semibold transition-colors"
            >
              Se hele produktutvalget hos IMEM
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About IMEM Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">Om IMEM Lifts</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                IMEM har levert tusenvis av heiser til over 65 land, inkludert en lang rekke i Norge.
                Nå har IMEM fått sitt eget dedikerte team i Norge – uten mellomledd – slik at kvaliteten,
                servicen og verdiene IMEM står for ikke svekkes underveis.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Et dedikert team med lang erfaring i Norge står klare til å følge opp kundene tett –
                med fokus på kvalitet, konkurransekraft, bærekraft og fornøyde kunder.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {['ISO 9001 (kvalitet)', 'ISO 14001 (miljø)', 'EN 81-20/50 sertifisert', 'Produsert i Europa'].map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://imem.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Les mer om IMEM
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-slate-50 p-8 lg:p-10 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 text-slate-900">Vårt kundeløfte</h3>
              <ul className="space-y-5">
                {[
                  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Effektive' },
                  { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Ryddige' },
                  { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', label: 'Løsningsorienterte' },
                  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Proaktive' },
                  { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', label: 'Kundevennlige' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[#5DADE2] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-slate-800">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1e3a5f] to-[#2874A6] text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Når presisjon blir standard</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Hos IMEM er nøyaktighet, kvalitet og sporbarhet ikke et mål – det er standard
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Fabrikkmontering', desc: 'Heisen monteres delvis og testes på fabrikken før levering' },
              { icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', title: 'Programmert styring', desc: 'Heisstyringen programmeres og testes før den forlater produksjonen' },
              { icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z', title: 'Fotodokumentert', desc: 'Alt blir systematisk demontert, pakket og fotodokumentert' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { color: 'emerald', icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Energieffektiv', desc: 'Regenerativ drift for lavt energiforbruk' },
                  { color: 'blue', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', title: 'Lang levetid', desc: 'Designet for å vare og forenkle resirkulering' },
                  { color: 'amber', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Åpen styring', desc: 'Krever ingen spesiell programvare' },
                  { color: 'violet', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Produsert i Europa', desc: 'Under ISO 14001-sertifisert miljøsystem' },
                ].map((item) => (
                  <div key={item.title} className={`bg-${item.color}-50 p-6 rounded-xl`}>
                    <svg className={`w-10 h-10 text-${item.color}-600 mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">Bærekraft og miljø</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                IMEM leverer energieffektive heiser med regenerativ drift for lavt energiforbruk.
                Bærekraftig materialvalg og optimalisert livssyklus – designet for å vare og forenkle resirkulering.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Åpen styring og komplett FDV gir forutsigbare service- og vedlikeholdskostnader,
                mer kontroll for kunden, og heisen krever ingen spesiell programvare eller verktøy for service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Klar for å ta kontakt?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Heisen er bare begynnelsen – vårt mål er langvarige relasjoner bygget på tillit, kvalitet og tilgjengelighet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Kontakt oss i dag
            </Link>
            <a
              href="https://imem.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Besøk IMEM Global
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
