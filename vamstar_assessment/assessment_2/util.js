function isBetween(n, a, b) {
  return (n - a) * (n - b) <= 0;
}

function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}

const cateBMI = [
  "Under weight       ",
  "Normal weight      ",
  "Over weight        ",
  "Moderately obese   ",
  "Severel obese      ",
  "Very severely obese",
];

const healthRisk = [
  "Malnutrition risk",
  "Low risk         ",
  "Enhanced risk    ",
  "Medium risk      ",
  "High risk        ",
  "Very high risk   ",
];

module.exports = {
  cateBMI,
  healthRisk,
  isBetween,
  isNumber
};
