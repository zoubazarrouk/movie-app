import { Component } from '@angular/core';
import {MovieService} from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  title: string = "";
  constructor(private movieService: MovieService) {}
  getMoviebytitle(event:KeyboardEvent): void{
    if (event.key === 'Enter' || event.key === 'Backspace') {
      const movie: Movie | null = this.movieService.getMoviebytitle(this.title);
      console.log(movie);
  }
}
}
