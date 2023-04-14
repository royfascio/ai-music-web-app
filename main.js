polozhenie_song="";
harry_potter_song="";

leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload(){
    polozhenie_song = loadSound("polozhenie.mp3");
    harry_potter_song = loadSound("harrypotter.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        leftwristx= results[0].pose.leftWrist.x;
        leftwristy= results[0].pose.leftWrist.y;
        console.log("LeftWristX="+leftwristx+"LeftWristY="+leftwristy );
        
        rightwristx= results[0].pose.rightWrist.x;
        rightwristy= results[0].pose.rightWrist.y;
        console.log("RightWristX="+rightwristx+"RightWristY="+rightwristy );
    }
}