function showTab1Content() {
    document.getElementById("tab1-content").style.display = "block";
    document.getElementById("tab2-content").style.display = "none";
    document.getElementById("tab3-content").style.display = "none";
    document.getElementById("londonButton").classList.add("activeButton");
    document.getElementById("parisButton").classList.remove("activeButton");
    document.getElementById("tokyoButton").classList.remove("activeButton");
}

function showTab2Content() {
    document.getElementById("tab2-content").style.display = "block";
    document.getElementById("tab1-content").style.display = "none";
    document.getElementById("tab3-content").style.display = "none";
    document.getElementById("parisButton").classList.add("activeButton");
    document.getElementById("londonButton").classList.remove("activeButton");
    document.getElementById("tokyoButton").classList.remove("activeButton");
}

function showTab3Content() {
    document.getElementById("tab3-content").style.display = "block";
    document.getElementById("tab1-content").style.display = "none";
    document.getElementById("tab2-content").style.display = "none";
    document.getElementById("tokyoButton").classList.add("activeButton");
    document.getElementById("londonButton").classList.remove("activeButton");
    document.getElementById("parisButton").classList.remove("activeButton");
}