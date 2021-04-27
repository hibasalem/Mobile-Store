'use strict';



// create a reandom number for the price 


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create the constractour function 

let allMobiles = [];
let price = 0;
let condition = "";

function Mobile(user, type) {

    this.user = user;
    this.type = type;
    this.price = getRndInteger(100, 500);

    if (this.price <= 200) {
        condition = "Used";
        console.log("hello form if ");
    } else if (this.price > 200) {
        condition = "New";
        console.log("hello form elseif ");
    }
    this.condition = condition;

    allMobiles.push(this);
    // Mobile.render();
        // this.render();

}

let test = new Mobile("testuser", "Samsung", 0);

// create the form submiter event listner 

let form = document.getElementById("form");
form.addEventListener('submit', submitter);
function submitter(event) {
    price = 0;
    tableParent.textContent="";
    tableHeader() ;

    event.preventDefault();
    let user = event.target.user.value;
    let type = event.target.type.value;
    let addedMobile = new Mobile("user", "type");

    setingData();

}

console.log(allMobiles);

// create table header
let tableParent = document.getElementById("table");
let tableHederContent = ["user", "type", "price", "condition"]
function tableHeader() {

    let tableHeaderRow = document.createElement('tr');
    tableParent.appendChild(tableHeaderRow);

    for (let i = 0; i < tableHederContent.length; i++) {
        let tableHeaderRowCells = document.createElement('th');
        tableHeaderRow.appendChild(tableHeaderRowCells);
        tableHeaderRowCells.textContent = tableHederContent[i];
    }
}

tableHeader();

// there is something not working in the render function  so i made this just to check on the content and show something on the table 

let tableContantRowTest = document.createElement('tr');
tableParent.appendChild(tableContantRowTest);

// creat user cell + add text 
let tableuserCellstest = document.createElement('td');
tableContantRowTest.appendChild(tableuserCellstest);
tableuserCellstest.textContent ="test user " ;

// creat user cell + add text 
let tableuserCellstest2 = document.createElement('td');
tableContantRowTest.appendChild(tableuserCellstest2);
tableuserCellstest2.textContent ="test type " ;

// creat user cell + add text 
let tableuserCellstest3 = document.createElement('td');
tableContantRowTest.appendChild(tableuserCellstest3);
tableuserCellstest3.textContent ="test price " ;

// creat user cell + add text 
let tableuserCellstest4 = document.createElement('td');
tableContantRowTest.appendChild(tableuserCellstest4);
tableuserCellstest4.textContent ="test condition " ;




// create the render prototype
 

Mobile.prototype.render = function () {


    let tableContantRow = document.createElement('tr');
    tableParent.appendChild(tableContantRow);

    // creat user cell + add text 
    let tableuserCells = document.createElement('td');
    tableContantRow.appendChild(tableuserCells);
    tableuserCells.textContent = this.user;

    // create price  cell + add text 
    let tableTypeCells = document.createElement('td');
    tableContantRow.appendChild(tableTypeCells);
    tableTypeCells.textContent = this.type;

    let tablePriceCells = document.createElement('td');
    tableContantRow.appendChild(tablePriceCells);
    tablePriceCells.textContent = this.price;


    let tableConditionCells = document.createElement('td');
    tableContantRow.appendChild(tableConditionCells);
    tableConditionCells.textContent = this.condition;

    // back to tha call problem 
}


//  sitting data 
function setingData() {
    let srtingAllMobiles = JSON.stringify(allMobiles);
    localStorage.setItem('allMobiles',srtingAllMobiles)
}

//  gitting data 
function getData() {
   let allMobilesfromStorage = localStorage.getItem('allMobiles');
    let parceAllMobiles = JSON.parse(allMobilesfromStorage);

    // reinstation

    if (parceAllMobiles !==null) {

        for (let i = 0; i < parceAllMobiles.length; i++) {
            new Mobile ( parceAllMobiles[i].user , parceAllMobiles[i].type);
            
        }
        
    }
}

getData();


// clear button 

let clearButton= document.getElementById("clear");
clearButton.addEventListener("click",clearStorage);
function clearStorage() {

    tableParent.textContent="";
    localStorage.clear();
    tableHeader();    
}













