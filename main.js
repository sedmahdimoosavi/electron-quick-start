// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, remote } = require("electron");
const path = require("node:path");

const isMac = process.platform === "darwin";
const isDev = process.env.NODE_ENV !== "production";

console.log(remote);

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    title: "Fanap Med Windows Application",
    width: 1200,
    height: 800,
    titleBarStyle: "hidden",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      webviewTag: true,
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      // allowDisplayingInsecureContent: true,
      // allowRunningInsecureContent: true,
    },
  });

  mainWindow.setMenu(null);

  // ipcMain.on("set-title", (event, title) => {
  //   const webContents = event.sender;
  //   const win = BrowserWindow.fromWebContents(webContents);
  //   win.setTitle(title);
  // });

  // and load the index.html of the app.
  if (isDev) {
    console.log("is Dev");
    mainWindow.loadURL("http://localhost:5173/");
  } else {
    console.log("is not Dev");
    mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
  }

  // Open the DevTools.
  if (isDev) mainWindow.webContents.openDevTools();

  ipcMain.on("toggle-fullscreen", () => {
    const isFullscreen = mainWindow.isFullScreen();
    mainWindow.setFullScreen(!isFullscreen);
  });

  ipcMain.on("minimize", () => {
    mainWindow.minimize();
  });

  ipcMain.on("close", () => {
    mainWindow.close();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on(
  "remote-get-global",
  function (event, webContents, requrestedGlobalName) {
    console.log("in remote get global");
  }
);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (!isMac) app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
