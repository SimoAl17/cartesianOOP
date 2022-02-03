class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    distanceFrom(b){
        const xDif = b.x - this.x;
        const xDif2 = xDif * xDif;
        const yDif = b.y - this.y;
        const yDif2 = yDif * yDif;
        const sumDif2 = xDif2 + yDif2;
        const res = Math.sqrt(sumDif2);
        return res;
    }

    distanceFromOrigin(){
        const b = {x: 0, y:0}; 
        const xDif = b.x - this.x;
        const xDif2 = xDif * xDif;
        const yDif = b.y - this.y;
        const yDif2 = yDif * yDif;
        const sumDif2 = xDif2 + yDif2;
        const res = Math.sqrt(sumDif2);
        return res;
    }

    medianPointFromPoint(b){
        const sumX = this.x + b.x;
        const cX = sumX / 2;
        const sumY = this.y + b.y;
        const cY = sumY / 2; 
        return "x=" + cX + " y=" + cY;
    }

    nearestPoint(...args){
        let nearest = args[0];
        for (let i = 0; i < args.length; i++) {
            const element = args[i];
            if (this.distanceFrom(nearest) > this.distanceFrom(element)) {
                nearest = element;
            }
        }
        return nearest;
    }
}