import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private maxResults = 40;
  private url = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  getBooksByQuery(query) {
    return this.http.get(this.url + '?q=' + query + '&maxResults=' + this.maxResults);
  }
}
