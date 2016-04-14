/*
	Below is a small script which generates random adventures. There are two
	problems which are marked below with "TODO". Your assignment is to solve
	those TODOs and get this script really up to snuff.
*/

var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid",
    "basilisk",
    "orc",
    "invader",
    "giant spider",
    "vampire",
    "flesh-eater",
    "child",
    "zombie"
];

var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace",
    "swift arrow",
    "heavy hammer",
    "shoe knife",
    "bloody spear",
    "wooden stake",
    "teeth"
];

var actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to",
    "engaged",
    "destroyed",
    "rampaged",
    "wiped the floor with",
    "befriended",
    "trusted",
    "relied on"
];

var heroGender;
    if (Math.random() < 0.5) {
        heroGender = "heroine";
    } else {
        heroGender = "hero";
    }

var button = document.getElementById("new_adventure");
//var adventure = document.getElementById("adventure");
//var new_adventure = document.getElementById("new_adventure");


/*
	TODO: The following three lines of code have a lot of repetition and are
	ripe for turning into a function! Create a function to handle choosing
	a random element from an array instead of doing the math each time.
*/

//var chosenMonster = monsters[Math.floor(Math.random() * monsters.length)];
//var chosenWeapon = weapons[Math.floor(Math.random() * weapons.length)];
//var chosenAction = actions[Math.floor(Math.random() * actions.length)];

function advRand(arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
};


var chosenMonster = advRand(monsters);
var chosenWeapon = advRand(weapons);
var chosenAction = advRand(actions);

var output = "Armed with only their " +
    chosenWeapon +
    " our " +
    heroGender +
    " " +
    chosenAction +
    " the evil " +
    chosenMonster +
    "!";
 
document.getElementById("adventure").innerText = output;


/*
	TODO: Right now the "new adventure!" button doesn't work. Create a function
	to bind to that button so that the user can create a new adventure without
	refreshing the page.
*/

function newOutput () {
    var cm = advRand(monsters);
    var cw = advRand(weapons);
    var ca = advRand(actions);
    var output2 = "Armed with only their " +
    cw +
    " our " +
    heroGender +
    " " +
    ca +
    " the evil " +
    cm +
    "!";
    console.log(output2);
    return document.getElementById("adventure").innerText = output2;
    
}

button.onclick = newOutput;

/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/