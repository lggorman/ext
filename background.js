
chrome.tabs.onCreated.addListener(function(tab) {
        console.log('new tab');
        chrome.tabs.executeScript(tab.id, {file: 'jquery.js'});
        chrome.tabs.executeScript(tab.id, {file: 'custom.js'});

});
        
		
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	//doesn't work.  maybe need to add settimeout? I think response is getting sent before storage is synced
    if (request.method == "getStorage"){
		  chrome.storage.sync.get({
		      'load' : 'onTab'
		    }, function(items) {
		        console.log(items.load); 
		        sendResponse({data: items.load}); 

		   });

		  //sendResponse({data: 'will this work?'});
    }
    else{
      sendResponse({data: 'nope'}); 
    }

    return true;
});







