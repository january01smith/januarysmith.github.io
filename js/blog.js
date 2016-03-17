/* ================================
    This jQuery/javascript function uses the Google Plus API to retrieve
    my Google+ posts at /plus.google.com/+januarysmith and display them in my Picture of the Day page
    Google Plus API - plus.activieies.list returns List all of the activities in the specified collection for a particular user
    https://developers.google.com/+/web/api/rest/latest/activities/list#examples
====================================*/

$(document ).ready(function() {
    $.get( "https://www.googleapis.com/plus/v1/people/108623753953418418615/activities/public?maxResults=100&fields=items(object(attachments%2Fimage%2Furl%2Ccontent%2Curl)%2Cpublished)&key=AIzaSyA3h96Za7Gnx6cCCYZq9qNDZEdpN_jqX-Y", function( response ) {

	var i=0, gObj={},d;

    for(i=0; i<response.items.length; i++){
    	gObj=response.items[i];
        d=new Date(gObj.published);

    	$('#podList').append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">'+
    							//'<figure>'+
    							'<a href="' + gObj.object.url + '" target="_self" title="Picture of the Day \r'+ d.toDateString() +' ">'+
    								'<img src="' + gObj.object.attachments[0].image.url +'" class="podImage" alt="Picture of the Day '+ d.toDateString() +' ">'+
    							'</a>'+
    							//'</figure'+
    						'</div>');
    }

	});
});

