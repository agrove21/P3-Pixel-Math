export function decimalToFraction(decimal) {
  if (decimal === 0) return "0";
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const len = decimal.toString().length - 2;
  const denominator = Math.pow(10, len);
  const numerator = decimal * denominator;
  const divisor = gcd(numerator, denominator);
  return `${numerator / divisor}/${denominator / divisor}`;
}

const FRACTIONS = [
  0.1, // 10/100
  0.25, // 25/100
  0.5, // 50/100
  0.75, // 75/100
  1, // 100/100 (whole)
];

export function getRandomDecimal() {
  return FRACTIONS[Math.floor(Math.random() * FRACTIONS.length)];
}

export const colors = [
  "#FF0000", // Red
  "#FFA500", // Orange
  "#FFFF00", // Yellow
  "#008000", // Green
  "#0000FF", // Blue
  "#4B0082", // Indigo
  "#EE82EE", // Violet
  "#895129", // Brown
  "#000000", // Black
  "#FFFFFF", // White
];

export function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}