const net = require("prompt-sync");
const prompt = net();
let salary = prompt("Whats your income");
function taxRate(){
    if(salary <= 2400){
        return(salary/100)*10;
    }
    else if(salary > 2400 && salary <= 32333){
        return(salary/100)*25;
    }
    else{
        return(salary/100)*30;
    }
}
let tax = taxRate();
function medicalCover(){
    if(salary < 100000){
        return salary*(1.6/100);
    }
    else{
        return 1700
    }
}
let NHIF = medicalCover();
function nationalSecurity(){
    if(salary <= 100000){
        return salary*(6/100);
    }
    else{
        return 6000;
    }
}
let NSSF = nationalSecurity();
console.log('Gross Salary: ksh.${salary}');
console.log('Tax:ksh.${tax}');
console.log('NHIF Deducations: ksh.${NHIF}');
console.log('NSSFNDeducations : ksh.${NSSF}');
let netSalary = salary-(tax + NSSF + NHIF);
console.log ('Net Salary: ksh.${netSalary}')
