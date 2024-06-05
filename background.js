chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getActiveTabURL") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            if (activeTab.url.includes("youtube.com")) {
                sendResponse({ url: activeTab.url });
            } else {
                sendResponse({ error: "Not on YouTube" });
            }
        });
        return true; // Keeps the message channel open until sendResponse is called
    }
});

// This line is required for Manifest V3 to keep the service worker alive
self.addEventListener('install', function(event) {});
