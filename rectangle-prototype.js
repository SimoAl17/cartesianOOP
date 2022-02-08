function Rect(topLeft, bottomRight) {
    this.topLeft = topLeft
    this.bottomRight = bottomRight;
    this.topRight = new Point(this.bottomRight.x, this.topLeft.y);
    this.bottomLeft = new Point(this.topLeft.x, this.bottomRight.y);
}

Rect.prototype.area = function(){
    return this.bottomRight.distanceFrom(this.bottomLeft)
             * this.bottomRight.distanceFrom(this.topRight);
}

Rect.prototype.perimeter = function(){
    return this.topLeft.distanceFrom(this.topRight)
             + this.topRight.distanceFrom(this.bottomRight)
             + this.bottomRight.distanceFrom(this.bottomLeft)
             + this.bottomLeft.distanceFrom(this.topLeft); 
}



function Squa(topLeft, side){
    //this.topLeft = topLeft;
    //this.side = side;
    //this.bottomRight = new Point(this.topLeft.x + side, this.topLeft.y + side);
    //this.topRight =  new Point(this.bottomRight.x, this.topLeft.y);
    //this.bottomLeft = new Point(this.topLeft.x, this.bottomRight.y);
    Rect.call(this, topLeft, new Point(topLeft.x + side, topLeft.y + side));
    this.side = side;
    Object.setPrototypeOf(Squa.prototype, Rect.prototype);
}
