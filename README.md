# Sahifalovchi

Sahifalovchi is a handy tool for arranging book or booklet pages for printing as an A4 folded booklet. It calculates the page order, the number of sheets required, and the page pairs to print on each side so the finished booklet can be folded and assembled correctly.

The project is a static web application. You can use it in a browser, install or launch it as a Progressive Web App (PWA), or run the included portable Windows executable.

## Features

- Calculates the page order required for a booklet
- Rounds the page count up to the next multiple of four
- Shows the number of A4 sheets required
- Generates page sequences for the front and back of each sheet
- Offers normal and reversed printer-feed ordering
- Lets you display page pairs on separate lines or in a compact format
- Copies page lists to the clipboard
- Saves calculated page lists as a text file
- Supports Uzbek, Russian, and English
- Includes system, light, and dark themes
- Supports offline use through service-worker caching

## Use cases

Sahifalovchi is useful when you want to:

- Make a booklet from a book, magazine, or study material
- Print a document as a folded booklet on A4 paper
- Preview the page order on each sheet before printing
- Reduce mistakes when folding and assembling printed sheets

## How the calculation works

In a booklet, each A4 sheet usually holds four pages:

- Two pages on the front
- Two pages on the back

For this reason, the total page count must be a multiple of four. If the number you enter is not a multiple of four, the app rounds it up to the next multiple of four so the booklet layout can be calculated.

## Quick start

### Option 1: Open in a browser

1. Open the project folder.
2. Open `index.html` in a browser.
3. Enter the total number of pages.
4. Click **Calculate** (displayed as **Hisoblash** in Uzbek).
5. Review the page lists and print the sheets.

### Option 2: Use it as a PWA

The project includes `manifest.webmanifest` and the `sw.js` service worker for caching. When served from a compatible web server, the app can be installed and launched in a standalone window. After its resources have been cached, it can also work offline.

### Option 3: Run the Windows executable

The [Sahifalovchi-Windows](./Sahifalovchi-Windows) folder contains a portable Windows version.

1. Open the [Sahifalovchi-Windows](./Sahifalovchi-Windows) folder.
2. Run `Sahifalovchi-Windows.exe`.
3. Use the app without installing it.

## Project structure

```text
sahifalovchi/
├── index.html                    # Main application page
├── manifest.webmanifest          # PWA metadata
├── sw.js                         # Service worker and caching
├── icon.svg                      # Application icon
├── assets/
│   ├── css/
│   │   └── styles.css            # Interface styles
│   └── js/
│       ├── app.js                # Application logic
│       └── tailwind.js            # Tailwind CSS runtime
├── Sahifalovchi-Windows/
│   ├── README.txt                # Windows app instructions
│   ├── Sahifalovchi-Windows.exe  # Portable Windows executable
│   └── desktop.ini
├── desktop.ini
└── README.md                     # Project documentation
```

## Using the app

### 1. Enter the page count

Enter the total number of pages in the **Total number of pages** field. You can also use the arrow controls beside the field to increase or decrease the value.

Examples: 24, 32, 56, or 100 pages.

### 2. Calculate the layout

Click **Calculate**. The app validates the input, rounds it up to a multiple of four if needed, calculates the number of sheets, and generates the page lists for both sides.

### 3. Review the results

The app displays:

- The number of A4 sheets required
- The page count used in the calculation
- The page pairs for the front and back of the sheets
- A visual preview of the sheet layouts and their order

Each pair represents the pages placed side by side on one side of a sheet. The first number is on the left and the second is on the right.

### 4. Copy or save the lists

You can copy the list for either side to the clipboard and save the results as a text file. Review the lists and visual preview before printing.

### 5. Printing recommendations

For a correctly assembled booklet:

1. Print one test sheet first and check the page order.
2. Use duplex (two-sided) printing.
3. Check how your printer turns the paper over.
4. Adjust the **Reverse order for printer** setting if needed.
5. Once the test sheet is correct, print the remaining sheets.

## Interface settings

### Language

Choose one of the available languages from the header:

- O'Z — Uzbek
- RU — Russian
- EN — English

### Theme

Choose **System**, **Light**, or **Dark**.

### Help

The in-app help explains how to enter the page count, read the page pairs, understand the sheet sides, and prepare the print job.

## Technical notes

### Static application

Sahifalovchi is a client-side app. It does not require a backend, database, or server-side services.

### PWA and offline support

The service worker caches application resources. Offline availability depends on the app having been opened and its resources cached previously. PWA installation and service workers generally require the app to be served from a secure origin, such as HTTPS or localhost.

### Portable Windows version

The included Windows executable does not require installation.

## Build and update

The Windows app's `README.txt` says that Node.js is required to build an updated executable. From the Windows app's source folder, run:

```bash
npm ci
npm run build
```

The build output will be written to that folder. The source folder and build configuration are not included in this repository snapshot; consult the Windows app's build setup for the exact working directory and prerequisites.

## Limitations

- An Android APK is not currently available.
- The project is intended as a browser-based or local desktop tool, not as a hosted server service.
- Printer settings, paper orientation, and duplex behavior vary. Always verify the result with a test sheet.

## License and usage

No license file is included in this repository. Check with the project owner before redistributing or incorporating the project into other software.

## Summary

Sahifalovchi helps arrange pages for A4 booklet printing. It calculates the sheet count and page order, previews the layout, and provides lists that can be copied or saved. The web app, offline caching, and portable Windows version make it convenient to use on a computer with or without a continuous internet connection.
