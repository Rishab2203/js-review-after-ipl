const data = require("./people");

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
