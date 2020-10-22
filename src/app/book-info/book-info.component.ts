import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {
  public book: any;
  public coverLink: string;
  public infoLink: string;

  constructor() { }

  ngOnInit(): void {
    this.book = window.history.state.volumeInfo;
    this.coverLink = window.history.state.volumeInfo.imageLinks.smallThumbnail;
    this.infoLink = window.history.state.volumeInfo.infoLink;
  }

}
