// selecting the container div
const container = document.querySelector("#container");

// Creating new elements
const para = document.createElement("p")
const heading = document.createElement("h3")
const content = document.createElement("div");
const head1 = document.createElement('h1');
const para1 = document.createElement('p');


// Set styles of div element
content.style.width = "50%";
content.style.border = "4px solid pink";
content.style.textAlign = "start";

// Set text content for tags inside the div
head1.textContent = "I'm in a div";
para1.textContent = "ME TOO!";

// Adding elements to the div
content.appendChild(head1);
content.appendChild(para1);

// Set text content for p and h3 in container
para.textContent = "Hey I’m red!";
heading.textContent = "I’m a blue h3!";

// Add elements to the main container
container.appendChild(para)
container.appendChild(heading)
container.appendChild(content);

// Select all buttons
const btn = document.querySelectorAll("button");

// iterate over each button 
btn.forEach((button) => {
    // Add event listener to each button
    button.addEventListener('click', () => {
        if(button.id % 2 === 0){
            alert('You clicked an even button!');
        }
        alert('You clicked an odd button');
    })
})
