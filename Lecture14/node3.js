const fs = require("fs");
const path = require("path");

// Constructing the file path
const filePath = path.join(__dirname, "output.txt");

// Reading the file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file ${filePath}:`, err);
    return;
  }
  console.log(`Contents of ${filePath}:`);
  console.log(data);
});
