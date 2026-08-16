# 🎯 EnglishQuest (english-quest-hub)

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-eequest.vercel.app-00C853?style=for-the-badge&logo=vercel&logoColor=white)](https://eequest.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TanStack](https://img.shields.io/badge/Router-TanStack%20Router-FF4154?style=for-the-badge&logo=tanstack&logoColor=white)](https://tanstack.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

### **Interactive Gamified English Grammar & Vocabulary Practice Platform**

*Master English grammar, vocabulary, tenses, prepositions, idioms, and punctuation through 535+ curated interactive questions, daily challenges, streak counters, and instant explanations.*

---

[Live Application](https://eequest.vercel.app/) • [Features](#-key-features) • [Topics Covered](#-curriculum--topics-535-questions) • [Architecture](#-tech-stack--architecture) • [Getting Started](#-getting-started)

</div>

---

## 📌 Overview

**EnglishQuest** is a lightweight, responsive, and gamified web application designed for active English learning. Instead of passive textbook reading or heavy paywalled apps, EnglishQuest provides an immediate, frictionless practice hub with over 535 curated questions spanning 8 core grammar domains.

Built with **React 19, TypeScript, TanStack Start & Router, Radix UI, Framer Motion, and Tailwind CSS v4**, it delivers instant client-side question evaluation, zero-latency feedback, interactive progress analytics, and streak tracking saved locally in the browser.

---

## ✨ Key Features

- 📚 **535+ Curated Practice Questions:** Structured question bank categorized across eight essential grammar and vocabulary domains.
- ⚡ **Instant Explanations & Feedback:** Immediate breakdown of the grammar rule and reason behind each correct and incorrect answer.
- 🔥 **Streak Counters & Daily Goals:** Gamified habit loop tracking daily active streaks and topic completion milestones.
- 📊 **Progress Analytics & Score Tracking:** Real-time accuracy metrics, category mastery percentages, and question attempt history saved locally via `LocalStorage`.
- 🎨 **Modern Smooth UI:** Fluid micro-interactions, confetti celebratory animations on quiz completion, and accessible Radix UI components.
- 📱 **100% Mobile Responsive:** Optimized for touch interactions, high-DPI screens, and ultra-fast page loads.
- 🌐 **Offline-Ready Client Architecture:** Entire question dataset and engine run client-side with zero required backend dependencies.

---

## 📖 Curriculum & Topics (535+ Questions)

| Category | Description | Question Focus |
| :--- | :--- | :--- |
| **Tenses & Verbs** | Past, present, future, perfect, and continuous tense mastery | Irregular verbs, auxiliary verbs, aspect consistency |
| **Prepositions & Conjunctions** | Spatial, temporal, and logical sentence connectors | In/on/at nuances, compound conjunctions, correlatives |
| **Articles & Determiners** | Definite/indefinite articles and quantifiers | A/An/The usage rules, countable vs. uncountable nouns |
| **Subject-Verb Agreement** | Number agreement and collective noun handling | Singular/plural subjects, compound subjects, indefinite pronouns |
| **Idioms & Phrases** | Common colloquial expressions and figurative meanings | Contextual usage, figurative definitions, origin exercises |
| **Vocabulary & Synonyms** | Word choice, antonyms, and context clues | Academic vocabulary, subtle connotations, spelling |
| **Punctuation & Capitalization** | Commas, semicolons, apostrophes, and formatting | Clauses, quotation marks, apostrophes in contractions |
| **Direct & Indirect Speech** | Converting dialogue to reported speech and passive voice | Tense shifts, pronoun conversions, active-to-passive |

---

## 🛠️ Tech Stack & Architecture

- **Frontend Core:** React 19.2 + TypeScript
- **Routing & Full-Stack Engine:** TanStack Start (`@tanstack/react-start`) + TanStack Router (`@tanstack/react-router`)
- **Styling & Design System:** Tailwind CSS v4 + Radix UI Primitives (`@radix-ui/react-*`) + Lucide Icons
- **Animation & Delight:** Framer Motion 12 + Canvas Confetti
- **State & Storage:** LocalStorage state caching for instant zero-lag client performance
- **Tooling:** Vite, ESLint, Prettier, Bun / npm

---

## 📁 Project Structure

```
english-quest-hub/
├── src/
│   ├── components/         # Reusable UI cards, quiz modals, progress bars, layout
│   │   └── ui/             # Radix-based UI components (buttons, dialogs, tabs)
│   ├── routes/             # File-based TanStack routing
│   │   ├── __root.tsx      # Root layout wrapper & theme providers
│   │   └── index.tsx       # Homepage, category selectors, and quiz runner
│   ├── styles/             # Tailwind CSS & global token definitions
│   └── ...
├── public/                 # Static assets, fonts, icons
├── package.json            # Project dependencies and build scripts
├── vite.config.ts          # Vite build configuration with TanStack plugin
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm / yarn / pnpm / bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aldtor/english-quest-hub.git
   cd english-quest-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 👤 Author

**Satyam Kumar (Aldtor)**
- 🌐 Portfolio: [aldtor.vercel.app](https://aldtor.vercel.app)
- 🐙 GitHub: [@Aldtor](https://github.com/Aldtor)
- 💼 LinkedIn: [linkedin.com/in/aldtor](https://in.linkedin.com/in/aldtor)

---

<div align="center">
  <sub>Built with ❤️ for learners striving for language fluency and confidence.</sub>
</div>
