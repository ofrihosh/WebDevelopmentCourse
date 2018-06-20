function show_hide(element) {
    var con = element.parentElement.querySelector("#personal");
    if (con.style.display == "") {
        con.style.display = "block";
    } else {
        con.style.display = "";
    }
    element.classList.add('open');
}


function hide1() {
    var X = document.querySelector("#personal");
    X.style.display = "";
}

function show_hide2(element) {
    var con = element.parentElement.querySelector("#groups");
    if (con.style.display == "") {
        con.style.display = "block";
    } else {
        con.style.display = "";
    }
    element.classList.add('open');
}


function hide2() {
    var X = document.querySelector("#groups");
    X.style.display = "";
}