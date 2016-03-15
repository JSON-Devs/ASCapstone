/*resumeScript page is the static page that is viewable only. No editing can be done on this page*/

////Slice URL
function searchLink(){
	var linkID = window.location.search;
	if(linkID.charAt(0)=== '?'){
		linkID = linkID.slice(1);
	}	
	$.getJSON( "php/php_queries.php", { action:"searchLink", linkID: linkID})
	.done(function(json){
		direct(json);	
	});
}

//Direct profile based on permissions
function direct(json){
	if(json.Result == false){
		window.location = "index.html";
	}
	if(json.Result.active == false){
		window.location = "index.html";
	}
	else{
		localStorage.setItem("resumeID", json.Result.userID );
		var ls = localStorage.getItem("resumeID");
		var linkID = json.Result.linkID;
		var timesViewed = json.Result.timesViewed;
		$.getJSON( "php/php_queries.php", { action:"fillUser", userID: ls } )
		.done(function(json){		
			findActive(json, timesViewed, linkID);
		});	
	}
}

//Add to link count on myResume.html
function linkCount(timesViewed, linkID){
	timesViewed++;
	$.getJSON( "php/php_queries.php", { action:"linkViewCount", linkID: linkID, timesViewed: timesViewed } );
}

//Check to see if profile is active
function findActive(json, timesViewed, linkID){
	if(json.Result[0].isActive == false){
		window.location = "index.html";
	}
	else{
		loadCover();
		loadVideo();
		loadBasic();
		loadEmp();
		loadEdu();
		linkCount(timesViewed, linkID);
	}
}

//Style changer
function changeStyle(json){
	if (json.Result[0].styleType === '0') {
		document.getElementById('pageStyle').setAttribute('href', 'css/mainStyle.css');
		document.getElementById('proLogo').setAttribute('src', 'images/logo.png');
	}
	else if (json.Result[0].styleType === '1') {
		document.getElementById('pageStyle').setAttribute('href', 'css/binaryStyle.css');
		document.getElementById('proLogo').setAttribute('src', 'images/binaryLogo.png');
	
	}
	else if (json.Result[0].styleType === '2') {
		document.getElementById('pageStyle').setAttribute('href', 'css/profStyle.css');
		document.getElementById('proLogo').setAttribute('src', 'images/profLogo.png');
		$('#styleList').val('2');
	}
}

//Load Video
function loadVideo(){
	var ls = localStorage.getItem("resumeID");
	$.getJSON( "php/php_queries.php", { action:"fillUser", userID: ls } )
	.done(function(json){
		fillVideo(json);
	});
}

//Fill in video
function fillVideo(json){
	var videoLin = 'https://youtu.be/' + json.Result[0].videoLink;
	$("#txtLink").val(videoLin);
	var vidFrame = '<iframe width="450" height="253" src="https://www.youtube.com/embed/' + json.Result[0].videoLink + '?rel=0" frameborder="0" allowfullscreen></iframe>'
	$("#vidEmbed").append(vidFrame);
}

//Load Employer Info
function loadEmp(){
	var ls = localStorage.getItem("resumeID");
	$.getJSON( "php/php_queries.php", { action:"listEmployer", userID: ls } )
	.done(function(json){
		fillEmp(json);
	});
}

//Fill Employer Info
function fillEmp(json){
	var empInfo = '<h4>Work Experience</h4>';
	for(i=0; i<json.Result.length; i++){
		empInfo += '<a href="' + json.Result[i].empLink + '"><h5>' + json.Result[i].employerName + '</h5></a>' +
		'<p>' + json.Result[i].position + '</p>' +
		'<ul>' +
		'<li>' + json.Result[i].responsibilities + '</li>' +
		'</ul>' +
		'<p>Start date: ' + json.Result[i].startDateMonth + ', ' + json.Result[i].startDateYear + '</p>' +
		'<p>End date: ' + json.Result[i].endDateMonth + ', ' + json.Result[i].endDateYear + '</p>';
	}
	$("#meEmp").append(empInfo);
}

//Load Education Info
function loadEdu(){
	var ls = localStorage.getItem("resumeID");
	$.getJSON( "php/php_queries.php", { action:"listEducation", userID: ls } )
	.done(function(json){
		fillEdu(json);
	});
}

//Fill Education Info
function fillEdu(json){
	var eduInfo = '<h4>Education</h4>';
	for(i=0; i<json.Result.length; i++){
		eduInfo += '<h5>' + json.Result[i].school + '</h5>' +
		'<p>' + json.Result[i].degree + '</p>' +
		'<p>Start date: ' + json.Result[i].startDateMonth + ', ' + json.Result[i].startDateYear + '</p>' +
		'<p>End date: ' + json.Result[i].endDateMonth + ', ' + json.Result[i].endDateYear + '</p>' +
		'<p>GPA: ' + json.Result[i].GPA + '</p>';
	}
	$("#meEdu").append(eduInfo);
}

//Load Cover Letter
function loadCover(){
	var ls = localStorage.getItem("resumeID");
	$.getJSON( "php/php_queries.php", { action:"fillCover", userID: ls } )
	.done(function(json){
		fillCover(json);
	});
}

//Fill Cover Letter
function fillCover(json){
	var coverLett = json.Result[0].coverLetter;
	$("#coverLetterText").append(coverLett);
}

//Load Basic Info
function loadBasic(){
	var ls = localStorage.getItem("resumeID");
	$.getJSON( "php/php_queries.php", { action:"fillUser", userID: ls})
	.done(function(json){
		fillBasic2(json);
		changeStyle(json);
		loadProfilePicture(json);
	});	
}

//Load Profile Picture
function loadProfilePicture(json){
	var imageTag = json.Result[0].pictureLink;
	document.getElementById("mePicture").style.backgroundImage = "url("+imageTag+")";
}

//Fill Basic Info
function fillBasic2(json){
	var basicInfo = "<h3 id='meName'>" + json.Result[0].firstName + " " + json.Result[0].lastName + "</h3>" +
	"<p>" + json.Result[0].phoneNumber + "</p>" + 
	"<p>" + json.Result[0].email + "</p>" +
	"<p>" + json.Result[0].city + " " + json.Result[0].state +", " + json.Result[0].zip + "</p>";
	$("#meBasic").append(basicInfo);
}

//Report User Button
function reportUser(){
	var ls = localStorage.getItem("resumeID");
	$.getJSON( "php/php_queries.php", { action:"userReport", userID: ls})
	.done(function(json){});
	alert("User has been reported successfully");
}

//Window Load
$(window).load(function(){
	searchLink();
	$("#reportLink").click(function(){
		reportUser();
	});
	$("#rhomeLink").click(function(){
		localStorage.setItem("resumeID", "" );
	});
});