function update(numero){
	for (var i = 0; i < 5; i++) {
		document.getElementsByClassName('state')[i].classList.remove("active");
	}

	document.getElementsByClassName('state')[numero].classList.add("active");
}
