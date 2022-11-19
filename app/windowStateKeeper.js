const appConfig = require("electron-settings");
async function windowStateKeeper() {
  let windowName = "main";
  let state = {
    x: 100,
    y: 100,
    width: 485,
    height: 300,
  };

  async function setBounds() {
    if (appConfig.has(windowName)) {
      state = await appConfig.get(windowName);
    }
  }
  function saveState({ x, y, width, height }) {
    state = { x, y, width, height };
    appConfig.set(windowName, state);
  }

  await setBounds();
  return { ...state, saveState };
}
module.exports = windowStateKeeper;
