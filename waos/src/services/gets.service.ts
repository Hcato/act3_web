import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetsService {
  private apiUrl = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }
  getSmoothies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getSmoothieById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}`);
  }
  updateSmoothie(id: string, formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}smoothies/${id}`, formData);
  }
  deleteSmoothie(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}smoothies/${id}`);
  }
}
