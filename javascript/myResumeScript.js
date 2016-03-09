/*MyResumeScript page is the editable page where the account holder can make changes to the page*/

function pullStatesAndDates(){
	pullStates();
	pullMonths();
	pullYears();
}

function pullStates(){
	
	$.getJSON( "php/php_queries.php", { action:"getStates" } )
		.done(function( json ) {
			fillInStates(json);
		});
}

function fillInStates(json){
	str = "";
	
	str += "<select id='state' name='state'>";
	
	for (i=0;i<json.Result.length; i++)
	{
		str += "<option value='" + json.Result[i].stateAbbr + "'>" + json.Result[i].stateAbbr + "</option>";
	}
	str += "</select>";
	
	$('#showStates').append(str);
}

function pullMonths(){
	
	$.getJSON( "php/php_queries.php", { action:"getMonths" } )
		.done(function( json ) {
			fillInMonths(json);
		});
}

function fillInMonths(json){
	str = "";
	
	for (i=0;i<json.Result.length; i++)
	{
		str += "<option value='" + json.Result[i].monthVal + "'>" + json.Result[i].monthVal + "</option>";
	}
	
	strEdStart = "<select id='txtEdStartMonth' name='month'>" + str + "</select>";
	$('#txtEdStartM').append(strEdStart);
	strEdEnd = "<select id='txtEdEndMonth' name='month'>" + str + "</select>";
	$('#txtEdEndM').append(strEdEnd);
	strEmpStart = "<select id='txtEmpStartMonth' name='month'>" + str + "</select>";
	$('#txtEmpStartM').append(strEmpStart);
	strEmpEnd = "<select id='txtEmpEndMonth' name='month'>" + str + "</select>";
	$('#txtEmpEndM').append(strEmpEnd);
}

function pullYears(){
	$.getJSON( "php/php_queries.php", { action:"getYears" } )
		.done(function( json ) {
			fillInYears(json);
		});
}

function fillInYears(json){
	str = "";
	for (i=0;i<json.Result.length; i++)
	{
		str += "<option value='" + json.Result[i].yearNum + "'>" + json.Result[i].yearNum + "</option>";
	}
	
	strEdStart = "<select id='txtEdStartYear' name='year'>" + str + "</select>";
	$('#txtEdStartY').append(strEdStart);
	strEdEnd = "<select id='txtEdEndYear' name='year'>" + str + "</select>";
	$('#txtEdEndY').append(strEdEnd);
	strEmpStart = "<select id='txtEmpStartYear' name='year'>" + str + "</select>";
	$('#txtEmpStartY').append(strEmpStart);
	strEmpEnd = "<select id='txtEmpEndYear' name='year'>" + str + "</select>";
	$('#txtEmpEndY').append(strEmpEnd);
}

//Editor div toggler
function toggle(num){
	if(num == 1){
		$("#editMePicture").toggle();
	}else if(num == 2){
		$("#basicEditWrap").toggle();
	}else if(num == 3){
		$("#editVideo").toggle();
	}else if(num == 4){
		$("#editCover").toggle();
	}else if(num == 5){
		eduClearBoxes();
		$("#editEdu").toggle();
	}else if(num == 6){
		clearEmpBoxes();
		$("#editEmp").toggle();
	}else if(num == 7){
		$("#linkGen").toggle();
	}else if(num == 8){
		$("#editPassword").toggle();
	}
}

//Style changer
function updateStyle(){
	var ls = localStorage.getItem("userID");
	var styleType = $("#styleList").val();
	
		$.getJSON( "php/php_queries.php", { action:"updateStyle", userID: ls, styleType: styleType});
	
	
}
function changeStyle(json){
	
	if (json.Result[0].styleType === '0') {
		document.getElementById('pageStyle').setAttribute('href', 'css/mainStyle.css');
		document.getElementById('proLogo').setAttribute('src', 'images/logo.png');
	}
	else if (json.Result[0].styleType === '1') {
		document.getElementById('pageStyle').setAttribute('href', 'css/binaryStyle.css');
		document.getElementById('proLogo').setAttribute('src', 'images/binaryLogo.png');
		$('#styleList').val('1');
	}
	else if (json.Result[0].styleType === '2') {
		document.getElementById('pageStyle').setAttribute('href', 'css/profStyle.css');
		document.getElementById('proLogo').setAttribute('src', 'images/profLogo.png');
		$('#styleList').val('2');
	}
}

///////////////////
//Profile Picture//
///////////////////
function loadProfilePicture(json){
	var imageTag = json.Result[0].pictureLink;
	//var el = document.getElementById("mePicture").style.backgroundImage;
		document.getElementById("mePicture").style.backgroundImage = "url("+imageTag+")";
}
function updatePicture(){
	var ls = localStorage.getItem("userID");
	var pictureLink = $('#txtPicture').val();
	$.getJSON( "php/php_queries.php", { action:"updatePicture", userID: ls, pictureLink: pictureLink } )
		setTimeout(function () {
				 window.location.reload();
					}, 100);
}
///////////////////////
//End Profile Picture//
///////////////////////

/////////////////////
//Basic Information//
/////////////////////

//Fill in Basic Information
function fillBasic(json){
	var fName = json.Result[0].firstName;
	$("#txtFirstName").val(fName);
	var lName = json.Result[0].lastName;
	$("#txtLastName").val(lName);
	var email = json.Result[0].email;
	$("#txtEmail").val(email);
	var city = json.Result[0].city;
	$("#txtCity").val(city);
	var state = json.Result[0].state;
	$("#state").val(state);
	var zip = json.Result[0].zip;
	$("#txtZipCode").val(zip);
	var phoneNum = json.Result[0].phoneNumber;
	var phone1 = phoneNum.slice(1,4);
	var phone2 = phoneNum.slice(5,8);
	var phone3 = phoneNum.slice(9,13);
	$("#txtPhoneNumber1").val(phone1);
	$("#txtPhoneNumber2").val(phone2);
	$("#txtPhoneNumber3").val(phone3);
}

//Load Basic Information
function loadBasic(){
	var ls = localStorage.getItem("userID");
		$.getJSON( "php/php_queries.php", { action:"fillUser", userID: ls})
	.done(function(json){
		fillBasic(json);
		fillBasic2(json);
		changeStyle(json);
		loadProfilePicture(json);
		});
}

//Display Basic Information
function fillBasic2(json){
	var basicInfo = "<h3 id='meName'>" + json.Result[0].firstName + " " + json.Result[0].lastName + "</h3>" +
	"<p>" + json.Result[0].phoneNumber + "</p>" + 
	"<p>" + json.Result[0].email + "</p>" +
	"<p>" + json.Result[0].city + " " + json.Result[0].state +", " + json.Result[0].zip + "</p>";
	$("#meBasic").append(basicInfo);
}

//Update Basic Information
function updateBasic(){
	var ls = localStorage.getItem("userID");
	var fName = $('#txtFirstName').val();
	var lName = $('#txtLastName').val();
	var email = $('#txtEmail').val();
	var city = $('#txtCity').val();
	var state= $('#state').val();
	var zip= $('#txtZipCode').val();
	var phoneNumber1 = $('#txtPhoneNumber1').val();
	var phoneNumber2 = $('#txtPhoneNumber2').val();
	var phoneNumber3 = $('#txtPhoneNumber3').val();
	var phoneNumbers = "("+phoneNumber1 + ")"+ phoneNumber2 +"-"+ phoneNumber3;

		$.getJSON( "php/php_queries.php", { action:"updateBasic", userID: ls, firstName: fName, lastName: lName, email: email, city: city, state: state, zip: zip, phoneNumber: phoneNumbers});
}

/////////////////////////
//End Basic Information//
/////////////////////////

/////////
//Video//
/////////

//Load Video
function loadVideo(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action:"fillUser", userID: ls } )
	.done(function(json){
		fillVideo(json);
		});
}

//Fill in Video
function fillVideo(json){
	if(json.Result[0].videoLink != ""){
		var videoLin = 'https://youtu.be/' + json.Result[0].videoLink;
		$("#txtLink").val(videoLin);
		var vidFrame = '<iframe width="450" height="253" src="https://www.youtube.com/embed/' + json.Result[0].videoLink + '?rel=0" frameborder="0" allowfullscreen></iframe>'
		$("#vidEmbed").append(vidFrame);
	}else{
		var videoLin = 'https://www.youtube.com/watch?v=2QwDkGcvY5o';
		$("#txtLink").val(videoLin);
		var vidFrame = '<iframe width="450" height="253" src="https://www.youtube.com/embed/2QwDkGcvY5o?rel=0" frameborder="0" allowfullscreen></iframe>'
		$("#vidEmbed").append(vidFrame);
	}
}

//Update Video
function updateVid(){
	var updateLinkBefore = $("#txtLink").val();
	if (updateLinkBefore == ""){		
		sendVid(updateLinkBefore);
	}else{
		if(updateLinkBefore.indexOf("https://youtu.be/") >= 0){
			var updateLinkAfter = updateLinkBefore.slice(17,28);
				if(updateLinkAfter.length == 11){
					console.log(updateLinkAfter);
					sendVid(updateLinkAfter);
				}
				else{
					alert("empty 1 link");
				}
			
		}else if(updateLinkBefore.indexOf("http://youtu.be/") >= 0){
			var updateLinkAfter = updateLinkBefore.slice(16,27);
			if(updateLinkAfter.length == 11){
					console.log(updateLinkAfter);
					sendVid(updateLinkAfter);
				}
				else{
					alert("empty2 link");
				}
		}else if(updateLinkBefore.indexOf("https://www.youtube.com/watch?v=") >= 0){
			var updateLinkAfter = updateLinkBefore.slice(32,43);
			if(updateLinkAfter.length == 11){
					console.log(updateLinkAfter);
					sendVid(updateLinkAfter);
				}
				else{
					alert("empty3 link");
				}
		}else if(updateLinkBefore.indexOf("http://www.youtube.com/watch?v=") >= 0){
			var updateLinkAfter = updateLinkBefore.slice(31,42);
			if(updateLinkAfter.length == 11){
					console.log(updateLinkAfter);
					sendVid(updateLinkAfter);
				}
				else{
					alert("empty 4link");
				}
		}else{
			alert("INVALID LINK!!")
		}
	}
}

//Update Video 2nd process
function sendVid(updatedLink){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action:"updateVideo", userID: ls, videoLink: updatedLink } )
		setTimeout(function () {
				 window.location.reload();
					}, 100);
}

/////////////
//End Video//
/////////////

////////////////
//Cover Letter//
////////////////

//Load Cover Letter
function loadCover(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action:"fillCover", userID: ls } )
	.done(function(json){
		if(json.Length != 0){
			$("#btnEditCover").show();
			$("#btnAddCover").hide();
			fillCover(json);
		}
		else{
			$("#btnEditCover").hide();
			$("#btnAddCover").show();
		}
		
		});
}

//Fill Cover Letter
function fillCover(json){
	var coverLett = json.Result[0].coverLetter;
	$("#txtCoverLetter").val(coverLett);
	$("#coverLetterText").append(coverLett);
}

//Add Cover Letter
/*
function addCover(){
	var ls = localStorage.getItem("userID");
	var newCover = $("#txtCoverLetter").val();
	$.getJSON( "php/php_queries.php", { action:"addCover", userID: ls, coverLetter: newCover } );
}
*/

//Update Cover Letter
function updateCover(){
	var ls = localStorage.getItem("userID");
	var updatedCover = $("#txtCoverLetter").val();
	$.getJSON( "php/php_queries.php", { action:"updateCover", userID: ls, coverLetter: updatedCover } );
}

////////////////////
//End Cover Letter//
////////////////////

/////////////
//Education//
/////////////

//Load Education
function loadEducation(eduId){
	$.getJSON( "php/php_queries.php", { action:"fillEducation", eduID: eduId } )
	.done(function(json){
		fillEducation(json, eduId);
		$("#btnEditSchool").show();
		$("#btnAddSchool2").hide();
		});
}

//Fill in Education
function fillEducation(json, eduId){
	var schoolName = json.Result[0].school;
	$("#txtSchoolName").val(schoolName);
	var degreeProgram = json.Result[0].degree;
	$("#txtDegree").val(degreeProgram);
	var startEdMonth = json.Result[0].startDateMonth;
	$("#txtEdStartMonth").val(startEdMonth);
	var startEdYear = json.Result[0].startDateYear;
	$("#txtEdStartYear").val(startEdYear);
	var endEdMonth = json.Result[0].endDateMonth;
	$("#txtEdEndMonth").val(endEdMonth);
	var endEdYear = json.Result[0].endDateYear;
	$("#txtEdEndYear").val(endEdYear);
	var gpa = json.Result[0].GPA;
	$("#txtGPA").val(gpa);
	var eduId = json.Result[0].eduID;
	localStorage.setItem("eduId", eduId);
}

//Load Education information
function loadEdu(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action:"listEducation", userID: ls } )
	.done(function(json){
		fillEdu(json);
		});
}

//Display Education information
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

//List all schools --- Education
function listSchools(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action:"listEducation", userID: ls})
	.done(function(json){
		listSchoolsSecondStage(json);
		});	
}

//List all schools 2nd process --- Education
function listSchoolsSecondStage(json){
	var str = "";
		for (i=0; i<json.Result.length; i++) {
			str += "<tr>";
			str += "<td>" + json.Result[i].school + "</td>";
			str += "<td>" + json.Result[i].degree + "</td>";
			str += "<td><input id='btnEditEdu_" + json.Result[i].eduID + "' type='button' value='Edit' onclick='loadEducation(" + json.Result[i].eduID + ")'></td>";
			str += "<td><input id='btnDelEdu_" + json.Result[i].eduID + "' type='button' value='Delete' onclick='delEducation(" + json.Result[i].eduID + ")'></td>";
			
			str += "</tr>";
		
		}
		$('#schoolsDiv').html(str);
}

//Clear Education editor fields
function eduClearBoxes(){
	$("#txtSchoolName").val("");
	$("#txtDegree").val("");
	$("#txtEdStartMonth").val("January");
	$("#txtEdStartYear").val("1960");
	$("#txtEdEndMonth").val("January");
	$("#txtEdEndYear").val("1960");
	$("#txtGPA").val("");
	$("#btnEditSchool").hide();
	$("#btnAddSchool2").show();
	localStorage.setItem("eduId", 0);	
}

//Add a school --- Education
function addSingleSchool(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action:"addEducation", userID: ls, school: $('#txtSchoolName').val(), degree: $('#txtDegree').val(), startMonth: $('#txtEdStartMonth').val(), startYear: $('#txtEdStartYear').val(), endMonth: $('#txtEdEndMonth').val(), endYear: $('#txtEdEndYear').val(), GPA: $('#txtGPA').val() } )
}

//Update Education
function updateEducation(){
	var eduId = localStorage.getItem("eduId");
	$.getJSON( "php/php_queries.php", { action:"updateEducation", eduID: eduId, school: $('#txtSchoolName').val(), degree: $('#txtDegree').val(), startMonth: $('#txtEdStartMonth').val(), startYear: $('#txtEdStartYear').val(),endMonth: $('#txtEdEndMonth').val(), endYear: $('#txtEdEndYear').val(), GPA: $('#txtGPA').val()  } );
}

//Delete a school --- Education
function delEducation(eduId){
	
	$.getJSON( "php/php_queries.php", { action:"deleteEducation", eduID: eduId});
		setTimeout(function () {
				 window.location.reload();
					}, 100);
}

/////////////////
//End Education//
/////////////////

////////////
//Employer//
////////////

//Load Employer
function loadEmployer(empId){
	$.getJSON( "php/php_queries.php", { action:"fillEmployer", empID: empId } )
	.done(function(json){
		fillEmployer(json, empId);
				$("#btnEditEmployer").show();
		$("#btnAddEmployer2").hide();
		});
}

//Fill in Employer
function fillEmployer(json, empId){
	var employerName = json.Result[0].employerName;
	$("#txtEmpName").val(employerName);
	var position = json.Result[0].position;
	$("#txtPosition").val(position);
	var startEmpMonth = json.Result[0].startDateMonth;
	$("#txtEmpStartMonth").val(startEmpMonth);
	var startEmpYear = json.Result[0].startDateYear;
	$("#txtEmpStartYear").val(startEmpYear);
	var endEmpMonth = json.Result[0].endDateMonth;
	$("#txtEmpEndMonth").val(endEmpMonth);
	var endEmpYear = json.Result[0].endDateYear;
	$("#txtEmpEndYear").val(endEmpYear);
	var empLin = json.Result[0].empLink;
	$("#txtEmpLink").val(empLin);
	var resp = json.Result[0].responsibilities;
	
	if(json.Result[0].responsibilities1 != null){
		resp += "/" + json.Result[0].responsibilities1 ;			
		if(json.Result[0].responsibilities2 != null){
			resp +=  "/" + json.Result[0].responsibilities2 ;					
			if(json.Result[0].responsibilities3 != null){
				resp += "/" + json.Result[0].responsibilities3 ;							
				if(json.Result[0].responsibilities4 != null){
					resp += "/" + json.Result[0].responsibilities4;									
					if(json.Result[0].responsibilities5 != null){
						resp += "/" + json.Result[0].responsibilities5;
						if(json.Result[0].responsibilities6 != null){
							resp += "/" + json.Result[0].responsibilities6;
							if(json.Result[0].responsibilities7 != null){
								resp += "/" + json.Result[0].responsibilities7;
								if(json.Result[0].responsibilities8 != null){
									resp += "/" + json.Result[0].responsibilities8;
									if(json.Result[0].responsibilities9 != null){
										resp += "/" + json.Result[0].responsibilities9;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	$("#txtResp").val(resp);
	console.log(empId);
	localStorage.setItem("empId", empId);	
}

//Load Employer information
function loadEmp(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action:"listEmployer", userID: ls } )
	.done(function(json){
		fillEmp(json);
		});
}

//Display Employer information
function fillEmp(json){
	var empInfo = '<h4>Work Experience</h4>';
	for(i=0; i<json.Result.length; i++){
				empInfo += '<a href="' + json.Result[i].empLink + '"><h5>' + json.Result[i].employerName + '</h5></a>' +
				'<p>' + json.Result[i].position + '</p>'+
				'<ul>' +
					'<li>' + json.Result[i].responsibilities + '</li>' +
				'</ul>';
				if(json.Result[i].responsibilities1 != null){
					empInfo += '<ul>' +
					'<li>' + json.Result[i].responsibilities1 + '</li>' +
				'</ul>';
				}
				if(json.Result[i].responsibilities2 != null){
					empInfo += '<ul>' +
					'<li>' + json.Result[i].responsibilities2 + '</li>' +
				'</ul>';
				}
				if(json.Result[i].responsibilities3 != null){
					empInfo += '<ul>' +
					'<li>' + json.Result[i].responsibilities3 + '</li>' +
				'</ul>';
				}
				if(json.Result[i].responsibilities4 != null){
					empInfo += '<ul>' +
					'<li>' + json.Result[i].responsibilities4 + '</li>' +
				'</ul>';
				}
				if(json.Result[i].responsibilities5 != null){
					empInfo += '<ul>' +
					'<li>' + json.Result[i].responsibilities5 + '</li>' +
				'</ul>';
				}
				if(json.Result[i].responsibilities6 != null){
					empInfo += '<ul>' +
					'<li>' + json.Result[i].responsibilities6 + '</li>' +
				'</ul>';
				}
				if(json.Result[i].responsibilities7 != null){
					empInfo += '<ul>' +
					'<li>' + json.Result[i].responsibilities7 + '</li>' +
				'</ul>';
				}
				if(json.Result[i].responsibilities8 != null){
					empInfo += '<ul>' +
					'<li>' + json.Result[i].responsibilities8 + '</li>' +
				'</ul>';
				}
				if(json.Result[i].responsibilities9 != null){
					empInfo += '<ul>' +
					'<li>' + json.Result[i].responsibilities9 + '</li>' +
				'</ul>';
				}
				empInfo += '<p>Start date: ' + json.Result[i].startDateMonth + ', ' + json.Result[i].startDateYear + '</p>' +
				'<p>End date: ' + json.Result[i].endDateMonth + ', ' + json.Result[i].endDateYear + '</p>';
		}
	$("#meEmp").append(empInfo);
}

//List all Employers
function listEmployers(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action:"listEmployer", userID: ls})
	.done(function(json){
		listEmployersSecondStage(json);
		});
}

//List all Employers 2nd process
function listEmployersSecondStage(json){
		var str = "";
		for (i=0; i<json.Result.length; i++) {
			str += "<tr>";
			str += "<td>" + json.Result[i].employerName + "</td>";
			str += "<td>" + json.Result[i].position + "</td>";
			str += "<td><input id='btnEditEmp_" + json.Result[i].empID + "' type='button' value='Edit' onclick='loadEmployer(" + json.Result[i].empID + ")'></td>";
			str += "<td><input id='btnDelEmp_" + json.Result[i].empID + "' type='button' value='Delete' onclick='delEmployer(" + json.Result[i].empID + ")'></td>";
			str += "</tr>";
		
		}
		$('#companiesDiv').html(str);
}

//Clear Employer editor fields
function clearEmpBoxes(){
$("#txtEmpName").val("");
	
	$("#txtPosition").val("");
	$(".txtEmpStartMonth").val("January");
	$(".txtEmpStartYear").val("1960");
	$(".txtEmpEndMonth").val("January");
	$(".txtEmpEndYear").val("1960");
	$("#txtEmpLink").val("");
	$("#txtResp").val("");
	$("#btnEditEmployer").hide();
	$("#btnAddEmployer2").show();
}

//Add an Employer
function addSingleEmployer(){
	var ls = localStorage.getItem("userID");
	
	var respSplit = $('#txtResp').val();
	var maxResp = 10;   						//Max number of Responsibilities the database can hold
	for(i = 0; i < maxResp; i++){
		var responsibilities = "responsibilities" + i + "";
		
		eval("responsibilities" + i + "= respSplit.split('/')[i]");
		alert(responsibilities);
	}
	
	$.getJSON( "php/php_queries.php", { action:"addEmployer", userID: ls, employerName: $('#txtEmpName').val(), position: $('#txtPosition').val(), startMonth: $('#txtEmpStartMonth').val(), startYear: $('#txtEmpStartYear').val(), endMonth: $('#txtEmpEndMonth').val(), endYear: $('#txtEmpEndYear').val(), empLink: $('#txtEmpLink').val(), responsibilities: responsibilities0, responsibilities1: responsibilities1, responsibilities2: responsibilities2, responsibilities3: responsibilities3, responsibilities4: responsibilities4, responsibilities5: responsibilities5, responsibilities6: responsibilities6, responsibilities7: responsibilities7, responsibilities8: responsibilities8, responsibilities9: responsibilities9 } );
		console.log('in Button');
}

//Update Employer
function updateEmployer(){
	console.log('function');
	var empId = localStorage.getItem("empId");
	var respSplit = $('#txtResp').val();
	var maxResp = 10;   						//Max number of Responsibilities the database can hold
	for(i = 0; i< maxResp; i++){
		var responsibilities = "responsibilities" + i + "";
		eval("responsibilities" + i + "= respSplit.split('/')[i]");
	}
	
	$.getJSON( "php/php_queries.php", { action:"updateEmployment", empID: empId, employerName: $('#txtEmpName').val(), position: $('#txtPosition').val(), startMonth: $('#txtEmpStartMonth').val(), startYear: $('#txtEmpStartYear').val(), endMonth: $('#txtEmpEndMonth').val(), endYear: $('#txtEmpEndYear').val(), empLink: $('#txtEmpLink').val(), responsibilities: responsibilities0, responsibilities1: responsibilities1, responsibilities2: responsibilities2, responsibilities3: responsibilities3, responsibilities4: responsibilities4, responsibilities5: responsibilities5, responsibilities6: responsibilities6, responsibilities7: responsibilities7, responsibilities8: responsibilities8, responsibilities9: responsibilities9  } );
	setTimeout(function () {
				 window.location.reload();
					}, 100);
}

//Delete an Employer
function delEmployer(empId){
	
	$.getJSON( "php/php_queries.php", { action:"deleteEmployer", empID: empId});
		setTimeout(function () {
				 window.location.reload();
					}, 100);
}

////////////////
//End Employer//
////////////////

/////////////////////////
//Custom Link Generator//
/////////////////////////

//Generate custom link
function generateLink()
{
	console.log('hi');
	var linkCode = "";
	var choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
	for(i=0;i<6;i++){
		linkCode += choices.charAt(Math.floor(Math.random()*choices.length));
		}	
		checkLink(linkCode);
}

//Insert the generated link
function insertLink(linkCode){
	var ls = localStorage.getItem("userID");
	var compName = $('#txtCompanyName').val();
		$.getJSON( "php/php_queries.php", { action:"insertLink", userID: ls, linkCode: linkCode, compName: compName})
//change when site changes
		var usableLink = "<input type = 'text' value = 'http://ict.neit.edu/000484346/public_html/capstone/resume.html?"+linkCode+ "'/>";
		$('#newLink').html(usableLink);	
}

//Load Generated link
function loadLink(){
	var ls = localStorage.getItem("userID");
		$.getJSON( "php/php_queries.php", { action:"loadLink", userID: ls})
	.done(function(json){
			
			fillLinkDiv(json);
		});
}

//Fill in links
function fillLinkDiv(json){
	var str = "";
	
	str += "<table><tr><td> Company Name</td><td> Times Viewed</td></tr>";
		for (i=0; i<json.Result.length; i++) {
			str += "<tr>";
			str += "<td>" + json.Result[i].companyName + "</td>";
			str += "<td>" + json.Result[i].timesViewed + "</td>";
			str += "<td><input id='btnDeactivate_" + json.Result[i].linkID + "' type='button' value='De-Activate' onclick='inactivateLink(" + json.Result[i].linkID + ")'></td>";
			str += "</tr><tr>";
			str += "<td colspan='3'><p>http://ict.neit.edu/000484346/public_html/capstone/resume.html?" + json.Result[i].link + "</p></td></tr>";
		
		}
	str+="</table>"
	$('#linkView').html(str);
}

//Check for a valid link
function checkLink(linkCode){
		$.getJSON( "php/php_queries.php", { action:"checkLink", linkCode: linkCode})
	.done(function(json){
		
			checkLink2(json, linkCode);
		});
}

//Check for a valid link 2nd stage
function checkLink2(json, linkCode){
	if(json.Result == true)
	{
		generateLink();
	}
	else
	{
		insertLink(linkCode);
	}
}

//Deactivate link
function inactivateLink(linkID){
	inactivateLink2(linkID);
		setTimeout(function () {
				window.location.reload();	
					}, 100);
}

//Deactivate link 2nd stage
function inactivateLink2(linkID){
	console.log(linkID);
	$.getJSON( "php/php_queries.php", { action:"deactivateLink", linkID: linkID});
			
}
function countLink(json){
	var timesViewed = json.Result[0].timesViewed;
	timesViewed++;
	var ls = json.Result[0].linkID;
	$.getJSON( "php/php_queries.php", { action:"linkViewCount", linkID: ls, timesViewed: timesViewed});
}
/////////////////////////////
//End Custom Link Generator//
/////////////////////////////

//Reset local storage
function resetLocalStorage(){
	 localStorage.setItem("userID", "" );
}

////////////////////////////
//Document ready functions//
////////////////////////////

$(document).ready(function(){
	
	$.autotab({ tabOnSelect: true });
	$('.phoneNumber').autotab('filter', 'number');
	$(".editWrap").draggable({ scroll: false, containment: "document" });
	var ls = localStorage.getItem("userID");
	if(ls == "" || ls == null){ 
	window.location = "index.html";

	}
		
	else{
		setTimeout(function () {
			loadCover();
			loadVideo();
			loadBasic();
			loadEmp();
			loadEdu();
			listEmployers();
			listSchools();
			loadLink();
		}, 200);
	
	}

	$("#styleChange").click(function(){
		updateStyle();
		setTimeout(function () {
				window.location.reload();	
					}, 100);
	});

	$("#logout").click(function(){
		resetLocalStorage();
		setTimeout(function () {
					window.location = "index.html";
					}, 100);
	});	
	$(".btnGenerateLink").click(function(){
		generateLink();
		setTimeout(function () {
				window.location.reload();	
					}, 100);	
		
	});
	$("#btnEditVideo").click(function(){
		updateVid();
			setTimeout(function () {
					window.location.reload();
					}, 100);
		
	});
	$("#btnEditBasic").click(function(){
		updateBasic();
			setTimeout(function () {
				window.location.reload();	
					}, 100);
		
	});
	$("#btnEditCover").click(function(){
		updateCover();
			setTimeout(function () {
				window.location.reload();	
					}, 100);
		
	});
	$("#btnAddSchool2").click(function(){
		addSingleSchool();
			setTimeout(function () {
				 window.location.reload();
					}, 100);
		
	});
	$("#btnEditSchool").click(function(){
		updateEducation();
			setTimeout(function () {
					window.location.reload();
					}, 100);
		
	});
	
	$("#btnEditEmployer").click(function(){
		
		updateEmployer();
			
		
		});
	$("#btnGenerate").click(function(){
		generateLink();
			setTimeout(function () {
					fillLink(); 
					}, 100);
		
		});
	$("#btnAddEmployer2").click(function(){
		
		addSingleEmployer();
			setTimeout(function () {
				window.location.reload();	
					}, 100);
		
	});
	$("#btnEditPicture").click(function(){
		
		updatePicture();
			//test
		
	});
	
	$("#txtGPA").keyup(function(event){
    if(event.keyCode == 13){
        $("#btnAddSchool2").click();
    }
	});
});