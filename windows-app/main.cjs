const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

function createWindow() {
    const window = new BrowserWindow({
        width: 1100,
        height: 900,
        minWidth: 360,
        minHeight: 500,
        title: 'Sahifalovchi',
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true
        }
    });

    const sitePath = app.isPackaged
        ? path.join(process.resourcesPath, 'site', 'index.html')
        : path.resolve(__dirname, '..', 'index.html');

    window.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('https://')) {
            shell.openExternal(url);
        }
        return { action: 'deny' };
    });

    window.webContents.on('will-navigate', (event, url) => {
        if (url !== pathToFileURL(sitePath).href) {
            event.preventDefault();
        }
    });

    window.loadFile(sitePath);
}

app.whenReady().then(() => {
    Menu.setApplicationMenu(null);
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
