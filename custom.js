$(function(){ 

    
    
    chrome.storage.sync.get(function(selected) {
        if(selected.custom_id != ''){
            testId = selected.custom_id;     

        }  
        else{
            if(selected.test == 'GRE'){
                testId = 54108232;
            }
            else{
                testId = 53598208;
            }
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
            randInt = Math.floor(Math.random() * data.terms.length);
            selected = data.terms[randInt];
            theDef = selected.definition;
            theWord = selected.term;

            $('body').append("<div id = 'overlay'></div><div id = 'plugin-modal'>" + theDef + "</br></br><strong>"+ theWord +"</strong><div id='closeout-modal'>x</div></div>");
            $('#plugin-modal').append("</br></br><input type = 'text' id = 'studyAnswerExt'></input></br></br><button>Got it</button>");

            $('#plugin-modal button').click(function(){
                 var theAnswer = $('#studyAnswerExt').val();
                 if( theAnswer == theWord | theAnswer == theWord.toLowerCase() ){
                     $('#plugin-modal').hide();
                     $('#overlay').hide();
                }
            });

            $('#closeout-modal').click(function(){
                $('#plugin-modal').hide();
                $('#overlay').hide();
            });
        
            
        });

        initModal.error(function(){
            alert('Study Squirrel error!  You have entered an invalid custom set id.  Go to chrome://extensions to adjust your options or disable the extension')
        })

    });
    


}); 
