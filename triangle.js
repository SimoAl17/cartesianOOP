class Triangle{
    constructor(pointA, pointB, pointC){
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    perimeter(){
        let perimeter;
        perimeter = MathC.calculateDistance(this.pointA, this.pointB) +
                    MathC.calculateDistance(this.pointB, this.pointC) +
                    MathC.calculateDistance(this.pointC, this.pointA);
        return perimeter;
    }

    area(){
        let pd2 = this.perimeter() / 2;
        let pd2MinusFirstSide = pd2 - MathC.calculateDistance(this.pointA, this.pointB);
        let pd2MinusSecondSide = pd2 - MathC.calculateDistance(this.pointB, this.pointC);
        let pd2MinusThirdSide = pd2 - MathC.calculateDistance(this.pointC, this.pointA);
        let area = Math.sqrt(pd2 * pd2MinusFirstSide * pd2MinusSecondSide * pd2MinusThirdSide);
        return area;
    }
}