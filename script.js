function pickRandomArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}
function pickRandomInt(int) {
    const randomIndex = Math.floor(Math.random() * int);
    
    return randomIndex;
}

function hover() {
    let audio = document.getElementById("hoverSound");
    audio.play();
}
function active() {
    var audio = document.getElementById("clickSound");
    audio.play();
}

var impostors = [];

impostors.push("/images/impostors/red.png");
impostors.push("/images/impostors/blue.png");
impostors.push("/images/impostors/green.png");
impostors.push("/images/impostors/lime.png");
impostors.push("/images/impostors/cyan.png");
impostors.push("/images/impostors/orange.png");
impostors.push("/images/impostors/yellow.png");
impostors.push("/images/impostors/pink.png");
impostors.push("/images/impostors/white.png");
impostors.push("/images/impostors/black.png");
impostors.push("/images/impostors/amogus.png");

var sus_percent = [];
for (var i = 0; i < impostors.length; ++i) {
    sus_percent += impostors[i].substring(18, impostors[i].length).replace(".png", "");
}
console.log(sus_percent);

var div = document.getElementById("spanLabel");

function clicar() {
    ejectButton.disabled = false;
    var container = document.getElementById("photos");
    var percentage = document.getElementById("blue");
    var audio = document.getElementById("clickSound");
    audio.play();

    percentage.innerHTML = sus_percent.includes("")
    
    var img = new Image();
    img.src = pickRandomArray(impostors);
    if (container.hasChildNodes()) {
        container.removeChild(container.firstElementChild);
        container.appendChild(img);
        var split = img.src.substring(39, img.src.length).replace(".png", "");
        div.innerHTML = `${split} is sus`;
    }else {
        container.appendChild(img);
        var split = img.src.substring(39, img.src.length).replace(".png", "");
        div.innerHTML = `${split} is sus`;
    }


}


var ejectButton = document.getElementById("ejectButton");

ejectButton.disabled = true;