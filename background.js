
var popupOn = false;

chrome.tabs.onCreated.addListener(function(tab) {
        console.log('new tab');
        chrome.tabs.executeScript(tab.id, {file: 'jquery.js'});
        chrome.tabs.executeScript(tab.id, {file: 'custom.js'});

        popupOn = true;

});


        
		
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(popupOn);
	if(popupOn == false){

		if (request.method == "getStorage"){
			  chrome.storage.sync.get({
			      'load' : 'onTab'
			    }, function(items) {
			        console.log(items.load); 
			        sendResponse({data: items.load}); 

			        if(items.load == 'onPageLoad'){
				        chrome.tabs.executeScript(sender.tab.id, {file: 'jquery.js'});
		        		chrome.tabs.executeScript(sender.tab.id, {file: 'custom.js'});


		        	}

			   });

			 
		}
		else{
		  sendResponse({data: 'nope'}); 
		}

		return true;
	}
	console.log('page loaded');
	popupOn = false;

	
});










