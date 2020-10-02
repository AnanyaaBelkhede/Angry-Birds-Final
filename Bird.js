class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = []
    this.smoke = loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var pos = this.body.position
    if(pos.x>220 && this.body.velocity.x>10){
      var position = [pos.x,pos.y]
      this.trajectory.push(position)
    }
   
    console.log(this.trajectory)
    for(var i = 0; i < this.trajectory.length; i++){
    image(this.smoke,this.trajectory[i][0],this.trajectory[i][1])
    }

    super.display();
  }
}
