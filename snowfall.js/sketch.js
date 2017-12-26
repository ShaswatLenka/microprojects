
var snow = [];

//declaring image variable
var img_1, img_2, img_3;
function setup() {
  createCanvas(windowWidth, windowHeight);
  img_1 = loadImage("images/snowflake_1.png"); //loads the image
  img_2 = loadImage("images/snowflake_2.png");
  img_3 = loadImage("images/snowflake_3.png");

  for (var i = 0; i < 100; i++) {
    snow[i] = new SnowFlake();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < snow.length; i++) {
    snow[i].fall();
    snow[i].show();
  }
}
