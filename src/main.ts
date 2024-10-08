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
     
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      td1.textContent = movies[index].title;
      td2.textContent = ` ${movies[index].duration}`;
      td3.textContent = `${movies[index].genres}`;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tbody!.appendChild(tr)
    }


    
    
  }


  submit.addEventListener("submit", (e) =>{
    e.preventDefault();

    movie.push(new Movie(addTitle.value, parseInt(addDuration.value), []))
    
    displayMovies(movie);
  })






})