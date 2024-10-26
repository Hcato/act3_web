import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogerror',
  standalone: true,
  imports: [],
  templateUrl: './dialogerror.component.html',
  styleUrl: './dialogerror.component.scss'
})
export class DialogerrorComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogerrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
