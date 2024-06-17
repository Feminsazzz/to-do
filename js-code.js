const todo=[];
function addFunc()
{
const inputElement = document.querySelector('.js-item');
const name = inputElement.value;
const dateInput=document.querySelector('.js-calender');
const date =dateInput.value;
todo.push({name: name,
  duedate :date});
console.log(todo);
inputElement.value='';
dateInput.value='';
printVal();
}
function printVal()
{
  let todohtml='';
  for(let i=0;i<todo.length;i++)
  {
    const todot=todo[i];
    const name=todot.name;
    const duedate=todot.duedate;
    const html =`<div>${name}</div> <div>${duedate}</div>
    <button 
      onclick="todo.splice(${i},1)
      printVal(); 
      "class="js-but">Delete</button> </p>`;
    todohtml +=html;
  }
  document.querySelector('.js-modi').innerHTML=todohtml;
}