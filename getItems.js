// Get items like current hostname, blocked site list, etc.

document.addEventListener("DOMContentLoaded", async (event) => {
        const items = await chrome.storage.sync.get(["currentURL"]);

        const currentURL = items?.currentURL;
        const blockSiteList = items?.blockList;

        console.log(currentURL)
        console.log(blockSiteList)
});