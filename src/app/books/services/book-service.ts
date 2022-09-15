import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { retry, catchError } from 'rxjs/operators';
import { handleHttpError } from "src/app/shared/Utils/error-handler";
@Injectable({
    providedIn : 'root'
})
export class BookService {
    
    constructor(private http: HttpClient) {}

    public addBook = (book: any) => {
        return this.http.post<any>(environment.API_URL+'/book/createbook',book).pipe(retry(1),catchError(handleHttpError));
    }

    public getBook = (bookid: string) => {
        return this.http.get<any>(environment.API_URL+`/book/${bookid}`).pipe(retry(1),catchError(handleHttpError));
    }
}