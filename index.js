// index.js

const searchInput = document.getElementById("search-bar");
const searchResults = document.getElementById("search-results");

function displayResults(results) {
    searchResults.innerHTML = "";
    results.forEach(result => {
        const li = document.createElement("li");
        li.textContent = result.display_name;
        searchResults.appendChild(li);
        li.addEventListener("click", () => {
            searchInput.value = result.display_name;
            searchResults.innerHTML = "";
        });
    });
}

async function fetchLocations(query) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching locations:", error);
        return [];
    }
}

searchInput.addEventListener("input", async () => {
    const searchTerm = searchInput.value;
    if (searchTerm.trim() === "") {
        searchResults.innerHTML = "";
        return;
    }

    const locations = await fetchLocations(searchTerm);
    displayResults(locations);
});

document.addEventListener("click", event => {
    if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.innerHTML = "";
    }
});
