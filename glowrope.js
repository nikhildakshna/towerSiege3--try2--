class glowrope{
    constructor(bodyA, pointB){
    
    var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    length: 4
    }
    this.glowrope = Constraint.create(options);
    World.add(world, this.glowrope);
    }
    
   a(body){
   this.glowrope.bodyA = body; 
   }

   f(){
   this.glowrope.bodyA = null;
   }

   d(){
    if(this.glowrope.bodyA){
   var pa = this.glowrope.bodyA.position;
   var pb = this.glowrope.pointB;
  
   strokeWeight(5);
   stroke(rgb(63, 224, 208));
   line(pa.x, pa.y, pb.x, pb.y);
   }
   }

}