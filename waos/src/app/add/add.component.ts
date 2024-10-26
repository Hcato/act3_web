import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  constructor(private http: HttpClient) {}

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    
    const smoothieName = (form.elements.namedItem('smoothie-name') as HTMLInputElement).value;
    const smoothieImage = (form.elements.namedItem('smoothie-image') as HTMLInputElement).files?.[0];
  
    if (!smoothieImage) {
      console.error('No se seleccionó ninguna imagen.');
      return;
    }
  
    const formData = new FormData();
    formData.append('name', smoothieName);
    formData.append('image', smoothieImage);
  
    this.http.post('http://localhost:8000/smoothies', formData)
      .subscribe({
        next: (response) => {
          console.log('Smoothie agregado', response);
          alert('Smoothie agregado con éxito');
        },
        error: (error) => {
          console.error('Error al agregar smoothie', error);
          alert('Error al agregar smoothie');
        }
      });
  }
  
}
