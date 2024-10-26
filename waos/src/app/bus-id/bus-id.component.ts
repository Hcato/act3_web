import { Component } from '@angular/core';
import { GetsService } from '../../services/gets.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bus-id',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bus-id.component.html',
  styleUrl: './bus-id.component.scss'
})
export class BusIdComponent {
  smoothieId: number | null = null;
  smoothie: any = null;
  errorMessage: string | null = null;

  constructor(private getid: GetsService) {}

  buscarSmoothie(): void {
    if (this.smoothieId !== null) {
      this.getid.getSmoothieById(this.smoothieId).subscribe({
        next: (response) => {
          this.smoothie = response;
          this.errorMessage = null;
        },
        error: (error) => {
          this.smoothie = null;
          this.errorMessage = 'Smoothie no encontrado o error en la búsqueda';
        }
      });
    }
  }
}
