const fs = require("fs");
const { isBetween, isNumber, cateBMI, healthRisk } = require("./util");


var levelBMI = [];
var cntIndex = 0;


function readData() {
  try {
    const data = JSON.parse(fs.readFileSync("./input/data.txt", "utf8"));
    levelBMI = JSON.parse(fs.readFileSync("./input/BMIlevel.txt", "utf8"));
    cntIndex = parseInt(fs.readFileSync("./input/count.txt", "utf8"));
    calcBMI(data);
  } catch (err) {
    console.error('input type incorrect');
  }
}

function makePrint(data) {
  var count = [];
  console.log("result:");
  data.forEach((row) => {
    for (var i = 1; i < levelBMI.length; i++) {
      if (isBetween(row, levelBMI[i - 1], levelBMI[i])) {
        count[i] = isNumber(count[i]) ? count[i] + 1 : 1;
        console.log(row + "   " + cateBMI[i] + "   " + healthRisk[i]);
        break;
      }
    }
  });
  console.log("count:");
  console.log(cateBMI[cntIndex] + "  " + count[cntIndex]);
}

function calcBMI(data) {
  var resultBMIs = [];
  data.forEach((person) => {
    resultBMIs.push(
      Math.round(person.WeightKg / Math.pow(person.HeightCm / 100, 2))
    );
  });
  makePrint(resultBMIs);
}

async function produceResult() {
  await readData();
}

produceResult();
