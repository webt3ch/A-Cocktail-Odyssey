function searchCocktail() {
  var searchInput = document.getElementById('searchInput').value;
  var apiEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + encodeURIComponent(searchInput);
  
  fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
      console.log('Dati ricevuti:', data);
      if (data.drinks) {
        displayCocktails(data.drinks);
      } else {
        document.getElementById('cocktailList').innerHTML = '<p class="text-center">Nessun cocktail trovato.</p>';
      }
    })
    .catch(error => {
      console.error('Errore durante la richiesta:', error);
    });
}

function truncateDescription(description, maxLength) {
  if (!description) return 'Descrizione non disponibile';
  return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
}

function displayCocktails(cocktails) {
  var cocktailList = document.getElementById('cocktailList');
  cocktailList.innerHTML = '';
  
  cocktails.forEach(cocktail => {
    var card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    
    card.innerHTML = `
      <div class="card h-100">
        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${cocktail.strDrink}</h5>
          <p class="card-text">${truncateDescription(cocktail.strInstructionsIT, 100)}</p>
          <button class="btn btn-primary" data-toggle="modal" data-target="#cocktailModal" onclick="displayModal('${cocktail.strDrink}', '${cocktail.strDrinkThumb}', '${escapeHtml(cocktail.strInstructionsIT)}')">Dettagli</button>
        </div>
      </div>
    `;
    
    cocktailList.appendChild(card);
  });
}

function displayModal(name, image, description) {
  document.getElementById('modalCocktailName').innerText = name;
  var imgElement = document.getElementById('modalCocktailImage');
  
  if (image) {
    imgElement.src = image;
    imgElement.style.display = 'block';
  } else {
    imgElement.style.display = 'none';
  }
  
  document.getElementById('modalCocktailDescription').innerText = description;
  $('#cocktailModal').modal('show');
}

function escapeHtml(text) {
  if (!text) return text;
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
