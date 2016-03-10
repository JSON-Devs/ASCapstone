-- phpMyAdmin SQL Dump
-- version 4.5.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 10, 2016 at 02:54 AM
-- Server version: 5.7.11-log
-- PHP Version: 7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db000484346`
--

-- --------------------------------------------------------

--
-- Table structure for table `coverletter`
--

CREATE TABLE `coverletter` (
  `coverID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `coverLetter` varchar(4000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coverletter`
--

INSERT INTO `coverletter` (`coverID`, `userID`, `coverLetter`) VALUES
(4, 102, 'C#, ASP.NET\n<br><br>\nWeb Design: PHP, JavaScript, HTML/CSS\nC++\n<br><br>\nSQL Management/MySQL Database management \n<br><br>\nNetwork Administration Skills: Active Directory, Remote Access, VPN, Altiris \nExcellent interpersonal skills. \n<br><br>\nStrong written and verbal communication skills. \n<br><br>\nOutstanding work ethic and strong desire to exceed goals.\n<br><br>\nExcellent written and verbal communication skills \n<br><br>\nAble to collaborate well with members of a dynamic team \n<br><br>\nProficient with Microsoft Office software including Word, Excel and PowerPoint\n<br><br>\nDemonstrated ability to prioritize and complete multiple tasks under tight deadlines'),
(5, 113, 'Bacon ipsum dolor amet beef ground round ham hock bacon. Chuck corned beef tenderloin, cupim frankfurter pork belly turducken alcatra pancetta. Cupim pig beef brisket venison sausage ham hock. Pork sirloin kielbasa, beef boudin filet mignon strip steak meatball andouille pork belly alcatra. Shankle pork belly rump, strip steak ground round pastrami doner venison pork chop meatloaf pancetta. Biltong doner frankfurter, fatback capicola shank tenderloin kevin ribeye boudin pancetta. Short ribs meatball beef ribs, biltong meatloaf pork loin kevin corned beef pastrami.\r\n<br/>\r\nPorchetta flank pork belly, venison chuck pancetta shank picanha ground round. Short loin meatball tenderloin venison ham hamburger tongue kevin shoulder doner. Ribeye tongue tenderloin jerky landjaeger. Boudin jowl chicken, t-bone cow beef shankle swine ham hock hamburger bresaola sirloin short loin ball tip kielbasa. Beef shankle cow landjaeger, turducken pork loin porchetta sirloin bresaola doner beef ribs. Turducken boudin leberkas shank corned beef filet mignon, porchetta beef kielbasa venison.'),
(6, 109, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec diam suscipit, elementum enim id, suscipit odio. Phasellus vel aliquam neque, eget pulvinar leo. Aliquam in justo tortor. Nunc efficitur quam quis arcu euismod, vel sagittis leo congue. Cras eu enim in nibh bibendum suscipit. Donec hendrerit ipsum ligula. In congue mollis nunc, vel varius elit finibus nec. Mauris ac feugiat enim, nec interdum diam. Maecenas non mi ligula'),
(8, 118, 'hi'),
(12, 133, 'Yo my name Shaquila'),
(14, 115, 'I take a lot of interest in software and I take a lot of pride in my work. I’m currently educating myself in this field, and along with that, computers have always been a hobby of mine. \nI am currently enrolled at <b>NEIT</b> to receive an associates degree in information technology/software engineering come this March. My skills include but are not limited to:\n<br><br>\n• HTML/CSS, JavaScript, jQuery, PHP, ASP.net, MySQL\n<br><br>\n• C++, C#, SQL Server\n<br><br>\n• Microsoft Office, Visio, Visual Studio\n<br><br>\n• Adobe Photoshop, Dreamweaver\n<br><br>\nI like to tinker around at home either software or hardware to learn more about the ever-growing field of computers. Some personal projects have come out of that, and also currently I am part of a group capstone project in college. I can take a lead position if need be, but I strongly believe that everyone has an equal part in the work that they do. Being time-oriented and having strong ambition are my best work qualities.'),
(49, 159, 'This is where your Cover Letter will go! Hit the edit button to Customize.'),
(51, 160, 'This is where your Cover Letter will go! Hit the edit button to Customize.'),
(53, 162, 'This is where your Cover Letter will go! Hit the edit button to Customize.'),
(55, 165, 'This is where your Cover Letter will go! Hit the edit button to Customize.'),
(57, 166, 'This is where your Cover Letter will go! Hit the edit button to Customize.'),
(59, 167, ''),
(61, 168, 'This is where your Cover Letter will go! Hit the edit button to Customize.');

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `eduID` int(11) NOT NULL,
  `userID` int(100) DEFAULT NULL,
  `school` varchar(100) DEFAULT NULL,
  `degree` varchar(100) DEFAULT NULL,
  `startDateMonth` varchar(50) DEFAULT NULL,
  `startDateYear` varchar(50) DEFAULT NULL,
  `endDateMonth` varchar(50) DEFAULT NULL,
  `endDateYear` varchar(50) DEFAULT NULL,
  `GPA` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`eduID`, `userID`, `school`, `degree`, `startDateMonth`, `startDateYear`, `endDateMonth`, `endDateYear`, `GPA`) VALUES
(53, 101, 'NEIT', 'SE', 'March', '2010', 'march', '2016', '3.69'),
(56, 103, 'neit', 'se', 'May', '2014', 'January', '2010', '4.0'),
(57, 103, 'neit', 'se', 'May', '2014', 'January', '2010', '4.0'),
(58, 108, 'fasdaf', 'fdsafsda', 'April', '2010', 'March', '2010', '4'),
(59, 113, 'NEIT', 'Software Engineering', 'June', '2014', 'May', '2016', '3.95'),
(62, 114, 'NEIT', 'st5uff', 'January', '2010', 'January', '2016', '4'),
(63, 114, 'here', 'there', 'January', '2010', 'January', '2013', '2'),
(64, 115, 'Upper Cape Tech', 'Automotive', 'August', '2010', 'June', '2014', '4'),
(65, 115, 'NEIT', 'Software Engineering', 'October', '2014', 'May', '2016', '3.9'),
(71, 117, 'fdsafads', 'fdasfads', 'April', '2012', 'April', '2012', '5'),
(72, 118, 'Neit', 'software engineer', 'October', '2014', 'March', '2016', '3.7'),
(74, 113, 'Test School', 'Networking', 'March', '2012', 'April', '2012', '4.0'),
(78, 126, 'h', 'h', 'January', '2010', 'January', '2010', '2'),
(80, 127, 'neit', 'ne', 'May', '2012', 'May', '2016', '4.0'),
(86, 109, 'TestSchool1', 'Something', 'May', '2011', 'April', '2011', '2'),
(106, 128, 'Someschool', 'Something', 'January', '2010', 'January', '2010', '1'),
(112, 129, 'asd', 'dsa', 'January', '2010', 'January', '2013', '4'),
(115, 102, 'NEIT', 'IT - Software Engineering (Associates)', 'January', '2010', 'January', '2010', '3.9'),
(116, 134, 'BSU', 'English', 'September', '2014', 'May', '2016', '4'),
(117, 135, 'NEIT', 'AS - Bsing', 'January', '2010', 'January', '2010', '3.8'),
(118, 136, 'fdas', 'fdas', 'January', '2010', 'January', '2010', '2'),
(119, 137, 'fsdfsd', 'fsdfdsf', 'January', '2010', 'January', '2010', '2'),
(120, 138, 'sdgdfg', 'gdfgdf', 'January', '2010', 'January', '2010', '3'),
(121, 141, 'Wolf University', 'Howling', 'February', '2012', 'June', '2015', '0.1'),
(122, 141, 'Harvard', 'Laws', 'July', '2014', 'June', '2015', '0.0'),
(123, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(124, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(125, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(126, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(127, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(128, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(129, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(130, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(131, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(132, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(133, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(134, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(135, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(136, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(137, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(138, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(139, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(140, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(141, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(142, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(143, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(144, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(145, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(146, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(147, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(148, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(149, 142, 'Harvard', 'Laws', 'May', '2013', 'August', '2016', '4.0'),
(150, 148, 'New England Institute of Technology', 'AS - IT Software Engineering', 'May', '2014', 'March', '2016', '3.9'),
(152, 152, 'NEIT', 'SE', 'January', '2010', 'January', '2016', '4'),
(153, 152, 'LOL', '1234', 'January', '2010', 'January', '2013', '3'),
(154, 102, 'CCRI', 'AS - Computer Science', 'January', '2010', 'January', '2010', '3.7'),
(155, 113, 'Test', 'ded', 'January', '2010', 'January', '2010', '4'),
(156, 153, 'Test', 'gege', NULL, NULL, NULL, NULL, '4'),
(157, 153, 'Test', 'gege', NULL, NULL, NULL, NULL, '4'),
(158, 154, 'sdfsa', 'fdsafds', NULL, NULL, NULL, NULL, '3.0'),
(159, 155, 'test', 'test', NULL, NULL, NULL, NULL, '4'),
(160, 156, 'Harvard', 'Haha nope', 'April', '1965', 'August', '1974', '2'),
(161, 158, 'fdsafd', 'fdsafsda', 'January', '1960', 'January', '1960', '4'),
(162, 160, 'NEIT', 'Software Engineering', 'October', '2014', 'March', '2016', '3.95'),
(163, 102, 'fsdafasdf', 'fdsfsd', 'January', '1960', 'January', '1960', '3'),
(164, 109, 't', 't', 'January', '1960', 'January', '1960', '0'),
(165, 166, 'NEIT', 'Software Engineering', 'June', '2014', 'March', '2016', '3.95'),
(166, 166, 'NEIT', 'Software Engineering BS', 'March', '2016', 'December', '2016', '3.95'),
(168, 168, 'neit', 'computers', 'January', '2014', 'January', '2016', '4.00');

-- --------------------------------------------------------

--
-- Table structure for table `employer`
--

CREATE TABLE `employer` (
  `empID` int(11) NOT NULL,
  `userID` int(100) NOT NULL,
  `employerName` varchar(100) DEFAULT NULL,
  `position` varchar(100) DEFAULT NULL,
  `startDateMonth` varchar(150) DEFAULT NULL,
  `startDateYear` varchar(150) DEFAULT NULL,
  `endDateMonth` varchar(50) NOT NULL,
  `endDateYear` varchar(50) NOT NULL,
  `empLink` varchar(200) DEFAULT NULL,
  `responsibilities` varchar(1000) DEFAULT NULL,
  `responsibilities1` varchar(400) DEFAULT NULL,
  `responsibilities2` varchar(400) DEFAULT NULL,
  `responsibilities3` varchar(400) DEFAULT NULL,
  `responsibilities4` varchar(400) DEFAULT NULL,
  `responsibilities5` varchar(400) DEFAULT NULL,
  `responsibilities6` varchar(400) DEFAULT NULL,
  `responsibilities7` varchar(400) DEFAULT NULL,
  `responsibilities8` varchar(400) DEFAULT NULL,
  `responsibilities9` varchar(4000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employer`
--

INSERT INTO `employer` (`empID`, `userID`, `employerName`, `position`, `startDateMonth`, `startDateYear`, `endDateMonth`, `endDateYear`, `empLink`, `responsibilities`, `responsibilities1`, `responsibilities2`, `responsibilities3`, `responsibilities4`, `responsibilities5`, `responsibilities6`, `responsibilities7`, `responsibilities8`, `responsibilities9`) VALUES
(11, 101, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(18, 108, 'fdsafsda', 'fdsafasd', 'March', '2010', 'May', '2010', 'fdsafsdafasd', 'fdsafsdaf', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(19, 108, 'asdfasdf', 'asdfasfsda', 'March', '2010', 'May', '2010', 'asdfaf', 'fdafsda', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(20, 113, 'Test Company', 'CEO', 'January', '1960', 'January', '1971', 'http://www.test.com', 'Nothing, I\'m the CEO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 113, 'Test Company 2', 'CEO3', 'January', '2010', 'January', '2010', 'www.google.com', 'Nothing, I\'m the CEO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(22, 114, 'hi', 'bye', 'January', '2010', 'January', '2013', 'www.hello.com', 'nothing', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(23, 114, 'hi', 'bye', 'January', '2010', 'January', '2013', 'www.hello.com', 'nothing', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(24, 114, 'hi', 'bye', 'January', '2010', 'January', '2013', 'www.hello.com', 'nothing', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(25, 115, 'Sullivan Tire', 'General service technician', 'November', '2012', 'June', '2014', '', 'Diagnostics and repairs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(26, 115, 'CarQuest', 'Warehouse', 'July', '2014', 'December', '2016', '', 'Maintaining inventory', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(28, 126, '', '', 'January', '2010', 'January', '2010', '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(29, 126, 'n', '', 'January', '2010', 'January', '2010', 'n', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(30, 126, 'n', 'n', 'January', '2010', 'January', '2010', 'n', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(31, 126, 'n', 'n', 'January', '2010', 'January', '2010', '', 'n', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(32, 126, 'j', 'j', 'January', '2010', 'January', '2010', '', 'j', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(33, 127, 'ddfdfdsfdf', 'dsfdfsddfs', 'April', '2010', 'January', '2010', 'ddffd', 'dsdfdfdsf', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(60, 109, 'Neit', 'help desk', 'January', '2010', 'January', '2010', 'www.neit.edu', 'help desk', 'Do stuff', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(62, 128, 'fda', 'fda', 'January', '2010', 'January', '2010', 'http://www.neit.edu/', 'fda', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(77, 129, 'qwerty', 'ytrewq', 'January', '2010', 'January', '2015', '', 'meh', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(83, 109, 'Turbine', 'Customer Service', 'January', '2010', 'January', '2010', 'http:\\\\www.turbine.com', 'Help Players', 'Run the games', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(86, 135, 'Cisco', 'Installer', 'February', '2010', 'November', '2015', 'cisco.com', 'Doing things/Watching stuff/Listening to people', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(95, 137, 'fdsafsd', 'fdsfsdf', 'January', '2010', 'January', '2010', '', 'asfdds', 'fdsfds', 'fdsfds', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(96, 138, 'gfdg', 'gdfgdf', 'January', '2010', 'January', '2010', '', 'fdsfdsf', 'fsdfds', 'fdsfds', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(97, 138, 'Mike', 'Test', 'January', '2010', 'January', '2010', '', 'Blow', 'me', 'down', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(98, 113, 'ffffff', 'ffddffd', 'March', '2012', 'March', '2011', 'http://www.test.com', 'near', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(99, 141, 'Wolf Inc', 'Head Wolf', 'February', '2012', 'December', '2016', 'http://www.wolf.com', 'none', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(100, 141, 'Wolf Inc', 'Head Wolf', 'February', '2012', 'December', '2016', 'http://www.wolf.com', 'none', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(102, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(103, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(104, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(105, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(106, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(107, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(108, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(109, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(110, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(111, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(112, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(113, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(114, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(115, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(116, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(117, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(118, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(119, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(120, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(121, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(122, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(123, 142, 'Stark Industries', 'CEO', 'March', '2010', 'December', '2010', 'http://www.ironman.com', 'CEO', 'Flying', 'Saving People', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(124, 148, 'NEIT', 'Help Desk', 'January', '2010', 'January', '2010', 'http://www.neit.edu/', 'Help users', 'Reset passwords', 'Maintain Computers in all labs', 'Wipe HDD\'s for old computers', 'Answer Phones', NULL, NULL, NULL, NULL, NULL),
(125, 152, 'Stuff', 'This one', 'February', '2010', 'July', '2015', '', 'nothing', 'something', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(130, 102, 'New England Institute of Technology', 'Help Desk Representative', 'January', '2010', 'January', '2010', 'http://www.neit.edu/', 'Provide in-person and telephone technical support for students, teachers and school staff?', '\nTroubleshoot, repair all computers in computer labs as well as faculty and administration.', '\nApply OS updates and patches to all computers.', '\nInstall and test software applications, locally and remotely using Altiris.', '\nDrive wipe retired computers for disposal.', '\nPerform hardware upgrades, i.e.  Hard Drives and Memory.', '\nTroubleshoot Equitrac printing issues.', '\nMaintain student, teacher and staff accounts on the network, including updating and resetting passwords and full account activations and updates.', NULL, NULL),
(133, 158, 'fdsafsd', 'fdsfds', 'January', '1960', 'January', '1960', 'fdsfds', 'fdsfds', 'fdsfsd', 'fdsfds', 'fdsfdsf', 'fdsfdsfds', NULL, NULL, NULL, NULL, NULL),
(134, 159, 'Galactic Empire', 'Second in Command', 'May', '1977', 'September', '1985', 'www.starwars.com', 'Chasing Winnebagos', 'Attempting to destroy Planet', 'Fighting Yogurt', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(135, 160, 'None', 'None', 'January', '1984', 'July', '2016', 'http://www.google.com', 'none', 'test', 'idk', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(136, 160, 'ggg', 'ggfg', 'January', '1984', 'July', '2016', 'fff', 'fff', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(141, 166, 'None', 'None', 'March', '2014', 'July', '2015', 'www.google.com', 'none', 'testing', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(142, 166, 'None2', 'None2', 'March', '2014', 'July', '2015', 'www.google.com', 'none', 'testing', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(143, 166, 'None3', 'None2', 'March', '2014', 'July', '2015', 'www.google.com', 'none', 'testing', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(145, 168, 'insurence ', 'ceo', 'January', '2016', 'January', '2016', '', 'everything', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `link`
--

CREATE TABLE `link` (
  `linkID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `link` varchar(250) NOT NULL,
  `companyName` varchar(250) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `timesViewed` int(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `link`
--

INSERT INTO `link` (`linkID`, `userID`, `link`, `companyName`, `active`, `timesViewed`) VALUES
(1, 101, 'AAAAA1', 'Test Company', 0, 7),
(2, 102, '111111', NULL, 0, 2),
(3, 116, 'xg15Ui', NULL, 1, 2),
(12, 116, 'OJCxCf', NULL, 0, 3),
(13, 109, 'Z§lM16', 'google', 0, 0),
(14, 109, 'kgDRY9', 'google', 0, 1),
(15, 109, 'p7XZ0t', 'yoututbe', 0, 0),
(16, 109, 'aomL3f', 'yahoo', 0, 1),
(17, 101, '7bow1k', 'GTech', 1, 1),
(18, 109, 'yfQZVk', '', 0, 5),
(19, 109, '7uBucT', 'test', 0, 4),
(20, 109, 'YkxEjK', 'NEIT', 0, 1),
(21, 113, 'ABC123', 'Me', 0, 5),
(22, 109, 'YvaZMt', 'google', 0, 0),
(23, 109, 'vDIM4u', 'microsoft', 0, 0),
(24, 102, 'EZyAsu', 'Turbine', 0, 16),
(25, 115, '7V1mG3', 'Microsoft', 0, 0),
(26, 102, 'oOeCXS', 'GTech', 0, 1),
(27, 102, '67aohm', 'Waters', 1, 6),
(28, 102, 'a6Ue29', 'CVS', 1, 4),
(29, 102, 'uKsus6', 'IGT', 0, 0),
(30, 113, 'bNFtoV', 'Test', 0, 1),
(31, 113, '2I9SvH', 'Testing', 0, 0),
(32, 115, 'aTgLq7', 'Microsoft', 0, 1),
(33, 113, 'HU9o3m', 'Target', 0, 1),
(34, 115, '0BoEqD', 'Microsoft', 0, 4),
(35, 115, '8baTIy', 'Google', 1, 1),
(36, 160, 'GB2tVb', 'ttesr', 1, 6),
(37, 109, 'P7vX6U', 'cvs', 0, 0),
(38, 109, 'fCvW4a', 'cvs', 1, 0),
(39, 115, 'U3311N', 'Microsoft', 1, 0),
(40, 115, 'FL5xm8', 'Bethesda Softworks', 1, 5),
(41, 167, '44qjvZ', '', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `month`
--

CREATE TABLE `month` (
  `monthID` int(11) NOT NULL,
  `monthVal` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `month`
--

INSERT INTO `month` (`monthID`, `monthVal`) VALUES
(1, 'January'),
(2, 'February'),
(3, 'March'),
(4, 'April'),
(5, 'May'),
(6, 'June'),
(7, 'July'),
(8, 'August'),
(9, 'September'),
(10, 'October'),
(11, 'November'),
(12, 'December');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `stateID` smallint(5) UNSIGNED NOT NULL COMMENT 'PK: Unique state ID',
  `stateName` varchar(32) COLLATE utf8_unicode_ci NOT NULL COMMENT 'State name with first letter capital',
  `stateAbbr` varchar(8) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT AS `Optional state abbreviation (US is 2 capital letters)`
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`stateID`, `stateName`, `stateAbbr`) VALUES
(1, 'Alabama', 'AL'),
(2, 'Alaska', 'AK'),
(3, 'Arizona', 'AZ'),
(4, 'Arkansas', 'AR'),
(5, 'California', 'CA'),
(6, 'Colorado', 'CO'),
(7, 'Connecticut', 'CT'),
(8, 'Delaware', 'DE'),
(9, 'District of Columbia', 'DC'),
(10, 'Florida', 'FL'),
(11, 'Georgia', 'GA'),
(12, 'Hawaii', 'HI'),
(13, 'Idaho', 'ID'),
(14, 'Illinois', 'IL'),
(15, 'Indiana', 'IN'),
(16, 'Iowa', 'IA'),
(17, 'Kansas', 'KS'),
(18, 'Kentucky', 'KY'),
(19, 'Louisiana', 'LA'),
(20, 'Maine', 'ME'),
(21, 'Maryland', 'MD'),
(22, 'Massachusetts', 'MA'),
(23, 'Michigan', 'MI'),
(24, 'Minnesota', 'MN'),
(25, 'Mississippi', 'MS'),
(26, 'Missouri', 'MO'),
(27, 'Montana', 'MT'),
(28, 'Nebraska', 'NE'),
(29, 'Nevada', 'NV'),
(30, 'New Hampshire', 'NH'),
(31, 'New Jersey', 'NJ'),
(32, 'New Mexico', 'NM'),
(33, 'New York', 'NY'),
(34, 'North Carolina', 'NC'),
(35, 'North Dakota', 'ND'),
(36, 'Ohio', 'OH'),
(37, 'Oklahoma', 'OK'),
(38, 'Oregon', 'OR'),
(39, 'Pennsylvania', 'PA'),
(40, 'Rhode Island', 'RI'),
(41, 'South Carolina', 'SC'),
(42, 'South Dakota', 'SD'),
(43, 'Tennessee', 'TN'),
(44, 'Texas', 'TX'),
(45, 'Utah', 'UT'),
(46, 'Vermont', 'VT'),
(47, 'Virginia', 'VA'),
(48, 'Washington', 'WA'),
(49, 'West Virginia', 'WV'),
(50, 'Wisconsin', 'WI'),
(51, 'Wyoming', 'WY');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pw` varchar(50) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `isReported` tinyint(1) NOT NULL,
  `isNew` tinyint(1) NOT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `zip` varchar(15) DEFAULT NULL,
  `phoneNumber` varchar(50) DEFAULT NULL,
  `videoLink` varchar(250) DEFAULT NULL,
  `pictureLink` varchar(400) DEFAULT NULL,
  `styleType` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `email`, `pw`, `isAdmin`, `isActive`, `isReported`, `isNew`, `firstName`, `lastName`, `city`, `state`, `zip`, `phoneNumber`, `videoLink`, `pictureLink`, `styleType`) VALUES
(101, 'se.nathan.tefft@gmail.com', 'Chargerpride75', 1, 1, 0, 0, 'Nathan', 'Tefft', 'Ashaway', 'RI', '02804', '(401)555-5555', 'GuLcxg5VGuo', NULL, ''),
(102, 'michael.day123@yahoo.com', '1234', 0, 1, 0, 0, 'Michael', 'Day', 'Pawtucket', 'RI', '02861', '(401)439-3148', '', 'https://scontent-lga3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-0/q81/p206x206/10453112_1484676471807470_4126795464931209331_n.jpg?oh=4d6e560dfb4a5288b5f090ef6da03e42&oe=5751213A', '0'),
(103, 'se.nathan.tefft@gmailm', 'test', 0, 1, 0, 0, 'Joe', 'Shmo', 'westerl', 'AL', 'test', '(401)111-111', '', NULL, '2'),
(107, 'jlgagnon1@email.neit.edu', 'dancingbaNaNas101', 0, 1, 0, 0, 'Jason', 'Gagnon', 'Manville', 'RI', '02838', '(401)651-6147', 'NlLEReokX14', NULL, ''),
(109, 'emails@emails.emails', 'nunya', 0, 1, 0, 0, 'Dave', 'Crocket', 'Lybia', 'GA', '02891', '(401)111-1111', '', 'http://www.inland-boats.com/images/PICT0115.JPG', '0'),
(113, 'nascargordenfan0@aim.com', 'letmein', 1, 1, 1, 0, 'Jason', 'Gagnon', 'Lincoln', 'RI', '02865', '(401)333-3333', 'epcc9X1aS7o', 'http://rs820.pbsrc.com/albums/zz123/SonicBrawler/bananamario.gif~c200', '2'),
(115, 'tylergprada@gmail.com', 'monkeywrench', 0, 1, 0, 0, 'Tyler', 'Prada', 'East Wareham', 'MA', '02538', '(508)577-4631', 'S5RDXlRXh8c', 'https://scontent-lga3-1.xx.fbcdn.net/hphotos-xal1/v/t1.0-9/12540898_1218612784834131_4285334960318504094_n.jpg?oh=f94b50bc0a96692ce96b79db4e7d9451&oe=574AA408', '2'),
(118, 'nrt1994@aol.com', 'Chargerpride75', 0, 1, 0, 0, 'Nathan', 'Tefft', 'Ashaway', 'RI', '02804', '(401)573-5021', 'qnydFmqHuVo', NULL, ''),
(132, 'lalalenny@gmail.com', '12345', 0, 1, 0, 0, 'larry', 'lent', 'lool', 'ID', '54215', '(789)456-3210', '', NULL, ''),
(133, 'shaqteq@patron.org', '12345', 0, 1, 0, 0, 'shaquila', 'tequila', 'places', 'VT', '02569', '(789)654-12530', '', NULL, ''),
(134, 'christimeminos@gmail.com', 'supriseme', 0, 1, 0, 0, 'Chrissie', 'Minos', 'East Falmouth', 'MA', '02536', '(707)803-9202', '', NULL, '0'),
(139, 'capncrunch@merica.com', 'StarkSucks1', 0, 1, 0, 0, 'Captain', 'America', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
(140, 'germer@gmail.com', '12345', 0, 1, 0, 0, 'Gerold', 'Merold', 'places', 'HI', '96325', '(582)123-4566', '', NULL, '0'),
(141, 'johndoe@gmail.com', '11223344', 0, 1, 0, 0, 'John', 'Doe', 'Marker', 'AL', '01234', '(555)555-5555', '', NULL, '0'),
(142, 'ironman@save.com', 'iamironman', 0, 1, 0, 0, 'Iron', 'Man', 'Starkville', 'TX', '55555', '(555)867-5309', 'http://www.youtube.com/watch?v=YJU2RYE8a6Y', NULL, '0'),
(152, 'tyler@gmail.com', '12345', 0, 1, 0, 0, 'Tyler2', 'Prada2', 'wareham', 'MA', '02538', '(508)477-4631', 'y71r1jhMdRk', 'http://rack.2.mshcdn.com/media/ZgkyMDE1LzA5LzEzLzNjL2dvb2dsZXRodW1iLmIyNGE0LmpwZwpwCXRodW1iCTk1MHg1MzQjCmUJanBn/63126c72/af4/google-thumb.jpg', '2'),
(159, 'DHelmet@darkside.gov', '12345', 0, 0, 0, 1, 'Dark', 'Helmet', 'Tatooine', 'NV', '98412', '(401)111-1111', '5q_swCneezU', 'http://38.media.tumblr.com/avatar_5af96bb2f6ba_128.png', '0'),
(160, 'testing@this.com', 'letmein', 0, 0, 0, 1, 'Jason', 'Gagnon', 'Lincoln', 'RI', '02865', '(401)555-9853', '', NULL, '0'),
(161, 'tester@tester.email', 'pass', 0, 0, 0, 1, 'test', 'test', 'as', 'AL', '02891', '(401)111-1111', '', NULL, '0'),
(162, 'Jhet@gmail.org', '12345', 0, 0, 0, 1, 'James', 'hetfield', 'las vegas', 'NV', '02563', '(555)888-9632', '', NULL, '0'),
(163, 'KingKirk@gmail.net', '12345', 0, 0, 0, 1, 'Kirk', 'Hammett', 'Las Vegas', 'NV', '45586', '(987)456-3211', '', NULL, '0'),
(164, 'Email@email.hello', 'test', 0, 0, 0, 1, 'Nathan', 'Tefft', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
(165, 'ee@ee.e', 'ee', 0, 0, 0, 1, 'nathan', 'tefft', 'city', 'AL', '02891', '()-)-', '', NULL, '0'),
(166, 'ltest@gmail.com', '1234', 0, 0, 0, 1, 'Jason', 'Gagnon', 'Lincoln', 'RI', '02865', '(333)333-3333', '', NULL, '2'),
(167, 'gg@gg.gg', 'lel', 0, 0, 0, 1, 'J', 'G', 'Lincoln', 'RI', '02865', '(401)333-3333', '', 'http://vignette2.wikia.nocookie.net/s4s/images/9/94/Top_lel.jpg/revision/latest?cb=20130608224602', '2'),
(168, 'sarasmith@yahoo.com', 'neit', 0, 1, 0, 0, 'sarah', 'smith', 'lincoln', 'RI', '02838', '(401)555-5555', '', NULL, '0');

-- --------------------------------------------------------

--
-- Table structure for table `year`
--

CREATE TABLE `year` (
  `yearID` int(11) NOT NULL,
  `yearNum` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `year`
--

INSERT INTO `year` (`yearID`, `yearNum`) VALUES
(1, '1960'),
(2, '1961'),
(3, '1962'),
(4, '1963'),
(5, '1964'),
(6, '1965'),
(7, '1966'),
(8, '1967'),
(9, '1968'),
(10, '1969'),
(11, '1970'),
(12, '1971'),
(13, '1972'),
(14, '1973'),
(15, '1974'),
(16, '1975'),
(17, '1976'),
(18, '1977'),
(19, '1978'),
(20, '1979'),
(21, '1980'),
(22, '1981'),
(23, '1982'),
(24, '1983'),
(25, '1984'),
(26, '1985'),
(27, '1986'),
(28, '1987'),
(29, '1988'),
(30, '1989'),
(31, '1990'),
(32, '1991'),
(33, '1992'),
(34, '1993'),
(35, '1994'),
(36, '1995'),
(37, '1996'),
(38, '1997'),
(39, '1998'),
(40, '1999'),
(41, '2000'),
(42, '2001'),
(43, '2002'),
(44, '2003'),
(45, '2004'),
(46, '2005'),
(47, '2006'),
(48, '2007'),
(49, '2008'),
(50, '2009'),
(51, '2010'),
(52, '2011'),
(53, '2012'),
(54, '2013'),
(55, '2014'),
(56, '2015'),
(57, '2016');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coverletter`
--
ALTER TABLE `coverletter`
  ADD PRIMARY KEY (`coverID`),
  ADD UNIQUE KEY `userID` (`userID`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`eduID`);

--
-- Indexes for table `employer`
--
ALTER TABLE `employer`
  ADD PRIMARY KEY (`empID`);

--
-- Indexes for table `link`
--
ALTER TABLE `link`
  ADD PRIMARY KEY (`linkID`);

--
-- Indexes for table `month`
--
ALTER TABLE `month`
  ADD PRIMARY KEY (`monthID`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`stateID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `year`
--
ALTER TABLE `year`
  ADD PRIMARY KEY (`yearID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coverletter`
--
ALTER TABLE `coverletter`
  MODIFY `coverID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `eduID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;
--
-- AUTO_INCREMENT for table `employer`
--
ALTER TABLE `employer`
  MODIFY `empID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;
--
-- AUTO_INCREMENT for table `link`
--
ALTER TABLE `link`
  MODIFY `linkID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT for table `month`
--
ALTER TABLE `month`
  MODIFY `monthID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `stateID` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'PK: Unique state ID', AUTO_INCREMENT=52;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;
--
-- AUTO_INCREMENT for table `year`
--
ALTER TABLE `year`
  MODIFY `yearID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `coverletter`
--
ALTER TABLE `coverletter`
  ADD CONSTRAINT `coverletter_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
