const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//Section 1
const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!"
paragraph.style.color = "red";

container.appendChild(paragraph);

const header = document.createElement ("h3");
header.textContent = "I'm a blue h3!";
header.style.color = "blue";
container.appendChild(header);

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "border-style: solid; border-color: black; background: pink;")

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";

newDiv.appendChild(header1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

newDiv.appendChild(p2);

container.appendChild(newDiv);

//Section 2

/*Option 2 
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
*/

/*Option 3
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World");
});
*/

/* METHOD 1
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
*/

// METHODS 2 & 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  const btn = document.querySelector("#btn");

/* Method 2
btn.onclick = alertFunction;
*/

// Method 3
btn.addEventListener("click", alertFunction);

/* 
btn.addEventListener("click", function (e) {
  console.log(e.target);
});
*/
  
  