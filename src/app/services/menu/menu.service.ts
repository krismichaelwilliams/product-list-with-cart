import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../../models/menu-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getDesserts(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('https://localhost:7113/desserts');
  }
}
