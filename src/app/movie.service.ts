import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {


  getMovieList() : Movie[]{
    console.log("hello")
    return [];
  
  }

  getMoviebyid(id:number): Movie | null{
    console.log("id");
    return  null;
  }

  getMoviebytitle(title:string): Movie| null{
    console.log("title");
    return  null;
  }



  

  constructor() { }
}
