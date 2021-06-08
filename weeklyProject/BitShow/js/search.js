const currentUrl = window.location.href;
const url = new URL(currentUrl);
const id = url.searchParams.get("id");



function getId() {
    const req = new XMLHttpRequest();
    req.open("GET", `http://api.tvmaze.com/shows/${id}`);
    req.onload = function () {
        const data = JSON.parse(req.responseText);
    }
    req.send();
}
getId();

function titleShow() {
    const req = new XMLHttpRequest();
    req.open("GET", `http://api.tvmaze.com/shows/${id}/seasons`);
    req.onload = function () {
        const data = JSON.parse(req.responseText);
    }
    req.send();
}

titleShow();

function castShow() {
    const req = new XMLHttpRequest();
    req.open("GET", `http://api.tvmaze.com/shows/${id}/cast`);
    req.onload = function () {
        renderData(JSON.parse(req.responseText));
    }
    req.send();
}
castShow();


function episodeShow() {
    const req = new XMLHttpRequest();
    req.open("GET", `http://api.tvmaze.com/shows/${id}/episodes`);
    req.onload = function () {
        const data = JSON.parse(req.responseText);

    }
    req.send();
}

episodeShow();

const wrapped = document.getElementById("main-wrap");
const showTitle = document.querySelector(".title");
const showImage = document.querySelector(".image");
const showCast = document.querySelector(".cast ul");
const showDetails = document.querySelector(".details");
const showHome = document.querySelector("button.homepage");

function renderData(data) {
    showTitle.textContent = data.name;
    showImage.setAttribute("src", data.image.original);

    var cast = data._embedded.cast;
    for (var i = 0; i < cast.length; i++) {
        const castName = document.createElement("li");
        castName.textContent = cast[i].person.name
    }
}