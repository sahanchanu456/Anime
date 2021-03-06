function startAnimation(){
	let appDiv = document.getElementById('app').classList;
	appDiv.add('active');

	setTimeout(function() {
		appDiv.remove('active');
	}, 1700);

}