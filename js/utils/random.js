export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomColor() {
    const r = getRandomNumber(0, 255);
    const g = getRandomNumber(0, 255);
    const b = getRandomNumber(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}