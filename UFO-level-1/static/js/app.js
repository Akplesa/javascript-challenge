// Collecting data from data.js
var tableData = data;

// Selecting 'tbody' element
var tbody = d3.select("tbody");

// Selecting filter button in order to filter through dates of sightings. 
var button = d3.select("#filter-btn");

// Looping and appending objects from the array and looping through the [key,value] within each object
tableData.forEach((sightings)=> {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#button");

// Selecting the form
var form = d3.select("#form");

// Creating event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Creating the function to run for both events
function runEnter() {

// Preventing the page from refreshing
    d3.event.preventDefault();

// Selecting the input element 
    var inputElement = d3.select("#datetime");


  // Get the value property of the input element
    var inputValue = inputElement.property("value");

// Printing the value to the console
    console.log(inputValue);

//Removing any tableData from web page 
    tbody.html("");

// Filtering through data
    var filtered_datetime= tableData.filter(choose => choose.datetime === inputValue);
    console.log(filtered_datetime);

// Looping and  appending filtered data
filtered_datetime.forEach((UserSearch) => {
    var row = tbody.append("tr");
    Object.entries(UserSearch).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
