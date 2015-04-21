var bio = {
	"name": "Dafina Georgievska",
	"role": "Application Support Analyst",
	"contact": {
		"phone": "777-123-4567",
		"email": "dafinag@gmail.com",
		"location": "Danbury, CT, US"
	},
	"picture": "http://placekitten.com/g/600/500",
	"skills": ["programming", "design", "JS", "CSS"],
	"welcomeMsg": "Welcome!",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattedName);
		$("#header").append(formattedRole);
		var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
		$("#header").append(formattedMessage);
		var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
		$("#header").append(formattedPicture);
		var formattedPhone = HTMLmobile.replace("%data%", bio.contact.phone);
		$("#topContacts").append(formattedPhone);
		var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
		$("#topContacts").append(formattedEmail);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
		$("#topContacts").append(formattedLocation);
		var formattedPhone = HTMLmobile.replace("%data%", bio.contact.phone);
		$("#footerContacts").append(formattedPhone);
		var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
		$("#footerContacts").append(formattedEmail);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
		$("#footerContacts").append(formattedLocation);

		$("#header").append(HTMLskillsStart);
		for(i = 0; i < bio.skills.length;  i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
};

var education = {
	"schools": [
	{
		"name": "Hunter College",
		"location": "New York, NY, US",
		"major": "Computer Science",
		"minor": "Physics",
		"degree": "BA",
		"graduationYear" : 2012,
		"url": "www.hunter.cuny.edu/"
	},
	{
		"name": "Hunter College",
		"location": "New York, NY, US",
		"major": "Mathematics",
		"minor": "Physics",
		"degree": "BA",
		"graduationYear": 2012,
		"url": "www.hunter.cuny.edu/"
	}
	],
	"onlineCourses": [
	{
		"title": "Nanodegree",
		"school": "Udacity",
		"dates": "2014-2015",
		"url": "https://www.udacity.com/"
	}
	],
	"display": function() {
		for(i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);
			var formattedEducationName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedEducationMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedEducationDate = HTMLschoolDates.replace("%data%", education.schools[i].graduationYear);
			var formatedSchoolTitle = formattedEducationName+formattedEducationDegree;
			$(".education-entry:last").append(formatedSchoolTitle);
			$(".education-entry:last").append(formattedEducationLocation);
			$(".education-entry:last").append(formattedEducationDate);
			$(".education-entry:last").append(formattedEducationMajor);
		}
		for(i = 0; i < education.onlineCourses.length; i++) {
			$(".education-entry:last").append(HTMLonlineClasses);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			var formattedOnline = formattedOnlineTitle + formattedOnlineSchool;
			$(".education-entry:last").append(formattedOnline);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};

var work = {
	"jobs": [
	{
		"employer": "GE Capital",
		"title": "Application Support Analyst",
		"location": "Danbury, CT, US",
		"dates": "November 2012 - Present",
		"description": "Support existing applications, stabilize and improve them."
	},
	{
		"employer": "Mantra Design",
		"title": "3D Simulation Artist",
		"location" : "New York, NY, US",
		"dates": "March 2007 - November 2012",
		"description": "Create 3D simulations for variety of projects."
	},
	{
		"employer": "Creative Group",
		"title": "3D Simulation Artist",
		"location": "New York, NY, US",
		"dates": "October 2006 - March 2007",
		"description": "Create 3D madels, animations and simulations for variety of projects."
	}
	],
	"display": function() {
		for(i = 0; i < work.jobs.length; i++) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects": [
	{
		"title": "Kitten",
		"dates": 2006,
		"description": "Cute kitten.",
		"images": "http://placekitten.com/g/620/420"
	},
	{
		"title": "Kitten2",
		"dates": 2009,
		"description": "Pretty kitten.",
		"images": "http://placekitten.com/g/600/600"
	},
	{
		"title": "Kitten3",
		"dates": 2012,
		"description": "Beautiful kitten.",
		"images": "http://placekitten.com/g/500/500"
	}
	],
	"display": function() {
		for(i = 0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDate);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
};

work.display();
education.display();
projects.display();
bio.display();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);

/*
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
*/
/*
function locationizer(work_obj) {
	var locations = [];
	for(var job in work_obj.jobs) {
		var location = work_obj.jobs[job].location;
		locations.push(location);
	}
	return locations;
}
*/