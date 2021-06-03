

document.getElementById('btn1').addEventListener('keydown', clickBtn);

function clickBtn(e) {
    if (e.keyCode === 13) {
        e.preventDefault();

        const req = new XMLHttpRequest();

        req.open('GET', 'https://api.github.com/search/users?q=');

        req.onload = () => console.log(JSON.parse(req.responseText));

        req.send();
    }

    clickBtn();
}

document.getElementById('btn1').addEventListener('keydown', clickBtn);
