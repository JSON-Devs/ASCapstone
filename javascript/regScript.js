function inRegCheck(){
	var ls = localStorage.getItem("userReg");
	if(ls != '1'){
		window.location = 'index.html';
	}
}
$(document).ready(function(){
	inRegCheck();
});