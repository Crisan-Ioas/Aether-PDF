# Aether — Offline PDF Suite

<p align="center">
  <strong>O suită desktop completă, modernă și 100% offline pentru vizualizarea, editarea și procesarea documentelor PDF.</strong><br>
  <em>Dezvoltat de <strong>CoExist Robotics</strong></em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Windows%2010%20%7C%2011-0078D6?style=flat-square&logo=windows" alt="Platform" />
  <img src="https://img.shields.io/badge/Status-100%25%20Offline%20Standalone-success?style=flat-square" alt="Offline" />
  <img src="https://img.shields.io/badge/Packaging-WiX%20MSI%20Installer-blueviolet?style=flat-square" alt="MSI" />
  <img src="https://img.shields.io/badge/Stack-Electron%20%7C%20React%20%7C%20TypeScript-61DAFB?style=flat-square&logo=react" alt="Stack" />
  <img src="https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

---

## 🌟 Despre Proiect

**Aether** este o aplicație desktop profesională all-in-one dezvoltată de **CoExist Robotics**, creată special pentru utilizatorii și organizațiile care au nevoie de control total asupra documentelor confidențiale. Aplicația funcționează complet **offline**, fără abonamente, fără API-uri în cloud și fără telemetrie.

Toate operațiunile — de la randare și editare de text in-place, până la recunoaștere optică a caracterelor (OCR) și semnare digitală — sunt executate direct pe stația de lucru locală.

---

## 🚀 Caracteristici Principale

### 🖋️ Editare Directă de Text & Imagini
- **Detecție și editare in-place:** Selectarea și modificarea textului existent din documente fără suprapuneri vizuale (*whiteout mask* integrat).
- **Tipografie completă:** Personalizare font (Helvetica, Times New Roman, Courier), mărime, stil (Bold, Italic), aliniere și culoare.
- **Casete de text mobile:** Repoziționare fluidă a casetelor de text prin drag-and-drop.
- **Manipulare imagini:** Inserare imagini PNG/JPEG cu posibilitate de mutare, redimensionare și ștergere.

### 📝 Comentarii, Marcaje & Instrumente Vectoriale
- **Marcare text:** Instrumente dedicate pentru Highlight, Underline și Strikethrough.
- **Forme vectoriale:** Desen liber (Freehand / Creion), Linii drepte, Săgeți, Dreptunghiuri și Elipse cu grosimi și culori configurabile.
- **Note adezive (Sticky Notes):** Plasare de comentarii popover pe coordonate exacte.
- **Ștampile profesionale:** Ștampile predefinite (*Approved*, *Confidential*, *Draft*, *Final*, *Void*) și ștampilă dinamică cu dată și oră.

### 📄 Organizare Pagini (Page Manager)
- Grilă vizuală completă a miniaturilor tuturor paginilor documentului.
- Reordonare pagini prin glisare (drag-and-drop) sau comenzi rapide stânga/dreapta.
- Rotire pagini individuale sau colective la 90° / 180°.
- Ștergere, extragere pagini (*Extract Pages*) și inserare documente externe.
- Operațiuni avansate de **Split PDF** (după interval de pagini) și **Merge PDF** (combinare fișiere).

### ✍️ Formulare & Semnături (Fill & Sign)
- **Signature Studio complet:**
  - **Draw:** Desenare fluidă a semnăturii pe canvas tactil/mouse cu cerneală albastră sau neagră.
  - **Type:** Generare semnătură folosind 4 fonturi caligrafice cursive.
  - **Upload:** Import imagine semnătură PNG transparentă.
- Repoziționare și redimensionare liberă a semnăturilor pe pagină.
- **Aplatizare (Flatten):** Sigilare definitivă a semnăturilor și modificărilor în fluxul vectorial al documentului pentru blocarea editării ulterioare.

### 🔍 OCR & Conversie Offline
- Motor OCR offline integrat (*Tesseract.js*) ce rulează complet local, fără conexiune la internet.
- Extragere text din documente scanate, cu afișare progres în timp real și salvare în `.txt`.
- Export documente către imagini de înaltă rezoluție (PNG / JPEG la 100, 150 sau 300 DPI).
- Optimizare și compresie a fișierelor PDF.

### 🛡️ Instrumente de Document (Watermark & Header/Footer)
- **Watermark:** Adăugare filigran personalizat cu unghi configurabil, opacitate și mărime.
- **Header & Footer:** Inserare antet, subsol și numerotare automată a paginilor.

### 🎨 Experiență Utilizator & Productivitate
- Suport complet pentru teme dinamice: **Dark Mode** și **Light Mode**, comutabile instant fără reîncărcare.
- Navigare fluidă cu zoom continuu (25% - 500%), moduri *Fit to Page* / *Fit to Width* și *Hand Tool* pentru panoramare.
- Scurtături de tastatură clasice (`Ctrl+O`, `Ctrl+S`, `Ctrl+Z`, `Ctrl+Y`, `Ctrl+P`, etc.).

---

## 📦 Pachet de Instalare Gata de Utilizare

Pentru utilizatorii de Windows, aplicația este deja împachetată ca instalator executabil de sine stătător:
- **Fișier:** `Aether.msi`
- **Dimensiune:** ~108 MB
- **Compatibilitate:** Windows 10 și Windows 11 (64-bit)
- **Caracteristici:** Instalare curată per-machine în `Program Files\Aether`, adăugare automată a scurtăturilor pe Desktop și în meniul Start, fără a necesita instalarea prealabilă a Node.js sau a altor dependențe.

---

## 🛠️ Arhitectură & Tehnologii

- **Desktop Framework:** [Electron 33](https://www.electronjs.org/)
- **Frontend & UI:** [React 18](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/), [Tailwind CSS 3](https://tailwindcss.com/)
- **Icoane & Design:** [Lucide Icons](https://lucide.dev/)
- **State Management:** [Zustand 5](https://github.com/pmndrs/zustand)
- **PDF Rendering Engine:** [PDF.js](https://mozilla.github.io/pdf.js/) (compilat și stocat 100% local cu worker dedicat)
- **PDF Binary Manipulation:** [pdf-lib](https://pdf-lib.js.org/) (manipulare binară, adnotări vectoriale, structurare pagini)
- **Local OCR Engine:** [Tesseract.js](https://tesseract.projectnaptha.com/) (execuție offline fără acces la rețea)
- **Packaging:** [electron-builder](https://www.electron.build/) cu WiX Toolset pentru MSI nativ Windows

---

## 📂 Structura Proiectului

```
Aether-PDF/
├── Aether.msi                     # Pachetul de instalare final standalone Windows x64
├── dist/                          # Bundle-ul frontend compilat
│   ├── Aether.msi                 # Copie instalator distribuit
│   ├── index.html                 # Punct de intrare web
│   └── assets/                    # Scripturi, stiluri și pdf.worker.min.js
├── dist-electron/                 # Procesul principal și preload Electron
│   ├── main.js                    # Management ferestre, IPC și meniuri native
│   └── preload.js                 # ContextBridge securizat
├── build/                         # Resurse grafice și pictograme aplicație
│   ├── icon.ico                   # Pictogramă Windows 256x256
│   └── icon.png
├── electron/                      # Cod sursă proces Electron (TypeScript)
│   ├── main.ts
│   └── preload.ts
├── src/                           # Cod sursă aplicație React + TypeScript
│   ├── components/                # Componente grafice modulare
│   │   ├── layout/                # TitleBar, MenuBar, Toolbar, LeftSidebar, RightSidebar
│   │   ├── viewport/              # PDFViewer, PageCanvas, TextLayer, AnnotationLayer, EditOverlay
│   │   └── tools/                 # EditTool, MarkupTool, OrganizeModal, SignModal, OcrModal etc.
│   ├── services/                  # Servicii procesare PDF și OCR
│   │   ├── pdfEngine.ts           # Wrapper PDF.js pentru randare și extracție text
│   │   ├── pdfModifier.ts         # Editor binar pdf-lib (adnotări, split, merge, flatten)
│   │   ├── ocrService.ts          # Extracție text Tesseract.js offline
│   │   └── exportService.ts       # Export imagini/text și optimizare fișier
│   ├── store/
│   │   └── usePDFStore.ts         # Stare globală Zustand (istoric, unelte, pagini, zoom)
│   ├── types/
│   │   └── pdf.d.ts               # Tipuri și interfețe TypeScript
│   ├── App.tsx                    # Componenta rădăcină
│   ├── main.tsx                   # Punct de montare React
│   └── index.css                  # Stiluri Tailwind și teme variabile CSS
├── electron-builder.json          # Configurație de împachetare MSI
├── package.json                   # Dependențe și scripturi proiect
├── tsconfig.json                  # Configurație compilator TypeScript
└── vite.config.ts                 # Configurație bundler Vite
```

---

## 💻 Ghid de Dezvoltare & Compilare

### Cerințe preliminare
- [Node.js](https://nodejs.org/) v18+ și npm

### Instalare dependențe
```bash
npm install
```

### Rulare în mod Dezvoltare (Dev)
```bash
# Pornire interfață Vite + lansare fereastră Electron
npm run dev
```

### Compilare Frontend & Procese Electron
```bash
npm run build
```

### Generare Pachet de Instalare `Aether.msi`
```bash
npm run dist:msi
```
Instalatorul executabil va fi generat în directorul `dist-package/Aether.msi`.

---

## 🔒 Securitate & Confidențialitate

Aether a fost conceput cu o arhitectură strictă **Privacy-First**:
- Zero solicitări HTTP/HTTPS către servere externe sau servicii cloud.
- Fără module de urmărire analitică, telemetrie sau publicitate.
- Prelucrarea tuturor datelor, inclusiv a fișierelor scanate prin OCR, are loc exclusiv în memoria RAM și pe stocarea locală a mașinii tale.

---

## 📄 Licență

Acest proiect este licențiat sub termenii licenței **MIT**.

---

<p align="center">
  <strong>Aether</strong> • Dezvoltat cu pasiune de <strong>CoExist Robotics</strong>
</p>
