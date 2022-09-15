import { Injectable } from "@angular/core";
import { Action, State, StateContext, Selector } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { AddBook, GetBook } from "../actions/book-actions";
import { BookService } from "../services/book-service";


export interface Book {
    bookid: string;
    name: string;
    author: string;
    version?: string;
    yearofrelease?: string;
    yearofrevision?: string;
    price: string;
    publisher?: string;
}

export interface BookstateModel {
    book: Book
}

@State<BookstateModel>({
    name: 'book',
    defaults: {
        book: {
            "name": "",
            "author": "",
            "version": "",
            "yearofrelease": "",
            "yearofrevision": "",
            "price": "",
            "publisher": "",
            "bookid": ""
        }
    }
})

@Injectable()
export class BookState {

    constructor(private bookService: BookService) { }

    @Selector()
    static getBook(state: BookstateModel): BookstateModel {
        return state;
    }


    @Action(AddBook)
    addBook(stateContext: StateContext<BookstateModel>, action: AddBook) {
        const state = stateContext.getState();
        return this.bookService.addBook(action.book).pipe(tap((result) => {
            console.log(result);
            stateContext.setState({
                ...state,
                book: action.book
            });
        }));
    }


    @Action(GetBook)
    getBook(stateContext: StateContext<BookstateModel>, action: GetBook) {
        const state = stateContext.getState();
        return this.bookService.getBook(action.bookId).pipe(tap((result) => {
            stateContext.setState({
                ...state,
                book: result
            })
        }));
    }
}