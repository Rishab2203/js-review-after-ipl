// Get all employees across all divisions working on projects with a budget exceeding $150,000

const data = require("./organisation.json");

let allDivisions = data["organisation"]["divisions"];

let output = [];

allDivisions.forEach((division) => {
  let departments = division["departments"];

  departments.forEach((department) => {
    let employees = department["employees"];

    employees.forEach((employee) => {
      let projects = employee["projects"];
      projects.forEach((project) => {
        if (project["budget"] > 150000) {
          if (!output.includes(employee["name"])) {
            output.push(employee["name"]);
          }
        }
      });
    });
  });
});

console.log(output);
