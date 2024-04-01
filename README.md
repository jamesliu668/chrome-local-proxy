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

### Prompts #2:
I want to improve the extension by clicking the extension to trigger the proxy setting. I am using following prompt.
```
please improve the extension. Can I just enable or disable the proxy by clicking the icon, instead of the button in popup page

```

The main logic is write, but only set icon is wrong. So I change a little to make it works.

### For icons
I am using Gemini to create the icons, but it cannot help me just change the background color. So just create a gray and a green icon for enable/disable state. Here are the promps to create icons:
```
help draw a picture for me . the size is 16x16, background color is gray, the center is a switcher
help draw a picture for me . the size is 16x16, background color is green switcher
```
Unfortunately, it was unable to create a 16x16 picture, but rather a 1000-pixel image. As a solution, I resized the image manually using GIMP.
