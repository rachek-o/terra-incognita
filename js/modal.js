let modalwindow = document.getElementById('Modal');

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modalwindow.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalwindow) {
        modalwindow.style.display = "none";
    }
}
