// Initialize the map inside the "map" div
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const searchControl = new L.Control.Search({
    url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}', // Nominatim API endpoint
    jsonpParam: 'json_callback',
    propertyName: 'display_name', // The property that contains the suggestion text
    marker: false, // Don't add markers to the map
    autoCollapse: true, // Hide dropdown when a suggestion is selected
    collapsed: false, // Keep the search bar open
    autoType: false, // Don't automatically fill the input with selected suggestion
    minLength: 2, // Minimum characters required before making API requests
});

// Bind the search control to the search bar input
searchControl._input = document.getElementById('search-bar');

// Handle suggestion selection
searchControl.on('search_locationfound', function(e) {
    const selectedSuggestion = e.text;
    document.getElementById('search-bar').value = selectedSuggestion;
});

// Add the search control to the map
searchControl.addTo(map);

$("#search-bar").on("input", function() {
    const query = $(this).val();
    if (query.length > 2) {
        searchControl.searchText(query); // Trigger the search
        $("#autocomplete-dropdown").show();
    } else {
        $("#autocomplete-dropdown").hide();
    }
});

searchControl._panel = document.getElementById('autocomplete-dropdown');

// Customize the look of suggestions in the dropdown
searchControl._list = $('<ul class="leaflet-control-search-results"></ul>').appendTo(searchControl._panel);
