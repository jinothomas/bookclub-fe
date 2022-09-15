import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, ObservableInput } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { GetBook } from '../../actions/book-actions';
import { BookState } from '../../states/book-states';
import { AddBookModalComponent } from '../add-book-modal/add-book-modal.component';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Select(BookState.getBook)
  book$!: ObservableInput<any>;

  isFindButtonEnabled : boolean = false;
  isRemoveButtonEnabled : boolean = false;
  bookid: string='';

  constructor(private store: Store) { }

 

  openDialog() {
 
  }

  bookTableHeader  = ["ID","Book Name", "Author","Price", "Year", "Publisher","Version","Version Year"]
  ngOnInit(): void {
  }

  enableFindBookButton() {
    
    this.isFindButtonEnabled = !this.isFindButtonEnabled;
  }

  enableRemoveBookButton() {
    
    this.isRemoveButtonEnabled = !this.isRemoveButtonEnabled;
  }


  findABook() {
    this.store.dispatch(new GetBook(this.bookid));
  }

  removeABook() {

  }

  books: any = [
    {
        "_id": "631a1fb949da0f84f63e5b55",
        "bookid": "EF0001",
        "name": "Harry Potter and the Philosopher's stone",
        "author": "JK Rowling",
        "price": "$10",
        "publisher": "",
        "yearofrelease": "",
        "yearofrevision": "",
        "version": "17"
    },
    {
        "_id": "631a27513f3c9247a749dba3",
        "bookid": "EF0002",
        "name": "Harry Potter and the Chamaber of Secrets",
        "author": "JK Rowling",
        "price": "$12",
        "publisher": "",
        "yearofrelease": "",
        "yearofrevision": "",
        "version": "17"
    },
    {
        "_id": "631a27793f3c9247a749dba4",
        "bookid": "EF0003",
        "name": "Harry Potter and the Prisoner of Azkaban",
        "author": "JK Rowling",
        "price": "$12",
        "publisher": "",
        "yearofrelease": "",
        "yearofrevision": "",
        "version": "17"
    },
    {
        "_id": "631a27983f3c9247a749dba5",
        "bookid": "EF0004",
        "name": "Harry Potter and the Goblet of Fire",
        "author": "JK Rowling",
        "price": "$12",
        "publisher": "",
        "yearofrelease": "",
        "yearofrevision": "",
        "version": "17"
    },
    {
        "_id": "631a27ab3f3c9247a749dba6",
        "bookid": "EF0005",
        "name": "Harry Potter and the Order of Phoenix",
        "author": "JK Rowling",
        "price": "$12",
        "publisher": "",
        "yearofrelease": "",
        "yearofrevision": "",
        "version": "17"
    },
    {
        "_id": "631a27c53f3c9247a749dba7",
        "bookid": "EF0006",
        "name": "Harry Potter and the Half Blood Prince",
        "author": "JK Rowling",
        "price": "$12",
        "publisher": "",
        "yearofrelease": "",
        "yearofrevision": "",
        "version": "17"
    },
    {
        "_id": "631a27eb3f3c9247a749dba8",
        "bookid": "EF0007",
        "name": "Harry Potter and the Deathly Hallows",
        "author": "JK Rowling",
        "price": "$17",
        "publisher": "",
        "yearofrelease": "",
        "yearofrevision": "",
        "version": "17"
    }
];


}
