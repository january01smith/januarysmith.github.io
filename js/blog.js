$( document ).ready(function() {
    $.get( "https://www.googleapis.com/plus/v1/people/108623753953418418615/activities/public?maxResults=100&fields=items(object(attachments%2Fimage%2Furl%2Ccontent%2Curl))&key=AIzaSyA3h96Za7Gnx6cCCYZq9qNDZEdpN_jqX-Y", function( response ) {
    console.log( response ); // server response

	var i=0, gObj={};

    for(i=0; i<response.items.length; i++){
    	gObj=response.items[i];
    	$('#podList').append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2"><a href="' + gObj.object.url + '" target="_self"><img src="' + gObj.object.attachments[0].image.url +'" class="podImage" height="200px" width="400px" ></a></div>');
    }
	});
});

