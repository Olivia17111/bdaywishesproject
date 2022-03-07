var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
ctx = canvas.getContext("2d");


var imgs_array = ["Bday img 1.jpg", "Bday img 2.jpg", "Bday img 3.jpg", "Bday img 4.jpg", "Bday img 5.jpg"];
function new_image() {
    random_number = Math.floor(Math.random() * 5);
    console.log(random_number);

    background_image = imgs_array[random_number];
    console.log("background_image = " + background_image);
    background_imgTag = new Image(); background_imgTag.onload = uploadBackground; background_imgTag.src = background_image;


}
function playaudio() {
    x.play("Happy Bday.m4a");

}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
