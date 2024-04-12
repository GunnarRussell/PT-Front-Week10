//declare variables
let myTable = document.getElementById("myTable");
let inputFirstName = document.getElementById("input1");
let inputLastName = document.getElementById("input2");
let inputEmail = document.getElementById("input3");
let button = document.getElementById("button");
let num = 1;

button.addEventListener("click", function()
{
    //create new row and cells
    var newRow = document.createElement("tr");
    var cellNum = document.createElement("th");
    var cellFirstName = document.createElement("td");
    var cellLastName = document.createElement("td");
    var cellEmail = document.createElement("td");

    //data validation
    cellNum.innerHTML = num++;
    cellFirstName.innerHTML = inputFirstName.value;
    cellLastName.innerHTML = inputLastName.value;
    cellEmail.innerHTML = inputEmail.value;

    //append new row to myTable
    myTable.appendChild(newRow);
    newRow.appendChild(cellNum);
    newRow.appendChild(cellFirstName);
    newRow.appendChild(cellLastName);
    newRow.appendChild(cellEmail);

    //clear input fields
    //grab all input fields and put them into array
    let inputFields = Array.from(document.getElementsByClassName("input-fields"));
    //for each input field grabbed above:
    inputFields.forEach(function(inputField)
    {
        //clear text
        inputField.value = "";
    });


    
});