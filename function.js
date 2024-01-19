const movieContainer = document.getElementById("movie-container");
const addButton = document.querySelector(".add-button");
let movies = [
  { title: "Inception", year: 2010, rank: 406 },
  { title: "Red", year: 2010, rank: 562 },
  { title: "Takers", year: 2010, rank: 407 },
  { title: "Interstellar", year: 2014, rank: 261 },
  { title: "Divergent", year: 2014, rank: 568 },
  { title: "Non-stop", year: 2014, rank: 1052 },
  { title: "The Best of Me", year: 2014, rank: 1261 },
  { title: "Dark", year: 2019, rank: 327 },
  // more movies here...
];

function createMovieCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  movieCard.style.height = "35%";
  movieCard.style.width = "10%";
  movieCard.style.backgroundColor = "#7fffd4";
  movieCard.style.border = "1px solid black";
  movieCard.style.marginLeft = "5px";
  movieCard.style.marginTop = "5px";
  movieCard.style.borderRadius = "10%";
  movieCard.style.display = "flex";
  movieCard.style.justifyContent = "center";
  movieCard.style.flexDirection = "column";
  movieCard.style.alignItems = "center";

  const titleElement = document.createElement("h3");
  titleElement.textContent = movie.title;

  const yearElement = document.createElement("p");
  yearElement.textContent = `Year: ${movie.year}`;

  const rankElement = document.createElement("p");
  rankElement.textContent = `Rank: ${movie.rank}`;

  movieCard.appendChild(titleElement);
  movieCard.appendChild(yearElement);
  movieCard.appendChild(rankElement);

  return movieCard;
}

function addMovie() {
  const titleInput = document.getElementById("title-input");
  const yearInput = document.getElementById("year-input");
  const rankInput = document.getElementById("rank-input");
  let newMovie = {
    title: titleInput.value,
    year: parseInt(yearInput.value),
    rank: parseInt(rankInput.value),
  };
  movies.push(newMovie);
  const newMovieCard = createMovieCard(newMovie);
  movieContainer.appendChild(newMovieCard);
  titleInput.value = "";
  yearInput.value = "";
  rankInput.value = "";
}
movies.forEach((movie) => {
  const movieCard = createMovieCard(movie);
  movieContainer.appendChild(movieCard);
});

function sortMovies() {
  const sortSelect = document.getElementById("sort");
  const selectedSort = sortSelect.value;

  //https://www.w3schools.com/jsref/jsref_sort.asp
  if (selectedSort === "Ascending") {
    // Sort in ascending order
    movies.sort((a, b) => a.rank - b.rank);
  } else if (selectedSort === "Decending") {
    // Sort in descending order
    movies.sort((a, b) => b.rank - a.rank);
  }
  movieContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    movieContainer.appendChild(movieCard);
  });
}

function filterMovies() {
  const yearFilterInput = document.getElementById("year-filter");
  const selectedYear = yearFilterInput.value.trim();
  if (selectedYear === "") {
    movieContainer.innerHTML = "";
    movies.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      movieContainer.appendChild(movieCard);
    });
  } else {
    // If the input is not empty, filter movies based on the selected year
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const filteredMovies = movies.filter(
      (movie) => movie.year.toString() === selectedYear
    );
    movieContainer.innerHTML = "";
    filteredMovies.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      movieContainer.appendChild(movieCard);
    });
  }
}

document.getElementById("year-filter").addEventListener("input", filterMovies);
