class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
   display(){
        strokeWeight(4);
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var x1 = pointA.x;
        var y1 = pointA.y;
        var x2 = pointB.x + this.offsetX;
        var y2 = pointB.y + this.offsetY;
        line(x1,y1-50,x2,y2+26);
   }
}