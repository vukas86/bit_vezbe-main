$(document).ready(function() {


 var key = 'AIzaSyDSstYU7cw_qfBJ9yy6be-RZmfBj76iKtM';
 var playlistId = 'PL1D286CDC2E5AC306';
 var myUrl = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=20&playlistId=PL1D286CDC2E5AC306&key=AIzaSyDSstYU7cw_qfBJ9yy6be-RZmfBj76iKtM';
 //var URL = 'https://www.googleapis.com/youtube/v3/playlistItems'

 var options = {
     part: 'snippet',
     key: key,
     maxResults: 20,
     playlist:playlistId
 }

 loadVideos();


 function loadVideos() {
     $.getJSON(myUrl,  function(data){
        console.log(data);
        var id = data.items[0].snippet.resourceId.videoId;
        mainVid(id);
        resultsLoop(data);
     })
 }

 function mainVid(id){
     $('#video').html(`
     <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     `);
 }

 function resultsLoop(data) {

    var thumb = 

    $('main').html(`
    <article>
    <img src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg" alt="" class="thumb">
    <div class="details">
        <h4>Title</h4>
        <p>I am description</p>
    </div>
</article>
    `)

 }


});