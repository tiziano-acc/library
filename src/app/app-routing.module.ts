import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookInfoComponent } from './book-info/book-info.component';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/books-list', pathMatch: 'full' },
  { path: "book-info", component: BookInfoComponent },
  { path: "books-list", component: BooksListComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
