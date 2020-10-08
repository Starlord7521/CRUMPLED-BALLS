class Ball{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
        this.image = loadImage("paper.png");
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(0,0,this.r,this.r);
        pop();
      }   
}