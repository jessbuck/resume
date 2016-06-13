/*
This is empty on purpose! Your code to build the resume will go here.
 */

displayBio();
displayWork();
displayEducation();
displayOnlineClasses();

//$("#mapDiv").append(googleMap);

var projects = [];
projects.display = function() {
  var index = 0;
  projects.projects = [];
  projects.projects[index] = {};
  projects.projects[index].title = "Project 1";
  projects.projects[index].dates = "June 2016";
  projects.projects[index].description = "Project 1 Description";
  projects.projects[index].image = "images/sand.jpg";
  index++;

  projects.projects[index] = {};
  projects.projects[index].title = "Project 2";
  projects.projects[index].dates = "June 2016";
  projects.projects[index].description = "Project 2 Description";
  projects.projects[index].image = "images/sunrise.jpg";
  index++;

  projects.projects[index] = {};
  projects.projects[index].title = "Project 3";
  projects.projects[index].dates = "June 2016";
  projects.projects[index].description = "Project 3 Description";
  projects.projects[index].image = "images/shoe.jpg";
  index++;

  for(i in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $("#projects").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $("#projects").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $("#projects").append(formattedDescription);
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);
    $("#projects").append(formattedImage);
  }
}

projects.display();

function displayBio() {
  var bio = {};
  bio.name = "Jess Buck";
  bio.role = "Front-End Developer";
  bio.contact = {};
  bio.contact.email = "jessica.e.buck@gmail.com";
  bio.contact.phone = "732-654-2825";
  bio.contact.github = "jess19";
  bio.contact.linkedIn = "jessicaebuck"
  bio.contact.location = "Red Bank, NJ";
  bio.pictureUrl = "images/me.jpg";
  bio.skills = ["HTML", "CSS", "JavaScript"];

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contact.phone);
  var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
  var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", "linkedIn");
  formattedContactGeneric = formattedContactGeneric.replace("%data%", bio.contact.linkedIn);
  $("#topContacts").append(formattedMobile + formattedEmail + formattedContactGeneric + formattedGithub + formattedLocation);

  var formattedPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
  $("#header").append(formattedPic);

  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(" " + formattedSkill);
  }
}

function displayWork() {
  var index = 0;
  var experience = [];
  experience[index] = {};
  experience[index].title = "Software Developer";
  experience[index].employer = "Hybrid Healthcare Communications";
  experience[index].location = "Red Bank, NJ";
  experience[index].dates = "October 2014 - January 2016";
  experience[index].description =
  "•	Cloned iOS applications as Windows store apps using C# and XAML and added new features." + "<br/>" +
  "•	Integrated a custom PDF viewer into a Windows application for consistency across the user base." + "<br/>" +
  "•	Added an invoice feature to an internal time-tracking tool using Ruby on Rails." + "<br/>" +
  "•	Resolved user interaction and cross-browser compatibility issues for an externally developed web project." + "<br/>" +
  "•	Made user interface modifications to an existing iOS application.";
  index++;

  experience[index] = {};
  experience[index].title = "Account Manager/Programmer Analyst";
  experience[index].employer = "Health Care Software";
  experience[index].location = "Wall Township, NJ";
  experience[index].dates = "February 2014 – October 2014";
  experience[index].description =
  "•	Refactored and rewrote legacy system applications to support a new user interface." + "<br/>" +
  "•	Contributed to design decisions to increase efficiency and usability.";
  index++;

  experience[index] = {};
  experience[index].title = "Web Developer Intern";
  experience[index].employer = "Educational Travel Adventures";
  experience[index].location = "Freehold, NJ";
  experience[index].dates = "August 2013 - February 2014";
  experience[index].description =
  "•	Implemented a new feature for an internal web application." + "<br/>" +
  "•	Assisted with design and researched PHP libraries and jQuery plugins to evaluate for use with the application.";
  index++;

  experience[index] = {};
  experience[index].title = "Student Research Assistant";
  experience[index].employer = "Monmouth University";
  experience[index].location = "West Long Branch, NJ";
  experience[index].dates = "June 2012 - August 2013";
  experience[index].description =
  "•	Developed an Android mobile application and backend server to guide users on a campus tour and abstracted it into one for general tourism purposes." + "<br/>" +
  "•	Presented the mobile application to an audience of trustees, faculty and students at the Summer Research Program (SRP) Symposium." + "<br/>" +
  "•	Met with the MU Admissions Office to discuss potential use of the application for the annual Open House at Admissions’ request after the SRP Symposium presentation.";
  index++;

  experience[index] = {};
  experience[index].title = "Software Prototype Developer";
  experience[index].employer = "Rapid Response Instutute at Monmouth University";
  experience[index].location = "West Long Branch, NJ";
  experience[index].dates = "December 2011 - March 2012";
  experience[index].description =
  "•	Developed Android applications designed to manage shelter resources and enable state level emergency operations officials to direct the general population to shelters. " + "<br/>" +
  "•	Created user guides to document the applications.";
  index++;

  for(i in experience) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", experience[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", experience[i].title);
    $("#workExperience").append(formattedEmployer + formattedTitle);
    var formattedDates = HTMLworkDates.replace("%data%", experience[i].dates);
    $("#workExperience").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", experience[i].location);
    $("#workExperience").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", experience[i].description);
    $("#workExperience").append(formattedDescription);
  }
}

function displayEducation() {
  var education = [];

  var school1 = {};
  school1.name = "Monmouth University";
  school1.dates = "September 2011 - January 2014";
  school1.location = "West Long Branch, NJ";
  school1.degree = "Bachelor of Science";
  school1.major = "Computer Science";
  education.push(school1);

  var school2 = {};
  school2.name = "Brookdale Community College";
  school2.dates = "September 2003 - December 2005";
  school2.location = "Lincroft, NJ";
  school2.degree = "Associate of Arts";
  school2.major = "English";
  education.push(school2);

  for(i in education) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education[i].degree);
    $("#education").append(formattedName + formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education[i].dates);
    $("#education").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education[i].location);
    $("#education").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education[i].major);
    $("#education").append(formattedMajor);
  }
}

function displayOnlineClasses() {
  var index = 0;
  var onlineClasses = [];
  onlineClasses[index] = {};
  onlineClasses[index].title = "Front-End Web Developer Nanodegree";
  onlineClasses[index].school = "Udacity";
  onlineClasses[index].dates = "May 2016 - June 2016";
  onlineClasses[index].url = "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001";
  index++;

  $("#education").append(HTMLonlineClasses);
  for(i in onlineClasses) {
    var formattedTitle = HTMLonlineTitle.replace("%data%", onlineClasses[i].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", onlineClasses[i].school);
    $("#education").append(formattedTitle + formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", onlineClasses[i].dates);
    $("#education").append(formattedDates);
    var formattedUrl = HTMLonlineURL.replace("%data%", onlineClasses[i].url);
    $("#education").append(formattedUrl);
  }
}
