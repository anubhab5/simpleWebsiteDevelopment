console.log("Hello World");
const elem = document.getElementById("btn").addEventListener("click", changeImage);

function changeImage() {
    const imgTag = document.createElement("img")
    imgTag.src = "./img/bgImg.jpg";
    document.getElementById("img").appendChild(imgTag);
}