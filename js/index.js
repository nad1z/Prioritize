//RICE Calculator
function calculateRice() {
  let featureName = document.getElementsByName("featureReach")[0].textContent;
  let featureReach = document.getElementsByName("featureReach")[0].value;
  let featureImpact = document.getElementsByName("featureImpact")[0].value;
  let featureConfidence = document.getElementsByName("featureConfidence")[0].value;
  let featureEffort = document.getElementsByName("featureEffort")[0].value;
  let featureRiceScore = (featureReach * featureImpact * featureConfidence * 100) / featureEffort;
  let featureRiceResult = (document.getElementById("featureRiceScore").innerHTML = Math.round(featureRiceScore));
}

// //adding a table row for each calculations
// var riceTable = document.getElementById("riceTable");
// console.log(riceTable)

// // Create an empty <tr> element and add it to the 1st position of the table:
// // pull the current number of rows - create a loop to check it and a var that will enter the free space to create the insert row each time the user presses calculate
// var newRow = table.insertRow(0);

// // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
// var cell1 = newRow.insertCell(0);
// var cell2 = newRow.insertCell(1);

// // Add some text to the new cells:
// cell1.innerHTML = "NEW CELL1";
// cell2.innerHTML = "NEW CELL2";

// //adding the data for the added table



// //sorting button
// <script>
// function sortTable() {
//   var table, rows, switching, i, x, y, shouldSwitch;
//   table = document.getElementById("myTable");
//   switching = true;
//   /*Make a loop that will continue until
//   no switching has been done:*/
//   while (switching) {
//     //start by saying: no switching is done:
//     switching = false;
//     rows = table.rows;
//     /*Loop through all table rows (except the
//     first, which contains table headers):*/
//     for (i = 1; i < (rows.length - 1); i++) {
//       //start by saying there should be no switching:
//       shouldSwitch = false;
//       /*Get the two elements you want to compare,
//       one from current row and one from the next:*/
//       x = rows[i].getElementsByTagName("TD")[0];
//       y = rows[i + 1].getElementsByTagName("TD")[0];
//       //check if the two rows should switch place:
//       if (Number(x.innerHTML) > Number(y.innerHTML)) {
//         //if so, mark as a switch and break the loop:
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       /*If a switch has been marked, make the switch
//       and mark that a switch has been done:*/
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// }
// </script> 


//export to excel
// <button id="btnExport" onclick="exportReportToExcel(this)">Export HTML Table</button>

// <script type="text/javascript">
// function exportReportToExcel() {
// let table = document.getElementsByID("table");
// TableToExcel.convert(table[0], {
// name: `file.xlsx`,
// sheet: {
// name: 'Sheet 1'
// }
// });
// }
// </script>


//Fotters year auto update
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
console.log("Im Working!")
