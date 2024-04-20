function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/UYWWBw2rc/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog=0;
var bird=0;
var cat=0;
var cow=0;
var horse=0;
var pig=0;
var sheep=0;

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = "Detected sounds of - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Detected dog - "+ dog+" Detected bird - "+ bird+" Detected cat - "+ cat+" Detected cow - "+ cow+" Detected horse - "+ horse+" Detected pig - "+ pig+" Detected sheep - "+ sheep;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        img=document.getElementById("animal");

        if (results[0].label == "Barking"){
            img.src = 'dog.gif';
            dog= dog+1
        } 
        else if (results[0].label == "Chirping"){
            img.src = 'bird.gif';
            bird= bird+1
        } 
        else if (results[0].label == "Meowing"){
            img.src = 'cat.gif';
            cat= cat+1
        } 
        else if (results[0].label == "Mooing"){
            img.src = 'cow.gif';
            cow= cow+1
        } 
        else if (results[0].label == "Neighing"){
            img.src = 'horse.gif';
            horse= horse+1
        } 
        else if (results[0].label == "Oinking"){
            img.src = 'pig.gif';
            pig= pig+1
        } 
        else if (results[0].label == "Sheep"){
            img.src = 'sheep.gif';
            sheep= sheep+1
        } 
        else {
            img.src='listen.gif';
        }
        
    }
}
    