class Slingshot{
    constructor(bodyA,pointB){
     var options = {
         length:10,
         stiffness:0.04,
         bodyA:bodyA,
         pointB:pointB
     }
        this.slingshot = Constraint.create(options)
        World.add(world,this.slingshot)

        this.pointB = pointB
     
    }
    display(){
    if(this.slingshot.bodyA!=null){
        var pointA = this.slingshot.bodyA.position
        var pointB = this.pointB
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
        
    }
     fly(){
         this.slingshot.bodyA = null
     }
}