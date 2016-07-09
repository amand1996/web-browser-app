var $ = require('jquery');

$('#Go').click(function(){
	
	var url = $("#urlinput").val();
	url = "http://" + url;
	$("#webviewpane").attr('src', url);
	$('#loadgif').show();
});

$('#homeButton').click(function(){
	$("#webviewpane").attr('src', "http://www.google.com");
	$("#urlinput").val("www.google.com");
	$('#loadgif').show();
});

$('#urlinput').keypress(function (e) {
 var key = e.which;
 if(key == 13)
  {
    $('#Go').click();  
  }
});

$('#addNewButton').click(function(){
	$('#newTab').append('<button class="btn btn-md btn-info" id="btn-" style="float:left;">New Tab</button>');
	$('#newWebview').append('<webview src="http://www.google.com" id="webviewpane" style="height:590px; display:none;"></webview>');
});

function newTab(){

}