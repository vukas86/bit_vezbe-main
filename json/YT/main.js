var apiKey = "AIzaSyBexqdPSu9f9A_8kC3QKxKh7d4plxPLerU";

const input = document.querySelector('input');
const btn = document.querySelector('button');
const main = document.querySelector('main');

function createVideo(video) {
    var vd = document.createElement('div');
    var img = document.createElement('img');
    var title = document.createElement('h3');

    img.setAttribute('src', video.snippet.thumbnails.default.url);
    title.textContent = video.snippet.title;

    vd.appendChild(img);
    vd.appendChild(title);

    main.appendChild(vd);
}

function createVideos(videos) {
    videos.forEach(video => {

    });
}


function clickBtn(e) {
    console.log("")
    const newReq = new XMLHttpRequest();

    newReq.open('GET', `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input.value}&maxResults=15&key=${apiKey}`)
    newReq.onload = function () {
        createVideos(JSON.parse(newReq.responseText).items);
    }
    newReq.send()
}





btn.addEventListener('click', clickBtn);





