# Nettside Spesifikasjon - IMEM Lifts Norway AS

## 1. Prosjektoversikt
**Dato:** November 2025
**Kunde:** IMEM Lifts Norway AS
**Prosjektleder:** Andrea Aalborg
**Formål:** Etablere en profesjonell nettside for å presentere selskapets heistjenester, bygge merkevareidentitet og legge grunnlag for fremtidig booking og kundeportal

## 2. Funksjoner og Krav

### 2.1 Kjernefunksjonaliteter (Fase 1)
- [x] Responsiv design (mobil, tablet, desktop)
- [x] Kontaktformular med epostvarsling
- [x] Om oss-seksjon med bedriftshistorie
- [x] Tjenester-presentasjon (installasjon, vedlikehold, modernisering)
- [x] Prosjektgalleri/referanser
- [x] Sosiale medier-integrasjon (LinkedIn, Facebook)
- [x] Flerspråklig støtte (Norsk/Engelsk)

### 2.2 Fremtidige funksjoner (Fase 2)
- [ ] Online booking-system for service og konsultasjon
- [ ] Kundeportal med innlogging
- [ ] Servicehistorikk for kunder
- [ ] Dokumentbibliotek (manualer, sertifikater)
- [ ] Kalenderintegrasjon for booking
- [ ] Push-varsler for servicepåminnelser
- [ ] Søkemotoroptimalisering (SEO) - avansert
- [ ] Analytikk-integrasjon (Google Analytics)

## 3. Teknisk Stakk

### 3.1 Programmeringsspråk
- **Frontend:** HTML5, CSS3, JavaScript/TypeScript
- **Backend:** Node.js med Express.js
- **Database:** PostgreSQL (for kundeportal og booking)

### 3.2 Rammeverk og Biblioteker
- **Frontend-rammeverk:** React med Next.js (for SEO og ytelse)
- **CSS-rammeverk:** Tailwind CSS for moderne og fleksibelt design
- **UI-komponenter:** Heroicons, Headless UI
- **Byggverktøy:** Next.js integrert byggverktøy
- **Versjonskontroll:** Git (GitHub)
- **CMS:** Strapi eller Sanity (for enkelt innholdsredigering)

### 3.3 Hosting og Deploy
- **Hosting-plattform:** Vercel (optimal for Next.js)
- **Database hosting:** Supabase eller Railway
- **Domene:** www.imemlifts.no (foreslått)
- **SSL-sertifikat:** Let's Encrypt (automatisk via Vercel)

## 4. Designsystem

### 4.1 Fargepalett
**Primærfarger:**
- Primær: #5DADE2 - IMEM Lys blå (fra logo)
- Sekundær: #2874A6 - Mørk blå (for kontrast)
- Aksent: #F39C12 - Gull/oransje (for CTA-knapper)

**Nøytrale farger:**
- Bakgrunn: #FFFFFF - Hvit
- Bakgrunn alt: #F8F9FA - Lys grå
- Tekst: #2C3E50 - Mørk grå
- Tekst sekundær: #7F8C8D - Medium grå
- Border: #E5E7EB - Lys grå

### 4.2 Typografi
- **Hovedfont:** Inter (moderne og lesbar)
- **Overskriftsfont:** Montserrat (profesjonell og moderne)
- **Font-størrelser:** 
  - Mobil: 14px (body), 24px-36px (h1)
  - Desktop: 16px (body), 48px-64px (h1)
- **Font-vekt:** 400 (normal), 500 (medium), 600 (semi-bold), 700 (bold)

### 4.3 Ikoner
- **Ikonbibliotek:** Heroicons v2
- **Ikonstil:** Outline for navigasjon, Solid for aksjonspunkter
- **Farge på ikoner:** Følger fargepalett, primært #5DADE2 og #2C3E50
- **Størrelse:** 20px (små), 24px (medium), 32px (store)

## 5. Begrensninger og Scope

### 5.1 Tekniske begrensninger
- [x] Budsjett: NOK 60.000-80.000 for Fase 1
- [x] Tidsfrist: 4-6 uker for MVP
- [x] Modern nettlesere (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- [x] Responsiv ned til 320px skjermbredde

### 5.2 Innholdsbegrensninger
- [ ] Tilgjengelig innhold fra IMEM Lifts (produktbilder, tekst)
- [ ] Bruksrettigheter til IMEM merkevare og materiell
- [ ] GDPR-compliance for kontaktskjema og kundedata
- [ ] Cookies og personvernerklæring

### 5.3 Funksjonelle begrensninger
- [ ] Ingen brukerinnlogging i Fase 1
- [ ] Begrenset integrasjon (kun sosiale medier i Fase 1)
- [ ] Ytelsekrav: < 3 sekunder lastetid på 4G
- [ ] Maksimalt 50MB totalstørrelse per side

## 6. Brukeropplevelse (UX)

### 6.1 Målgrupper
- **Primær målgruppe:** Eiendomsforvaltere, borettslag og sameier som trenger heis-service
- **Sekundær målgruppe:** Arkitekter, entreprenører og utviklere som planlegger nye byggeprosjekter

### 6.2 Brukerreise
1. Besøkende kommer til nettsiden via Google-søk eller direkte URL
2. Utforsker tjenester og ser på tidligere prosjekter/referanser
3. Leser om bedriften og deres ekspertise
4. Tar kontakt via kontaktskjema eller telefon
5. (Fremtidig) Booker service eller logger inn på kundeportal

### 6.3 Tilgjengelighet
- [ ] WCAG 2.1 AA compliance
- [ ] Skjermleser-støtte
- [ ] Keyboard-navigasjon
- [ ] Fargekontrast

## 7. Innhold og Struktur

### 7.1 Sidestruktur
- **Hjemmeside:** / (hero, tjenester-oversikt, hvorfor velge oss)
- **Om oss:** /om-oss (historie, team, sertifiseringer, IMEM-agentur)
- **Tjenester:** /tjenester
  - **Installasjon:** /tjenester/installasjon
  - **Vedlikehold:** /tjenester/vedlikehold 
  - **Modernisering:** /tjenester/modernisering
- **Prosjekter:** /prosjekter (galleri med case-studier)
- **Kontakt:** /kontakt (kontaktskjema, kart, kontaktinfo)
- **Kundeportal:** /kundeportal (fremtidig - krever innlogging)

### 7.2 Innholdskrav
- [ ] Høyoppløselige bilder av heiser og prosjekter (min 1920px)
- [ ] Optimerte bilder (WebP med JPEG fallback)
- [ ] SEO-vennlige URL-er på norsk (f.eks /tjenester/heisinstallasjon)
- [ ] Meta-beskrivelser på norsk og engelsk
- [ ] Alt-tekster for alle bilder
- [ ] Produktspesifikasjoner fra IMEM

## 8. Testing og Kvalitetssikring

### 8.1 Testing
- [ ] Enhetstesting (Unit tests)
- [ ] Integrasjonstesting
- [ ] Brukeraksepteringstesting (UAT)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobil testing (iOS Safari, Chrome Android)

### 8.2 Ytelse
- [ ] Lighthouse score > 90 på alle kategorier
- [ ] Første innholdsmaling (FCP) < 1.5s
- [ ] Største innholdsmaling (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Time to Interactive (TTI) < 3.5s
- [ ] Total Blocking Time (TBT) < 200ms

## 9. Vedlikehold og Support

### 9.1 Oppdateringer
- [ ] Månedlige innholdsoppdateringer via CMS
- [ ] Kvartalsvis sikkerhetsoppdateringer
- [ ] Årlig gjennomgang av funksjonalitet
- [ ] Backup av innhold og database

### 9.2 Support
- [ ] 3 måneders garantiperiode etter lansering
- [ ] Teknisk support via epost/telefon i kontortid
- [ ] 2 timer opplæring i CMS for kunde
- [ ] Skriftlig brukermanual for innholdsredigering

## 10. Tidslinje og Milepæler

### Fase 1: MVP - Informasjonsnettside (4-6 uker)
#### Uke 1-2: Planlegging og Design
- [x] Kravspesifikasjon ferdigstilt
- [ ] Wireframes for alle hovedsider
- [ ] Design mockups i Figma
- [ ] Godkjenning fra kunde

#### Uke 3-5: Utvikling
- [ ] Oppsett av Next.js prosjekt
- [ ] Implementere responsivt design
- [ ] Utvikle alle informasjonssider
- [ ] Integrasjon av kontaktskjema
- [ ] SEO-optimalisering

#### Uke 6: Testing og lansering
- [ ] Testing på alle enheter
- [ ] Deploy til Vercel
- [ ] DNS-oppsett
- [ ] Overlevering til kunde

### Fase 2: Booking og kundeportal (6-8 uker) - Fremtidig
- [ ] Database-design for kundedata
- [ ] Autentiseringssystem
- [ ] Booking-kalender
- [ ] Kundeportal med servicehistorikk
- [ ] Integrasjon med eksisterende systemer

## 11. Budsjett og Ressurser

### 11.1 Kostnadsoverslag
- **Fase 1 - Design og utvikling:** NOK 60.000 - 80.000
- **Fase 2 - Booking/portal:** NOK 80.000 - 120.000
- **Hosting (årlig):** NOK 2.400 (Vercel Pro)
- **Domene (årlig):** NOK 200-400
- **Vedlikehold (månedlig):** NOK 2.000-4.000

### 11.2 Ressursallokering
- **Utviklingstid Fase 1:** 120-160 timer
- **Designarbeid:** 20-30 timer
- **Testing:** 10-15 timer
- **Prosjektledelse:** 10-15 timer

## 12. Risikoanalyse

### 12.1 Potensielle risikoer
- [ ] Forsinkelser i innholdsleveranse fra kunde
- [ ] Integrasjon med eksisterende IMEM-systemer
- [ ] Kompleksitet i booking-funksjonalitet
- [ ] GDPR-compliance for kundedata
- [ ] Endrede krav underveis

### 12.2 Mitigeringsstrategier
- [ ] Ukentlige statusmøter med kunde
- [ ] Tidlig prototyping av komplekse funksjoner
- [ ] 20% buffer-tid i alle estimater
- [ ] Grundig dokumentasjon av alle systemer
- [ ] Faseinndelt utvikling for fleksibilitet

## 13. Godkjenning og Signatur

**Kunde (IMEM Lifts Norway AS):** ___________________________ Dato: __________

**Utvikler (Andrea Aalborg):** ___________________________ Dato: __________
