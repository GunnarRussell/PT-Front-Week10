//declare variables
let myTable = document.getElementById("myTable");
let inputFirstName = document.getElementById("input1");
let inputLastName = document.getElementById("input2");
let inputEmail = document.getElementById("input3");
let button = document.getElementById("button");
let num = 1;

button.addEventListener("click", function()
{
    //input validation
    if(inputFirstName.value == "") //if first name field is empty
    {
        //undo any style changes
        inputFirstName.style.borderColor = "";
        inputLastName.style.borderColor = "";
        inputEmail.style.borderColor = "";

        //highlight input field
        inputFirstName.style.borderColor = 'red';
        alert("You must enter a first name!");
    }
    else if(inputLastName.value == "") //if last name field is empty
    {
        //undo any style changes
        inputFirstName.style.borderColor = "";
        inputLastName.style.borderColor = "";
        inputEmail.style.borderColor = "";

        //highlight input field
        inputLastName.style.borderColor = 'red';
        alert("You must enter a last name!");
    }
    else if(inputEmail.value == "") //if email field is empty
    {
        //undo any style changes
        inputFirstName.style.borderColor = "";
        inputLastName.style.borderColor = "";
        inputEmail.style.borderColor = "";

        //highlight input field
        inputEmail.style.borderColor = 'red';
        alert("You must enter an email!");
    }
    else
    {
        //undo any style changes
        inputFirstName.style.borderColor = "";
        inputLastName.style.borderColor = "";
        inputEmail.style.borderColor = "";

        //proceed as planned

        //create new row and cells
        var newRow = document.createElement("tr");
        var cellNum = document.createElement("th");
        var cellFirstName = document.createElement("td");
        var cellLastName = document.createElement("td");
        var cellEmail = document.createElement("td");
        
        //set cell data to input field data
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
    }

    


    
});