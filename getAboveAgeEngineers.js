// Write a function to return a list of engineers who are above 30 years of age.

const data = require("./people");

// console.log(data);

function getAboveAgeEngineers() {
  let engineers = data.filter(
    (ele) => ele.profession === "Engineer" && ele.age > 30
  );
  console.log(engineers.length);
  let output = engineers.reduce((acc, curr) => {
    acc.push(curr["name"]);
    return acc;
  }, []);

  return output;
}

console.log(getAboveAgeEngineers());
