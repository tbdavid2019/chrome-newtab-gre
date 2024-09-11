window.onload = function() {
  fetch("http://answerbook.david888.com/greWord")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const word = data.greWord.word;
      const meaning = data.greWord.meaning;

      document.getElementById('word').textContent = word;
      document.getElementById('meaning').textContent = meaning;

      // 分別翻譯單詞和解釋到繁體中文
      translateWordToChinese(word);    // 翻譯單詞
      translateMeaningToChinese(meaning); // 翻譯解釋

      // 添加 TTS 功能
      document.getElementById('word').addEventListener('mouseenter', function() {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US'; // 設置語言為美式英語
        speechSynthesis.speak(utterance); // 播放語音
      });
    })
    .catch(error => {
      console.error('Error fetching the GRE word:', error);
      document.getElementById('word').textContent = "Error fetching word";
      document.getElementById('meaning').textContent = "";
      document.getElementById('chineseMeaning').textContent = "";
    });
};

// 使用 Google Cloud Translate API 翻譯單詞
function translateWordToChinese(word) {
  const apiKey = 'AIzaSyCk0M91SjmiGQrRgP6k0fe-3GBh8XyaBXo';
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      q: word,         // 翻譯單詞
      target: "zh-TW", // 目標語言：繁體中文
      format: "text"
    }),
    headers: { 
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // 顯示翻譯後的單詞繁體中文
      document.getElementById('word').textContent += ` (${data.data.translations[0].translatedText})`;
    })
    .catch(error => {
      console.error('Error translating word to Chinese:', error);
    });
}

// 使用 Google Cloud Translate API 翻譯解釋
function translateMeaningToChinese(meaning) {
  const apiKey = '12355';
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      q: meaning,      // 翻譯解釋
      target: "zh-TW", // 目標語言：繁體中文
      format: "text"
    }),
    headers: { 
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // 顯示翻譯後的解釋繁體中文
      document.getElementById('chineseMeaning').textContent = data.data.translations[0].translatedText;
    })
    .catch(error => {
      console.error('Error translating meaning to Chinese:', error);
    });
}