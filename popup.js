document.getElementById('fetchUrl').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "getActiveTabURL" }, (response) => {
        document.getElementById('output').innerText = response.url;
    });
});
