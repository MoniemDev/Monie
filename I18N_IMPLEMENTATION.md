# Arabic/English Internationalization Implementation

## ✅ Completed

### Core Setup
- ✅ Installed i18next and react-i18next
- ✅ Created i18n configuration (`src/i18n/config.ts`)
- ✅ Created Arabic translations (`src/i18n/locales/ar.json`)
- ✅ Created English translations (`src/i18n/locales/en.json`)
- ✅ Set Arabic as default language
- ✅ Configured RTL/LTR direction switching

### Components Updated
- ✅ App.tsx - Initialized i18n and set RTL by default
- ✅ Navbar - Added language toggle, translated nav links
- ✅ HeroContent - Fully translated
- ✅ HeroImage - Translated floating badges
- ✅ LanguageToggle component created

## 🔄 To Complete

You need to add `useTranslation` hook and replace hardcoded text with `t('key')` in these components:

### About Section
- `src/components/about/AboutHeader.tsx`
- `src/components/about/TextRevealSection.tsx`
- `src/components/about/TerminalContent.tsx`
- `src/components/about/InfoBoxes.tsx`
- `src/components/about/ProfileImage.tsx`

### Other Sections
- `src/components/Experience.tsx`
- `src/components/Projects.tsx`
- `src/components/Skills.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

## How to Add Translations to a Component

### Step 1: Import useTranslation
```typescript
import { useTranslation } from 'react-i18next';
```

### Step 2: Use the hook
```typescript
const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('section.title')}</h1>
      <p>{t('section.description')}</p>
    </div>
  );
};
```

### Step 3: Add translations to JSON files
In `src/i18n/locales/ar.json`:
```json
{
  "section": {
    "title": "العنوان",
    "description": "الوصف"
  }
}
```

In `src/i18n/locales/en.json`:
```json
{
  "section": {
    "title": "Title",
    "description": "Description"
  }
}
```

## Language Toggle Usage

The language toggle button is in the navbar (next to dark mode toggle). It allows switching between:
- العربية (Arabic) - RTL
- English - LTR

The direction and language are automatically updated when switching.

## RTL Support

The app automatically switches between RTL (Arabic) and LTR (English) layouts. Tailwind CSS handles most RTL styling automatically, but you may need to add specific RTL styles for custom components.

## Testing

1. Open the app at http://localhost:8080/
2. Click the language toggle (🌐 icon) in the navbar
3. Switch between Arabic and English
4. Verify that:
   - Text changes language
   - Layout direction changes (RTL/LTR)
   - All sections display correctly in both languages

## Current Status

The Hero section and Navbar are fully translated and working. The language toggle is functional. You can now continue translating the remaining components using the same pattern.
