function searchShow(query) {
  const url = `http://api.tvmaze.com/search/shows?q=${query}`;

  fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
      const results = jsonData.map(element => element.show.name)
      renderResults(results);
    })
    .catch((error) => {
      alert("There was a mistake!");
      renderResults([]);
    });

}


function createAllShows(tvshow) {
  var tvshowTitle = document.createElement("a")
  tvshowTitle.setAttribute("href", "http://127.0.0.1:5500/page2.html" + tvshow.show.id)
  tvshowTitle.textContent = tvshow.show.name

  dropdown.appendChild(tvshowTitle)
}


let searchTimeOutToken = 0;
window.onload = () => {
  const searchForShow = document.getElementById("search");
  searchForShow.onkeyup = (event) => {
    clearTimeout(searchTimeOutToken);

    if (searchForShow.value.trim().length === 0) {
      return;
    }


    searchTimeOutToken = setTimeout(() => {
      searchShow(searchForShow.value);
    }, 250)

  };
}

function renderResults(results) {
  const list = document.getElementById("resultsList");
  if (renderResults.length === 0) {
    matches = [];
    matchList.innerHTML = '';
  }
  list.innerHTML = "";
  results.forEach(result => {
    const element = document.createElement("li");
    const link = document.createElement("a");

    link.setAttribute("href", "http://127.0.0.1:5500/page2.html");


    element.innerText = result;
    list.appendChild(element);
    list.appendChild(link);
  });

}




/*

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//seach shows.json and filter it

function getAllShows() {
  var req = new XMLHttpRequest;
  var baseUrl = " http://api.tvmaze.com/search/shows?q=";

  req.open("GET", baseUrl + search.value);
  req.onload = function () {
    listAllShows(JSON.parse(req.responseText))
  };
  req.send();
}




const searchShows = async searchText => {
  const res = await fetch(`http://api.tvmaze.com/search/shows?q=:query`)
  const shows = await res.json();
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  // Get matches to query
  let matches = shows.filter(show => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return show/* .name.match(regex); */
/*   });

if (searchText.length === 0) {
  matches = [];
  matchList.innerHTML = '';
}

outputHtml(matches)

};

const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches.map(match => `<div class="card card-body mb-1">
        <h4>${match.name}
        <span class="text-primary">${match.capital}</span></h4>
        <small></small>

        </div>`)
      .join('');
    matchList.innerHTML = html;
  }
}


search.addEventListener('input', () => searchShows(search.value)); * / */