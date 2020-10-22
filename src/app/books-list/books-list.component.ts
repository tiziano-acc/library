import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public booksList: Array<Book>;
  public booksQuery = new FormControl();
  public currentPageBooks = [];
  public currentPage = 1;
  public itemsPerPage = 5;
  public itemsPerPageOptions = [5, 10, 15, 20];
  public numberOfPagesOptions = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksQuery.valueChanges.subscribe(query => {
      this.booksService.getBooksByQuery(query).subscribe(response => {
        this.booksList = response;
        this.updateCurrentPage();
      })
    })
  }

  createNumberOfPagesOptions() {
    let numberOfPages = Math.ceil(this.booksList.length/this.itemsPerPage);

    for(let i=1; i<=numberOfPages; i++) {
      this.numberOfPagesOptions.push(i);
    }
  }

  extractCurrentPage() {
    let lastItemIndex = (this.currentPage*this.itemsPerPage)-1;
    let firstItemIndex = (lastItemIndex-this.itemsPerPage)+1;
    
    if(lastItemIndex-this.itemsPerPage < 0) {
      firstItemIndex = 0;
    }

    if((lastItemIndex+1) > this.booksList.length) {
      lastItemIndex = this.booksList.length-1;
    }

    for(let i=firstItemIndex; i<=lastItemIndex; i++) {
      this.currentPageBooks.push(this.booksList[i]);
    }

  }

  updateCurrentPage() {
    this.currentPageBooks = [];
    this.numberOfPagesOptions = [];

    this.createNumberOfPagesOptions();
    this.extractCurrentPage();
  }

}
