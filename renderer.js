var $ = require('jquery');

$('#Go').click(function(){
	var url = $("#urlinput").val();
	$("#webviewpane").attr('src', url);
});