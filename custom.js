$(function(){
	console.log("This is the custom js");


    
    //NOT WORKING, probably because of asynch? need to use callback
    function get_selected_option(){
        chrome.storage.sync.get(function(selected) {
            console.log(selected);
            if(selected.custom_id == false){
                return selected.test;
            }
            else{
                return selected.custom_id;
            }
        });
    }

    var yourTest = get_selected_option();

    console.log(yourTest);

    if(yourTest == 'GRE'){
        testId = 54108232;
    }
    else if (yourTest == 'SAT'){
        testId = 53598208;
    }
    else{
        testId = yourTest;
    }
    
        


	newWord();

	function newWord(){ 
        return $.ajax({
            dataType: "json",
            url: "https://api.quizlet.com/2.0/sets/" + testId + "?client_id=CgWatQQYh9",    
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


}); 
