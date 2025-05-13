const PROXY_ENABLED_KEY = "proxyEnabled";

chrome.runtime.onStartup.addListener(async () => {
  // Set default proxy state to disabled on launch
  chrome.storage.local.set({ [PROXY_ENABLED_KEY]: false });
  await setProxyState(false);
});

chrome.runtime.onInstalled.addListener(() => {
  // Set default proxy state to disabled on installation
  chrome.storage.local.set({ [PROXY_ENABLED_KEY]: false });
});

chrome.action.onClicked.addListener(async () => {
  let enabled = await getProxyState();
  enabled = !enabled; // Toggle the state
  await setProxyState(enabled);
});

function getProxyState() {
  return new Promise((resolve) => {
    chrome.storage.local.get(PROXY_ENABLED_KEY, (data) => {
      resolve(data[PROXY_ENABLED_KEY] || false); // Default to disabled
    });
  });
}

function setProxyState(enabled) {
  const config = {
    mode: "fixed_servers",
    rules: {
      singleProxy: {
        scheme: "socks5",
        host: "127.0.0.1",
        port: 7890
      }
    }
  };

  if (!enabled) {
    config.mode = "system"; // Disable proxy by setting to system defaults
  }

  chrome.storage.local.set({ [PROXY_ENABLED_KEY]: enabled });
  updateIcon()

  return new Promise((resolve) => {
    chrome.proxy.settings.set({ value: config, scope: 'regular' }, resolve);
  });
}


function updateIcon() {
    chrome.storage.local.get(PROXY_ENABLED_KEY, (data) => {
      const enabled = data[PROXY_ENABLED_KEY] || false;
      const path = {
        path: enabled ? "images/icon16green.png" : "images/icon16.png"
      };
      chrome.action.setIcon(path, () => {
        console.log("Icon updated:", enabled ? "active" : "inactive");
      });
    });
  }
