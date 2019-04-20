// Variables 
let header = document.querySelector(".header");
let contactInfo = document.querySelector(".contact-info");
let experience = document.querySelector(".experience");
let companyName2 = document.querySelector(".company-name2");
let companyName3 = document.querySelector(".company-name3");
let companyName4 = document.querySelector(".company-name4");
let education = document.querySelector(".education");
let projects = document.querySelector(".projects");
let skills = document.querySelector(".skills");
let awards = document.querySelector(".awards");
let languages = document.querySelector(".languages");
let aboutMe = document.querySelector("#aboutMeSection");

// Functions for removing content
clearContent = function () {
    header.style.display = "none";
    contactInfo.style.display = "none";
    experience.style.display = "none";
    companyName2.style.display = "none";
    companyName3.style.display = "none";
    companyName4.style.display = "none";
    education.style.display = "none";
    projects.style.display = "none";
    skills.style.display = "none";
    awards.style.display = "none";
    languages.style.display = "none";
    aboutMe.style.display = "inline";
}

// About Me Section - Full Page 

document.getElementById("about-me").addEventListener("click", clearContent); 
