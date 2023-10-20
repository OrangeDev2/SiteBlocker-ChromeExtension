const siteBlock = ['https://www.youtube.com/']

console.log('Hello! Content.js')

// Let's modify html document 

const url = window.location.href

if (url === siteBlock[0]){
    console.log('after if')

    const body = document.body;
    body.innerHTML = "<h1>You chose to block Youtube.com!</h1>"
}