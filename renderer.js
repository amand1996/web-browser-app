var $ = require('jquery');

$('#Go').click(function(){
	
	var url = $("#urlinput").val();
	url = "http://" + url;
	$("#webviewpane").attr('src', url);
});

$('#Go').click(function(){
	
	var url = $("#urlinput").val();
	url = "http://" + url;
	$("#webviewpane").attr('src', url);
});

$('#urlinput').keypress(function (e) {
 var key = e.which;
 if(key == 13)
  {
    $('#Go').click();  
  }
});

$('#addNewButton').click(function(){
	$('#newTab').append('<button class="btn btn-md btn-primary">New Tab</button>');
});   