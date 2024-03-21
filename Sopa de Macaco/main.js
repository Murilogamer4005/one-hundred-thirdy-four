img = "";
objects = [];
modelStatus = "";

function preload() {
    img = loadImage("dog_cat.jpg");
};

function setup() {

    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
};

function modelloaded() {
    console.log("modelo carregado!");

    modelmodelStatus = true;
    //objectDetector.detect(img, gotResult);
};

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: detectando objetos!";
}

function gotResult(error, results) {
    if (error) {

        console.log(error);
    }
    console.log(results);
    objects = results;
};

function draw() {
    image(video, 0, 0, 380, 370);
    if (modelStatus != "") {
        R = random(255);
        G = random(255);
        B = random(255);
        ObjectDetector.detect(video,gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "modelStatus: detectando objetos!";
            document.getElementById("numberOfObjects").innerHTML = "quantidade de objetos detectados: " +objects.length;


            fill(R,G,B)
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke(R,G,B);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].hight);
        };
    };
};
