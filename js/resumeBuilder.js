/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {};
bio.display = function() {
  bio.name = "Jess Buck";
  bio.role = "Front-End Developer";
  bio.contact = {};
  bio.contact.mobile = "732-654-2825";
  bio.contact.email = "jessica.e.buck@gmail.com";
  bio.contact.github = "jess19";
  bio.contact.location = "Red Bank, NJ";
  bio.welcomeMessage = "Innovative software developer with a diverse skillset offering over four years of experience in mobile and web application development. Strong ability to research and implement cost-effective solutions throughout the software development lifecycle. Dedicated to delivering efficient, intuitive, scalable applications. ";
  bio.skills = ["HTML", "CSS", "JavaScript"];
  bio.biopic = "images/me.jpg";

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
  $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPic);

  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedMessage);

  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(" " + formattedSkill);
  }
}

var work = {};
work.display = function() {
  var index = 0;
  work.jobs = [];
  work.jobs[index] = {};
  work.jobs[index].title = "Software Developer";
  work.jobs[index].employer = "Hybrid Healthcare Communications";
  work.jobs[index].location = "Red Bank, NJ";
  work.jobs[index].dates = "October 2014 - January 2016";
  work.jobs[index].description =
  "•	Cloned iOS applications as Windows store apps using C# and XAML and added new features." + "<br/>" +
  "•	Integrated a custom PDF viewer into a Windows application for consistency across the user base." + "<br/>" +
  "•	Added an invoice feature to an internal time-tracking tool using Ruby on Rails." + "<br/>" +
  "•	Resolved user interaction and cross-browser compatibility issues for an externally developed web project." + "<br/>" +
  "•	Made user interface modifications to an existing iOS application.";
  index++;

  work.jobs[index] = {};
  work.jobs[index].title = "Account Manager/Programmer Analyst";
  work.jobs[index].employer = "Health Care Software";
  work.jobs[index].location = "Wall Township, NJ";
  work.jobs[index].dates = "February 2014 – October 2014";
  work.jobs[index].description =
  "•	Refactored and rewrote legacy system applications to support a new user interface." + "<br/>" +
  "•	Contributed to design decisions to increase efficiency and usability.";
  index++;

  work.jobs[index] = {};
  work.jobs[index].title = "Web Developer Intern";
  work.jobs[index].employer = "Educational Travel Adventures";
  work.jobs[index].location = "Freehold, NJ";
  work.jobs[index].dates = "August 2013 - February 2014";
  work.jobs[index].description =
  "•	Implemented a new feature for an internal web application." + "<br/>" +
  "•	Assisted with design and researched PHP libraries and jQuery plugins to evaluate for use with the application.";
  index++;

  work.jobs[index] = {};
  work.jobs[index].title = "Student Research Assistant";
  work.jobs[index].employer = "Monmouth University";
  work.jobs[index].location = "West Long Branch, NJ";
  work.jobs[index].dates = "June 2012 - August 2013";
  work.jobs[index].description =
  "•	Developed an Android mobile application and backend server to guide users on a campus tour and abstracted it into one for general tourism purposes." + "<br/>" +
  "•	Presented the mobile application to an audience of trustees, faculty and students at the Summer Research Program (SRP) Symposium." + "<br/>" +
  "•	Met with the MU Admissions Office to discuss potential use of the application for the annual Open House at Admissions’ request after the SRP Symposium presentation.";
  index++;

  work.jobs[index] = {};
  work.jobs[index].title = "Software Prototype Developer";
  work.jobs[index].employer = "Rapid Response Instutute at Monmouth University";
  work.jobs[index].location = "West Long Branch, NJ";
  work.jobs[index].dates = "December 2011 - March 2012";
  work.jobs[index].description =
  "•	Developed Android applications designed to manage shelter resources and enable state level emergency operations officials to direct the general population to shelters. " + "<br/>" +
  "•	Created user guides to document the applications.";
  index++;

  for(i in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

var projects = [];
projects.display = function() {
  var index = 0;
  projects.projects = [];
  projects.projects[index] = {};
  projects.projects[index].title = "Sample Project";
  projects.projects[index].dates = "June 2016";
  projects.projects[index].description = "Sample Description";
  projects.projects[index].images = ["images/sand.jpg", "images/sunrise.jpg", "images/shoe.jpg"];
  index++;

  for(i in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedDescription);
    for (j in projects.projects[i].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
      $(".project-entry:last").append(formattedImage);
    }
  }
}

var education = [];
education.display = function() {
  education.schools = [];
  var school1 = {};
  school1.name = "Monmouth University";
  school1.dates = "September 2011 - January 2014";
  school1.location = "West Long Branch, NJ";
  school1.degree = "Bachelor of Science";
  school1.major = "Computer Science";
  education.schools.push(school1);

  var school2 = {};
  school2.name = "Brookdale Community College";
  school2.dates = "September 2003 - December 2005";
  school2.location = "Lincroft, NJ";
  school2.degree = "Associate of Arts";
  school2.major = "English";
  education.schools.push(school2);

  var index = 0;
  education.onlineCourses = [];
  education.onlineCourses[index] = {};
  education.onlineCourses[index].title = "Front-End Web Developer Nanodegree";
  education.onlineCourses[index].school = "Udacity";
  education.onlineCourses[index].dates = "May 2016 - June 2016";
  education.onlineCourses[index].url = "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001";
  index++;

  for(i in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    $(".education-entry:last").append(formattedName + formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
    $(".education-entry:last").append(formattedMajor);
  }

  $("#education").append(HTMLonlineClasses);
  for(i in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    $(".education-entry:last").append(formattedTitle + formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append(formattedUrl);
  }
}


bio.display();
work.display();
projects.display();
education.display();

//$("#mapDiv").append(googleMap);
