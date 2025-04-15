// inc and dec apps

let counter = 0;
// let inc = [project, project]
let inc = document.getElementsByClassName("project", [0])
let dec = document.getElementsByClassName("project", [1])
let value = document.getElementById("project")
let reset = document.getElementsByTagName("button", [2])
let quers = document.querySelector(".one")

const increment = () =>{
    counter ++;
    value.textContent = counter
}

const decrement = () =>{
    counter --;
    value.textContent = counter
}

const resets = () =>{
    counter = 0;
    value.textContent = counter
}

const increaseby = () =>{
    if (counter ==0){
        counter = 10;
    }else{
        counter +=10
    }
    value.textContent = counter
}

let an = document.getElementById("two")
an.setAttribute("href", "https://www.google.com")
const id = an.getAttribute("id")
// alert(id)

// BOM -> Browser object models
// alert()

an.removeAttribute("id")

// how to use css or modifying the css using js
value.style.fontSize = "40px";
value.style.backgroundColor = "red";



let newSection = document.createElement("section");
newSection.textContent = "Section start here";
document.body.appendChild(newSection)

const removes = document.getElementById("two")
removes.remove();
document.body.appendChild(removes)

// EventHandler
// addEventListener("click", ()=>{})
const title = document.getElementById("three")
title.addEventListener('click', () => {
    alert("Hello my name is shishir bhandari");
} )

