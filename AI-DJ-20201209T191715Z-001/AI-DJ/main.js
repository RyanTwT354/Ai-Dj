
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
 song = loadSound("music.mp3");
}

function setup() {
canvas=createCanvas(600, 500);
canvas.center();

video = cerateCapture(VIDEO);
video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWristX;
        leftWristY = results[0].pose.leftWristY;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
    }
}
function draw() {
    image(video, 0, 0, 600, 500);
}

function Play() {
    song.Play();
    song.setVolume(1);
    song.rate(1)
}