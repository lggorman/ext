
chrome.tabs.onCreated.addListener(function(tab) {
        console.log('new tab');
        chrome.tabs.executeScript(tab.id, {file: 'jquery.js'});
        chrome.tabs.executeScript(tab.id, {file: 'custom.js'});
        
		
}); 







