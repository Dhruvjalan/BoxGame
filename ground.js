class Ground{
    constructor(){
        var options2 = { 
            isStatic: true,
        }
        this.body = Bodies.rectangle(200,380,400,10, options2);
        World.add(world, this.body);
       this.width = 400;
       this.height = 10;
    }
  shape() {
      rectMode(CENTER);
      rect( this.body.position.x, this.body.position.y, this.width, this.height);
  }

}

