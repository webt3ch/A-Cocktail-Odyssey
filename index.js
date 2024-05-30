function truncateDescription(description, maxLength) {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...';
  }
  return description;
}

function displayCocktails(cocktails) {
  var cocktailList = document.getElementById('cocktailList');
  cocktailList.innerHTML = '';

  if (!cocktails) {
    var errorMessage = document.createElement('div');
    errorMessage.textContent = 'Nessun cocktail trovato';
    cocktailList.appendChild(errorMessage);
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

function displayModal(name, image, description) {
  document.getElementById('modalCocktailName').innerText = name;
  document.getElementById('modalCocktailImage').src = image;
  document.getElementById('modalCocktailDescription').innerText = description;

  $('#cocktailModal').modal('show');
}
