export function decimalToFraction(decimal) {
    if (decimal === 0) return "0";
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);
    const len = decimal.toString().length - 2;
    const denominator = Math.pow(10, len);
    const numerator = decimal * denominator;
    const divisor = gcd(numerator, denominator);
    return `${numerator / divisor}/${denominator / divisor}`;
  }
  
  //function to generate a random proper fraction
  //numerator < denominator
 //denominator even
 //hide color picker on challenges