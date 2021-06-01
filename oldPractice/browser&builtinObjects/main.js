

/* function locateMe() {
    alert("full Url address is " + window.location.href + "\n domain name is " + window.location.host + "\n used protocol is " + window.location.protocol + "\n Parameters are " + window.location.origin);
}

function reloadAPage() {
    console.log(window.location.reload());
}

function newWeb() {
    console.log(window.location.href = "https://www.b92.net/")
}

console.log(locateMe()); */


/* window.localStorage
Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print "There is no data" in the console.
Create a function that removes data from the local storage.
    
Use the previously created functions to store/read/remove some data.
Then add some data in storage and close the browser.
Open the browser again on the same page and use the function to read the stored value.

Modify functions to work with sessionStorage instead of localStorage.
Try same scenario as with localStorage to examine data livecycle.
 */

/* function storeData() {
    localStorage.setItem("name", "data");
}

function checkData() {
    var name = localStorage.getItem('name');
    console.log(name)
}

function readData() {
    var name = localStorage.getItem("name");
    var text = name ? "there is it " + name : "there is no data!";
}

function removeData() {
    storeData.removeItem("name");
}

console.log(storeData("mika", "leka")); */

/* function goBack() {
    history.back(2)

}
console.log(goBack()) */

(function () {
    alert("WELCOME TO THE HOUSE OF BEER");
})()

var userInput = confirm('Are you over 18?');
var userChoice = prompt('Are you sure?');

if (userChoice !== null) {
    alert(userChoice);
} else {
    alert("ANSWER THE QUESTION!");
}


/* (function () {
    alert("Heyyy You, welcome!");
})() */