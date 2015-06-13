function refreshFeatures() {

//  ------------------------------------------------ PPA Add scripts ------------------------------------------------///
var PPA = "";

if (document.getElementById("fontforge")) PPA += !document.getElementById("fontforge").checked ? '' : 'ppa:fontforge/fontforge\n' ;


PPA = PPA.substring(0, PPA.length - 1);

//  ------------------------------------------------ // Install scripts //------------------------------------------------///

var INSTALL = "";


if (document.getElementById("fontforge")) INSTALL += !document.getElementById("fontforge").checked ? '' : 'fontforge\n' ;



// Show Install scripts
var packagelist = "";

packagelist +="################################################################################" + "\n" +"######** Use this Package List with Cleanstart shell Script to install **#######"+ "\n" + "################################################################################" + "\n" + PPA + "\n" + INSTALL;

$('#editor').html( packagelist );


};	

