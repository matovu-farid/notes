const path = require("path");
const windowStateKeeper = require("./windowStateKeeper");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

function createWindow(mainWindowState) {
  // Create the browser window.
  const win = new BrowserWindow({
    width: mainWindowState.width,
    height: mainWindowState.height,

    webPreferences: {
      nodeIntegration: true,
    },
    transparent: true,
    frame: false,
    backgroundColor: "#eaea7a",
    x: mainWindowState.x,
    y: mainWindowState.y,
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Open the DevTools.
  if (isDev) {
    //win.webContents.openDevTools({ mode: "undocked" });
    let devtools;
    win.webContents.once("did-finish-load", function () {
      devtools = new BrowserWindow();

      win.webContents.setDevToolsWebContents(devtools.webContents);
      win.webContents.openDevTools({ mode: "detach" });
      var windowBounds = win.getBounds();

      devtools.setPosition(
        windowBounds.x + windowBounds.width + 10,
        windowBounds.y
      );
    });

    // Set the devtools position when the parent window is moved.
    win.on("move", function () {
      var windowBounds = win.getBounds();

      devtools.setPosition(windowBounds.x + windowBounds.width, windowBounds.y);
      mainWindowState.saveState({
        x: windowBounds.x,
        y: windowBounds.y,
        width: windowBounds.width,
        height: windowBounds.height,
      });
    });
    win.on("close", () => {
      devtools.close();
    });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on("ready", async () => {
  await app.whenReady();
  const mainWindowState = await windowStateKeeper();
  createWindow(mainWindowState);
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
