/* /* function changeBG() {
    var a = document.querySelector("body");
    a.classList.toggle('gray');
}

function removeButton() {

    var b = document.querySelector(".but");
    b.removeAttribute("onclick")


}



changeBg();

removeButton(); */

/* function writeMess() {
    var a = document.createElement("p");
    var b = document.createTextNode("")
    b.appendChild(a);
    document.getElementById("area").appendChild(a);
}

writeMess() */

/* var button = document.querySelector("button");
var division = document.querySelector("div");

var input = document.querySelector("input");

button.onclick = function () {
    var textInput = input.value;
    var b = document.createElement("p");
    b.textContent = textInput;
    division.appendChild(b);
    input.value = "";

} */

/* var player = document.querySelector("img");*/
/* function playerClick() {
    document.querySelector('body').addEventListener('click', divMove);
}
function divMove(e) {
    var div = document.getElementById('image');
    div.style.position = 'absolute';
    div.style.top = e.clientY + "px";
    div.style.left = e.clientX + "px";

}

playerClick();

 */



class Person {
    constructor(ime) {
        this.name = ime;
    }
    sayName() { console.log(this.name) }
}
