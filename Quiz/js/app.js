let _questions = [
	{
		question: "What is the name of Capital of Pakistan??",
		answer: [
			{ a: "Islamabad" },
			{ b: "Lahore" },
			{ c: "Karachi" },
			{ d: "Bhakkar" },
		],
		CorrectAnswers: "a",
	},
	{
		question: "What is the name of Capital of USA??",
		answer: [
			{ a: "WDC" },
			{ b: "NewYork" },
			{ c: "Mississippi" },
			{ d: "Florida" },
		],
		CorrectAnswers: "a",
	},
	{
		question: "What is the name of National Poet of Pakistan?",
		answer: [
			{ a: "Allama Iqbal" },
			{ b: "Habib" },
			{ c: "Anwer" },
			{ d: "Faiz" },
		],
		CorrectAnswers: "a",
	},
	
];
let index = 0;

let options = document.querySelectorAll(".options");
let questionText = document.getElementById("question-text");
let nextBtn = document.getElementsByClassName("next-btn")[0];

function loadQuestions() {
    questionText.innerHTML = `${index + 1}) : ${_questions[index].question}`;
	options[0].nextElementSibling.innerText = `${_questions[index].answer[0].a}`;
	options[1].nextElementSibling.innerText = `${_questions[index].answer[1].b}`;
	options[2].nextElementSibling.innerText = `${_questions[index].answer[2].c}`;
	options[3].nextElementSibling.innerText = `${_questions[index].answer[3].d}`;
    console.log(index)
}

nextBtn.addEventListener("click", onPressNextBtn);

function onPressNextBtn(e) {
	e.preventDefault();
	index++;
	if (index < _questions.length) {
      	if (getAnswers() === _questions[index].CorrectAnswers) {
			console.log("true");
		} else {
			console.log("false");
		}
		unCheck();
		loadQuestions();
	} else {
		console.log("bs hun muck gaya a ");
        index=0;
	}
}

loadQuestions();
console.log(_questions.length)
function unCheck() {
	options.forEach((e) => {
		if (e.checked) e.checked = false;
		return;
	});
}
function getAnswers() {
	let ans = "";
	options.forEach((e) => {
		if (e.checked) {
			// console.log(e);
			// console.log(e.value);
			ans = e.value;
			return;
		}
	});
	return ans;
}
