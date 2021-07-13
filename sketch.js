const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
     getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
        text("Time :",100,40);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    
    

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    // write code slice the datetime
    var datetime = responseJSON.datetime;
    console.log(datetime.slice(11,13))
    
    // add conditions to change the background images from sunrise to sunset
    if (hour>=04 && hour<=06){
        bg = "sunrise1.png";
    } else if(hour>=06 && hour<=08){  
        bg = "sunrise2.jpg"
    } else if(hour>=08 && hour<=10){
        bg = "sunrise3.jpg"
    } else if(hour>=10 && hour<=12){
        bg = "sunrise4.jpg"
    } else if(hour>=12 && hour<=13){
        bg = "sunrise5.jpg"
    } else if(hour>=13 && hour<=14){
        bg = "sunrise6.jpg"
    } else if(hour>=14 && hour<=15){
        bg = "sunrise7.jpg"
    } else if(hour>=15 && hour<=16){
        bg = "sunrise8.jpg"
    } else if(hour>=16 && hour<=17){
        bg = "sunrise9.jpg"
    } else if(hour>=17 && hour<=18){
        bg = "sunrise10.jpg"
    } else if(hour>=18 && hour<=22){
        bg = "sunrise11.jpg"
    } else if(hour>=22 && hour<=04){
        bg = "sunrise12.jpg"
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
          