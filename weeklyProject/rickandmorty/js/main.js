fetch('https://rickandmortyapi.com/api/character/')
    .then(results => results.json())
    .then(data => {
        data.results.map(character => {
            const div = document.createElement('div');
            div.classList.add('single-character');
            div.innerHTML = `<img src=${character.image} alt=${character.name}/><h3>${character.name}</h3>`
            const btn = document.createElement('button');
            btn.textContent = "Like";
            div.appendChild(btn);
            btn.setAttribute("href", "http://127.0.0.1:5501/card.html")
            localStorage.setItem(`id`,)
            document.getElementById('characters').append(div);

        })
            .catch(error => console.log(error))
    })
/*
tvshowContainer.setAttribute("href", "http://127.0.0.1:5500/page2.html?id=" + tvshow.id);
localStorage.setItem('id', `${tvshow.id}`); */



