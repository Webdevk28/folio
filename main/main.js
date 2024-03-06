

// =======================================================
// document => element => attribut, text
// var heading = document.getElementById ('')
/*
- getElementByID('')
- getElementClassName('')
- getElementTagName('')
- qurySelector('')
- qurySelectorAll('')

============================
- Element
- Attribute
- Text
============================
# Element 
- getElementByID('')
- getElementClassName('')
- getElementTagName('')
- qurySelector('')
- qurySelectorAll('')

#Attribute

*/

// =============== text
var headingElement = document.querySelector("h1");

headingElement.innerText = "Welcome new heading";
console.log(headingElement.innerText);
/*
# Text
- innerText
- textContent
*/



// ====== seter and getter text to element
var box1Element = 
    document.querySelector('.box1');

    box1Element.innerHTML ='<h1>New heading</h1>'

console.log([box1Element]);

/*
- Element
- Attribute
- Text

-- innerHTML, outerHTML

-innerHTML: can add Element node, Attribute node,Text node
*/


// ========css style
var box2Element = 
    document.querySelector ('.box2')

Object.assign(box2Element.style, {
    width: '200px',
    height: '200px',
    backgroundColor: 'orange',
    fontSize: '30px',
});

console.log (box2Element.style.width)



// ======== class list property
// add
// contains
// remove
// toggle

var box3Element = 
    document.querySelector('.box3')

    box3Element.classList.add ('red')
console.log(box3Element.classList)

setInterval(() =>{
    box3Element.classList.toggle('red')
} , 1000)
