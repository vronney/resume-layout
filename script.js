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
let innerContainer = document.querySelector(".innerContainer");
let mainContainer = document.querySelector(".container1");
let experienceSection = document.querySelector(".experienceSection");
let aboutMeSection = document.querySelector("#aboutMeSection");
let educationSection = document.querySelector(".educationSection");
let projectsSection = document.querySelector(".projectsSection");
let skillsSection = document.querySelector(".skillsSection");
let awardsSection = document.querySelector(".awardsSection");
let aboutMeSideBar = document.querySelector(".aboutMeSideBar");
let experienceSideBar = document.querySelector(".experienceSideBar");
let educationSideBar = document.querySelector(".educationSideBar");
let projectsSideBar = document.querySelector(".projectsSideBar");
let skillsSideBar = document.querySelector(".skillsSideBar");
let awardsSideBar = document.querySelector(".awardsSideBar");
let image = document.querySelector(".image");

// About Me Section

aboutMeClearContent = function () {

    if (aboutMeSection.style.display === "none" && innerContainer.style.visibility === "visible" || experienceSection.style.display === "inline" && aboutMeSection.style.display === "none" || educationSection.style.display === "inline" && aboutMeSection.style.display === "none" || projectsSection.style.display === "inline" && aboutMeSection.style.display === "none" || skillsSection.style.display === "inline" && aboutMeSection.style.display === "none" || awardsSection.style.display === "inline" && aboutMeSection.style.display === "none") {
        aboutMeSection.style.display = "inline";
        innerContainer.style.visibility = "hidden";
        mainContainer.style.height = "944px";
        experienceSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
        skillsSection.style.display = "none";
        awardsSection.style.display = "none";
    } else {
        educationSection.style.display = "none";
        experienceSection.style.display = "none";
        aboutMeSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
        skillsSection.style.display = "none";
        awardsSection.style.display = "none";
        innerContainer.style.visibility = "visible";
        innerContainer.style.display = "contents";
    }
}

document.getElementById("about-me").addEventListener("click", aboutMeClearContent);

// Experience Section
experienceSectionClearContent = function () {

    if (experienceSection.style.display === "none" && innerContainer.style.visibility === "visible" || aboutMeSection.style.display === "inline" && experienceSection.style.display === "none" || educationSection.style.display === "inline" && experienceSection.style.display === "none" || projectsSection.style.display === "inline" && experienceSection.style.display === "none" || skillsSection.style.display === "inline" && experienceSection.style.display === "none" || awardsSection.style.display === "inline" && experienceSection.style.display === "none") {
        experienceSection.style.display = "inline";
        innerContainer.style.visibility = "hidden";
        mainContainer.style.height = "944px";
        aboutMeSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
        skillsSection.style.display = "none";
        awardsSection.style.display = "none";
    } else {
        educationSection.style.display = "none";
        experienceSection.style.display = "none";
        aboutMeSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
        skillsSection.style.display = "none";
        awardsSection.style.display = "none";
        innerContainer.style.visibility = "visible";
        innerContainer.style.display = "contents";
    }
}

document.getElementById("experience-sideTab").addEventListener("click", experienceSectionClearContent);

// Education Section

educationSectionClearContent = function () {

    if (educationSection.style.display === "none" && innerContainer.style.visibility === "visible" || experienceSection.style.display === "inline" && educationSection.style.display === "none" || aboutMeSection.style.display === "inline" && educationSection.style.display === "none" || projectsSection.style.display === "inline" && educationSection.style.display === "none" || skillsSection.style.display === "inline" && educationSection.style.display === "none" || awardsSection.style.display === "inline" && educationSection.style.display === "none") {
        educationSection.style.display = "inline";
        innerContainer.style.visibility = "hidden";
        mainContainer.style.height = "944px";
        experienceSection.style.display = "none";
        aboutMeSection.style.display = "none";
        projectsSection.style.display = "none";
        skillsSection.style.display = "none";
        awardsSection.style.display = "none";
    } else {
        educationSection.style.display = "none";
        experienceSection.style.display = "none";
        aboutMeSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
        skillsSection.style.display = "none";
        awardsSection.style.display = "none";
        innerContainer.style.visibility = "visible";
        innerContainer.style.display = "contents";
    }
}

document.getElementById("education-sideTab").addEventListener("click", educationSectionClearContent);

// Projects Section

projectsSectionClearContent = function () {

    if (projectsSection.style.display === "none" && innerContainer.style.visibility === "visible" || experienceSection.style.display === "inline" && projectsSection.style.display === "none" || aboutMeSection.style.display === "inline" && projectsSection.style.display === "none" || skillsSection.style.display === "inline" && projectsSection.style.display === "none" || awardsSection.style.display === "inline" && projectsSection.style.display === "none" || educationSection.style.display === "inline" && projectsSection.style.display === "none") {
        projectsSection.style.display = "inline";
        innerContainer.style.visibility = "hidden";
        mainContainer.style.height = "944px";
        experienceSection.style.display = "none";
        aboutMeSection.style.display = "none";
        educationSection.style.display = "none";
        skillsSection.style.display = "none";
        awardsSection.style.display = "none";
    } else {
        educationSection.style.display = "none";
        experienceSection.style.display = "none";
        aboutMeSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
        skillsSection.style.display = "none";
        awardsSection.style.display = "none";
        innerContainer.style.visibility = "visible";
        innerContainer.style.display = "contents";
    }
}

document.getElementById("projects-sideTab").addEventListener("click", projectsSectionClearContent);

// Skills Section 

skillsSectionClearContent = function () {
    if (skillsSection.style.display === "none" && innerContainer.style.visibility === "visible" || aboutMeSection.style.display === "inline" && skillsSection.style.display === "none" || educationSection.style.display === "inline" && skillsSection.style.display === "none" || experienceSection.style.display === "inline" && skillsSection.style.display === "none" || projectsSection.style.display === "inline" && skillsSection.style.display === "none" || awardsSection.style.display === "inline" && skillsSection.style.display === "none") {
        skillsSection.style.display = "inline";
        innerContainer.style.visibility = "hidden";
        mainContainer.style.height = "944px";
        experienceSection.style.display = "none";
        aboutMeSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
        awardsSection.style.display = "none";
    } else {
        educationSection.style.display = "none";
        experienceSection.style.display = "none";
        aboutMeSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
        skillsSection.style.display = "none";
        awardsSection.style.display = "none";
        innerContainer.style.visibility = "visible";
        innerContainer.style.display = "contents";
    }
}

document.getElementById("skills-sideTab").addEventListener("click", skillsSectionClearContent);

// Awards Section 

awardsSectionClearContent = function () {
    if (awardsSection.style.display === "none" && innerContainer.style.visibility === "visible" || aboutMeSection.style.display === "inline" && awardsSection.style.display === "none" || educationSection.style.display === "inline" && awardsSection.style.display === "none" || experienceSection.style.display === "inline" && awardsSection.style.display === "none" || projectsSection.style.display === "inline" && awardsSection.style.display === "none" || skillsSection.style.display === "inline" && awardsSection.style.display === "none") {
        awardsSection.style.display = "inline";
        innerContainer.style.visibility = "hidden";
        mainContainer.style.height = "944px";
        experienceSection.style.display = "none";
        aboutMeSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
        skillsSection.style.display = "none";
    } else {
        educationSection.style.display = "none";
        experienceSection.style.display = "none";
        aboutMeSection.style.display = "none";
        educationSection.style.display = "none";
        projectsSection.style.display = "none";
        skillsSection.style.display = "none";
        awardsSection.style.display = "none";
        innerContainer.style.visibility = "visible";
        innerContainer.style.display = "contents";
    }
}

document.getElementById("awards-sideTab").addEventListener("click", awardsSectionClearContent);

// Home SideBar

homeSideBarMenu = function () {
    aboutMeSection.style.display = "none";
    experienceSection.style.display = "none";
    educationSection.style.display = "none";
    projectsSection.style.display = "none";
    skillsSection.style.display = "none";
    awardsSection.style.display = "none";
    innerContainer.style.visibility = "visible";
    image.style.display = "inline";
}

document.querySelector(".homeSideBar").addEventListener("click", homeSideBarMenu);

// About Me SideBar

aboutMeSideBarMenu = function () {
    if (aboutMeSection.style.display === "none" && innerContainer.style.visibility === "visible") {
        aboutMeSection.style.display = "inline";
        innerContainer.style.visibility = "hidden";
        image.style.display = "none";
    } else {
        innerContainer.style.visibility = "visible";
        aboutMeSection.style.display = "none";
        image.style.display = "inline";
    }
}

document.querySelector(".aboutMeSideBar").addEventListener("click", aboutMeSideBarMenu);

// Experience SideBar

experienceSideBarMenu = function () {
    if (experienceSection.style.display === "none" && innerContainer.style.visibility === "visible") {
        experienceSection.style.display = "inline";
        innerContainer.style.visibility = "hidden";
        image.style.display = "none";
    } else {
        innerContainer.style.visibility = "visible";
        experienceSection.style.display = "none";
        image.style.display = "inline";
    }
}

document.querySelector(".experienceSideBar").addEventListener("click", experienceSideBarMenu);

// Education SideBar

educationSideBarMenu = function () {
    if (educationSection.style.display === "none" && innerContainer.style.visibility === "visible") {
        educationSection.style.display = "inline";
        innerContainer.style.visibility = "hidden";
        image.style.display = "none";
    } else {
        educationSection.style.display = "none";
        innerContainer.style.visibility = "visible";
        image.style.display = "inline";
    }
}

document.querySelector(".educationSideBar").addEventListener("click", educationSideBarMenu);

// Projects SideBar 

projectsSideBarMenu = function () {
    if (projectsSection.style.display === "none" && innerContainer.style.visibility === "visible") {
        projectsSection.style.display = "inline";
        innerContainer.style.visibility = "hidden";
        image.style.display = "none";
    } else {
        projectsSection.style.display = "none";
        innerContainer.style.visibility = "visible";
        image.style.display = "inline";
    }
}

document.querySelector(".projectsSideBar").addEventListener("click", projectsSideBarMenu);

// Skills SideBar

skillsSideBarMenu = function () {
    if (skillsSection.style.display === "none" && innerContainer.style.visibility === "visible") {
        skillsSection.style.display = "inline";
        innerContainer.style.visibility = "hidden";
        image.style.display = "none";
    } else {
        skillsSection.style.display = "none";
        innerContainer.style.visibility = "visible";
        image.style.display = "inline";
    }
}

document.querySelector(".skillsSideBar").addEventListener("click", skillsSideBarMenu);

// Awards SideBar

awardsSideBarMenu = function () {
    if (awardsSection.style.display === "none" && innerContainer.style.visibility === "visible") {
        awardsSection.style.display = "inline";
        innerContainer.style.visibility = "hidden";
        image.style.display = "none";
    } else {
        awardsSection.style.display = "none";
        innerContainer.style.visibility = "visible";
        image.style.display = "inline";
    }
}

document.querySelector(".awardsSideBar").addEventListener("click", awardsSideBarMenu);

// mySidenav

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

mySidenav = document.getElementById("mySidenav");

// Will slide mySidenav back to 0 when clicking anywhere outside mySidenav

window.onclick = function (event) {
    if (event.target == mainContainer || event.target == aboutMeSection) {
        mySidenav.style.width = "0";
    }
}


