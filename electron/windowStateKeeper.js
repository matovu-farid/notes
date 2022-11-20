const appConfig = require("electron-settings");
async function windowStateKeeper() {
  let windowName = "main";
  let state = {
    x: 100,
    y: 100,
  };

  async function setBounds() {
    if (appConfig.has(windowName)) {
      state = await appConfig.get(windowName);
    }
  }
  function saveState({ x, y }) {
    state = { x, y };
    appConfig.set(windowName, state);
  }

  await setBounds();
  return { ...state, saveState };
}
module.exports = windowStateKeeper;
