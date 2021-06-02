

document.getElementById('btn1').addEventListener('click', clickBtn);




function clickBtn() {
    const req = new XMLHttpRequest();

    req.open('GET', 'https://api.github.com/search/users?q={query}{&page,per_page,sort,order}');

    req.onload = () => console.log(JSON.parse(req.responseText));

    req.send();
}

clickBtn()












