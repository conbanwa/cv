// Chinese version - loads unified common.js from parent directory and sets language to Chinese
// The parent ../common.js contains all project and work data for both EN and ZH
// Dynamically load the parent common.js and then set language to Chinese

const scriptTag = document.createElement('script')
scriptTag.src = '../common.js'
scriptTag.onload = () => {
  if (typeof setLanguage === 'function') {
    setLanguage('zh')
  }
}
document.head.appendChild(scriptTag)
