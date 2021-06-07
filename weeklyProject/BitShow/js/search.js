const currentUrl = window.location.href;
const url = new URL(currentUrl);
const id = url.searchParams.get("id");

function titleShow() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://api.tvmaze.com/shows/" + id + "/seasons");
    req.onload = function () {
        renderSeasons(JSON.parse(req.responseText))
    }
    req.send();
}

titleShow();

function castShow() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://api.tvmaze.com/shows/" + id + "/cast");
    req.onload = function () {
        renderSeasons(JSON.parse(req.responseText))
    }
    req.send();
}

castShow();


function episodeShow() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://api.tvmaze.com/shows/" + id + "/episodes");
    req.onload = function () {
        renderSeasons(JSON.parse(req.responseText))
    }
    req.send();
}

episodeShow();