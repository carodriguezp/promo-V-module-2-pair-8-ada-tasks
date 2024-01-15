'use strict';

//crear constantes

const addForm = document.querySelector('.js-add-form');
const inputAdd = document.querySelector('.js-input-add');
const buttonAdd = document.querySelector('.js-button-add');
const searchForm = document.querySelector('.js-search-form');
const inputSearch = document.querySelector('.js-input-search');
const buttonSearch = document.querySelector('.js-button-search');
const taskList = document.querySelector('.js-list');
const checkbox = document.querySelectorAll('.js-checkbox');
const listInput = document.querySelector('.js-listInput');
///

const tasks = [
	{ name: 'Recoger setas en el campo', completed: true },
	{ name: 'Comprar pilas', completed: true },
	{ name: 'Poner una lavadora de blancos', completed: true },
	{
		name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
		completed: false,
	},
];
const listenCheck = () => {
	//hacer bucle para cada elemento del array de los checkbox.
	for (const box of checkbox) {
		box.addEventListener('change', handleCheck);
	}
};
function renderTask(tasks) {
	taskList.innerHTML = '';
	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i].completed) {
			taskList.innerHTML += `<li class="js-listInput completed"><input class="js-checkbox" type="checkbox" id="${[
				i,
			]}" checked >${tasks[i].name}</li>`;
		} else {
			taskList.innerHTML += `<li class="js-listInput"><input class="js-checkbox" type="checkbox" id="${[
				i,
			]}">${tasks[i].name}</li>`;
		}
	}
	listenCheck();
	//Se mete dentro del for para que se siga la secuencia: pintar, escuchar eventos, cambiar los datos basados en el evento, volver a pintar y volver a escuchar
}
//OTRA FORMA DE HACER EL FOR DE ARRIBA:
/*for (let index = 0; index < tasks.length; index++) {
    let classCss = tasks[index].completed ? "completed" : null;
    taskList.innerHTML += `<li class= "${classCss}"> ${tasks[index].name} </li>`;
    
}*/

function handleCheck(event) {
	//COGEMOS EL ID DEL ELEMENTO CLICADO PARA SABER LA TAREA QUE TENGO QUE MODIFICAR, LA QUE ESTÉ EN LA MISMA POSICIÓN QUE EL ID QUE TENGO.
	const id = event.target.id;
	console.log(id);
	//CON LA EXCLAMACIÓN LE INDICAMOS QUE PONGA EL VALOR CONTRARIO AL QUE TIENE
	tasks[id].completed = !tasks[id].completed;
	renderTask(tasks);
}
//LA LLAMO FUERA PARA QUE SE EJECUTE LA FUNCIÓN DE PINTAR TAREAS AL CARGAR LA PÁGINA Y
renderTask(tasks);

//no se puede hacer un listener sobre un array
//checkbox.addEventListener('change', handleCheck);

//BOTÓN DE BUSCAR
function handleSearch(event) {
	event.preventDefault();
	const valueInput = inputSearch.value;
	const arraySearch = tasks.filter((task) => task.name.includes(valueInput));
	renderTask(arraySearch);
}
buttonSearch.addEventListener('click', handleSearch);
