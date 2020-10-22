import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Book } from './book.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private maxResults = 40;
  private url = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  getBooksByQuery(query): Observable<Book[]> {
    return this.http.get(this.url + '?q=' + query + '&maxResults=' + this.maxResults).pipe(map(res => {
      let response = [];
      for (let item of res['items']) {
        let book: Book = {
          authors: item.volumeInfo.authors,
          description: item.volumeInfo.description,
          infoLink: item.volumeInfo.infoLink,
          pageCount: item.volumeInfo.pageCount,
          publishedDate: item.volumeInfo.publishedDate,
          publisher: item.volumeInfo.publisher,
          smallThumbnail: item.volumeInfo.imageLinks?.smallThumbnail,
          subtitle: item.volumeInfo.subtitle,
          title: item.volumeInfo.title
        };
        
        response.push(book);
      }

      return response;
    }))
  }
}
