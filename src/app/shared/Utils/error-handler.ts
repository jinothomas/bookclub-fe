import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export const handleHttpError = (err: HttpErrorResponse): Observable<any> => {
  let errorMessage: string = '';

  if (err.error instanceof ErrorEvent) {
    errorMessage = err.error.message;
  } else if (err.status && err.message) {
    errorMessage = `Status Code: ${err.status} \n Message: ${err.message}`;
  }

  return throwError(errorMessage ? errorMessage : err);
};
