import { Component, OnInit } from "@angular/core";
import { Movie } from "../../models/movie";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: "app-movie-search",
  templateUrl: "./movie-search.component.html",
  styleUrls: ["./movie-search.component.css"],
})
export class MovieSearchComponent implements OnInit {
  movies: Movie[] = [];
  searchTerm: string = "";

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getAllMovies();
  }

  onSearch(): void {
    this.movies = this.movieService.searchMovies(this.searchTerm);
  }
}
