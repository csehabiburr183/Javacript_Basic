// Javascript Document

document.querySelector('body').prepend(document.createElement("div"));
document.querySelector('div').classList.add("trial");
document.querySelector('.trial').setAttribute("style","background:green; width:600px; height:320px; 													color:red; margin:auto; position:relative;");
document.querySelector('.trial').append(document.createElement('div'));
document.querySelector('.trial div').classList.add("CircleDiv");
document.querySelector('.CircleDiv').setAttribute("style", "position:absolute; width:200px;																height:200px; background:red; top:55px; 																left:205px; border-radius:50%;");