class Block{
  constructor(x, y, width, height) {
      var options = {
        //visibility:true,
          restitution :0.4,
          friction :0.0,
          //isStatic:true

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility=255;
      World.add(world, this.body);
      
    }
    display(){
      if(this.body.speed<3){ 
        super.display();
       this.Visibility=this.Visibility+5; 
      }
      else{
        World.remove(world,this.body);
        push();
        
        tint(255,this.Visibility);
        
        pop();
      }
      var angle = this.body.angle;
      var pos= this.body.position;
      
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);

     score(){
       if(this.visibility<0 && this.visibility >- 105) {
         score++;
       }
     } 
      
      
      
  }
};

