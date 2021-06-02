
document.getElementById('btn').addEventListener('click', clickBtn);

const reqImg = (data) => {
    const dzukac = document.createElement('img');
    const bodyDog = document.querySelector('body');

    dzukac.setAttribute('src', data.message);
    bodyDog.appendChild(dzukac);


}


function clickBtn() {
    var reqImage = new XMLHttpRequest();

    reqImage.open('GET', 'https://dog.ceo/api/breeds/image/random');

    reqImage.onload = () => reqImg(JSON.parse(reqImage.responseText));

    reqImage.send();

}

clickBtn()















