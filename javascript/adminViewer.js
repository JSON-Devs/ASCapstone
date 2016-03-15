//Load User Info
function loadUser(){
	var ls = localStorage.getItem("NewUserID");
	$.getJSON( "php/php_queries.php", { action:"fillUser", userID: ls})
	.done(function(json){
		fillUser(json);
	});
}

//Fill User Info
function fillUser(json){
	var str = "";
	str += "<table><tr><td>"+json.Result[0].firstName + "</td><td> " + json.Result[0].userID + "</td><td> " + json.Result[0].lastName +"</td></tr>";
	str += "<tr><td>"+json.Result[0].city + "</td><td> " + json.Result[0].state + "</td><td> " + json.Result[0].zip + "</td><td> " + json.Result[0].phoneNumber + "</td></tr>";
	str += "<tr><td> Admin:" + json.Result[0].isAdmin + "</td><td> Active: " + json.Result[0].isActive + "</td><td> Reported:" + json.Result[0].isReported + "</td><td> New: " + json.Result[0].isNew +"</td></tr>";
	str += "</table>";
	$('#User').html(str);
	var reported = json.Result[0].isReported;
	if(reported == true)
	{
		console.log("hi");
		var strr = '<input type="button" class="buttonTest" id="btnAccept" onclick ="btnSuspend()" value="Suspend" action="#"><input class="buttonTest" type="button" id="btnDecline" onclick ="btndeclineReport()"value="Decline" action="#">';
	}
	else
	{
		console.log("bye");
		var strr = '<input type="button" class="buttonTest" id="btnAccept" onclick ="btnAccept()" value="Accept" action="#"><input class="buttonTest" type="button" id="btnDecline" onclick ="btnDecline()" value="Decline" action="#">';
	}
	$('#buttons').html(strr);
}

//Load Cover Letter
function loadCover(){
	var ls = localStorage.getItem("NewUserID");
	$.getJSON( "php/php_queries.php", { action:"fillCover", userID: ls } )
	.done(function(json){
		fillCover(json);
	});
}

//Fill Cover Letter
function fillCover(json){
	var coverLett = "<h4> Cover Letter </h4>";
	coverLett += json.Result[0].coverLetter;
	if(coverLett.length !=0 || coverLett.length != null )
	{
		$('#Cover').html(coverLett);
	}
}
	
//Load Video
function loadVideo(){
	var ls = localStorage.getItem("NewUserID");
	$.getJSON( "php/php_queries.php", { action:"fillVideo", userID: ls } )
	.done(function(json){
		fillVideo(json);
	});
}

//Fill Video
function fillVideo(json){
	if(json.Result == false)
	{
		console.log(json.Result);
	}
	else
	{
		var videoLin = 'https://youtu.be/' + json.Result.videoLink;
		$("#txtLink").val(videoLin);
		var vidFrame = '<iframe width="450" height="253" src="https://www.youtube.com/embed/' + json.Result.videoLink + '?rel=0" frameborder="0" allowfullscreen></iframe>'
		$("#Video").html(vidFrame);
	}
}

//PHP Action Buttons

//Accept New Profile
function accept(){
	var ls = localStorage.getItem("NewUserID");
	$.getJSON( "php/php_queries.php", { action:"acceptUser", userID: ls})
}

//Decline New Profile
function decline(){
	var ls = localStorage.getItem("NewUserID");
	$.getJSON( "php/php_queries.php", { action:"declineUser", userID: ls})
}

//Suspend Reported Profile
function suspend(){
	var ls = localStorage.getItem("NewUserID");
	$.getJSON( "php/php_queries.php", { action:"suspendUser", userID: ls})
}

//Decline Report
function declineReport(){
	var ls = localStorage.getItem("NewUserID");
	$.getJSON( "php/php_queries.php", { action:"declineReport", userID: ls})
}

//Location Action Buttons

//Accept New Profile
function btnAccept(){
	accept();
	setTimeout(function () {
		window.location = "adminPage.html";
	}, 100)			
}

//Decline New Profile
function btnDecline(){
	decline();
	setTimeout(function () {
		window.location = "adminPage.html";
	}, 100)	
}

//Suspend Reported Profile
function btnSuspend(){
	suspend();
	setTimeout(function () {
		window.location = "adminPage.html";
	}, 100)	
}

//Decline Report
function btndeclineReport(){
	declineReport();
	setTimeout(function () {
		window.location = "adminPage.html";
	}, 100)	
}

//Load Education
function loadEducation(){
	var ls = localStorage.getItem("NewUserID");
	$.getJSON( "php/php_queries.php", { action:"listEducation", userID: ls})
	.done(function(json){
		listSchoolsSecondStage(json);
	});
}

//Fill Education Info
function listSchoolsSecondStage(json){
	var str = "<tr><th>Education History</th></tr>";
	for (i=0; i<json.Result.length; i++) {
		str += "<tr>";
		str += "<td>" + json.Result[i].school + "</td>";
		str += "<td>" + json.Result[i].degree + "</td>";	
		str += "</tr>";
	}
	$('#Education').html(str);
}

//Load Employer
function loadEmployer(){
	var ls = localStorage.getItem("NewUserID");
	
	$.getJSON( "php/php_queries.php", { action:"listEmployer", userID: ls})
	.done(function(json){
		listEmployersSecondStage(json);
	});
}

//Fill Employer Info
function listEmployersSecondStage(json){
	var str = "<tr><th>Employment History</th></tr>";
	for (i=0; i<json.Result.length; i++) {
		str += "<tr>";
		str += "<td>" + json.Result[i].employerName + "</td>";
		str += "<td>" + json.Result[i].position + "</td>";
		str += "</tr>";
	}
	$('#Employer').html(str);
}

//Page Security
function pageSecurity(json){
	var ls = localStorage.getItem("userID");
	if(ls != ""){
		if(json.Result[0].isAdmin == true){
			loadUser();
			loadCover();
			loadVideo();
			loadEducation();
			loadEmployer();
		}
		else{
			window.location = "index.html";
		}
	}
	else{
		window.location = "index.html";
	}
}

//Document Load
$(window).load(function(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/adminPhp.php", { action:"checkAdmin", userID: ls})
	.done(function(json){
		pageSecurity(json);
	});
});