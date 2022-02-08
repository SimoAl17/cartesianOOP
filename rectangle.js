class Rectangle{
    constructor(pointA, pointB, pointC, pointD){
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
        this.pointD = pointD;
    }

    perimeter(){
        let perimeter;
        perimeter = MathC.calculateDistance(this.pointA, this.pointB) +
                    MathC.calculateDistance(this.pointB, this.pointC) +
                    MathC.calculateDistance(this.pointC, this.pointD) +
                    MathC.calculateDistance(this.pointD, this.pointA);
        return perimeter;
    }

    area(){
        let area;
        area = MathC.calculateDistance(this.pointA, this.pointB) *
                    MathC.calculateDistance(this.pointD, this.pointA);
        return area;
    }
}

class RectangleV2{
    constructor(topLeft, width, height){
        this.topLeft = topLeft;
        this.width = width;
        this.height = height;
        this.topRight = new Point(this.topLeft.x + this.width, this.topLeft.y);
        this.bottomRight = new Point(this.topRight.x, this.topRight.y - this.height);
        this.bottomLeft = new Point(this.topLeft.x, this.bottomRight.y);
    }

    perimeter(){
        let perimeter;
        perimeter = MathC.calculateDistance(this.topLeft, this.topRight) +
                    MathC.calculateDistance(this.topRight, this.bottomRight) +
                    MathC.calculateDistance(this.bottomRight, this.bottomLeft) +
                    MathC.calculateDistance(this.bottomLeft, this.topLeft);
        return perimeter;
    }

    area(){
        let area;
        area = this.width * this.height;
        return area;
    }
}

class RectangleV3{
    constructor(topLeft, bottomRight){
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
        this.topRight = new Point(this.bottomRight.x, this.topLeft.y);
        this.bottomLeft = new Point(this.topLeft.x, this.bottomRight.y);
    }

    perimeter(){
        let perimeter;
        perimeter = MathC.calculateDistance(this.topLeft, this.topRight) +
                    MathC.calculateDistance(this.topRight, this.bottomRight) +
                    MathC.calculateDistance(this.bottomRight, this.bottomLeft) +
                    MathC.calculateDistance(this.bottomLeft, this.topLeft);
        return perimeter;
    }

    area(){
        let area;
        area = MathC.calculateDistance(this.topLeft, this.topRight) *
        MathC.calculateDistance(this.topRight, this.bottomRight);
        return area;
    }
}

class Square extends RectangleV3{
    constructor(topLeft, side){
        super(topLeft, new Point(topLeft.x + side, topLeft.y + side));
        this.side = side;
    }
}