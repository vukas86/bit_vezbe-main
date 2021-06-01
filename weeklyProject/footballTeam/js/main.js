var sartid = {
    players: [
        {
            img: "../assets/images/players/player1.png",
            name: "S. Gentiletti",
            age: 30,
            position: "GK",
            number: 1
        },
        {
            img: "../assets/images/players/player2.png",
            name: "A. Mowatt",
            age: 26,
            position: "CB",
            number: 2
        },
        {
            img: "../assets/images/players/player3.png",
            name: "R. Corlu",
            age: 27,
            position: "CB",
            number: 3
        },
        {
            img: "../assets/images/players/player4.png",
            name: "S. Farelli",
            age: 19,
            position: "LB",
            number: 16
        },
        {
            img: "../assets/images/players/player5.png",
            name: "S. Iacoponi",
            age: 22,
            position: "RB",
            number: 4
        },
        {
            img: "../assets/images/players/player6.png",
            name: "B. Maubleu",
            age: 31,
            position: "DM",
            number: 5
        },
        {
            img: "../assets/images/players/player7.png",
            name: "F. Mrzljak",
            age: 28,
            position: "CM",
            number: 6
        },
        {
            img: "../assets/images/players/player8.png",
            name: "G. Hubert",
            age: 27,
            position: "RM",
            number: 7
        },
        {
            img: "../assets/images/players/player9.png",
            name: "M. Amini",
            age: 28,
            position: "LM",
            number: 8
        },
        {
            img: "../assets/images/players/player10.png",
            name: "O. Gnjatic",
            age: 30,
            position: "AM",
            number: 9
        },
        {
            img: "../assets/images/players/player11.png",
            name: "A. Corryn",
            age: 22,
            position: "ST",
            number: 10
        },
        {
            img: "../assets/images/players/player12.png",
            name: "J. Sancho",
            age: 33,
            position: "GK",
            number: 12
        },
        {
            img: "../assets/images/players/player13.png",
            name: "J. Obi",
            age: 30,
            position: "CB",
            number: 13
        },
        {
            img: "../assets/images/players/player14.png",
            name: "D. Frieseri",
            age: 24,
            position: "CM",
            number: 14
        },
        {
            img: "../assets/images/players/player16.png",
            name: "M. Brink",
            age: 23,
            position: "ST",
            number: 15
        }
    ]
};


var firstTeamHead = document.createElement("h3");
var teamText = document.createTextNode("First Team");
firstTeamHead.appendChild(teamText);
document.getElementById("team").appendChild(firstTeamHead);

var players = document.createElement("div");
players.setAttribute("id", "players");
document.getElementById("team").appendChild(players);

var reserveTeamHead = document.createElement("h3");
var reserveText = document.createTextNode("Reserve Squad");
reserveTeamHead.appendChild(reserveText);
document.getElementById("team").appendChild(reserveTeamHead);

var subs = document.createElement("div");
subs.setAttribute("id", "subs");
document.getElementById("team").appendChild(subs);

var firstTeam = 11;
var substitutions = 4;

function addPlayers() {
    for (var i = 0; i < firstTeam + substitutions; i++) {
        if (i < firstTeam) {
            parentDiv = players;
        } else {
            parentDiv = subs;
        }

        var player = document.createElement("div");
        player.classList.add("player");
        parentDiv.appendChild(player);

        var playerImage = document.createElement("img");
        playerImage.setAttribute("src", sartid.players[i].img);
        player.appendChild(playerImage);

        var playerName = document.createElement("h4");
        playerName.innerHTML = "Name: " + sartid.players[i].name;
        player.appendChild(playerName);

        var playerAge = document.createElement("h4");
        playerAge.innerHTML = "Age: " + sartid.players[i].age;
        player.appendChild(playerAge);

        var playerPos = document.createElement("h4");
        playerPos.innerHTML = "Position: " + sartid.players[i].position;
        player.appendChild(playerPos);

        var playerNum = document.createElement("h4");
        playerNum.innerHTML = "Number: " + sartid.players[i].number;
        player.appendChild(playerNum);

    }
}



/* function getRandNum(arr) {
    return Math.floor(Math.random() * arr.length);
}

function zamena() {
    var firstSquad = document.querySelectorAll("#players .player");
    var firstTeamNumber = getRandNum(firstSquad);
    var sub1 = firstSquad[firstTeamNumber];

    var reserveSquad = document.querySelectorAll("#subs .player");
    var reserveSquadNumber = getRandNum(reserveSquad);
    var sub2 = reserveSquad[reserveSquadNumber];

    players.appendChild(sub1);
    subs.appendChild(sub2);

    firstSquadPlayer.after(reserveSquadPlayer);

} */
function getRandNum(arr) {
    return Math.floor(Math.random() * arr.length);
}

function playerSubstitution() {
    var firstSquad = document.querySelectorAll("#players .player");
    var reserveSquad = document.querySelectorAll("#subs .player");

    var firstTeamNumber = getRandNum(firstSquad);
    var reserveSquadNumber = getRandNum(reserveSquad);

    var firstSquadPlayer = firstSquad[firstTeamNumber];
    var reserveSquadPlayer = reserveSquad[reserveSquadNumber];

    var subPrevious = reserveSquadPlayer.previousSibling;
    var subNext = reserveSquadPlayer.nextSibling;

    firstSquadPlayer.after(reserveSquadPlayer);

    subPrevious ? subPrevious.after(firstSquadPlayer) : subNext.before(firstSquadPlayer);
}



addPlayers();
playerSubstitution()

setInterval(playerSubstitution, 1000);


