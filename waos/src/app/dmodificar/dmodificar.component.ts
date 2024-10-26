import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetsService } from '../../services/gets.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dmodificar',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule, MatInputModule],
  templateUrl: './dmodificar.component.html',
  styleUrl: './dmodificar.component.scss'
})
export class DmodificarComponent {
  name: string;
  selectedFile: File;

  constructor(
    public dialogRef: MatDialogRef<DmodificarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private getsService: GetsService
  ) {
    this.name = data.smoothie.name;
    this.selectedFile = data.smoothie.image;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log('Archivo seleccionado:', this.selectedFile);
  }

  updateSmoothie(): void {
    if (this.data.smoothie.idsmoothie) {
      const formData = new FormData();
    formData.append('name', this.name);
    formData.append('image', this.selectedFile);

    console.log('FormData:', formData.get('name'), formData.get('image'));

    this.getsService.updateSmoothie(this.data.smoothie.idsmoothie, formData).subscribe({
      next: (response) => {
        console.log('Respuesta de la API:', response);
        alert('Smoothie actualizado con éxito');
        this.dialogRef.close(true);
      }
    });
    }
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }
}