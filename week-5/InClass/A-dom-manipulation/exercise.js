/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let nodes = Array.from(document.querySelectorAll("p"));
function logNode (node){
    console.log(node);
}
nodes.forEach(logNode);

logNode(document.querySelector(".site-header"));

logNode(document.querySelector("#jumbotron-text"));

nodes = Array.from(document.querySelectorAll(".primary-content p"));

nodes.forEach(logNode);



/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", alertSomething);
function alertSomething (button){
    alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeColor = document.querySelector("#bgrChangeBtn");
changeColor.addEventListener("click", redColor);
let bodyChange = document.querySelector("#content");
function redColor (color){
    bodyChange.style.backgroundColor = "red";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

let addSomeTextBtn = document.querySelector("#addTextBtn");
addSomeTextBtn.addEventListener("click", addText);

function addText (){
    let app = document.querySelector(".jumbotron");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "Read more below";
    paragraph.style.color = "black";
    app.appendChild(paragraph);
};

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largerLinks = document.querySelector("#largerLinksBtn");
largerLinks.addEventListener("click", linksIncrease);
function linksIncrease(){
    var links = document.querySelectorAll("a");
    links.forEach((link) => link.style.fontSize = "2rem");
}