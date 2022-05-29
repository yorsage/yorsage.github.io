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

// add gallery items
for (let item of CONSTS.gallery) {

    gallery.innerHTML += `<div class="galleryElemCont"><div class="galleryElem" style="background-image: url(${item.thumbnailUrl})" onClick="(function() {window.open('${item.url}')})()">
    <div class="galleryOverlay"></div>
    <div class="galleryElemMisc">
        <div class="galleryElemTitle">${item.title}</div>
        <div class="galleryElemDesc">${item.desc}</div>
    </div>
</div></div>`
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

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

if (detectMob()) {
    $("#homeTitle").css("left", "50px");
    $("#homeTitle").css("opacity", 1)
}

const startScroll = () => {
    if (detectMob()) return;
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
