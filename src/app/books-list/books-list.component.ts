import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public booksList: any;
  public booksQuery = new FormControl();

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksQuery.valueChanges.subscribe(query => {
      this.booksService.getBooksByQuery(query).subscribe(response => {
        this.booksList = response;
      })
    })
  }

}
