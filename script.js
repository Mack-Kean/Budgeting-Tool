var tableBody = document.getElementById('table_body');
var addButton = document.getElementById('add_item');
var expenseField = document.getElementById('expense_name');
var dollarField = document.getElementById('dollar_amount');
var errorText = document.getElementById('error_text');

addButton.onclick = function() {

    errorText = ''; //resets error text when new input is entered

    if (parseInt(dollarField.value) < 0){
        //allows negative numbers to be ignored
        errorText.textContent = 'Please enter a postiive value';
    } else {
        let row = tableBody.insertRow(0);
        let textCell = row.insertCell(0);
        let numCell = row.insertCell(1);
        let text = document.createTextNode(expenseField.value);
        let amount;
        if (dollarField.value.length == 0){
            amount = document.createTextNode('0');
        } else {
            amount = document.createTextNode(dollarField.value);
        }
        textCell.appendChild(text);
        numCell.appendChild(amount);
    }

}

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

function readyForChart(){
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Expenses');
  data.addColumn('number', 'Budget');
 /* data.addRows([
    ['Mushrooms', 3],
    ['Onions', 1],
    ['Olives', 1],
    ['Zucchini', 1],
    ['Pepperoni', 2]
  ]); */

  // Set chart options
  var options = {'title':'Budget Breakdown',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}



