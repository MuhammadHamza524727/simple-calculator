const inputFirst = parseFloat(prompt("Enter Your First Number:"));
const inputSecond = parseFloat(prompt("Enter Your Second Number:"));
const selectOperations = prompt("Please Enter an Operator  (+, -, /, * )");
let result = 0;


if (isNaN(inputFirst) || isNaN(inputSecond)) {
    alert("Wrong Input ! Referesh the page  and again provide data! ");
}
else {
    if (selectOperations == "+") {
        result = (inputFirst + inputSecond);
    }
    else if (selectOperations == "-") {
        result = (inputFirst - inputSecond);
    }
    else if (selectOperations == "/") {
        result = (inputFirst / inputSecond);

    }
    else if ( selectOperations == "*"){
        result = (inputFirst * inputSecond)
    }


}

// alert(
//     inputFirst + selectOperations + inputSecond
// )
alert("Result: \n"+ result);