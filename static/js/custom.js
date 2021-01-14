document.addEventListener("DOMContentLoaded", (event) => {
    var y = document.querySelectorAll("code");
    for(var i = 0; i < y.length; i++) {
        y[i].innerHTML = y[i].innerHTML.slice(0, -1)
    }
})