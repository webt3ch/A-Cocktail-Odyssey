// Funzione per cercare i cocktail
function searchCocktail() {
  // Ottieni il valore dalla barra di ricerca
  var searchInput = document.getElementById('searchInput').value;

  // Verifica se il valore è vuoto
  if (!searchInput.trim()) {
    alert('Inserisci il nome del cocktail!');
    return;
  }

  // Costruisci l'URL per la ricerca del cocktail
  var apiEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + encodeURIComponent(searchInput);

  // Effettua la richiesta HTTP GET per ottenere i dati dei cocktail
  fetch(apiEndpoint)
    .then(response => {
      // Verifica se la risposta ha successo (status code 200)
      if (!response.ok) {
        throw new Error('Errore nella ricerca del cocktail: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      // Visualizza i cocktail ottenuti
      displayCocktails(data.drinks);
    })
    .catch(error => {
      console.error(error);
      alert('Si è verificato un errore nella ricerca del cocktail.');
    });
}

// Funzione per visualizzare i cocktail
function displayCocktails(cocktails) {
  var cocktailList = document.getElementById('cocktailList');
  cocktailList.innerHTML = '';

  // Verifica se sono stati trovati cocktail
  if (cocktails === null) {
    cocktailList.innerHTML = '<p>Nessun cocktail trovato.</p>';
    return;
  }

  cocktails.forEach(cocktail => {
    var card = document.createElement('div');
    card.className = 'col-md-4 mb-4 h-100';

    card.innerHTML = `
      <div class="card h-100">
        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${cocktail.strDrink}</h5>
          <p class="card-text">${truncateDescription(cocktail.strInstructionsIT, 100)}</p>
          <button class="btn btn-primary" data-toggle="modal" data-target="#cocktailModal" onclick="displayModal('${cocktail.strDrink}', '${cocktail.strDrinkThumb}', '${cocktail.strInstructionsIT}')">Dettagli</button>
        </div>
      </div>
    `;

    cocktailList.appendChild(card);
  });
}

// Funzione per ridurre la descrizione del cocktail
function truncateDescription(description, maxLength) {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...';
  }
  return description;
}

// Funzione per visualizzare il modal con i dettagli del cocktail
function displayModal(name, image, description) {
  document.getElementById('modalCocktailName').innerText = name;
  document.getElementById('modalCocktailImage').src = image;
  document.getElementById('modalCocktailDescription').innerText = description;

  $('#cocktailModal').modal('show');
}
