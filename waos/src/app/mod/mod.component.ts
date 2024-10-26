import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DmodificarComponent } from '../dmodificar/dmodificar.component';
import { GetsService } from '../../services/gets.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-mod',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mod.component.html',
  styleUrl: './mod.component.scss'
})
export class ModComponent {
  smoothieId: number | null = null;
  smoothie: any = null;
  errorMessage: string | null = null;

  constructor(public dialog: MatDialog, private getid: GetsService) {}

  openDialog(): void {
    if (this.smoothie) {
      const dialogRef = this.dialog.open(DmodificarComponent,{
        width: '300px',
        data: { message: "dsads", smoothie: this.smoothie }
      });
      dialogRef.afterClosed().subscribe(result =>{
        console.log('el dialogo fue cerrado');
        if (result) {
          console.log('se ha actualizado con exito');
        }
      })
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
