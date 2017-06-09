function allowDrop(ev) {
    ev.preventDefault();
}
document.getElementById("error").style.display = "none";

function drag(ev) {
    ev.dataTransfer.setData("text\html", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text\html");
    var element = document.getElementById(data);
    if (ev.target.id !== "") {
        if (element.classList.contains(ev.target.id)) {
            document.getElementById("error").style.display = "none";
        } else {
            document.getElementById("error").style.display = "block";
        }
    }
    ev.target.appendChild(document.getElementById(data));
}
