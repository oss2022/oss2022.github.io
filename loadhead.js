function loadheaderexecute(level) {
var navpart = $('<nav class="navbar navbar-default" role="navigation"></nav>');
var navpartcontainer = $('<div class="container" id="id_navcontainer"></div>');

if (level==1) {
	var indexurl = "index.html";
	var venueurl = "venue.html";

	var orgcommitteeurl = "OrganizationCommittee.html";
	var RegularPapersCFP = "cfp/RegularPapersCFP.html";
	var IndustryTrackCFP = "cfp/IndustryTrackCFP.html";
	var ToolDemoTrackCFP = "cfp/ToolDemoTrackCFP.html";
	var DoctoralCFP = "cfp/DoctoralSymposiumCFP.html";
	var ERATrackCFP = "cfp/NIERTrackCFP.html";
	var ArtifactsTrackCFP="cfp/ArtifactsTrackCFP.html";
	var CallForJournalFirstPresentation="cfp/CallForJournalFirstPresentation.html";
	var procommitteeurl = "ProgramCommittee.html";
	var externalreviewers = "subreviewers.html"

	var wheretostay = "travel/wheretostay.html";
  var tourism = "travel/tourism.html";
  var weather = "travel/weather.html";
  var soccertickets = "travel/soccertickets.html";
	var staysafe = "travel/safety.html";
	var travelvisaurl = "travel/visareq.html";

	var roomsharingurl = "travel/roomsharing.html";
	var PaperAccepted = "program/Accepted.html";
	var keynotes = "program/Keynotes.html";
	var Programurl = "ToBeAnnounced.html";
	var studentvoluntee = "cfp/StudentVolunteerCall.html"

	var Registrationurl = "registration.html";
	var awardommitteeurl = "AwardCommittee.html";

  var conduct = "social/CodeOfConduct.html";
  var escorialurl = "social/Escorial.html";
/*
	var prereceptionurl = "social/Prereception.html";
*/
	var coffeebreakurl = "social/CoffeeBreak.html";
  var lunchurl = "social/Lunch.html";
  var sportsurl = "social/Sports.html";
	var LGBT = "social/LGBT.html";
  var banquet = "social/Banquet.html";
  var reception = "social/Reception.html";
  var afterparty = "social/AfterParty.html";
	var Scheduleurl = "program/schedule.html";
	var Sessionsurl = "program/SessionList.html";
	var awards = "program/Awards.html";
    var yearbook = "https://gsyc.urjc.es/~grex/2022-OSS-Confbook.pdf";

/*
    var DoctoralSymposiumurl = "program/DoctoralSymposium.html";

*/

}
else if (level>=2) {
	var indexurl = "../index.html";
	var venueurl = "../venue.html";
	var orgcommitteeurl = "../OrganizationCommittee.html";
	var RegularPapersCFP = "../cfp/RegularPapersCFP.html";
	var IndustryTrackCFP = "../cfp/IndustryTrackCFP.html";
	var ToolDemoTrackCFP = "../cfp/ToolDemoTrackCFP.html";
	var DoctoralCFP = "../cfp/DoctoralSymposiumCFP.html";
	var ERATrackCFP = "../cfp/NIERTrackCFP.html";
	var ArtifactsTrackCFP="../cfp/ArtifactsTrackCFP.html";
	var CallForJournalFirstPresentation="../cfp/CallForJournalFirstPresentation.html";

  var procommitteeurl = "../ProgramCommittee.html"
	var PaperAccepted = "../program/Accepted.html";
	var Programurl = "../ToBeAnnounced.html";
	var keynotes = "../program/Keynotes.html";
	var studentvoluntee = "../cfp/StudentVolunteerCall.html"
	var externalreviewers = "../subreviewers.html"

	var Registrationurl = "../registration.html";
	var awardommitteeurl = "../AwardCommittee.html";

  var conduct = "../social/CodeOfConduct.html";
	var escorialurl = "../social/Escorial.html";
  var prereceptionurl = "../social/Prereception.html";
	var coffeebreakurl = "../social/CoffeeBreak.html";
  var lunchurl = "../social/Lunch.html";
  var sportsurl = "../social/Sports.html";
	var LGBT = "../social/LGBT.html";
  var banquet = "../social/Banquet.html";
  var reception = "../social/Reception.html";
  var afterparty = "../social/AfterParty.html";
	var Scheduleurl = "../program/schedule.html";
	var Sessionsurl = "../program/SessionList.html";
	var awards = "../program/Awards.html";
    var yearbook = "https://gsyc.urjc.es/~grex/2022-OSS-Confbook.pdf";
    
/*
    var DoctoralSymposiumurl = "../program/DoctoralSymposium.html";
*/

  var wheretostay = "../travel/wheretostay.html";
  var tourism = "../travel/tourism.html";
	var staysafe = "../travel/safety.html";
  var weather = "../travel/weather.html";
  var soccertickets = "../travel/soccertickets.html";
	var travelvisaurl = "../travel/visareq.html";
//	var roomsharingurl = "../travel/roomsharing.html";
}

var navbarheader = $('<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="'+indexurl+'">OSS 2022</a></div>');
navpartcontainer.append(navbarheader);

var navbarcollapse = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>');
var navbarcollapseul = $('<ul class="nav navbar-nav navbar-right" id="id_navbarul"></ul>');



var li_registration = $('<li><a href="'+Registrationurl+'">Registration</a></li>');
navbarcollapseul.append(li_registration);


var li_program = $('<li class="dropdown"><a href="'+Programurl+'" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Program<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
	li_program.find('ul').append('<li><a href="'+Scheduleurl+'">Schedule</a></li>');
    li_program.find('ul').append('<li><a href="'+keynotes+'">Keynotes</a></li>');
	li_program.find('ul').append('<li><a href="'+Sessionsurl+'">Sessions</a></li>');
    li_program.find('ul').append('<li><a href="'+PaperAccepted+'">Accepted Papers</a></li>');
    li_program.find('ul').append('<li><a href="'+awards+'">Award Winners</a></li>');

/*
    li_program.find('ul').append('<li><a href="'+DoctoralSymposiumurl+'">Doctoral Symposium Program</a></li>');
*/


// navbarcollapseul.append(li_program);


var li_cfp = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Call for Papers<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');

li_cfp.find('ul').append('<li><a href="'+RegularPapersCFP+'">Regular Papers</a></li>');
li_cfp.find('ul').append('<li><a href="'+IndustryTrackCFP+'">Experience Reports</a></li>');
//li_cfp.find('ul').append('<li><a href="'+ToolDemoTrackCFP+'">Tool Demo Track</a></li>');
li_cfp.find('ul').append('<li><a href="'+DoctoralCFP+'">Doctoral Symposium</a></li>');
//li_cfp.find('ul').append('<li><a href="'+ERATrackCFP+'"">NIER Track</a></li>');
//li_cfp.find('ul').append('<li><a href="'+ArtifactsTrackCFP+'">Artifacts Track</a></li>');
li_cfp.find('ul').append('<li><a href="'+CallForJournalFirstPresentation+'">Journal First Presentation</a></li>');

navbarcollapseul.append(li_cfp);


var li_coevents = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Co-Located<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
li_coevents.find('ul').append('<li><a href="http://www.opensym.org">OpenSym 2022</a></li>');
navbarcollapseul.append(li_coevents);

var li_socialevents = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Food &amp; Social<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
//li_socialevents.find('ul').append('<li><a href="'+conduct+'">Code of Conduct</a></li>');
//li_socialevents.find('ul').append('<li><a href="'+prereceptionurl+'">Pre-reception</a></li>');
//li_socialevents.find('ul').append('<li><a href="'+reception  +'">Reception</a></li>');
//li_socialevents.find('ul').append('<li><a href="'+afterparty  +'">After Party</a></li>');
//li_socialevents.find('ul').append('<li><a href="'+banquet  +'">Banquet</a></li>');
li_socialevents.find('ul').append('<li><a href="'+coffeebreakurl  +'">Coffee Breaks</a></li>');
li_socialevents.find('ul').append('<li><a href="'+lunchurl  +'">Lunches</a></li>');
//li_socialevents.find('ul').append('<li><a href="'+sportsurl+'">Sports</a></li>');
//li_socialevents.find('ul').append('<li><a href="'+LGBT+'">LGBT@SoftEng Lunch</a></li>');
li_socialevents.find('ul').append('<li><a href="'+escorialurl+'">Cultural Visit</a></li>');
//li_socialevents.find('ul').append('<li><a href="'+yearbook+'">Conference Yearbook</a></li>');
navbarcollapseul.append(li_socialevents);

var li_team = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Team<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
li_team.find('ul').append('<li><a href="http://ifipwg213.org/">Steering Committee</a></li>');
li_team.find('ul').append('<li><a href="'+orgcommitteeurl+'">Organizing Committee</a></li>');
//li_team.find('ul').append('<li><a href="'+procommitteeurl+'">Program Committee</a></li>');
//li_team.find('ul').append('<li><a href="'+studentvoluntee+'">Student Volunteers</a></li>');
//li_team.find('ul').append('<li><a href="'+awardommitteeurl+'">Award Committee</a></li>');
//li_team.find('ul').append('<li><a href="'+externalreviewers+'">External Reviewers</a></li>');
navbarcollapseul.append(li_team);

var li_travel = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Venue &amp; Travel<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
li_travel.find('ul').append('<li><a href="'+venueurl+'">Venue</a></li>');
li_travel.find('ul').append('<li><a href="'+wheretostay+'">Where To Stay</a></li>');
li_travel.find('ul').append('<li><a href="'+tourism+'">Tourism</a></li>');
li_travel.find('ul').append('<li><a href="'+staysafe+'">Stay Safe</a></li>');
li_travel.find('ul').append('<li><a href="'+weather+'">Weather</a></li>');
li_travel.find('ul').append('<li><a href="'+soccertickets+'">Soccer (incl. Tickets)</a></li>');
li_travel.find('ul').append('<li><a href="'+travelvisaurl+'">Visa Information</a></li>');
//li_travel.find('ul').append('<li><a href="'+roomsharingurl+'">Room Sharing Request</a></li>');
navbarcollapseul.append(li_travel);

var li_past = $('<li><a href="http://ifipwg213.org/">Previous Editions</a></li>');
navbarcollapseul.append(li_past);

navbarcollapse.append(navbarcollapseul);

navpartcontainer.append(navbarcollapse);

navpart.append(navpartcontainer);

$('body').append(navpart);

};
