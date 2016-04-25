/* ================================
    This jQuery/javascript function uses the Google Plus API to retrieve
    my Google+ posts at /plus.google.com/+januarysmith and display them in my Picture of the Day page
    Google Plus API - plus.activieies.list returns List all of the activities in the specified collection for a particular user
    https://developers.google.com/+/web/api/rest/latest/activities/list#examples
====================================*/

$(document ).ready(function() {
    $.get("https://www.googleapis.com/plus/v1/people/108623753953418418615/activities/public?maxResults=100&fields=items(object(attachments%2Fimage%2Furl%2Ccontent%2Curl)%2Cpublished)&key=AIzaSyA3h96Za7Gnx6cCCYZq9qNDZEdpN_jqX-Y", function( response, status, xhr) {

	buildList(response);

    console.log( "Load was performed: " + response, status, xhr);

	});
});

// Need to get NextPage token from header
function loadMore(nextPageToken){
    $.get( "https://www.googleapis.com/plus/v1/people/108623753953418418615/activities/public?maxResults=100&fields=items(object(attachments%2Fimage%2Furl%2Ccontent%2Curl)%2Cpublished)&pageToken="+ nextPageToken + "&key=AIzaSyA3h96Za7Gnx6cCCYZq9qNDZEdpN_jqX-Y", function( response ) {

    buildList(response);

    });
}

function buildList(response){

    var i=0, gObj={},podDate;

    for(i=0; i<response.items.length; i++){
        gObj=response.items[i];
        podDate=new Date(gObj.published);

        $('#podList').append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">'+
                                '<a href="' + gObj.object.url + '" target="_self" title="Picture of the Day \r'+ podDate.toDateString() +' ">'+
                                    '<img src="' + gObj.object.attachments[0].image.url +'" class="podImage thumbnail" alt="Picture of the Day '+ podDate.toDateString() +' ">'+
                                '</a>'+
                                '<div  class="visible-xs podCaption"> '+ podDate.toDateString() +' </div>' +
                            '</div>');
    }

    // if (response.nextPageToken!='') {
    //     $('#podList').append('<button type="button" class="btn" onclick="loadMore(' + response.nextPageToken + ')">Load More</button>');
    //     console.log(response.nextPageToken);
    //}
}

// // This sample assumes a client object has been created.
// // To learn more about creating a client, check out the starter:
// //  https://developers.google.com/+/quickstart/javascript
// function OnLoadCallback(){
//     console.log('Loading plus api...');
//     gapi.client.setApiKey("AIzaSyA3h96Za7Gnx6cCCYZq9qNDZEdpN_jqX-Y");
//     gapi.client.load('plus', 'v1').then(function() { console.log('loaded.'); });
// }
// function makeRequest() {
// var request = gapi.client.plus.activities.list({
//   'userId' : '108623753953418418615',
//   'collection' : 'public'
// });

// request.execute(function(resp) {
//   var numItems = resp.items.length;
//   for (var i = 0; i < numItems; i++) {
//     console.log('ID: ' + resp.items[i].id + ' Content: ' +
//       resp.items[i].object.content);
//   }
// });
// }



