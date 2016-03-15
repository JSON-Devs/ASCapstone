//Declare global variables
var str = "";

//Initialize fields as empty fields
function insertLanding(){			
	$.getJSON( "php/php_queries.php", { action: "insertLanding", email: $('#txtEmail').val(), firstName:$('#txtFirstName').val(), lastName:$('#txtLastName').val(), pw:$('#txtPw').val()} );
}

//Add Basic Info
function addBasicInfo(){
	validateVid();
	var phoneNumber1 = $('#txtPhoneNumber1').val();
	var phoneNumber2 = $('#txtPhoneNumber2').val();
	var phoneNumber3 = $('#txtPhoneNumber3').val();
	var phoneNumbers = "("+phoneNumber1 + ")"+ phoneNumber2 +"-"+ phoneNumber3;
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action: "addBasicInfo", userID: ls, city: $('#txtCity').val(), state: $('#state').val(), zip: $('#txtZipCode').val(), phoneNumber: phoneNumbers, videoLink: $('#txtLink').val()} );
}

//Validate video
function validateVid(){
	var updateLinkBefore = $("#txtLink").val();
	if(updateLinkBefore.indexOf("https://youtu.be/") >= 0){
		var updateLinkAfter = updateLinkBefore.slice(17,28);
		if(updateLinkAfter.length == 11){
		}
		else{
			alert("Invalid Link Type");
		}
	}
	else if(updateLinkBefore.indexOf("http://youtu.be/") >= 0){
		var updateLinkAfter = updateLinkBefore.slice(16,27);
		if(updateLinkAfter.length == 11){
		}
		else{
			alert("Invalid Link Type");
		}
	}
	else if(updateLinkBefore.indexOf("https://www.youtube.com/watch?v=") >= 0){
		var updateLinkAfter = updateLinkBefore.slice(32,43);
		if(updateLinkAfter.length == 11){
		}
		else{
			alert("Invalid Link Type");
		}
	}
	else if(updateLinkBefore.indexOf("http://www.youtube.com/watch?v=") >= 0){
		var updateLinkAfter = updateLinkBefore.slice(31,42);
		if(updateLinkAfter.length == 11){
		}
		else{
			alert("Invalid Link Type");
		}
	}
	else{
	}
}

//Get local storage info
function setLocal()
{
	$.getJSON( "php/php_queries.php", { action: "setCookie", email: $('#txtEmail').val(), pw:$('#txtPw').val()} )
	.done(function( json ) {
		setLocalStorage(json);
	});	
}

//Set local storage
function setLocalStorage(json){	
	if(window.localStorage){
		localStorage.setItem("userID", json.Result.userID );
	  	localStorage.setItem("userReg", '1' );
		var ls = localStorage.getItem("userID");	
		window.location = "basicInfo2.html";			
	}
}

//Change password
function testPassword1(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action: "fillUser", userID: ls} )
	.done(function( json ) {
		testPassword2(json);
	});
	
}

//Test password against old password
function testPassword2(json){
	var oldPass = json.Result[0].pw
	var txtOldPass = $('#txtOldPassword').val();
	if(oldPass == txtOldPass){
		testPassword3();
	}
	else{
		$('#passwordFeedback').html('Password does not match current password!');
	}
}

//Check new password
function testPassword3(){
	var newPass1 = $('#txtNewPassword1').val();
	var newPass2 = $('#txtNewPassword2').val();
	if(newPass1 === newPass2){
		setChangedPassword();
		setTimeout(function () {
			$('#passwordFeedback').html('Your password has been changed!');
			$('#txtOldPassword').val('');
			$('#txtNewPassword1').val('');
			$('#txtNewPassword2').val('');
		}, 100);
	}
	else{
		$('#passwordFeedback').html('New passwords do not match each other!');
	}
}

//Set new password
function setChangedPassword(){
	var newPass = $('#txtNewPassword1').val();
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action: "updatePassword", userID: ls, pw: newPass} );
}


//Login
function loginTest(){            
	$.getJSON( "php/php_queries.php", { action: "loginUser", email: $('#txtLoginUsername').val(), pw:$('#txtLoginPassword').val()} )
	.done(function( json ) {
		finalUserTest(json);
	});
}

//Login feedback
function finalUserTest(json)
{
	$('#emptyLogin').hide();
	$('#invalidLogin').hide();
    if( json.Result == false ){	
       $('#invalidLogin').show();	
    }
    else{
		setLocalOldUser();
    }
}

//Call to set local storage variable
function setLocalOldUser(){
	$.getJSON( "php/php_queries.php", { action: "setCookie", email: $('#txtLoginUsername').val(), pw:$('#txtLoginPassword').val()} )
	.done(function( json ) {
		setLocalStorageOldUser(json);
	});
}

//Check to see if user is an admin and direct to page
function  setLocalStorageOldUser(json){	
	if(window.localStorage){
		localStorage.setItem("userID", json.Result.userID );
		var ls = localStorage.getItem("userID");
	}
	var adminCheck = json.Result.isAdmin;
	if ( adminCheck == true){
		window.location = "adminPage.html";
	}
	else{
		window.location = "myresume.html";
	}
}

//Pull states from database
function pullStates(){
	$.getJSON( "php/php_queries.php", { action:"getStates" } )
	.done(function( json ) {
		fillInStates(json);
	});
}

//Fill in states into drop down list
function fillInStates(json){
	str = "";
	str += "<select id=state name=state>";
	for (i=0;i<json.Result.length; i++){
		str += "<option value='" + json.Result[i].stateAbbr + "'>" + json.Result[i].stateAbbr + "</option>";
	}
	str += "</select>";
	$('#showStates').append(str);
}

//Call months and years functions
function pullDates(){
	pullMonths();
	pullYears();
}

//Pull months from database
function pullMonths(){
	$.getJSON( "php/php_queries.php", { action:"getMonths" } )
	.done(function( json ) {
		fillInMonths(json);
	});
}

//Fill in months into drop down list
function fillInMonths(json){
	str = "";
	for (i=0;i<json.Result.length; i++){
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

//Pull years from database
function pullYears(){
	$.getJSON( "php/php_queries.php", { action:"getYears" } )
	.done(function( json ) {
		fillInYears(json);
	});
}

//Fill in years into drop down list
function fillInYears(json){
	str = "";
	for (i=0;i<json.Result.length; i++){
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

//Check email call
function checkEmail(){
	$.getJSON( "php/php_queries.php", { action: "checkEmail", email: $('#txtEmail').val()} )
	.done(function( json ) {	
		secondEmailStage(json);
	});
}

//Check to see if email is in use test
function secondEmailStage(json)
{
    if(json.Result === false){			
		insertLanding();
		setTimeout(function () {
			setLocal();
		}, 100);		
	}
	else{
		alert("Email is already in use!");	
	}	
}

//Add Single School
function addSingleSchool(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action:"addEducation", userID: ls, school: $('#txtSchoolName').val(), degree: $('#txtDegree').val(), startMonth: $('#txtEdStartMonth').val(), startYear: $('#txtEdStartYear').val(), endMonth: $('#txtEdEndMonth').val(), endYear: $('#txtEdEndYear').val(), GPA: $('#txtGPA').val() } );
}

//Call to List Schools
function listSchools(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action:"listEducation", userID: ls})
	.done(function(json){
		listSchoolsSecondStage(json);
	});		
}

//List Schools
function listSchoolsSecondStage(json)
{
	var str = "";
	for (i=0; i<json.Result.length; i++) {
		str += "<tr>";
		str += "<td>" + json.Result[i].school + "</td>";
		str += "<td>" + json.Result[i].degree + "</td>";
		str += "</tr>";	
	}
	$('#schoolsDiv').html(str);
}

//Add a Single Employer
function addSingleEmployer(){
	var ls = localStorage.getItem("userID");
	var respSplit = $('#txtResp').val();
	var maxResp = 5;//Max number of Responsibilities the database can hold
	for(i = 0; i< maxResp; i++){
		var responsibilities = "responsibilities" + i + "";
		eval("responsibilities" + i + "= respSplit.split('/')[i]");
	}
	$.getJSON( "php/php_queries.php", { action:"addEmployer", userID: ls, employerName: $('#txtEmpName').val(), position: $('#txtPosition').val(), startMonth: $('#txtEmpStartMonth').val(), startYear: $('#txtEmpStartYear').val(), endMonth: $('#txtEmpEndMonth').val(), endYear: $('#txtEmpEndYear').val(), empLink: $('#txtEmpLink').val(), responsibilities: responsibilities0, responsibilities1: responsibilities1, responsibilities2: responsibilities2, responsibilities3: responsibilities3, responsibilities4: responsibilities4 } );
}

//Call to list Employers
function listEmployers(){
	var ls = localStorage.getItem("userID");
	$.getJSON( "php/php_queries.php", { action:"listEmployer", userID: ls})
	.done(function(json){
		listEmployersSecondStage(json);
	});
}

//List Employers
function listEmployersSecondStage(json){
	var str = "";
	for (i=0; i<json.Result.length; i++) {
		str += "<tr>";
		str += "<td>" + json.Result[i].employerName + "</td>";
		str += "<td>" + json.Result[i].position + "</td>";
		str += "</tr>";
	}
	$('#companiesDiv').html(str);
}

//Validate Basic Info
function landingPageValidate(){
	var feedback = "";
	var firstName = $('#txtFirstName').val();
	var lastName = $('#txtLastName').val();
	var pw = $('#txtPw').val();
	var email = $('#txtEmail').val();
	if(firstName.length == 0 || firstName == null ){
		feedback += "Error: Please Enter First Name \n ";
	}
	if(lastName.length == 0 || firstName == null){
		feedback += "Error: Please Enter Last Name \n";
	}
	if(email.length == 0 || email == null){
		feedback += "Error: Please Enter Email \n";
	}
	else{
		var resul = validateEmail(email);
		if(resul == false){
			feedback += "Error: Please enter Valid Email \n"
		}
	}
	if(pw.length == 0 || pw == null){
		feedback += "Error: Please Enter Password \n";
	}
	if( feedback.includes('Error:')){
		alert(feedback);
	}
	else{
		checkEmail();
	}
}

//Insert Default Cover Letter
function insertCover(){
	var ls = localStorage.getItem("userID");
	var coverSample = "This is where your Cover Letter will go! Hit the edit button to Customize.";
	$.getJSON( "php/php_queries.php", { action:"addCover", userID: ls, coverLetter: coverSample} );
}

//Validate Email
function validateEmail(email){
    var re = /\w\w+([-+.']\w\w+)*@\w\w+([-.]\w\w+)*\.\w\w+([-.]\w\w+)*/;
    var resul = re.test(email)
	return resul;
}

//Validate Zip Code
function validateZip(zip){
	var re = /^\d{5}(?:[-\s]\d{4})?$/;
    var resul = re.test(zip)
	return resul;
}

//Validate Education
function secondPageValidate(){
	var citie = $('#txtCity').val();
	var zip = $('#txtZipCode').val();
	var feedback = "";
	if (citie.length == 0 || citie.length == null){
		feedback += "Error: Please Enter City \n";
	}
	if(zip.length == 0 || zip == null){
		feedback += "Error: Please Enter Zip Code \n";
	}
	else{
		var resul = validateZip(zip);
		if(resul == false){
			feedback += "Error: Please Enter Valid Zip Code \n"
		}
	}
	if(feedback.includes('Error:')){
		alert(feedback);
	}
	else{
		addBasicInfo();
		setTimeout(function () {
			window.location = "education.html";
		}, 100);
	}
}

//Validate GPA
function validateGPA(){
	var feedback="";
	var gpa = $('#txtGPA').val();
	var schoolName = $('#txtSchoolName').val();
	var degree = $('#txtDegree').val();
	if(schoolName.length ==0 || schoolName == null){
		feedback += "Error: Please Enter School Name \n"
	}
	if(degree.length ==0 || degree == null){
		feedback += "Error: Please Enter Degree Program \n"
	}
	if(gpa.length ==0 || gpa == null){
		feedback += "Error: Please Enter Valid GPA \n"
	}
	else{
		if(gpa < 0 || gpa >4){
			feedback += "Error: Please Enter Valid GPA \n"
		}
	}
	if(feedback.includes('Error:')){
		alert(feedback);
	}
	else{
		addSingleSchool();
		setTimeout(function () {
			listSchools();
		}, 100);
	}
}

//Validate Employer
function validateEmployer(){
	var feedback = "";
	var empName = $('#txtEmpName').val();
	var empPos = $('#txtPosition').val();
	var empRes = $('#txtResp').val();
	if(empName.length ==0 || empName == null){
		feedback += "Error: Please Enter Company Name  \n";
	}
	if(empPos.length ==0 || empPos == null){
		feedback += "Error: Please Enter Position \n";
	}
	if(empRes.length ==0 || empRes == null){
		feedback += "Error: Please Enter Responsibilities \n";
	}
	if(feedback.includes('Error:')){
		alert(feedback);
	}
	else{
		addSingleEmployer();
		setTimeout(function () {
			listEmployers();
		}, 100);
	}
}

//Document Ready
$(document).ready(function(){	
	$('#emptyLogin').hide();
	$('#invalidLogin').hide();
	$("#btnLogin").click(function(){
		$('#emptyLogin').hide();
		$('#invalidLogin').hide();
		if($('#txtLoginUsername').val() != ''){
			$('#emptyLogin').hide();	
			loginTest();
		}
		else {
			$('#emptyLogin').show();	
		}
	});
	//auto tab functionality
	$.autotab({ tabOnSelect: true });
	$('.phoneNumber').autotab('filter', 'number');	
	$("#btnRegister").click(function()
	{
		landingPageValidate();
	});	
	$("#btnChangePassword").click(function(){
		testPassword1();
	});
	$("#btnNext-Edu").click(function(){
		secondPageValidate();
	});	
	$("#btnAddSchool").click(function()
	{
		validateGPA();	
	});	
	$("#btnNext-Emp").click(function(){
		window.location = "employer.html";
	});	
	$("#btnAddEmployer").click(function(){
		validateEmployer();
	});	
	$("#btnFinish").click(function(){
		localStorage.setItem("userReg", '0' );
		insertCover();
		setTimeout(function () {
			window.location = "myresume.html";
		}, 100);
	});
	$("#txtLoginPassword").keyup(function(event){
    	if(event.keyCode == 13){
        	$("#btnLogin").click();
    	}
	});	
}); 


