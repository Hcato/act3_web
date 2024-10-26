import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { GetsService } from '../../services/gets.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { PipeeePipe } from '../pipeeee/pipeee.pipe';
import { ErrorInterceptor } from '../../404\'s/httperror.interceptor';
import { DialogerrorComponent } from '../dialogerror/dialogerror.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,RouterLink, MatTableModule,CommonModule, PipeeePipe,DialogerrorComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class MainComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name'];
  smoothies: any[] = [];

  constructor(private gets: GetsService) {}

  ngOnInit(): void {
    this.gets.getSmoothies().subscribe({
      next: (data) => {
        this.smoothies = data;
      },
      error: (error) => {
        console.error('Error al obtener los smoothies', error);
      }
    });
  }
  trackByFn(index: number, item: any) {
    return item.idsmoothie;
  }
}
