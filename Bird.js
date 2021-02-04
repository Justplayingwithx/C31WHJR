class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trail = loadImage("sprites/smoke.png");
    this.trajectoryArray = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var posArray = [this.body.position.x,this.body.position.y]
      this.trajectoryArray.push(posArray)
    }
   

    for (var i = 0; i< this.trajectoryArray.length; i++ ){
    image(this.trail,this.trajectoryArray[i][0],this.trajectoryArray[i][1])
      
    }

   // console.log(trajectoryArray[0][0])

  }
}
