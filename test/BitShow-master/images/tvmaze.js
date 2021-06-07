var shows = document.querySelector("main .wrapper")

function createShow(tvshow) {
	if (tvshow.image) {
		var tvshowContainer = document.createElement("a")
		var tvshowImage = document.createElement("img")
		var tvshowTitle = document.createElement("p")

		tvshowContainer.setAttribute("href", "/info-page.html?id=" + tvshow.id)
		tvshowImage.setAttribute("src", tvshow.image.medium)
		tvshowTitle.textContent = tvshow.name

		tvshowContainer.appendChild(tvshowImage)
		tvshowContainer.appendChild(tvshowTitle)

		shows.appendChild(tvshowContainer)
	}
}

function listShows(showsData) {
	var slice = showsData.slice(0, 50);
	for (var i = 0; i < slice.length; i++) {
		createShow(slice[i])
	}
}


function getShows() {
	var req = new XMLHttpRequest;
	var baseUrl = "http://api.tvmaze.com/shows";

	req.open("GET", baseUrl);
	req.onload = function () {
		listShows(JSON.parse(req.responseText))
	};
	req.send();
}

getShows();