function save_options() { 
        if(document.querySelector('input[name="test"]:checked') == null){
          var test = '';
        }
        else{
          var test = document.querySelector('input[name="test"]:checked').value;
        }
        var quizlet_id = document.querySelector('input[name="custom_id"]').value;
        var on_load = document.querySelector('input[name="load"]:checked').value;
        console.log(on_load);

       /*
        if(quizlet_id != ''){
          $.ajax({
            dataType: "json",
            url: "https://api.quizlet.com/2.0/sets/" + quizlet_id + "?client_id=CgWatQQYh9",
            error: function(errorThrown){
                console.log(errorThrown);
            }
          });
        }
        */
        chrome.storage.sync.set({
          'test' : test,
          'custom_id' : quizlet_id,
          'load' : on_load
        }, function() {
            var status = document.getElementById('status');
            status.textContent = 'Options saved.';
            
            setTimeout(function() {
              status.textContent = '';
            }, 750);

      });
    } 
 
  

  function restore_options() {
    document.querySelector('input[name="test"]').addEventListener("click", removeCustom);
    document.querySelector('input[name="custom_id"]').addEventListener("click", removeStandard);
    chrome.storage.sync.get({
      'test' : 'GRE',
      'custom_id' : '',
      'load' : 'onTab'
    }, function(items) {
        console.log(items.load);
        if(items.load == 'onTab'){
          document.getElementById('tab_id').checked = true;
        }
        else{
          document.getElementById('load_id').checked = true;
        }
        
        if(items.custom_id != ''){
          document.querySelector('input[name="custom_id"]').value = items.custom_id;
          document.querySelector('input[name="test"]').checked = false;
        }
        else if(items.test == 'GRE'){
            document.getElementById('gre_id').checked = true;
        }
        else{
            document.getElementById('sat_id').checked = true;
        }
          
      
    });
  }

  function removeCustom(){
    document.querySelector('input[name="custom_id"]').value = '';
  }

  function removeStandard(){
    document.getElementById('sat_id').checked = false;
    document.getElementById('gre_id').checked = false;
  }



  document.addEventListener('DOMContentLoaded', restore_options);  

  document.getElementById('save').addEventListener('click',
      save_options);
