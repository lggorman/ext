$(function(){
	console.log("This is the custom js");

	function initModal(){
		$('body').append("<div id = 'overlay'></div><div id = 'plugin-modal'>Here's a modal</div>");

		$('#plugin-modal').click(function(){
			$(this).hide();
			$('#overlay').hide();
		});
	}
});
