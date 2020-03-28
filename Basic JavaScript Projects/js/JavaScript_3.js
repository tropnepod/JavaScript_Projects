function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}

function displayMovie(movie)    {
    var movieTitle = movie.getAttribute("data-movie-title");
    alert(movieTitle + " stars " + movie.innerHTML + "!");
}