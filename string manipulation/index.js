//Get random persons from list
function getRandomNames(name_list) {
  let random;
  let names = [];
  for (i = 0; i < 2; i++) {
    random = Math.floor(Math.random() * name_list.length);
    names.push(name_list[random]);
  }
  return names;
}
const months = ["Fawad", "Hammad", "Saad", "Jawad", "Naeem", "4bros"];
console.log(getRandomNames(months));
// Find Same person from file
const fs = require("fs");
function file1(filename) {
  var data = fs.readFileSync(filename, "utf8");
  var fileData = data.replace("\r\n", "+").replace("\r\n", "+").split("+");
  var names = [];
  let i = 0;
  while (i < fileData.length) {
    record = fileData[i].split(",");
    names.push(record[1]);
    i += 1;
  }
  return names;
}
let file1Result = file1("file1.txt");
let file2Result = file1("file2.txt");
let result = file1Result.filter((n) => {
  return file2Result.indexOf(n) !== -1;
});
let [names] = result;
console.log(names);
