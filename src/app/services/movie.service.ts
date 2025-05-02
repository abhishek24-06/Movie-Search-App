import { Injectable } from "@angular/core";
import { Movie } from "../models/movie";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      genre: "Drama",
      director: "Frank Darabont",
    },
    {
      id: 2,
      title: "The Godfather",
      year: 1972,
      genre: "Crime",
      director: "Francis Ford Coppola",
    },
    {
      id: 3,
      title: "Pulp Fiction",
      year: 1994,
      genre: "Crime",
      director: "Quentin Tarantino",
    },
    {
      id: 4,
      title: "The Dark Knight",
      year: 2008,
      genre: "Action",
      director: "Christopher Nolan",
    },
    {
      id: 5,
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      director: "Christopher Nolan",
    },
  ];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  searchMovies(searchTerm: string): Movie[] {
    return this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
