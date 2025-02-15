// Write a function to return a list of engineers who are above 30 years of age.

const data = require("./people");
// console.log(data);

// function getAboveAgeEngineers() {
//   let engineers = data.filter(
//     (ele) => ele.profession === "Engineer" && ele.age > 30
//   );
//   console.log(engineers.length);
//   let output = engineers.reduce((acc, curr) => {
//     acc.push(curr["name"]);
//     return acc;
//   }, []);

//   return output;
// }

// console.log(getAboveAgeEngineers());

// function getDoctorsAndLawyer() {
//   let output = data.reduce((acc, curr) => {
//     let profession = curr["profession"];
//     if (!acc[profession]) {
//       acc[profession] = [];
//     }
//     acc[profession].push(curr["name"]);
//     return acc;
//   }, {});

//   return output;
// }
// console.log(getDoctorsAndLawyer());

// function averageSalary() {
//   let salaryAndCount = data.reduce((acc, curr) => {
//     let profession = curr["profession"];
//     let salary = curr["salary"];
//     if (!acc[profession]) {
//       acc[profession] = {};
//     }

//     acc[profession]["sal"] = (acc[profession]["sal"] || 0) + salary;
//     acc[profession]["count"] = (acc[profession]["count"] || 0) + 1;

//     return acc;
//   }, {});

//   let output = {};

//   for (let prof in salaryAndCount) {
//     let averageSalary =
//       salaryAndCount[prof]["sal"] / salaryAndCount[prof]["count"];

//     output[prof] = averageSalary.toFixed(2);
//   }

//   console.log(output);
// }

// averageSalary();

function youngestAndOldest() {
  let lastOutput = {};
  let output = data.reduce((acc, curr) => {
    let profession = curr["profession"];
    let age = curr["age"];

    if (!acc[profession]) {
      acc[profession] = { youngest: +Infinity, eldest: 0 };
    }
    if (!lastOutput[profession]) {
      lastOutput[profession] = { youngest: [], eldest: [] };
    }
    if (curr["age"] > acc[curr["profession"]]["eldest"]) {
      acc[profession]["eldest"] = curr["age"];
      lastOutput[profession]["eldest"][0] = curr["name"];
      lastOutput[profession]["eldest"][1] = curr["age"];
    }
    if (curr["age"] < acc[curr["profession"]]["youngest"]) {
      acc[profession]["youngest"] = curr["age"];
      lastOutput[profession]["youngest"][0] = curr["name"];
      lastOutput[profession]["youngest"][1] = curr["age"];
    }

    return acc;
  }, {});

  console.log(lastOutput);
}

youngestAndOldest();
