// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
// Set starting index and results per page

//setting pagination init.
var startingIndex = 0;
var resultsPerPage = 50;

// Set filteredSightings to sightings Data initially
var filteredSightings = dataSet;

// renderTable renders the filteredSightings to the tbody
function renderTable() {
   // Set the value of ending index
   var endingIndex = startingIndex + resultsPerPage;
    
  $tbody.innerHTML = "";  
  console.log("searching...")


  // Get get the current sightings object and its fields
  for (let i = 0; i < filteredSightings.length; i++) {    
    let sighting = filteredSightings[i];
    let fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    let $row = $tbody.insertRow(i);
    

    for (let j = 0; j < fields.length; j++) {
      // For every field in the sightings object, create a new cell at set its inner text to be the current value at the current sightings 's field
      let field = fields[j];
      let $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
   // Prevent default
   event.preventDefault();
   filteredSightings = dataSet; //Reset dataset at every button press

  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterdateTime = $dateInput.value.trim();
  var filterstate = $stateInput.value.trim().toLowerCase();
  var filtercity = $cityInput.value.trim().toLowerCase();
  var filtercountry = $countryInput.value.trim().toLowerCase();
  var filtershape = $shapeInput.value.trim().toLowerCase();
 
  if (filterdateTime.length != 0){
    filteredSightings = dataSet.filter(function(sighting) {
       return sighting.datetime == $dateInput.value.trim().toLowerCase()
         });
  }
  else {
    filteredSightings = filteredSightings
  }


  if (filterstate.length !=0){
    filteredSightings = filteredSightings.filter(function(sighting){
      var sightingState = sighting.state;
      return sightingState===filterstate;
    });
  }
else {
  filteredSightings=filteredSightings
}


if (filtercity.length != 0){
  filteredSightings = dataSet.filter(function(sighting) {
     return sighting.city == $cityInput.value.trim().toLowerCase()
       });
}
else {
  filteredSightings = filteredSightings
}


if (filtercountry.length != 0){
  filteredSightings = dataSet.filter(function(sighting) {
     return sighting.country == $countryInput.value.trim().toLowerCase()
       });
}
else {
  filteredSightings = filteredSightings
}


if (filtershape.length != 0){
  filteredSightings = dataSet.filter(function(sighting) {
     return sighting.shape == $shapeInput.value.trim().toLowerCase()
       });
}
else {
  filteredSightings = filteredSightings
}





// Reset inputs
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";

renderTable();
}

// Render the table for the first time on page load
renderTable();
