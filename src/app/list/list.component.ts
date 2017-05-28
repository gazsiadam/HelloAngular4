import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movies/movie-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  message = 'Hello world';
  list: any[];

  constructor(private _movieService: MovieServiceService) {
    this.list = _movieService.getMovies();
  }

  ngOnInit() {
  }

}
