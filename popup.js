function save_options() { 
        console.log('saving!');
        if(document.querySelector('input[name="test"]:checked') == null){
          var test = '';
        }
        else{
          var test = document.querySelector('input[name="test"]:checked').value;
        }
        var quizlet_id = document.querySelector('input[name="custom_id"]').value;
        console.log(quizlet_id);
        //WHY IS IT NULL WTF.  FIX THIS
        chrome.storage.sync.set({
          'test' : test,
          'custom_id' : quizlet_id
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
      'custom_id' : ''
    }, function(items) {
        console.log(items);
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
