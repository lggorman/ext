chrome.runtime.sendMessage({method: "getStorage"}, function(response) {
  console.log('received a message!');
  console.log(response.data);


});