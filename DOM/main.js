/* function selectClass() {
    document.getElementById('lists').className = "list";
    return selectClass;
}

selectClass();
var liItem = document.getElementsByTagName('li');
function findLi() {

    for (var i = 0; i < liItem.length; i++) {
        liItem[i].className = 'newClass';
    }

}
var colorMe = document.querySelectorAll('ul')[2].getElementsByTagName('li');
function colorLi() {
    for (var i = 0; i < colorMe.length; i++) {
        colorMe[i].className = "hello";
    }
}

findLi()
colorLi() */


/* function removeClass() {
    var removeC = document.getElementById("hello").classList.remove('active');
    console.log(removeC.parentElement)
}


removeClass()

console.log(removeC.parenElement) */

/* var m = document.querySelector("ul li a").textContent;


alert(m); */

/* function changeText(text) {
    var b = document.getElementsByClassName('lists')[0].lastElementChild.textContent = text;
}

changeText("hello world"); */
var beer = ["dark", "pills", "german", "local"];
var data = document.querySelector(".abou");

function buildList(arr, node) {
    var select = document.createElement('select');

    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement('option');
        option.textContent = arr[i];
        select.appendChild(option);
    }
    node.appendChild(select);

}
buildList(beer, data);



function hasAttr() {
    var attr = document.getElementsByTagName('input');
    for (var i = 0; i < attr.length; i++) {
        if (attr[i].hasAttribute('required') && !attr[i].value) {
            attr[i].style.borderColor = "yellow";
        }

    }

}

hasAttr();