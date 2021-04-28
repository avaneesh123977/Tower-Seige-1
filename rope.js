class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}