// Create resume page content
var bio = new Bio();
var work = new Work();
var projects = new Projects();
var education = new Education();
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

// ------------------------------------------------------- //
// Resume objects
/**
* @description Represents the resume bio
* @constructor
*/
function Bio() {
  var bio = {};
  addBioDetails(bio);
  bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    $("#header").append(HTMLskillsStart);
    for (var skillIndex in bio.skills) {
      if (bio.skills.hasOwnProperty(skillIndex) && bio.skillIcons.hasOwnProperty(skillIndex)) {
        var formattedSkill = HTMLskills.replace("%data%", '<img class="skill-icon" src="' + bio.skillIcons[skillIndex] + '" alt="' + bio.skills[skillIndex] +'">'  + bio.skills[skillIndex]);
        $("#skills").append(formattedSkill);
      }
    }

    $('#footerContacts').append('<li><a href="mailto:' + bio.contacts.email + '"><span class="social-icon zocial-email"></span>Email</a></li>');
    $('#footerContacts').append('<li><a href="https://github.com/' + bio.contacts.github + '"><span class="social-icon zocial-github"></span>GitHub</a></li>');
  };
  return bio;
}

/**
* @description Represents the resume work experience
* @constructor
*/
function Work() {
  var work = {};
  addWorkDetails(work);
  work.display = function() {
    for(var jobIndex in work.jobs) {
      if (work.jobs.hasOwnProperty(jobIndex)) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIndex].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIndex].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobIndex].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobIndex].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobIndex].description);
        $(".work-entry:last").append(formattedDescription);
      }
    }
  };
  return work;
}

/**
* @description Represents the resume projects
* @constructor
*/
function Projects() {
  var projects = {};
  addProjectDetails(projects);
  projects.display = function() {
    for(var projectIndex in projects.projects) {
      if (projects.projects.hasOwnProperty(projectIndex)) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectIndex].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[projectIndex].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectIndex].description);
        $(".project-entry:last").append(formattedDescription);
        for (var imageIndex in projects.projects[projectIndex].images) {
          if (projects.projects[projectIndex].images.hasOwnProperty(imageIndex)) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[projectIndex].images[imageIndex]);
            $(".project-entry:last").append(formattedImage);
          }
        }
      }
    }
  };
  return projects;
}

/**
* @description Represents the resume education
* @constructor
*/
function Education() {
  var education = {};
  addSchoolDetails(education);
  addOnlineCourses(education);
  education.display = function() {
    for(var schoolIndex in education.schools) {
      if (education.schools.hasOwnProperty(schoolIndex)) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[schoolIndex].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolIndex].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schoolIndex].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolIndex].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolIndex].major);
        $(".education-entry:last").append(formattedMajor);
        if (education.schools[schoolIndex].minor) {
          var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[schoolIndex].minor);
          $(".education-entry:last").append(formattedMinor);
        }
        var formattedschoolDescription = HTMLschoolDescription.replace("%data%", education.schools[schoolIndex].description);
        $(".education-entry:last").append(formattedschoolDescription);
      }
    }

    $("#education").append(HTMLonlineClasses);
    for(var courseIndex in education.onlineCourses) {
      if (education.onlineCourses.hasOwnProperty(courseIndex)) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courseIndex].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courseIndex].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courseIndex].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[courseIndex].url);
        $(".education-entry:last").append(formattedUrl);
      }
    }
  };
  return education;
}

// Functions to fill resume objects
function addBioDetails(bio) {
  bio.name = "Jess Buck";
  bio.role = "Front-End Developer";
  bio.contacts = {};
  bio.contacts.mobile = "732-654-2825";
  bio.contacts.email = "jessica.e.buck@gmail.com";
  bio.contacts.github = "jess19";
  bio.contacts.location = "Red Bank, NJ";
  bio.welcomeMessage = "Innovative software developer with a diverse skillset offering over four years of experience in mobile and web application development. Strong ability to research and implement cost-effective solutions throughout the software development lifecycle. Dedicated to delivering efficient, intuitive, scalable applications. ";
  bio.skills = [];
  bio.skillIcons = [];

  var skill = "HTML";
  var skillIcon = "images/icons/html5.svg";
  bio.skills.push(skill);
  bio.skillIcons.push(skillIcon);

  skill = "CSS";
  skillIcon = "images/icons/css3.svg";
  bio.skills.push(skill);
  bio.skillIcons.push(skillIcon);

  skill = "JavaScript";
  skillIcon = "images/icons/javascript.svg";
  bio.skills.push(skill);
  bio.skillIcons.push(skillIcon);

  skill = "Java";
  skillIcon = "images/icons/java.svg";
  bio.skills.push(skill);
  bio.skillIcons.push(skillIcon);

  skill = "C#";
  skillIcon = "images/icons/csharp.svg";
  bio.skills.push(skill);
  bio.skillIcons.push(skillIcon);

  skill = "PHP";
  skillIcon = "images/icons/php.svg";
  bio.skills.push(skill);
  bio.skillIcons.push(skillIcon);

  bio.biopic = "images/me.jpg";
}

function addWorkDetails(work) {
  work.jobs = [];
  var job = {};
  job.title = "Software Developer";
  job.employer = "Hybrid Healthcare Communications";
  job.location = "Red Bank, NJ";
  job.dates = "October 2014 - January 2016";
  job.description =
  "•	Cloned iOS applications as Windows store apps using C# and XAML and added new features." + "<br/>" +
  "•	Integrated a custom PDF viewer into a Windows application for consistency across the user base." + "<br/>" +
  "•	Added an invoice feature to an internal time-tracking tool using Ruby on Rails." + "<br/>" +
  "•	Resolved user interaction and cross-browser compatibility issues for an externally developed web project." + "<br/>" +
  "•	Made user interface modifications to an existing iOS application.";
  work.jobs.push(job);

  job = {};
  job.title = "Account Manager/Programmer Analyst";
  job.employer = "Health Care Software";
  job.location = "Wall Township, NJ";
  job.dates = "February 2014 – October 2014";
  job.description =
  "•	Refactored and rewrote legacy system applications to support a new user interface." + "<br/>" +
  "•	Contributed to design decisions to increase efficiency and usability.";
  work.jobs.push(job);

  job = {};
  job.title = "Web Developer Intern";
  job.employer = "Educational Travel Adventures";
  job.location = "Freehold, NJ";
  job.dates = "August 2013 - February 2014";
  job.description =
  "•	Implemented a new feature for an internal web application." + "<br/>" +
  "•	Assisted with design and researched PHP libraries and jQuery plugins to evaluate for use with the application.";
  work.jobs.push(job);

  job = {};
  job.title = "Student Research Assistant";
  job.employer = "Monmouth University";
  job.location = "West Long Branch, NJ";
  job.dates = "June 2012 - August 2013";
  job.description =
  "•	Developed an Android mobile application and backend server to guide users on a campus tour and abstracted it into one for general tourism purposes." + "<br/>" +
  "•	Presented the mobile application to an audience of trustees, faculty and students at the Summer Research Program (SRP) Symposium." + "<br/>" +
  "•	Met with the MU Admissions Office to discuss potential use of the application for the annual Open House at Admissions’ request after the SRP Symposium presentation.";
  work.jobs.push(job);

  job = {};
  job.title = "Software Prototype Developer";
  job.employer = "Rapid Response Instutute at Monmouth University";
  job.location = "West Long Branch, NJ";
  job.dates = "December 2011 - March 2012";
  job.description =
  "•	Developed Android applications designed to manage shelter resources and enable state level emergency operations officials to direct the general population to shelters. " + "<br/>" +
  "•	Created user guides to document the applications.";
  work.jobs.push(job);
}

function addProjectDetails(projects) {
  projects.projects = [];
  var project = {};
  project.title = "Sample Project";
  project.dates = "June 2016";
  project.description = "Sample Description";
  project.images = ["images/sand.jpg", "images/sunrise.jpg", "images/shoe.jpg"];
  projects.projects.push(project);
}

function addSchoolDetails(education) {
  education.schools = [];
  var school1 = {};
  school1.name = "Monmouth University";
  school1.dates = "September 2011 - January 2014";
  school1.location = "West Long Branch, NJ";
  school1.degree = "Bachelor of Science";
  school1.major = "Computer Science";
  school1.minor = "Mathematics";
  school1.description = "•	Major GPA 3.6, overall GPA 3.5" + "<br/>" +
  "•	Member of Upsilon Pi Epsilon International Honor Society for the Computing and Information Disciplines" + "<br/>" +
  "•	Member of the School of Science Student and Alumni Advisory Committee" + "<br/>" +
  "•	Member of the School of Science Peer Mentor Program";
  school1.url = "http://www.monmouth.edu";
  education.schools.push(school1);

  var school2 = {};
  school2.name = "Brookdale Community College";
  school2.dates = "September 2003 - December 2005";
  school2.location = "Lincroft, NJ";
  school2.degree = "Associate of Arts";
  school2.major = "English";
  school2.description = "•	Major GPA 4.0, overall GPA 3.9" + "<br/>" +
  "•	Member of Phi Theta Kappa International Honor Society";
  school2.url = "http://www.brookdalecc.edu";
  education.schools.push(school2);
}

function addOnlineCourses(education) {
  education.onlineCourses = [];
  var onlineCourse = {};
  onlineCourse.title = "Front-End Web Developer Nanodegree";
  onlineCourse.school = "Udacity";
  onlineCourse.dates = "May 2016 - June 2016";
  onlineCourse.url = "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001";
  education.onlineCourses.push(onlineCourse);
}
