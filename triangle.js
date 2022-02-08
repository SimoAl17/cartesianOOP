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

class RightTriangle extends Triangle{
    constructor(p1, p2, p3){
        super(p1, p2, p3);
    }

    calculateHp(){
        const c1 = p1.distanceFrom(p2);
        const c2 = p2.distanceFrom(p3);

        const hp = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));
        return hp;
    }
    
}