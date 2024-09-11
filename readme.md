
# GRE Word Randomizer

This is a Chrome extension that displays a random GRE word along with its meaning every time a new tab is opened. The extension translates the word and its meaning into Traditional Chinese and provides TTS (Text-to-Speech) functionality for the word.

這是一個 Chrome 擴展，每次打開新標籤頁時會顯示一個隨機的 GRE 單詞及其解釋。擴展會將單詞及其解釋翻譯為繁體中文，並提供單詞的語音合成功能（TTS）。

## Features / 特性

- Displays a random GRE word and its meaning.  
  顯示隨機 GRE 單詞及其解釋。
- Translates the word and meaning into Traditional Chinese using Google Translate API.  
  使用 Google 翻譯 API 將單詞和解釋翻譯為繁體中文。
- Provides TTS functionality to pronounce the word.  
  提供單詞的語音合成功能。

## Installation / 安裝

1. Clone or download this repository.  
   克隆或下載此倉庫。

    ```bash
    git clone https://github.com/tbdavid2019/chrome-newtab-page.git
    ```

2. Replace the Google Translate API key in `newtab.js` with your own API key.  
   在 `newtab.js` 中替換為您自己的 Google 翻譯 API 金鑰。

    ```javascript
    const apiKey = 'YOUR_GOOGLE_API_KEY';
    ```

3. Open Chrome and go to `chrome://extensions/`.  
   打開 Chrome 並進入 `chrome://extensions/`。

4. Enable "Developer mode" in the top right corner.  
   在右上角啟用“開發者模式”。

5. Click "Load unpacked" and select the directory where you cloned or downloaded the extension.  
   點擊“加載未打包項目”，並選擇您克隆或下載擴展的目錄。

6. The extension should now be active. Every time you open a new tab, it will display a random GRE word.  
   現在擴展應該已啟動。每次打開新標籤頁時，它會顯示一個隨機的 GRE 單詞。

## API Key Replacement Reminder / API 金鑰替換提醒

Remember to replace the Google Translate API key in `newtab.js` with your own API key.  
請記得在 `newtab.js` 中替換為您自己的 Google 翻譯 API 金鑰。

```javascript
const apiKey = 'YOUR_GOOGLE_API_KEY';
```

If you don't have an API key, you can generate one by visiting the [Google Cloud Console](https://console.cloud.google.com/).  
如果您沒有 API 金鑰，可以通過訪問 [Google Cloud Console](https://console.cloud.google.com/) 生成。

## License / 授權

This project is licensed under the MIT License.  
本項目使用 MIT 授權。
