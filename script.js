
function pickRandomArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}
function pickRandomInt(int) {
    const randomIndex = Math.floor(Math.random() * int);
    
    return randomIndex;
}

let impostors = [];

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

function clicar() {
    var container = document.getElementById("photos");
    
    var img = new Image();
    img.src = pickRandomArray(impostors);
    if (container.hasChildNodes()) {
        container.removeChild(container.firstElementChild);
        container.appendChild(img);
    }else {
        container.appendChild(img);
    }

}