function Greeting(){

var str_1 = "Wish your 2018 be dope AF!";
	this.greet = function(){
	this.x = 670;

		fill(255);
		textFont('Helvetica');
		textSize(30);
		text(str_1,this.x,300);
		text("Have a great year ahead!",this.x,340);
		text("Focus on JavaScript",this.x, 380 );
		text("and ignore ",this.x, 420 );
		text("\"Helvetica\" ",this.x, 460 );

		
	}
}