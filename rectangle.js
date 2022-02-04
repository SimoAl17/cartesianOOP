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