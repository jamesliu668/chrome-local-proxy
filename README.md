# chrome-local-proxy
Chome Extension, a simple proxy extension created by Gemini

## Prompts to Create Plugin by Gemini
Here are the prompts to ask Gemini to work:

### Prompts #1:
```
You are a programmer, help me to write a chrome extension. The functions are:
## click the icon to enable or disable the proxy
## the proxy mode is sock5, ip is 127.0.0.1, port is 7890
```

With this prompt, it gives me three files with contents:
1. Manifest.json
2. popup.html
3. popup.js

**Problem**
Chrome give me an error, and I asked Gemini to solve it, but failed. So I manually fixed it by search Google.
```
browser_action get an error: 'browser_action' requires manifest version of 2 or lower.
```