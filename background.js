tabId = 3;

console.log("working now?");

chrome.tabs.onSelectionChanged.addListener(function(tabId) {
   chrome.tabs.sendRequest(tabId, "resize");
});

/*
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});



chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});

chrome.tabs.executeScript(null, {file: "custom.js"});

chrome.tabs.insertCSS(null, {file: "style.css"});
*/