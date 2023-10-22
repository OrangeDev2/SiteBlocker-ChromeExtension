console.log('Hello! Content.js')
console.log(window.location.hostname)

// Caches hostname
chrome.storage.sync.set({currentURL: window.location.hostname});