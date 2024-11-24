import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DessertItemSuccessResponse } from '../../models/responseModels/dessert-item-success-response.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getDesserts(): Observable<DessertItemSuccessResponse> {
    return this.http.get<DessertItemSuccessResponse>(
      'https://localhost:7113/desserts'
    );
  }
}
