function toggleMusic() {
    var audioElem = document.getElementById("music");

    if (audioElem.paused) {
        audioElem.play();
    } else {
        audioElem.pause();
    }
}