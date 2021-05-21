class string{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		var Hanger1X=pointA.x
		var Hanger1Y=pointA.y

		var Hanger2X=pointB.x+this.offsetX
		var Hanger2Y=pointB.y+this.offsetY

		line(Hanger1X,Hanger1Y,Hanger2X,Hanger2Y);
	}

}