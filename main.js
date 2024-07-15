"use strict";
function buildName(firstName, ...restName) {
    return firstName + " " + restName.join(" ");
}
var employeeName = buildName("joseph", "james", "jimmy", "john");
console.log(employeeName);
