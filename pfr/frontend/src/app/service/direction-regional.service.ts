import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DirectionRegional } from '../auth/models/direction-regional-model';



@Injectable({
  providedIn: 'root',
})
export class DirectionRegionalService {
  private apiUrl = environment.api_url + '/api/direction-regional';

  constructor(private http: HttpClient) {}

  getAllDirectionRegional(): Observable<DirectionRegional[]> {
    return this.http.get<DirectionRegional[]>(this.apiUrl + '/get-direction');
  }
  deleteDirectionRegional(codeDirection: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${codeDirection}`);
  }
  updateDirectionRegional(codeDirection: string, directionRegional: DirectionRegional): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${codeDirection}`, directionRegional);
  }
}
