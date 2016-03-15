//Load New and Reported
function loadReports(){
	loadNew();
	loadReported();
}

//Load New Profiles
function loadNew(){
	$.getJSON( "php/adminPhp.php", { action:"listNew"})
	.done(function(json){
		fillNew(json);
	});
}

//Fill New Profiles
function fillNew(json){
	var count = 0;
	var str = "<table class = 'adminTable'><tr><th>First Name</th><th>User ID</th><th> Last Name</th><th>Action</th></tr>";
	for(i=0; i<json.Result.length; i++){
		str += "<tr><td>"+json.Result[i].firstName + "</td><td> " + json.Result[i].userID + "</td><td> " + json.Result[i].lastName +"</td><td><input type='button' class='buttonTest' id='suspendBtn_"+ i +"'onclick ='singleRecord("+json.Result[i].userID+")' value='View' action='#'></td></tr>";
		count = i + 1;
	}
	str += "</table>";
	$('#reviewDiv').html(str);
	var strrr = "# Of New Profiles To Be Checked: " + count;
	$('#newUserHeader').html(strrr);
}

//Load Correct Profile To Review
function singleRecord(ids){
	localStorage.setItem("NewUserID", ids );
	setTimeout(function () {
		window.location = "adminViewer.html";
	}, 100);
}

//Load Reported Profiles
function loadReported(){
	$.getJSON( "php/adminPhp.php", { action:"listReported"})
	.done(function(json){
		fillReported(json);
	});
}

//Fill Reported Profiles
function fillReported(json){
	var count = 0;
	var str = "<table class = 'adminTable'><tr><th>First Name</th><th>User ID</th><th> Last Name</th><th>Action</th></tr>";
	for(i=0; i<json.Result.length; i++){
		str += "<tr><td>"+json.Result[i].firstName + "</td><td> " + json.Result[i].userID + "</td><td> " + json.Result[i].lastName +"</td><td><input type='button' class='buttonTest' id='suspendBtn_"+ i +"'onclick ='singleRecord("+json.Result[i].userID+")' value='View' action='#'></td></tr>";
		count = i + 1;
	}
	str += "</table>";
	$('#reportedDiv').html(str);
	var strrr = "# Of Reported Profiles: " + count;
	$('#reportedUserHeader').html(strrr);
}

//Reset Local Storage UserID
function resetLocalStorage(){
	 localStorage.setItem("userID", "" );
}

//Page Security
function pageSecurity(json){
	var ls = localStorage.getItem("userID");
	if(ls != ""){
		if(json.Result[0].isAdmin == true){
			loadReports();
		}
		else{
			window.location = "index.html";
		}
	}
	else{
		window.location = "index.html";
	}
}

//Document Ready
$(document).ready(function(){
	$("#logout").click(function(){
		resetLocalStorage();
		setTimeout(function () {
			window.location = "index.html";
		}, 100);
	});		
}); 

//Document Load
$(window).load(function(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/adminPhp.php", { action:"checkAdmin", userID: ls})
	.done(function(json){
		pageSecurity(json);
	});
});

