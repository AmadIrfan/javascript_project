let main = document.getElementsByClassName("main")[0];
let ul = document.getElementsByClassName("main-ul")[0];
let btn = document.querySelector("#btn-press");

// icon.innerHTML = `<i class="fas fa-trash-alt"></i>`;

btn.addEventListener("click", (e) => {
	const text = document.querySelector("#txt-id");
	if (!text.value == "") {
		addWorks(text.value);
		addInLocStorage(text.value);
	} else {
		alert("please enter something");
	}

	// console.log("====================================");
	// console.log(e.target);
	// console.log(text.value);

	// console.log("====================================");
});

function addWorks(TodoText) {
	let icon = del_logic();
	let textDiv = textDivS(TodoText);
	addItem(textDiv, icon);
}
function addItem(textDiv, icon) {
	let li = document.createElement("li");
	li.classList = "main-li";
	li.appendChild(textDiv);
	li.appendChild(icon);
	ul.append(li);
}

function textDivS(val) {
	let textDiv = document.createElement("div");
	textDiv.classList = "text-div";

	textDiv.innerHTML = val;
	return textDiv;
}

function del_logic() {
	let row = document.createElement("div");
	row.classList = "btn-row";
	let del = document.createElement("div");
	let edit = document.createElement("div");
	del.classList = "del-icon icon";
	del.innerHTML = "delete";
	del.setAttribute("id", "del");
	edit.classList = "edit-icon icon	";
	edit.innerHTML = "edit";
	edit.addEventListener("click", editFunc);
	edit.setAttribute("id", "edit");
	del.addEventListener("click", (e) => {
		// console.log(e.target.parentElement);
		deleteFromLocStorage(e.target);
		e.target.parentElement.parentElement.remove();
	});
	row.style.display = "flex";
	row.style.justifyContent = "space-evenly";

	row.appendChild(del);
	row.appendChild(edit);
	return row;
}
function editFunc(e) {
	let item = e.target.parentElement.previousElementSibling;
	let oldVal = item.innerHTML;
	let newVal = "";
	if (e.target.innerHTML === "edit") {
		// console.log("====================================");
		e.target.innerContext = "Done";
		e.target.innerHTML = "Done";
		// console.log(e.target.innerContext);
		// console.log(e.target.innerHTML);
		const inputField = document.createElement("input");
		inputField.type = "text";
		inputField.classList = "txt-class";
		inputField.setAttribute("id", "txt-id");
		inputField.value = oldVal;
		inputField.placeholder = "Enter edited text";
		// console.log(inputField);
		// console.log(editableItem);
		item.parentElement.replaceChild(inputField, item);
		// console.log("====================================");
	} else {
		newVal = item.value;
		e.target.innerContext = "edit";
		e.target.innerHTML = "edit";
		let textDiv = textDivS(item.value);
		item.parentElement.replaceChild(textDiv, item);

		console.log(oldVal);
		console.log("====================================");
		console.log(newVal);
		console.log("====================================");
	}
}
// let row = document.createElement("div");
// let a = document.createElement("div");
// a.classList = "a b c";
// a.innerHTML = "this is me";
// a.attributes = "id=20";
// a.style.padding = "20px";
// a.style.fontSize = 24 + "px";
// a.style.background = "red";
// a.style.color = "white";
// row.style.display = "flex";
// main.style.display = "flex";
// main.style.flexDirection = "row";
// main.style.justifyContent = "space-evenly";

// let div = document.createElement("div");
// div.style.padding = "20px";
// div.style.background = "green";
// div.innerHTML = "delete";
// div.classList = "div btn";
// a.onclick = () => {
// 	console.log("a clicked");
// };

// div.onclick = (e) => {
// 	let doc = e.target;
// 	console.log(doc.parentElement);
// 	doc.parentElement.removeChild(a);
// 	doc.parentElement.removeChild(doc);

// 	console.log("delete");
// };
// add.onclick = () => {
// 	row.append(a);
// 	row.append(div);

// main.childNodes=row
// console.log(main.children.length)
// main.appendChild(a);
// main.appendChild(div);
// };
// console.log("====================================");
// console.log(a);
// console.log("====================================");

// console.log(main);
// console.log("====================================");
// console.log(a);
// main.appendChild(a);
// main.appendChild(div);
async function addInLocStorage(todoItem) {
	let Todo = [];
	let loc = localStorage;
	let item = await loc.getItem("Todo");
	console.log("====================================");
	if (item != null) {
		let a = JSON.parse(item);
		a.forEach((element) => {
			Todo.push(element);
		});
	}
	Todo.push(todoItem);
	await loc.setItem("Todo", JSON.stringify(Todo));
}

async function getFromLocStorage() {
	console.log("pressed");
	let loc = localStorage;

	let item = await loc.getItem("Todo");
	if (item != null) {
		let a = JSON.parse(item);
		a.forEach((element) => {
			addWorks(element);
		});
	}
}
async function deleteFromLocStorage(v) {
	let Todo = [];
	let loc = localStorage;
	console.log(v);
	let item = await loc.getItem("Todo");
	console.log("====================================");
	let a = JSON.parse(item);
	a.forEach((element) => {
		Todo.push(element);
	});
	let vr = Todo.pop(v.parentElement.parentElement.firstElementChild.innerHTML);
	console.log(vr);
	await loc.setItem("Todo", JSON.stringify(Todo));
}

async function editFromLocStorage(oldV, newV) {
	let Todo = [];
	let loc = localStorage;
	console.log(v);
	let item = await loc.getItem("Todo");
	console.log("====================================");
	let a = JSON.parse(item);
	a.forEach((element) => {
		Todo.push(element);
	});
	Todo.forEach((element) => {
		if (element == oldV) {
			element = newV;
		}
	});
	await loc.setItem("Todo", JSON.stringify(Todo));
}
getFromLocStorage();
