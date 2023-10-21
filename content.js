const siteBlock = ['https://www.youtube.com/']

console.log('Hello! Content.js')

// Let's modify html document 

const url = window.location.href

if (url === siteBlock[0]){
    console.log(url)

    chrome.runtime.sendMessage({redirect: "chrome-extension://ommknfecagpdllighpjcighiikgmgclf/blockedpage.html"});
}