let menubtn = document.getElementById("menubtn");
let menuSection = document.getElementById("menuSection");
let searchSection = document.getElementById("searchSection");
let mainSection = document.getElementById("mainSection");
let closeSection = document.getElementById("closeSection");
let closeBtn = document.getElementById("closeBtn");
let navbarNav = document.getElementById("navbarNav");
let searchBtnOnClick = document.getElementById("searchBtnOnClick");
let searchTab = document.getElementById("searchTab");

let mainListSection = document.getElementById("mainListSection");

let academicsSection = document.getElementById("academicsSection");
let subAcadamicSection = document.getElementById("subAcadamicSection");
let campusSection = document.getElementById("campusSection");
let subCampusSection = document.getElementById("subCampusSection");
let inFocusSection = document.getElementById("inFocusSection");
let subInFocusSection = document.getElementById("subInFocusSection");
let visitSection = document.getElementById("visitSection");
let subVisitSection = document.getElementById("subVisitSection");
let aboutSection = document.getElementById("aboutSection");
let subAboutSection = document.getElementById("subAboutSection");
let newsSection = document.getElementById("newsSection");
let subNewsSection = document.getElementById("subNewsSection");
let searchTabCloseBtn = document.getElementById("searchTabCloseBtn");

let degreeProgramsMiniSubList = document.getElementById("degreeProgramsMiniSubList");
let onclickDegreProgram = document.getElementById('onclickDegreProgram');
let backBtnForAcademics = document.getElementById("backBtnForAcademics");


searchBtnOnClick.onclick = function() {
    searchSection.style.display = "none";
    searchTab.style.display = (searchTab.style.display === 'none' || searchTab.style.display === '') ? 'flex' : 'Block';

}
searchTabCloseBtn.onclick = function() {
    searchTab.style.display = "none";
    searchSection.style.display = (searchSection.style.display === 'flex' || searchSection.style.display === '') ? 'block' : 'flex';

}

menubtn.onclick = function() {
    menuSection.classList.add("menu-section"); //home menu
    searchSection.classList.add("menu-section"); // search home

    mainSection.classList.remove("main-container"); // main container background
    mainSection.classList.add("main-container2");

    closeSection.classList.remove("close-btn-section2");
    navbarNav.classList.remove("list-section2");

    searchTab.style.display = "none";
}

closeBtn.onclick = function() {
    menuSection.classList.remove("menu-section");
    searchSection.classList.remove("menu-section");

    mainSection.classList.add("main-container");
    mainSection.classList.remove("main-container2");

    closeSection.classList.add("close-btn-section2");
    navbarNav.classList.add("list-section2");
}


academicsSection.onclick = function() {
    subAcadamicSection.style.display = (subAcadamicSection.style.display === 'none' || subAcadamicSection.style.display === '') ? 'block' : 'none';
    subCampusSection.style.display = 'none';
    subInFocusSection.style.display = 'none';
    subVisitSection.style.display = 'none';
    subAboutSection.style.display = 'none';
    subNewsSection.style.display = 'none';
}
campusSection.onclick = function() {
    subAcadamicSection.style.display = 'none';
    subInFocusSection.style.display = 'none';
    subVisitSection.style.display = 'none';
    subAboutSection.style.display = 'none';
    subNewsSection.style.display = 'none';
    subCampusSection.style.display = (subCampusSection.style.display === 'none' || subCampusSection.style.display === '') ? 'block' : 'none';
}

inFocusSection.onclick = function() {
    subCampusSection.style.display = 'none';
    subAcadamicSection.style.display = 'none';
    subVisitSection.style.display = 'none';
    subAboutSection.style.display = 'none';
    subNewsSection.style.display = 'none';
    subInFocusSection.style.display = (subInFocusSection.style.display === 'none' || subInFocusSection.style.display === '') ? 'block' : 'none';
}

visitSection.onclick = function() {
    subCampusSection.style.display = 'none';
    subAcadamicSection.style.display = 'none';
    subInFocusSection.style.display = 'none';
    subAboutSection.style.display = 'none';
    subNewsSection.style.display = 'none';
    subVisitSection.style.display = (subVisitSection.style.display === 'none' || subVisitSection.style.display === '') ? 'block' : 'none';
}

aboutSection.onclick = function() {
    subCampusSection.style.display = 'none';
    subAcadamicSection.style.display = 'none';
    subInFocusSection.style.display = 'none';
    subVisitSection.style.display = 'none';
    subNewsSection.style.display = 'none';
    subAboutSection.style.display = (subAboutSection.style.display === 'none' || subAboutSection.style.display === '') ? 'block' : 'none';
}

newsSection.onclick = function() {
    subCampusSection.style.display = 'none';
    subAcadamicSection.style.display = 'none';
    subInFocusSection.style.display = 'none';
    subVisitSection.style.display = 'none';
    subAboutSection.style.display = 'none';
    subNewsSection.style.display = (subNewsSection.style.display === 'none' || subNewsSection.style.display === '') ? 'block' : 'none';
}


onclickDegreProgram.onclick = function() {
    degreeProgramsMiniSubList.style.display = "block";
    subAcadamicSection.style.marginLeft = "20px";
    mainListSection.style.display = "none";
    backBtnForAcademics.style.display = "block";
    mainListSection.style.fontSize = "50px";
}

backBtnForAcademics.onclick = function() {
    degreeProgramsMiniSubList.style.display = "none";
    backBtnForAcademics.style.display = "none";
    mainListSection.style.display = "block";
}