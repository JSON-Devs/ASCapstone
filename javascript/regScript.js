//Check to see if user is in registration process
function inRegCheck(){
	var ls = localStorage.getItem("userReg");
	if(ls != '1'){
		window.location = 'index.html';
	}
}

//Document Ready
$(document).ready(function(){
	inRegCheck();
});