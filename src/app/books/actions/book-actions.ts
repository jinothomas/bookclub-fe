import { Book } from "../states/book-states";

export class AddBook {
    static readonly type = '[Book] Add Book';
    constructor(public book: Book) {};
}

export class GetBook {
    static readonly type = '[Book] Get Book';
    constructor(public bookId: string) {};
} 

export class GetAllBooks {
    static readonly type = '[Book] Get All Books';
    constructor(){};
}

export class RemoveBook {
    static readonly type ='[Book] Remove Book';
    constructor(public bookId: string) {};
}