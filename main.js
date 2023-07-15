Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_photo(){

    Webcam.snap(function(data_uri) {
        document.getElementById("resultado").innerHTML = ' <img id="captured_image" src=" ' + data_uri + ' "/> ';
    } )
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qpDDUetxB/model.json', modelLoaded);

function modelLoaded(){
    console.log("Modelo OK!");
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);

    } else{
        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label;
        console.log(results);
        document.getElementById("number_precision").innerHTML = results[0].confidence.toFixed(2);
    }


}


