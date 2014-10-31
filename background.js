
chrome.tabs.onCreated.addListener(function(tab) {
        console.log('new tab');
        chrome.tabs.executeScript(tab.id, {file: 'jquery.js'});
        chrome.tabs.executeScript(tab.id, {file: 'custom.js'});
        
        
       /*
        chrome.storage.sync.get(test, function() {
          //FIX: APPARENTLY, STORAGE AREA IS NOT DEFINED maybe have to retrieve from options?? UGH
          chrome.tabs.sendMessage(tab.id, {greeting: test}, function(response) {
            });
        });
		*/
		
}); 







