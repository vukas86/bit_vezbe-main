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


function removeClass() {
    var removeC = document.getElementById("hello").classList.remove('active');
    console.log(removeC.parentElement)
}


removeClass()

console.log(removeC.parenElement)