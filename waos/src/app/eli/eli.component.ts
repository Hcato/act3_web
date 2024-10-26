import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeliminarComponent } from '../deliminar/deliminar.component';
import { GetsService } from '../../services/gets.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-eli',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eli.component.html',
  styleUrl: './eli.component.scss'
})
export class EliComponent {
  smoothieId: number | null = null;
  smoothie: any = null; 
  errorMessage: string | null = null;
  constructor(public dialog: MatDialog,private getid: GetsService) {}

  openDialog(): void {
    if (this.smoothie) {
      const dialogRef = this.dialog.open(DeliminarComponent, {
        width: '250px',
        data: { smoothie: this.smoothie }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('El diálogo fue cerrado');
        if (result) {
          console.log('Smoothie eliminado con éxito');
        }
      });
    }
}
buscarSmoothie(): void {
  if (this.smoothieId !== null) {
    this.getid.getSmoothieById(this.smoothieId).subscribe({
      next: (response) => {
        this.smoothie = response;
        this.errorMessage = null;
        this.openDialog();
      },
      error: (error) => {
        this.smoothie = null;
        this.errorMessage = 'Smoothie no encontrado o error en la búsqueda';
      }
    });
  }
}
}

