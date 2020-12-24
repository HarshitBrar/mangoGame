class ThrowingStone{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB = this.pointB;
        this.Throw = Constraint.create(options);
        World.add(myWorld,this.Throw);
    }
    display(){
        if(this.Throw.bodyA){
            var pointA = this.bodyA.position
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    fly(){
        this.Throw.bodyA = null;
    }
    attach(body){
        this.Throw.bodyA = body;
    }

}