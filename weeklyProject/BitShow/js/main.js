var shows = document.querySelector("main .wrapper")

function createShow(tvshow) {
    if (tvshow.image) {
        var tvshowContainer = document.createElement("a");
        var tvshowImage = document.createElement("img");
        var tvshowTitle = document.createElement("p");


        tvshowContainer.setAttribute("href", "http://127.0.0.1:5500/page2.html?id=" + tvshow.id);
        localStorage.setItem('id', `${tvshow.id}`);
        tvshowImage.setAttribute("src", tvshow.image.medium)
        tvshowTitle.textContent = tvshow.name

        tvshowContainer.appendChild(tvshowImage)
        tvshowContainer.appendChild(tvshowTitle)

        shows.appendChild(tvshowContainer)
    }
    /*  shows.addEventListener("click", (e) => {
         localStorage.setItem("id", `${tvshow.id}`);
         console.log(e.currentTarget);
         window.location.href = "http://127.0.0.1:5500/page2.html"; */

    /* }) */
}

function listShows(showsData) {
    var slice = showsData.slice(0, 50);
    for (var i = 0; i < slice.length; i++) {
        createShow(slice[i])
    }
}


function getShows() {
    var req = new XMLHttpRequest;

    req.open("GET", "http://api.tvmaze.com/shows");
    req.onload = function () {
        listShows(JSON.parse(req.responseText))
    };
    req.send();
}

getShows();


























