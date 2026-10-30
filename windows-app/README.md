# Sahifalovchi for Windows

This folder contains a separate Electron desktop-app project. It packages the
site from the parent folder without changing the original site files.

## Build the portable `.exe`

Install Node.js 20.19+ or 22.12+, open PowerShell in this folder, and run:

```powershell
npm install
npm run build
```

The portable executable will be created in `dist\Sahifalovchi-1.0.0-portable.exe`.
It does not require installation or companion files: the site, scripts, styles,
images, and web manifest are bundled into the executable. The app runs offline;
only the GitHub link opens an external website when selected.
