// Store OMDB API Key in a variable
var movieApiKey = "&apikey=99464eae";

// get info from user search for movie

    // validate whether movie input field is empty or not

        //call function to get list of movie search results 

        // place message in input field declaring that field cannot be empty

// make rows of searched movies

// store favourite movies in local storage

//check if there are favourite movies in local storage

// fetch search results for that movie name from OMDB

function getMovies(movieSearch) {
    fetch(
        `http://www.omdbapi.com/?i=${movieSearch}${movieApiKey}`
    ).then(function (response) {
        // check that api response contains valid movie data
        if (response.status == 204) {
            //pass valid response to next member in chain
            return null;
        } else {
            return response.json();
        }
    }).then(function (data) {
        // check that passed data is not null
        if (!(data == null)) {

            //create DOM elements used to display movie search results on page 
            var listContainerEl = document.querySelector("#search-results-display");
            var searchResultsCardEl = document.createElement("div");
            var movieTitleEl = document.createElement("span");
            var movieYearEl = document.createElement("p");
            var moviePlot = document.createElement("p");
            var movieRating = document.createElement("p")

            //add content to DOM elements



        }
    })
}