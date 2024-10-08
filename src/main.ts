import "bootstrap/dist/css/bootstrap.min.css"
import { Movie } from "./Movie"

document.addEventListener("DOMContentLoaded", () =>{
  const tbody = document.getElementById("tbody") as HTMLTableElement
  const addTitle = document.getElementById("addTitle") as HTMLInputElement;
  const addDuration = document.getElementById("addDuration") as HTMLInputElement;
  const submit = document.getElementById("submit") as HTMLFormElement;


  const movie = new Array(
    
    new Movie("Film1", 120, ["családbarát!!!", "valami"]),
    new Movie("Film2", 150, ["nem családbarát!!!", "nem valami"]),
    new Movie("Film3", 60, ["vicces", "magic"]),
  );
  

  displayMovies(movie);

  function displayMovies(movies: Array<Movie>) {
    // Törli a táblázat tartalmát, újragenerálja
    tbody.innerHTML =""
    let line = "";
    for (let index = 0; index < movies.length; index++) {
     

      const text = `
          <tr>
          <td id="title">
            ${movies[index].title}
          </td>
          <td id="duration">
          ${movies[index].duration}
          </td>
          <td id="genres">
          ${movies[index].genres}
          </td>
        </tr>
      
      `

      line += text;
    }

    tbody.innerHTML += line;

    
    
  }


  submit.addEventListener("submit", (e) =>{
    e.preventDefault();

    movie.push(new Movie(addTitle.value, parseInt(addDuration.value), []))
    
    displayMovies(movie);
  })






})