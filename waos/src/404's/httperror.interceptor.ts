import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogerrorComponent } from '../app/dialogerror/dialogerror.component';

export const httperrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // Error del lado del cliente o red
          errorMessage = `Error de red: ${error.error.message}`;
        } else {
          // Error del lado del servidor
          errorMessage = `Error del servidor: ${error.status}\nMensaje: ${error.message}`;
        }

        // Aquí puedes mostrar el error en un diálogo de Angular Material o en otro lugar
        this.showErrorDialog(errorMessage);

        // Propagar el error hacia el componente que lo necesite si es necesario
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  private showErrorDialog(message: string): void {
    this.dialog.open(DialogerrorComponent, {
      data: { message }
    });
  }
}