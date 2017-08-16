$.ajax({
    url:'https://dog.ceo/api/breeds/list/all'
  })
  .done(function(response) {
    const breeds = Object.keys(response.message)

    for (var i = 0; i < breeds.length; i++) {

        selectBreed.innerHTML += `<option value="${breeds[i]}">${breeds[i]}</option>`

      }
    })

viewDog.addEventListener('click', function(event) {
  const breedName = selectBreed.value

  $.ajax({
      url: `https://dog.ceo/api/breed/${breedName}/images/random`
    })
    .done(function(response) {
    document.getElementByImg("IMG")[0].setAttribute("src", "breedName");

    })
})



  //const dog_api = 'https://dog.ceo/api/'
