<?php
include ('database.php');
if (isset($_GET['action']))
	{
        $action = $_GET['action'];
    } else {
        $action = "searchLink";
    }
	if (isset($_GET['userID'])) {
        $userID = $_GET['userID'];
    }
	if (isset($_GET['email'])) {
        $email = $_GET['email'];
    }
	if (isset($_GET['linkCode'])) {
        $linkCode = $_GET['linkCode'];
    }
	if (isset($_GET['pw'])) {
        $pw = $_GET['pw'];
    }
	if (isset($_GET['firstName'])) {
        $firstName = $_GET['firstName'];
    }
	if (isset($_GET['lastName'])) {
        $lastName = $_GET['lastName'];
    }
	if (isset($_GET['city'])) {
        $city = $_GET['city'];
    }
	if (isset($_GET['state'])) {
        $state = $_GET['state'];
    }
	if (isset($_GET['zip'])) {
        $zip = $_GET['zip'];
    }
	if (isset($_GET['phoneNumber'])) {
        $phoneNumber = $_GET['phoneNumber'];
    }
	if (isset($_GET['videoLink'])) {
        $videoLink = $_GET['videoLink'];
    }
	if (isset($_GET['info'])) {
        $info = $_GET['info'];
    }
	if (isset($_GET['styleType'])) {
        $styleType = $_GET['styleType'];
    }
	if (isset($_GET['link'])) {
        $link = $_GET['link'];
    }
	if (isset($_GET['empID'])) {
        $empID = $_GET['empID'];
    }
	if (isset($_GET['employerName'])) {
        $employerName = $_GET['employerName'];
    }
	if (isset($_GET['position'])) {
        $position = $_GET['position'];
    }
	if (isset($_GET['startMonth'])) {
        $startMonth = $_GET['startMonth'];
    }
	if (isset($_GET['startYear'])) {
        $startYear = $_GET['startYear'];
    }
	if (isset($_GET['endMonth'])) {
        $endMonth = $_GET['endMonth'];
    }
	if (isset($_GET['endYear'])) {
        $endYear = $_GET['endYear'];
    }
	if (isset($_GET['responsibilities'])) {
        $responsibilities = $_GET['responsibilities'];
    }
	if (isset($_GET['responsibilities1'])) {
        $responsibilities1 = $_GET['responsibilities1'];
    }
	if (isset($_GET['responsibilities2'])) {
        $responsibilities2 = $_GET['responsibilities2'];
    }
	if (isset($_GET['responsibilities3'])) {
        $responsibilities3 = $_GET['responsibilities3'];
    }
	if (isset($_GET['responsibilities4'])) {
        $responsibilities4 = $_GET['responsibilities4'];
    }
	if (isset($_GET['responsibilities5'])) {
        $responsibilities5 = $_GET['responsibilities5'];
    }
	if (isset($_GET['responsibilities6'])) {
        $responsibilities6 = $_GET['responsibilities6'];
    }
	if (isset($_GET['responsibilities7'])) {
        $responsibilities7 = $_GET['responsibilities7'];
    }
	if (isset($_GET['responsibilities8'])) {
        $responsibilities8 = $_GET['responsibilities8'];
    }
	if (isset($_GET['responsibilities9'])) {
        $responsibilities9 = $_GET['responsibilities9'];
    }
	if (isset($_GET['name'])) {
        $name = $_GET['name'];
    }
	if (isset($_GET['eduID'])) {
        $eduID = $_GET['eduID'];
    }
	if (isset($_GET['school'])) {
        $school = $_GET['school'];
    }
	if (isset($_GET['degree'])) {
        $degree = $_GET['degree'];
    }
	if (isset($_GET['GPA'])) {
        $GPA = $_GET['GPA'];
    }
	if (isset($_GET['edLink'])) {
        $edLink = $_GET['edLink'];
    }
	if (isset($_GET['empLink'])) {
        $empLink = $_GET['empLink'];
    }
	if (isset($_GET['linkID'])) {
        $linkID = $_GET['linkID'];
    }
	if (isset($_GET['coverLetter'])) {
        $coverLetter = $_GET['coverLetter'];
    }
	if (isset($_GET['compName'])) {
        $compName = $_GET['compName'];
    }
	if (isset($_GET['timesViewed'])) {
        $timesViewed = $_GET['timesViewed'];
    }
	if (isset($_GET['pictureLink'])) {
        $pictureLink = $_GET['pictureLink'];
    }
//////Search users
if ($action === "updatePicture"){
	$query = "UPDATE user SET pictureLink = :pictureLink WHERE userID = :userID";
	$statement = $db->prepare ($query);
	$statement->bindValue (":userID", $userID);
	$statement->bindValue(":pictureLink", $pictureLink);
	$statement->execute();
}
if ($action === "searchLink")
{
	$query = "SELECT * FROM link WHERE link = :linkID";
	
		$statement = $db->prepare ($query);	
	$statement->bindValue(":linkID", $linkID);		
		$success = $statement->execute();
		$rows = $statement->fetch();
		echo json_encode(array('Result' => $rows));
		
	
}
if ($action === "loadLink")
{
	$query = "SELECT * FROM link WHERE userID = :userID AND active = '1'";
	
		$statement = $db->prepare ($query);	
	$statement->bindValue(":userID", $userID);		
		$success = $statement->execute();
		$rows = $statement->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode(array('Result' => $rows));
		
	
}
if ($action === "deactivateLink"){	
		$query = "UPDATE link SET active= '0' WHERE linkID = :linkID";
		$statement = $db->prepare ($query);
		$statement->bindValue (":linkID", $linkID);			
		$statement->execute();
	
}
if($action === "getLog"){
	$query = "SELECT * FROM users WHERE email =".$_GET['email'];
	
		$statement = $db->prepare ($query);	
		
		$success = $statement->execute();
		$rows = $statement->fetch();
		echo json_encode(array('Result' => $rows));
		
}
	//Insert the data from the initial landing page when using account creation
	if($action === "insertLanding"){
		$query = "INSERT INTO user (firstName, lastName, email, pw, isAdmin, isActive, isReported, isNew, styleType) VALUES (:firstName, :lastName, :email, :pw, :isAdmin, :isActive, :isReported, :isNew, :styleType)";
		$statement = $db->prepare ($query);
		$statement->bindValue(":firstName", $firstName);
		$statement->bindValue(":lastName", $lastName);
		$statement->bindValue(":email", $email);
		$statement->bindValue(":pw", $pw);
		$statement->bindValue(":isAdmin", "0");
		$statement->bindValue(":isActive", "0");
		$statement->bindValue(":isReported", "0");
		$statement->bindValue(":isNew", "1");
			$statement->bindValue(":styleType", "0");
		$success = $statement->execute();
	}
	if ($action === "updateStyle"){	
		$query = "UPDATE user SET styleType = :styleType WHERE userID = :userID";
		$statement = $db->prepare ($query);
		$statement->bindValue (":userID", $userID);	
		$statement->bindValue (":styleType", $styleType);		
		$statement->execute();
	
}
	//check username and password
	if($action === "loginUser"){
	$query = "SELECT userID FROM user WHERE email = :email AND BINARY pw = :pw";
		
		$statement = $db->prepare ($query);	
		$statement->bindValue(":pw", $pw);
		$statement->bindValue(":email", $email);
		$success = $statement->execute();
		$rows = $statement->fetch();
		echo json_encode(array('Result' => $rows));
	
	
}
	if($action === "setCookie"){
	$query = "SELECT * FROM user WHERE email = :email AND pw = :pw";
		
		$statement = $db->prepare ($query);	
		$statement->bindValue(":pw", $pw);
		$statement->bindValue(":email", $email);
		$success = $statement->execute();
		$rows = $statement->fetch();
		echo json_encode(array('Result' => $rows));	
}
//Updating user table from the basic info page
if ($action === "addBasicInfo"){	
		$query = "UPDATE user SET city= :city, state = :state, zip = :zip, phoneNumber = :phoneNumber, videoLink = :videoLink WHERE userID = :userID";
		$statement = $db->prepare ($query);
		$statement->bindValue (":userID", $userID);			
		$statement->bindValue (":city", $city);
		$statement->bindValue (":state", $state);
		$statement->bindValue (":zip", $zip);
		$statement->bindValue (":phoneNumber", $phoneNumber);
		$statement->bindValue (":videoLink", $videoLink);		
		$statement->execute();
	
}
//Add Schools
if ($action === "addEducation"){	
		$query = "INSERT INTO education (userID, school, degree, startDateMonth, startDateYear, endDateMonth, endDateYear, GPA) VALUES ( :userID, :school, :degree, :startMonth, :startYear, :endMonth, :endYear, :GPA)";
		$statement = $db->prepare ($query);
		$statement->bindValue (":userID", $userID);			
		$statement->bindValue (":school", $school);
		$statement->bindValue (":degree", $degree);
		$statement->bindValue (":startMonth", $startMonth);
		$statement->bindValue (":startYear", $startYear);
		$statement->bindValue (":endMonth", $endMonth );
		$statement->bindValue (":endYear", $endYear);
		$statement->bindValue (":GPA", $GPA);		
		$statement->execute();
}
//Add employers
if ($action === "addEmployer"){	
		$query = "INSERT INTO employer (userID, employerName, position, startDateMonth, startDateYear, endDateMonth, endDateYear, empLink, responsibilities, responsibilities1, responsibilities2, responsibilities3, responsibilities4, responsibilities5, responsibilities6, responsibilities7, responsibilities8, responsibilities9) VALUES(:userID, :employerName, :position, :startMonth, :startYear, :endMonth, :endYear, :empLink, :responsibilities, :responsibilities1, :responsibilities2, :responsibilities3, :responsibilities4, :responsibilities5, :responsibilities6, :responsibilities7, :responsibilities8, :responsibilities9)";
		$statement = $db->prepare ($query);
		$statement->bindValue (":userID", $userID);	
		$statement->bindValue (":employerName", $employerName);			
		$statement->bindValue (":position", $position);		
		$statement->bindValue (":startMonth", $startMonth);
		$statement->bindValue (":startYear", $startYear);
		$statement->bindValue (":endMonth", $endMonth);
		$statement->bindValue (":endYear", $endYear);		
		$statement->bindValue (":empLink", $empLink);
		$statement->bindValue (":responsibilities", $responsibilities);
		$statement->bindValue (":responsibilities1", $responsibilities1);
		$statement->bindValue (":responsibilities2", $responsibilities2);
		$statement->bindValue (":responsibilities3", $responsibilities3);
		$statement->bindValue (":responsibilities4", $responsibilities4);
		$statement->bindValue (":responsibilities5", $responsibilities5);
		$statement->bindValue (":responsibilities6", $responsibilities6);
		$statement->bindValue (":responsibilities7", $responsibilities7);
		$statement->bindValue (":responsibilities8", $responsibilities8);
		$statement->bindValue (":responsibilities9", $responsibilities9);
			
		$statement->execute();
}
if($action === "checkEmail"){
	$query = "SELECT * FROM user WHERE email = :email";
		
		$statement = $db->prepare ($query);	
		$statement->bindValue(":email", $email);
		$statement->execute();
		$rows = $statement->fetch();
		echo json_encode(array('Result' => $rows));	
	
}
if($action === "listEducation"){
	$query = "SELECT * FROM education WHERE userID = :userID";
		
		$statement = $db->prepare ($query);	
		$statement->bindValue(":userID", $userID);
		$statement->execute();
		$rows = $statement->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode(array('Result' => $rows));
	
}
if($action === "listEmployer"){
	$query = "SELECT * FROM employer WHERE userID = :userID";
		
		$statement = $db->prepare ($query);	
		$statement->bindValue(":userID", $userID);
		$statement->execute();
		$rows = $statement->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode(array('Result' => $rows));
	
}
	//get states
if($action === "getStates"){
	$query = "SELECT stateAbbr FROM state";
	
	$statement = $db->prepare ($query);
    $success = $statement->execute();
    $rows = $statement->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode(array('Result' => $rows));
}
	//get months
if($action === "getMonths"){
	$query = "SELECT monthVal FROM month";
		
		$statement = $db->prepare ($query);	
		$success = $statement->execute();
		$rows = $statement->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode(array('Result' => $rows));
	
}
	//get years
if($action === "getYears"){
	$query = "SELECT yearNum FROM year";
		
		$statement = $db->prepare ($query);	
		$success = $statement->execute();
		$rows = $statement->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode(array('Result' => $rows));
	
}
//admin pull to activate profile
if($action === "acceptUser"){
	$query = "UPDATE user SET isNew= '0', isActive = '1', isReported = '0' WHERE userID = :userID";
	$statement = $db->prepare ($query);
		$statement->bindValue (":userID", $userID);				
		$statement->execute();
}
if($action === "declineUser"){
	$query = "UPDATE user SET  isActive = '0', isReported = '1', isNew= '0' WHERE userID = :userID";
	$statement = $db->prepare ($query);
		$statement->bindValue (":userID", $userID);				
		$statement->execute();
}
if($action === "userReport"){
	$query = "UPDATE user SET  isReported = '1' WHERE userID = :userID";
	$statement = $db->prepare ($query);
		$statement->bindValue (":userID", $userID);				
		$statement->execute();
}
if($action === "suspendUser"){
	$query = "UPDATE user SET  isActive = '0' WHERE userID = :userID";
	$statement = $db->prepare ($query);
		$statement->bindValue (":userID", $userID);				
		$statement->execute();
}
if($action === "declineReport"){
	$query = "UPDATE user SET  isActive = '1', isReported = '0' WHERE userID = :userID";
	$statement = $db->prepare ($query);
		$statement->bindValue (":userID", $userID);				
		$statement->execute();
}
// update password
if($action === "updatePassword"){
		$query = "UPDATE user SET  pw = :pw WHERE userID = :userID";
	$statement = $db->prepare ($query);
		$statement->bindValue (":userID", $userID);
		$statement->bindValue (":pw", $pw);			
		$statement->execute();
}
//pulling to fill resume
if($action === "fillUser"){
	$query = "SELECT * FROM user WHERE userID = :userID";
		
		$statement = $db->prepare ($query);	
		$statement->bindValue(":userID", $userID);
		$success = $statement->execute();
		$rows = $statement->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode(array('Result' => $rows));
}
if($action === "fillEducation"){
	$query = "SELECT * FROM education WHERE eduID = :eduID";
		
		$statement = $db->prepare ($query);	
		$statement->bindValue(":eduID", $eduID);
		$success = $statement->execute();
		$rows = $statement->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode(array('Result' => $rows));
}
if($action === "fillEmployer"){
	$query = "SELECT * FROM employer WHERE empID = :empID";
		
		$statement = $db->prepare ($query);	
		$statement->bindValue(":empID", $empID);
		$success = $statement->execute();
		$rows = $statement->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode(array('Result' => $rows));
}
if($action === "fillCover"){
	$query = "SELECT * FROM coverletter WHERE userID = :userID";
		
		$statement = $db->prepare ($query);	
		$statement->bindValue(":userID", $userID);
		$success = $statement->execute();
		$rows = $statement->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode(array('Result' => $rows));
}
if($action === "fillVideo"){
	$query = "SELECT * FROM `user` WHERE userID = :userID AND videoLink != '' ";
		
		$statement = $db->prepare ($query);	
		$statement->bindValue(":userID", $userID);
		$success = $statement->execute();
		$rows = $statement->fetch();
		echo json_encode(array('Result' => $rows));
}
if($action === "updateVideo"){
    $query = "UPDATE user SET  videoLink = :videoLink WHERE userID = :userID";
    $statement = $db->prepare ($query);
    $statement->bindValue (":userID", $userID);
    $statement->bindValue (":videoLink", $videoLink);            
    $statement->execute();
}
if($action === "updateBasic"){
    $query = "UPDATE user SET  firstName = :firstName, lastName = :lastName, email = :email, city = :city, state = :state, zip = :zip, phoneNumber = :phoneNumber WHERE userID = :userID";
    $statement = $db->prepare ($query);
    $statement->bindValue (":userID", $userID);
	$statement->bindValue(":firstName", $firstName);
	$statement->bindValue(":lastName", $lastName);
	$statement->bindValue(":email", $email);
	$statement->bindValue (":city", $city);
	$statement->bindValue (":state", $state);
	$statement->bindValue (":zip", $zip);
	$statement->bindValue (":phoneNumber", $phoneNumber);
    $statement->execute();
}
if($action === "updateEducation"){
    $query = "UPDATE education SET  school = :school, degree = :degree, startDateMonth = :startMonth, startDateYear = :startYear, endDateMonth = :endMonth, endDateYear = :endYear, GPA = :GPA WHERE eduID = :eduID";
    $statement = $db->prepare ($query);
	 
  $statement->bindValue (":school", $school);
		$statement->bindValue (":degree", $degree);
		$statement->bindValue (":startMonth", $startMonth);
		$statement->bindValue (":startYear", $startYear);
		$statement->bindValue (":endMonth", $endMonth );
		$statement->bindValue (":endYear", $endYear);
		$statement->bindValue (":GPA", $GPA);
		 $statement->bindValue (":eduID", $eduID);
	
    $statement->execute();
}
if($action === "updateEmployment"){
    $query = "UPDATE employer SET  employerName = :employerName, position = :position, startDateMonth = :startMonth, startDateYear = :startYear, endDateMonth = :endMonth, endDateYear = :endYear, empLink = :empLink, responsibilities = :responsibilities, responsibilities1 = :responsibilities1, responsibilities2 = :responsibilities2, responsibilities3 = :responsibilities3, responsibilities4 = :responsibilities4, responsibilities5 = :responsibilities5, responsibilities6 = :responsibilities6, responsibilities7 = :responsibilities7, responsibilities8 = :responsibilities8, responsibilities9 = :responsibilities9 WHERE empID = :empID";
    $statement = $db->prepare ($query);
   
	$statement->bindValue (":employerName", $employerName);			
	$statement->bindValue (":position", $position);		
	$statement->bindValue (":startMonth", $startMonth);
	$statement->bindValue (":startYear", $startYear);
	$statement->bindValue (":endMonth", $endMonth);
	$statement->bindValue (":endYear", $endYear);		
	$statement->bindValue (":empLink", $empLink);
	$statement->bindValue (":responsibilities", $responsibilities);
	$statement->bindValue (":responsibilities1", $responsibilities1);
	$statement->bindValue (":responsibilities2", $responsibilities2);
	$statement->bindValue (":responsibilities3", $responsibilities3);
	$statement->bindValue (":responsibilities4", $responsibilities4);
	$statement->bindValue (":responsibilities5", $responsibilities5);
	$statement->bindValue (":responsibilities6", $responsibilities6);
	$statement->bindValue (":responsibilities7", $responsibilities7);
	$statement->bindValue (":responsibilities8", $responsibilities8);
	$statement->bindValue (":responsibilities9", $responsibilities9);
	$statement->bindValue (":empID", $empID);
    $statement->execute();
}
if($action === "addCover"){
    $query = "INSERT INTO coverletter (coverLetter, userID) VALUES (:coverLetter, :userID)";
    $statement = $db->prepare ($query);
    $statement->bindValue (":userID", $userID);
	$statement->bindValue(":coverLetter", $coverLetter);
$statement->execute();	
}
if($action === "updateCover"){
    $query = "UPDATE coverletter SET coverLetter = :coverLetter WHERE userID = :userID";
    $statement = $db->prepare ($query);
    $statement->bindValue (":userID", $userID);
	$statement->bindValue(":coverLetter", $coverLetter);	
	$statement->execute();
}
if($action === "checkLink"){
	$query = "SELECT * FROM link WHERE link = :linkCode";	
	$statement = $db->prepare ($query);	
	$statement->bindValue (":linkCode", $linkCode);
	$success = $statement->execute();
	$rows = $statement->fetch();
	echo json_encode(array('Result' => $rows));
	
}
if($action === "insertLink"){
	$query = "INSERT INTO link (userID, link, companyName) VALUES(:userID, :linkCode, :compName)";
	$statement = $db->prepare ($query);
	$statement->bindValue (":userID", $userID);	
	$statement->bindValue (":linkCode", $linkCode);			
	$statement->bindValue (":compName", $compName);	
		
	$statement->execute();
}
if ($action === "addCover"){	
	$query = "INSERT INTO coverLetter (userID, coverLetter) VALUES ( :userID, :coverLetter)";
	$statement = $db->prepare ($query);
	$statement->bindValue (":userID", $userID);			
	$statement->bindValue(":coverLetter", $coverLetter);
	$statement->execute();
}
if ($action === "linkViewCount"){
	$query = "UPDATE link SET timesViewed = :timesViewed WHERE linkID = :linkID";
	$statement = $db->prepare ($query);
	$statement->bindValue (":linkID", $linkID);
	$statement->bindValue(":timesViewed", $timesViewed);
	$statement->execute();
}
if ($action === "deleteEducation"){
	$query = "DELETE FROM education WHERE eduID = :eduID";
	$statement = $db->prepare ($query);
	$statement->bindValue (":eduID", $eduID);
	$statement->execute();
 }
 if ($action === "deleteEmployer"){
	$query = "DELETE FROM employer WHERE empID = :empID";
	$statement = $db->prepare ($query);
	$statement->bindValue (":empID", $empID);
	$statement->execute();
 }
 
?>