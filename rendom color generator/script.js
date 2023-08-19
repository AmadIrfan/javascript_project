function changeColor() {
	let ran = Math.random() * 16777215;
    let ranCode='#'+Math.floor(ran).toString(16)
    document.body.style.backgroundColor=ranCode;
	document.getElementById('btn-change').style.backgroundColor=ranCode;
	document.getElementById('btn-change').style.border=ranCode;
	document.getElementsByClassName('color-code')[0].innerHTML=ranCode;
	document.getElementsByClassName('color-code')[0].style.color=ranCode;
    // console.log(ran);
	// console.log(ranCode);
}
changeColor()
// RandomNum()

let btn=document.getElementById('btn-change')
btn.addEventListener('click',changeColor)