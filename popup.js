const PROXY_ENABLED_KEY = "proxyEnabled";

document.getElementById('toggleButton').addEventListener('click', async () => {
  let enabled = await getProxyState();
  enabled = !enabled; // Toggle the state
  await setProxyState(enabled);
  updateButtonLabel(enabled);
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

  return new Promise((resolve) => {
    chrome.proxy.settings.set({ value: config, scope: 'regular' }, resolve);
  });
}

function updateButtonLabel(enabled) {
  const button = document.getElementById('toggleButton');
  button.innerText = enabled ? "Disable Proxy" : "Enable Proxy";
}

