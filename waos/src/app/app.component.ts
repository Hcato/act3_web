import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { MatDialogModule } from '@angular/material/dialog';
import { SocketService } from '../services/sockets/socket.service';
import { ErrorInterceptor } from '../404\'s/httperror.interceptor';
import { DialogerrorComponent } from './dialogerror/dialogerror.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, RouterLink, MatDialogModule, DialogerrorComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class AppComponent {
  title = 'waos';
  constructor(
    private socketService: SocketService
  ) {}
}
