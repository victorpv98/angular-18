import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserTs } from '../models/user.ts';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  // Crear una instancia de http
  constructor(private http: HttpClient) { }

  // Definir la url de la api (la base de la url de la api esta en environment.ts)
  apiUser = environment.Api_url+'registerUser?';

  // metodo post
  postUser(usuario: UserTs): Observable<UserTs>{
    return this.http.post<UserTs>(this.apiUser, usuario);
  }
}
