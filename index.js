/*//this is my first js code!!
console .log('hello world!!');



let person = {
    name : 'nihal',
    age : 22
};
//dotr notation
person.name='bilal';

//braket notation
person['name']='nihaaaal';

console.log(person.name);


let selectedColors = ['red','blue'];
console.log(selectedColors[0]);

function greet(name,lastName){
    console.log('hello '+ name + ' '+ lastName);
}
greet('nihal','bilal');



function square(number){
   return number*number;
}
console.log(square(20));
*/


 let addToDoButton = document.getElementById('addToDo');
 let toDoContainer = document.getElementById('toDoContainer');
 let inputField = document.getElementById('inputField');


 addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling'); 
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value='';
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
    
 })