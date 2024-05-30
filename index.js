// Funzione per la ricerca dei cocktail
function searchCocktail() {
  var searchInput = document.getElementById('searchInput').value;
  var apiEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchInput;

  fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
      displayCocktails(data.drinks);
    })
    .catch(error => console.error('Errore nella ricerca del cocktail:', error));
}

// Funzione per visualizzare i cocktail nella pagina
function displayCocktails(cocktails) {
  var cocktailList = document.getElementById('cocktailList');
  cocktailList.innerHTML = '';

  if (cocktails) {
    cocktails.forEach(cocktail => {
      var card = document.createElement('div');
      card.className = 'col-md-4 mb-4 h-100';

      card.innerHTML = `
        <div class="card h-100">
          <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${cocktail.strDrink}</h5>
            <p class="card-text">${cocktail.strInstructionsIT}</p>
            <button class="btn btn-primary" data-toggle="modal" data-target="#cocktailModal" onclick="displayModal('${cocktail.strDrink}', '${cocktail.strDrinkThumb}', '${cocktail.strInstructionsIT}')">Dettagli</button>
          </div>
        </div>
      `;

      cocktailList.appendChild(card);
    });
  } else {
    cocktailList.innerHTML = '<div class="col text-center"><p>Nessun cocktail trovato.</p></div>';
  }
}

// Funzione per visualizzare i dettagli del cocktail nel modal
function displayModal(name, image, description) {
  document.getElementById('modalCocktailName').innerText = name;
  document.getElementById('modalCocktailImage').src = image;
  document.getElementById('modalCocktailDescription').innerText = description;

  $('#cocktailModal').modal('show');
}
