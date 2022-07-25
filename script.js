let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let dropdown = this.nextElementSibling;
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });
}

// Reveal video behind image --- s5

let video = document.getElementById("s5-video");
let image = document.getElementById("video-img");
let playButton = document.getElementById("s5-video-play-btn");

playButton.addEventListener("click", () => {
  playButton.style.display = "none";
  image.style.display = "none";
  video.style.display = "block";
});
