import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetsService } from '../../services/gets.service';

@Component({
  selector: 'app-deliminar',
  standalone: true,
  imports: [],
  templateUrl: './deliminar.component.html',
  styleUrl: './deliminar.component.scss'
})
export class DeliminarComponent {
  constructor(
    public dialogRef: MatDialogRef<DeliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private getsService: GetsService
  ) {}

  eliminarSmoothie(): void {
    if (this.data.smoothie.idsmoothie) {
      this.getsService.deleteSmoothie(this.data.smoothie.idsmoothie).subscribe({
        next: () => {
          alert('Smoothie eliminado con éxito');
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.error('Error al eliminar el smoothie:', error);
          alert('Hubo un error al intentar eliminar el smoothie.');
        }
      });
    }
  }
  closeDialog(): void {
    this.dialogRef.close(false);
  }
}
