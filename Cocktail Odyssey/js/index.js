function searchCocktail() {
    var searchInput = document.getElementById('searchInput').value;
    var apiEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchInput;
  
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        console.log('Dati ricevuti:', data);
        if (data.drinks) {
          displayCocktails(data.drinks);
        }
      })
  }
  
  // truncateDescription, volevo fare una cosa più pulita
  function truncateDescription(description, maxLength) {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  }
  
  // Funzione per visualizzare i cocktail nella lista
  function displayCocktails(cocktails) {
    var cocktailList = document.getElementById('cocktailList');
    cocktailList.innerHTML = '';
  
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
    
    if (image) {
      var imgElement = document.getElementById('modalCocktailImage');
      imgElement.src = image;
      imgElement.style.display = 'block';
  
    } else {

      document.getElementById('modalCocktailImage').style.display = 'none';
    }
  
    document.getElementById('modalCocktailDescription').innerText = description;
  
    $('#cocktailModal').modal('show');
  }