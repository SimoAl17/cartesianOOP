function Triang(p1, p2, p3) {
    this.point1 = p1;
    this.point2 = p2;
    this.point3 = p3;
}

Triang.prototype.perimeter = function(){
    return this.point1.distanceFrom(this.point2)
         + this.point2.distanceFrom(this.point3)
         + this.point3.distanceFrom(this.point1);
}

Triang.prototype.area = function(){
    const halfP = this.perimeter() / 2;
    const halfPMinusFirstSide = halfP - MathC.calculateDistance(this.point1, this.point2);
    const halfPMinusSecondSide = halfP - MathC.calculateDistance(this.point2, this.point3);
    const halfPMinusThirdSide = halfP - MathC.calculateDistance(this.point3, this.point1);
    return Math.sqrt(halfP * halfPMinusFirstSide * halfPMinusSecondSide * halfPMinusThirdSide);
}

function RightTriang(p1, p2, p3) {
    Triang.call(this, p1, p2, p3);
    Object.setPrototypeOf(RightTriangle.prototype, Triang.prototype);    //Fa sì che il prototype di RightTriang erediti dal prototype di Triang
}

RightTriang.prototype.calculateHp = function (){
    const c1 = p1.distanceFrom(p2);
    const c2 = p2.distanceFrom(p3);

    const hp = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));
    return hp;
}