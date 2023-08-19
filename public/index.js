function checkLocality(event) {
    event.preventDefault(); // Prevent form submission
    console.log("executed");

    const searchInput = document.getElementById('search-bar').value;
    const citiesJsonUrl = "./cities.json";

    fetch(citiesJsonUrl)
        .then(response => response.json())
        .then(data => {
            const localities = data.localities;
            if (localities.includes(searchInput)) {
                window.location.href = `property.html?search=${encodeURIComponent(searchInput)}`;
            } else {
                window.location.href = 'oops_loc.html';
            }
        })
        .catch(error => {
            console.error('Error fetching cities data:', error);
        });
}
