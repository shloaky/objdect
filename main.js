objectDetector = "";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    Status = true;
    objectDetector.detect(img,gotresults);
}

function gotresults(error,results){
if (error){
    console.log(error);
}
console.log(results);
object = results;
}

img = "";
object = [];
Status = "";

function preload(){
    img = loadImage('IMG-1976.jpg');
}
function draw(){
    image(img,0,0,640,420);
    if (Status != ""){
        for(var i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "status : Object Detected";
            fill("red");
            percent = floor(object[i].confidence*100);
            text(object[i].label+""+percent+"%",object[i].x+13,object[i].y+15);
            noFill();
            stroke("red");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
}
