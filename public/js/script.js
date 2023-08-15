const form = document.querySelector('form');
const searchInput = document.querySelector('input[type="search"]');
const resultsUl = document.querySelector('#results'); // Assuming you have an element with the ID "results"

const renderResults = heroes => {
    resultsUl.innerHTML = ''; // Clear the results div

    for (const hero of heroes) {
        const li = document.createElement('li');
        li.innerHTML = `
            <h2>${hero.name}</h2>
            <p>archetype: ${hero.archetype} | traits: ${hero.traits}</p>`;
        resultsUl.appendChild(li);
    }
};

const handleSearch = e => {
    e.preventDefault();
    const searchedName = searchInput.value;
    
    fetch(`/api/search-heroes?name=${searchedName}`)
        .then(response => response.json())
        .then(results => renderResults(results)) // Pass the fetched results to renderResults
        .catch(error => console.error(error));
};

form.addEventListener('submit', handleSearch);
