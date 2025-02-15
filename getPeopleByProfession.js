const data = require("./people");

function getDoctorsAndLawyer() {
  let output = data.reduce((acc, curr) => {
    let profession = curr["profession"];
    if (!acc[profession]) {
      acc[profession] = [];
    }
    acc[profession].push(curr["name"]);
    return acc;
  }, {});

  return output;
}
console.log(getDoctorsAndLawyer());
