const data = require("./people");

function averageSalary() {
  let salaryAndCount = data.reduce((acc, curr) => {
    let profession = curr["profession"];
    let salary = curr["salary"];
    if (!acc[profession]) {
      acc[profession] = {};
    }

    acc[profession]["sal"] = (acc[profession]["sal"] || 0) + salary;
    acc[profession]["count"] = (acc[profession]["count"] || 0) + 1;

    return acc;
  }, {});

  let output = {};

  for (let prof in salaryAndCount) {
    let averageSalary =
      salaryAndCount[prof]["sal"] / salaryAndCount[prof]["count"];

    output[prof] = averageSalary.toFixed(2);
  }

  console.log(output);
}

averageSalary();
