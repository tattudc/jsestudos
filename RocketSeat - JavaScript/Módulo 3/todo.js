var listElement = document.querySelector('#App ul');
var inputElement = document.querySelector('#App input');
var buttonElement = document.querySelector('#App button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
	listElement.innerHTML = "";
	
	for (todo of todos){
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);
		
		var linkElement = document.createElement('a');
		
		linkElement.setAttribute('href', '#');
		
		var pos = todos.indexOf(todo);
		linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
		
		var linkText = document.createTextNode('Excluir');
		
		linkElement.appendChild(linkText);
		
		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		
		listElement.appendChild(todoElement);
		}
	}
renderTodos();

function addTodo(){
	var todoText = inputElement.value;
	
	todos.push(todoText);
	inputElement.value = "";
	renderTodos();
	saveToStore();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
	todos.splice(pos, 1);
	renderTodos();
	saveToStore();
}

function saveToStore(){	
	localStorage.setItem('list_todos', JSON.stringify(todos));
}