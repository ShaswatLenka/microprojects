

function SnowFlake() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.size = map(this.z, 0, 20, 10, 30);
  
  this.yspeed = map(this.z, 0, 20, 1, 10);
  this.xspeed =  random(-1,1);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    this.x = this.x + this.xspeed;
    var grav = map(this.z, 0, 20, 0, 0.01);

    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }

    if(this.x > width){
      this.x = random(0,windowWidth);
      this.y = random(-100,-10);
      this.yspeed = map(this.z, 0, 20, 4, 10);


    }
  }

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    //stroke();
    if(this.z <= 5){
      ellipse(this.x, this.y, this.size, this.size );
    }
    else if (this.z >5 && this.z <= 10){
      image(img_1, this.x, this.y, this.size, this.size);
    }

    else if(this.z >10 && this.z <= 15){
      image(img_2, this.x,this.y, this.size, this.size);
    }

    //else image(img_3, this.x,this.y, this.size, this.size);
  }


}
