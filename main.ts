function buildName(firstName:string, ...restName:string[]){
    return firstName + " " + restName.join(" ");
}

var employeeName = buildName("joseph","james","jimmy","john")

console.log(employeeName)