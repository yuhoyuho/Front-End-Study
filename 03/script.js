const box = document.querySelector("div");
document.getElementById("start").addEventListener("click", function() {
    box.style.animationPlayState = "running";
})
document.getElementById("paused").addEventListener("click", function() {
    box.style.animationPlayState = "paused";
})