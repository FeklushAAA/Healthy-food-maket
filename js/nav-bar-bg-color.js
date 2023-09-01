


window.addEventListener("scroll", scrollnav);
function scrollnav() {
    let y = window.scrollY;
    if (y > 1) {
        document.getElementById("navbar").style.backgroundColor = "#1A1A1A";
    } else {
        document.getElementById("navbar").style.backgroundColor = "unset";
    }
}






