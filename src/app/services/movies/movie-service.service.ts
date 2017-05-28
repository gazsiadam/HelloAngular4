import { Injectable } from '@angular/core';

@Injectable()
export class MovieServiceService {
  public list: any[] = ['1', '2', '3', '4'];

  constructor() { }

  getMovies() {
    return this.list;
  }

}
