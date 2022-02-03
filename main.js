//distanza da A a B: rad di (xb - xa)^2 + (yb -ya)^2 
//punto medio fra due punti: xc = (xa+xb)/2,  yc = (ya+yb)/2

const point1 = new Point(3, 5);
const point2 = new Point(6, 1);
const point3 = new Point(14, 7);
const point4 = new Point(-2, 9);
const point5 = new Point(8, 1);
const distance = MathC.calculateDistance(point1, point2);
const median = MathC.medianPoint(point1, point2);

console.log(distance);

console.log(median);

console.log(MathC.distanceFromOrigin(point1));

console.log(MathC.nearestPoint(point3, point1, point2, point4, point5));

console.log(point1.distanceFrom(point2));
console.log(point1.distanceFromOrigin());
console.log(point1.medianPointFromPoint(point2));
console.log(point1.nearestPoint(point3, point2, point4, point5));

