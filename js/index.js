
function calculateRice() {
  //RICE Calculator
  let featureName = document.getElementsByName("featureName")[0].value;
  let featureReach = document.getElementsByName("featureReach")[0].value;
  let featureImpact = document.getElementsByName("featureImpact")[0].value;
  let featureConfidence = document.getElementsByName("featureConfidence")[0].value;
  let featureEffort = document.getElementsByName("featureEffort")[0].value;
  let featureRiceScore = (featureReach * featureImpact * featureConfidence * 100) / featureEffort;
  let featureRiceResult = (document.getElementById("featureRiceResult").innerHTML = Math.round(featureRiceScore));
  if (featureRiceScore < 1) {
    document.getElementById("featureRiceResult").innerText = "Score is too low :(";
    return;
  }
  if (isNaN(featureRiceScore)) {
    document.getElementById("featureRiceResult").innerText = "Please insert numbers";
    return;
  }

// defining dropdown options values
let featureImpact1 = document.getElementById("featureImpact"); 
let featureConfidence1 = document.getElementById("featureConfidence");
let featureImpactText = featureImpact1.options[featureImpact1.selectedIndex].textContent;
let featureConfidenceText = featureConfidence1.options[featureConfidence1.selectedIndex].textContent;

//adding a table row and cells for each calculation
let tableRice, newRow, cell1, cell2, cell3, cell4, cell5, cell6, cell7;
tableRice = document.getElementById("riceTable");
newRow = tableRice.insertRow(2);
cell1 = newRow.insertCell(0);
cell2 = newRow.insertCell(1);
cell3 = newRow.insertCell(2);
cell4 = newRow.insertCell(3);
cell5 = newRow.insertCell(4);
cell6 = newRow.insertCell(5);
cell7 = newRow.insertCell(6);

// inserting to cells
cell1.innerText = featureName;
cell2.innerHTML = featureReach;
cell3.innerHTML = featureImpactText;
cell4.innerHTML = featureConfidenceText;
cell5.innerHTML = featureEffort;
cell6.innerHTML = featureRiceResult;
}

//sorting button
function sortTable() {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("riceTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 2; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[5];
      y = rows[i + 1].getElementsByTagName("TD")[5];
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function saveData() {
  const table = document.getElementById("riceTable");
  const rows = table.querySelectorAll("tbody tr");
  const dataArray = [];

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    const rowData = Array.from(cells).map(cell => cell.textContent.trim());
    dataArray.push(rowData);
  });

  // Save the data in local storage
  localStorage.setItem("tableData", JSON.stringify(dataArray));
  console.log("RICE Calculator data is saved to local storage!");
} 

// To retrieve the data from local storage later
const savedData = JSON.parse(localStorage.getItem("tableData"));
// console.log(savedData);


//clear all
// function clearAllInputs() {
//   let AllInputs = document.querySelectorAll("riceTable");
//   for (let z = 0; z < AllInputs.length; z++) {
//   AllInputs[z].value = '';
//   }
// }

// <button onclick="document.getElementById('myInput').value = ''">Clear input field</button>
// <input type="text" value="Blabla" id="myInput"></input>
// or 
// document.querySelectorAll(".axs").forEach(x => x.value = '');

//export to excel
// <button id="btnExport" onclick="exportTableToExcel(this)">Export 🖫</button> //html button
// function exportTableToExcel() {
//   let table1 = document.getElementById("riceTable");
//   TableToExcel.convert(table1[0], {name: `MyRiceTable.xlsx`,sheet: {name: 'Prioritize.io'}});
// }

//Fotters year auto update
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
// console.log("Im Working!");
