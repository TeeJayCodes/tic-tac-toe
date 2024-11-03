function toggleColor() {
    let body = document.querySelector("body");
    if (body.style.backgroundColor != "red") {
        body.style.backgroundColor = "red";
    } else {
        body.style.backgroundColor = "blue";
    }
}