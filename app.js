'strict coding'

function openNav() {
    document.getElementById("myNavbar").style.display = "inline-block";
    document.getElementById("myNavbar").style.width = "100%";
    document.getElementById("myNavbar").style.height = "65rem";
    document.getElementById("close_btn").style.marginRight = "0rem";
}

function closeNav() {
    document.getElementById("myNavbar").style.width = "0";
    document.getElementById("myNavbar").style.height = "0";
    document.getElementById
        ("myNavbar").style.display = "none";
}