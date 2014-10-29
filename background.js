
function getPageandSelectedTextIndex(tab) {
  console.log('called the function');
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {greeting: "hello " + tab.id}, function(response) {
        console.log(response.farewell);
    });
  });
}

chrome.tabs.onCreated.addListener(function(tab) {
        console.log('new tab');
        getPageandSelectedTextIndex(tab);
});







/*
chrome.tabs.executeScript(tabId, { file: "content.js" }, function() {
  var port = chrome.tabs.connect(tabId, { name: "port-conn" });
  port.postMessage({ data: "This is a test" });
});



chrome.tabs.onSelectionChanged.addListener(function(tabId) {
   chrome.tabs.sendRequest(tabId, "resize");
});



chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "dom-loaded":
            alert(request.data.myProperty);
        break;
    }
    return true;
});

/*

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log('connected?');
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