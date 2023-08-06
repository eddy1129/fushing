const XLSX = require("xlsx");
const fs = require("fs");

const workbook = XLSX.readFile("test.xlsx");
const sheet_name_list = workbook.SheetNames;

// Assuming data is in the first worksheet
const worksheet = workbook.Sheets[sheet_name_list[0]];

// Prepare the data string
let dataString = "";

// Assuming that the data in columns C and D starts from the second row and ends at row 80
for (let row = 2; row <= 80; row++) {
  let c_address = "C" + row;
  let d_address = "D" + row;

  // Check if cell exists before reading its value
  if (
    worksheet[c_address] !== undefined &&
    worksheet[d_address] !== undefined
  ) {
    let c_value = worksheet[c_address].v;
    let d_value = worksheet[d_address].v;

    // Subtract 2 from row to start index from 0
    let index = row - 2;

    dataString += `{id:${index}, name: "${c_value}", desc: "${d_value}"},\n`;
  }
}

// Write the data to a .txt file
fs.writeFile("data.js", dataString, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully written to file.");
  }
});
