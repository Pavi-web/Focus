const blockedSites = [
    "youtube.com",
    "instagram.com",
    "facebook.com",
    "twitter.com"
];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url) {
        for (let site of blockedSites) {
            if (tab.url.includes(site)) {
                chrome.tabs.update(tabId, {
                    url: chrome.runtime.getURL("blocked.html")
                });
                break;
            }
        }
    }
});
