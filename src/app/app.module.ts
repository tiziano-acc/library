import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt, 'it');

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BooksService } from './books.service';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookInfoComponent,
    BooksListComponent,
    TruncatePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
