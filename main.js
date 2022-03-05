song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("music.mp4");
    song2 = loadSound("song.mp3");
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song1.play();
}
