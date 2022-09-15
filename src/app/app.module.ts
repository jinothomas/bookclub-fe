import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './books/components/book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookModalComponent } from './books/components/add-book-modal/add-book-modal.component';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { BookState } from './books/states/book-states';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/Utils/jwt.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AddBookModalComponent
  ],
  imports: [
    NgxsModule.forRoot([BookState],{
      developmentMode: !environment.production
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
