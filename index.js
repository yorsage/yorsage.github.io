import CONSTS from "./constants.js"

// npm run server to run
let msg = "%c Stop inspecting the site! :D\n- randy sim";
let styles = [
    "font-size: 12px",
    "font-family: monospace",
    "background: white",
    "display: inline-block",
    "color: black",
    "padding: 8px 19px",
    "border: 1px dashed;"
].join(";")
console.log(msg, styles);

const gallery = document.getElementById("galleryCont")
if (CONSTS.gallery.length % 3 != 0) {
    // pad it for formatting
    for (let i = 0; i < 3 - (CONSTS.gallery.length % 3); ++i) {
        CONSTS.gallery.push(false)
    }
}

// add gallery items
for (let item of CONSTS.gallery) {
    if (!item) {
        gallery.innerHTML += `<div class="hiddenElem"></div>`
        continue;
    }

    gallery.innerHTML += `<div class="galleryElem" style="background-image: url(${item.thumbnailUrl})" onClick="(function() {window.open('${item.url}')})()">
    <div class="galleryOverlay"></div>
    <div class="galleryElemMisc">
        <div class="galleryElemTitle">${item.title}</div>
        <div class="galleryElemDesc">${item.desc}</div>
    </div>
</div>`
}

const target = 800
let isIn = false;

for (let key of Object.keys(CONSTS.text)) {
    let x = document.getElementById(key);
    x.innerHTML = CONSTS.text[key];
}

$(window).on('scroll', function () {
    $('#aboutMe').css('margin-top', $(window).scrollTop() * -0.1);
});

const startScroll = () => {
    let current = window.scrollY || window.pageYOffset

    if ((current >= target && !isIn) || (current <= target && isIn)) {

        if (isIn) {
            isIn = false;
            $("#homeTitle").animate({ left: '2000px', opacity: 0 }, 'slow')
        } else {
            isIn = true;
            $("#homeTitle").animate({ left: '50px', opacity: 1 }, 'slow')
        }
    }
}

window.addEventListener("scroll", startScroll)

let soundIcon = document.getElementById("playIcon")
let playing = false;
let audioElement = document.createElement("audio");
audioElement.setAttribute('src', './resource/media/comedy.mp3');
audioElement.volume = 0.4;
audioElement.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);

soundIcon.addEventListener("click", ev => {
    playing = !playing;

    if (playing) {
        audioElement.play();
        soundIcon.src = "./resource/media/pause.png"
    } else {
        audioElement.pause()
        soundIcon.src = "./resource/media/playbutton.png"
    }

})