const profilePage = document.querySelector(".profile-page")

const state = {
  name: "John Doe",
  bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores molestias labore rerum accusamus! Temporibus optio molestiae perspiciatis veniam ullam est debitis nisi delectus consequatur expedita sapiente quod, esse nemo repellat a! Fugit eveniet esse eos officiis est voluptatibus maxime, eaque ipsam quod, sit excepturi. Molestiae sit soluta commodi in.",
  links: ["https://github.com/johndoe", "https://twitter.com/johndoe", "https://linkedin"]
}


function renderProfile () {
  profilePage.innerHTML = `
    <h1 class="name">${state.name + "is cool"}</h1>
    <p class="bio">${state.bio}</p>
    <div class="social-links">
      <ul>
       ${
         state.links.map((link) => {
           const newElement = `<li><a href="${link}">${link}</a></li>`
           return newElement
         }).join(" ")
       }
      </ul>
    </div>  
  `
}
renderProfile()


// Add event listener
const linkToBeAdded = "https://monster.com"
const addButton=document.getElementById("buttonid");

function handleAddLink () {
  state.links.push(linkToBeAdded)
  renderProfile()
}
addButton.addEventListener("click", handleAddLink);


//Remove Event Listener
const Remove_Button=document.getElementById("removebutton");

function handleRemoveLink () {
 state.links.pop();
  renderProfile();
}
Remove_Button.removeEventListener("click", handleRemoveLink);

//changing the background color of the button using styles
Remove_Button.style.backgroundColor= "Red";


//firstchild

let textElement = document.getElementById("social");

// Check if the element with ID "soc" exists
if (textElement) {
  let firstChild = textElement.firstElementChild;

  let textContent = firstChild.textContent;
  console.log("Hello", textContent);
} else {
  console.log("element not found");
}


//creating element and appending element 
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

const userprofile = document.querySelector('#userprofile');
// appending  user profile items
userprofile.appendChild(createMenuItem('Profile'));
userprofile.appendChild(createMenuItem('Settings'));
userprofile.appendChild(createMenuItem('Log out'));


//changing the background color of the button using styles

const button = document.querySelector("#color");
button.style.backgroundColor= "red";


//set attribute

const button1 = document.getElementById("set");
const getattr = button1.getAttribute("class");
console.log(getattr);

//HTML template with clone
const container = document.getElementById("container");
const template = document.getElementById("template");

function clickHandler(event) {
  event.target.append(" — Clicked this div");
}

const firstClone = template.content.cloneNode(true);
firstClone.addEventListener("click", clickHandler);
console.log(container.appendChild(firstClone));

const secondClone = template.content.cloneNode(true);
secondClone.children[0].addEventListener("click", clickHandler);
console.log(container.appendChild(secondClone));


//Iterate over a collection of elements to accomplish some task.
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3,4);