function calculateRectangleProperties(width, height) {
    const area = width * height;
    const perimeter = 2 * (width + height);
    return { area, perimeter };
}
const width = 5;
const height = 3;
const properties = calculateRectangleProperties(width, height);
console.log("Area:", properties.area);
console.log("Perimeter:", properties.perimeter);