class chain {
constructor(bodyA,bodyB){
var constrained={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.05,
length:10


}
this.chain=Constraint.create(constrained);
World.add(world,this.chain);
}
display(){
var pointA=this.chain.bodyA.position;
var pointB=this.chain.bodyB.position;
strokeWeight(6);
line(pointA.x,pointA.y,pointB.x,pointB.y);


}

}