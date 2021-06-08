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
  });

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


search.addEventListener('input', () => searchShows(search.value));