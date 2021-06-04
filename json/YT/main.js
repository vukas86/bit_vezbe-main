var apiKey = "AIzaSyBexqdPSu9f9A_8kC3QKxKh7d4plxPLerU";

/* const input = document.querySelector('input');
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





btn.addEventListener('click', clickBtn); */

/* const apiKey = "AIzaSyBexqdPSu9f9A_8kC3QKxKh7d4plxPLerU";
var input =
 
function connection(event) {
   
    const newReq = new XMLHttpRequest();

    newReq.open('GET', `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input.value}&maxResults=15&key=${apiKey}`)
    https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=5rOiW_xY-kc&type=video&key=AIzaSyBexqdPSu9f9A_8kC3QKxKh7d4plxPLerU
}*/
const input = document.querySelector('input');
(function () {
    const input = document.querySelector('input');
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=15&q=${input.value}&key=AIzaSyBOprnmzncWDIEnVHVRDS0KM8TZyyhj0KI`
    function createVideoCard(name, desc, url) {
        const container = document.createElement('DIV');
        container.classList.add("video-card");
        const img = document.createElement('IMG');
        const title = document.createElement('H3');
        const description = document.createElement('P');

        img.src = url;
        title.innerHTML = name;
        description.innerHTML = desc;

        container.appendChild(img);
        container.appendChild(title);
        container.appendChild(description);

        return container;
    }

    function requestData(searchString) {
        const request = new XMLHttpRequest()
        request.open('GET', `${apiUrl}${searchString}`);
        request.send();
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                const data = JSON.parse(request.responseText);
                const preciscenaData = data.items.map((item) => {
                    const title = item.snippet.title;
                    const desc = item.snippet.description;
                    const url = item.snippet.thumbnails.default.url;
                    return {
                        title: title,
                        desc: desc,
                        url: url
                    }

                })
            }
            request(preciscenaData);

        }
    }



    function searchHandler(event) {
        if (event.keyCode === 13) {
            const searchString = event.target.value;
            requestData(searchString);

        }
    }

    function render(data) {
        const container = document.getElementById("results");
        container.innerHTML = "";
        data.forEach((e) => {
            const kartica = createVideoCard(e.title, e.desc, e.url);
            container.appendChild(kartica);
        })
    }



    document.getElementById("searchBar").addEventListener('keydown', searchHandler);
})();