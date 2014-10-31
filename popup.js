function save_options() {
        var test_name = document.getElementById('vocab_list').value;
        var quizlet_id = document.getElementById('id_input').checked;
        chrome.storage.sync.set({
          test : test_name,
          custom_id : quizlet_id
        }, function() {

        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
          status.textContent = '';
        }, 750);
      });
    }

  function restore_options() {
    chrome.storage.sync.get({
      test : 'gre',
      custom_id : ''
    }, function(items) {
      document.getElementById('vocab_list').checked = items.test;
      document.getElementById('id_input').value = items.custom_id;
    });
  }

  document.addEventListener('DOMContentLoaded', restore_options);
  restore_options();

  document.getElementById('save').addEventListener('click',
      save_options);
