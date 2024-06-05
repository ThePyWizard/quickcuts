function fetchVideoLink(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab.url.includes("youtube.com")) {
            callback(activeTab.url);
        } else {
            console.error("Not on YouTube");
        }
    });
}

fetchVideoLink((url) => {
    const videoId = url.split('/watch?v=')[1].split('&')[0]; // Simplified extraction, might need adjustments
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`; // Default thumbnail size, adjust as needed

    document.getElementById('videoLink').textContent = url;
    document.getElementById('thumbnailImage').src = thumbnailUrl;
});
