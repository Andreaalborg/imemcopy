# Design Guide - IMEM Lifts Norway AS

## 1. Merkevareidentitet

### 1.1 Logo
- **Primær logo:** IMEM Lifts blå logo
- **Minimum størrelse:** 120px bredde
- **Clear space:** 20px rundt alle sider
- **Bakgrunner:** Hvit eller lys grå bakgrunn foretrukket

### 1.2 Fargepalett

#### Primærfarger
```css
--primary-blue: #5DADE2;      /* IMEM Lys blå */
--primary-dark: #2874A6;      /* Mørk blå */
--primary-light: #AED6F1;     /* Ekstra lys blå */
```

#### Aksentfarger
```css
--accent-gold: #F39C12;       /* Gull/oransje for CTA */
--accent-hover: #E67E22;      /* Hover state */
--success: #27AE60;           /* Grønn for suksess */
--warning: #F39C12;           /* Oransje for advarsler */
--error: #E74C3C;             /* Rød for feil */
```

#### Nøytrale farger
```css
--white: #FFFFFF;
--gray-50: #F8F9FA;          /* Bakgrunn */
--gray-100: #E5E7EB;         /* Borders */
--gray-200: #D1D5DB;
--gray-300: #9CA3AF;
--gray-400: #6B7280;
--gray-500: #4B5563;
--gray-600: #374151;
--gray-700: #2C3E50;         /* Hovedtekst */
--gray-800: #1F2937;
--gray-900: #111827;
--black: #000000;
```

## 2. Typografi

### 2.1 Skrifttyper

#### Overskrifter - Montserrat
```css
font-family: 'Montserrat', sans-serif;

/* Størrelsesskala */
--h1-mobile: 2.25rem;  /* 36px */
--h1-desktop: 3.75rem; /* 60px */
--h2-mobile: 1.875rem; /* 30px */
--h2-desktop: 3rem;    /* 48px */
--h3-mobile: 1.5rem;   /* 24px */
--h3-desktop: 2.25rem; /* 36px */
--h4-mobile: 1.25rem;  /* 20px */
--h4-desktop: 1.875rem;/* 30px */
--h5: 1.125rem;        /* 18px */
--h6: 1rem;            /* 16px */
```

#### Brødtekst - Inter
```css
font-family: 'Inter', sans-serif;

/* Størrelsesskala */
--body-large: 1.125rem;  /* 18px */
--body-base: 1rem;       /* 16px */
--body-small: 0.875rem;  /* 14px */
--body-xs: 0.75rem;      /* 12px */
```

### 2.2 Typografiske stiler

```css
/* Overskrift stil */
.heading {
  font-weight: 600;
  line-height: 1.2;
  color: var(--gray-900);
  letter-spacing: -0.02em;
}

/* Brødtekst stil */
.body {
  font-weight: 400;
  line-height: 1.6;
  color: var(--gray-700);
}

/* Lead paragraph */
.lead {
  font-size: var(--body-large);
  font-weight: 500;
  line-height: 1.7;
  color: var(--gray-600);
}
```

## 3. Komponentstilder

### 3.1 Knapper

#### Primary Button
```css
.btn-primary {
  background-color: var(--accent-gold);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(243, 156, 18, 0.3);
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: var(--primary-blue);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
}
```

#### Outline Button
```css
.btn-outline {
  background-color: transparent;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
}
```

### 3.2 Kort (Cards)

```css
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 24px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

### 3.3 Skjemaer

```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--gray-100);
  border-radius: 8px;
  font-size: var(--body-base);
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(93, 173, 226, 0.1);
}
```

## 4. Layout og spacing

### 4.1 Grid system
```css
/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 24px;
  }
}
```

### 4.2 Spacing skala
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
```

## 5. Ikoner og bilder

### 5.1 Ikoner
- **Bibliotek:** Heroicons v2
- **Størrelse:** 20px (small), 24px (medium), 32px (large)
- **Stil:** Outline for navigasjon, Solid for CTA
- **Farger:** Følger tekst eller primærfarge

### 5.2 Bilder
- **Format:** WebP med JPEG fallback
- **Størrelse:** Optimalisert for web (< 200KB per bilde)
- **Alt-tekst:** Beskrivende norsk tekst
- **Aspect ratio:** 
  - Hero: 16:9
  - Galleri: 4:3
  - Thumbnail: 1:1

## 6. Animasjoner

### 6.1 Overganger
```css
/* Standard overgang */
transition: all 0.2s ease;

/* Hover effekter */
transition: transform 0.3s ease, box-shadow 0.3s ease;
```

### 6.2 Mikrointeraksjoner
- Knapper: Scale og shadow på hover
- Kort: Lift effekt på hover
- Links: Underline animasjon
- Form inputs: Focus ring animasjon

## 7. Responsiv design

### 7.1 Breakpoints
```css
--mobile: 0px;       /* Mobil først */
--tablet: 768px;     /* Tablets */
--desktop: 1024px;   /* Desktop */
--wide: 1280px;      /* Store skjermer */
```

### 7.2 Mobile-first approach
```css
/* Mobil standard */
.element {
  font-size: 16px;
  padding: 16px;
}

/* Tablet og oppover */
@media (min-width: 768px) {
  .element {
    font-size: 18px;
    padding: 24px;
  }
}
```

## 8. Tilgjengelighet

### 8.1 Fargekontrast
- Normal tekst: Minimum 4.5:1
- Store tekst: Minimum 3:1
- Interaktive elementer: Minimum 3:1

### 8.2 Fokusindikatorer
```css
:focus-visible {
  outline: 3px solid var(--primary-blue);
  outline-offset: 2px;
}
```

### 8.3 Touch targets
- Minimum størrelse: 44x44px
- Spacing mellom: Minimum 8px

## 9. Dark mode (fremtidig)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--gray-900);
    --text-primary: var(--gray-50);
    /* ... andre dark mode variabler */
  }
}
```

## 10. UI/UX prinsipper

### 10.1 Designprinsipper
1. **Klarhet:** Tydelig hierarki og lesbarhet
2. **Enkelhet:** Minimalistisk og fokusert
3. **Konsistens:** Samme mønstre gjennom hele siden
4. **Feedback:** Tydelige tilbakemeldinger på brukerhandlinger

### 10.2 Navigasjonsmønstre
- Sticky header på scroll
- Breadcrumbs på undersider
- Tydelig aktiv side markering
- Mobil hamburger meny

### 10.3 Call-to-actions
- Primær CTA: Gull/oransje farge
- Sekundær CTA: Blå farge
- Plassering: Above the fold
- Tekst: Handlingsorientert på norsk

Dette dokumentet definerer alle visuelle og interaktive elementer for IMEM Lifts Norway AS sin nettside og sikrer konsistent design på tvers av alle sider og komponenter.


