let msg = "%c You actually gotta know the stuff to get the gift lol";
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

let gift = document.getElementById("encryptedGift")
let prompt = document.getElementById("giftPrompt");
let input = document.getElementById("giftGuess")
let btn = document.getElementById("giftBtn")

gift.innerHTML = "U2FsdGVkX1+bJmsirIEz7GhtA4LKcKWN3m8xiKeOAkjFMHq2ggF50tcOefv6LxarAsK2pJl0KOR34sRJ3LRePnPVklHut0PIB/S4wm7KpJ2VgwGHBsJAWn7RmDcyUReoOyG1QZ+tlyPXNSFIz6ZTeYqdeHTcIieX4jtRCrH3reZ0+R6d4sSLXMS/OGQae228Tgdan+Sp9XCEacPRSSHxkcE9qGyurCLY83bUZuf0CmY="

let prompts = [
    "what is another name for the immortal rank in valorant? (all lower case, ends with an s)",
    "what type of animal is \"sani\" (all lowercase)",
    "what is eunjeong's last name (all lowercase)",
    "End! If you don't see anything you made a mistake :D"
]

let c = 0;
prompt.innerHTML = prompts[c];

btn.addEventListener("click", ev => {
    let key = input.value;

    c++;

    if (c > 3) return;
    prompt.innerHTML = prompts[c];
    let decrypt = CryptoJS.AES.decrypt(gift.innerHTML, key).toString(CryptoJS.enc.Utf8);
    console.log(key)
    console.log(gift.innerHTML)
    console.log(decrypt)
    gift.innerHTML = decrypt;
})

function encrypt(msg, stuff) {
    for (let x of stuff.reverse()) {
        console.log(x);
        msg = CryptoJS.AES.encrypt(msg, x).toString();
    }

    console.log(msg);
}
