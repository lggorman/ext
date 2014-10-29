$(function(){
	console.log("This is the custom js");


	newWord();

	function newWord(){ 
        return $.ajax({
            dataType: "json",
            url: "https://api.quizlet.com/2.0/sets/54108232?client_id=CgWatQQYh9",    
        });
    }

    var initModal = newWord();

    initModal.success(function (data){
    	console.log(data);
    	randInt = Math.floor(Math.random() * 344);
        selected = data.terms[randInt];
        theDef = selected.definition;
        theWord = selected.term;
        console.log(theDef);

        $('body').append("<div id = 'overlay'></div><div id = 'plugin-modal'>" + theDef + "</br></br><strong>"+ theWord +"</strong></div>");
        $('#plugin-modal').append("</br></br><input type = 'text' id = 'studyAnswerExt'></input></br></br><button>Got it</button>");

        $('#plugin-modal button').click(function(){
             var theAnswer = $('#studyAnswerExt').val();
             console.log(theAnswer);
             if( theAnswer == theWord | theAnswer == theWord.toLowerCase() ){
			     $('#plugin-modal').hide();
			     $('#overlay').hide();
            }
		});
	
		
    });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('called!');
    console.log(request);
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    
      sendResponse({farewell: "goodbye"});
   
  });

/*
    chrome.extension.onConnect.addListener(function(port) { 
        port.onMessage.addListener(function(msg) { 
            console.log("RECEIVED A MESSAGE: " + msg.data); 
        }); 
    }); 

   /*
    window.addEventListener("load", function() {
        chrome.extension.sendMessage({
            type: "dom-loaded", 
            data: {
                myProperty: "value"
            }
        });
    }, true);
    */

    


	

	

});
