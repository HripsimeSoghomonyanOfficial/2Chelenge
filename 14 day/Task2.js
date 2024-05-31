function isInsideCircle(circle, point) {
    const dx = point.x - circle.center.x;
    const dy = point.y - circle.center.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance <= circle.radius;
}

const circle1 = { center: { x: 0, y: 0 }, radius: 10 };
const point1 = { x: 0, y: 0 };
console.log(isInsideCircle(circle1, point1));   
const circle2 = { center: { x: 5, y: 5 }, radius: 20 };
const point2 = { x: 5, y: 5 };
console.log(isInsideCircle(circle2, point2));
const point3 = { x: 30, y: 30 };
console.log(isInsideCircle(circle2, point3)); 