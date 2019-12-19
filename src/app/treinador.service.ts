import { Injectable } from '@angular/core';
import { Treinador } from './treinador';
import { Observable, of } from '@angular/cli/bin/angular-pokemon/node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TreinadorService {

  constructor(private http: HttpClient) { }

  getTreinadores(): Observable<Treinador[]> {
    return this.http.get<Treinador[]>('http://localhost:8080/treinador');
  }

  getTreinador(id: number): Observable<Treinador> {
    return this.http.get<Treinador>('http://localhost:8080/treinador/'+id);
  }

  updateTreinador (treinador: Treinador): Observable<any> {
    return this.http.put<Treinador>('http://localhost:8080/treinador/', treinador, httpOptions);
  }

  addTreinador (treinador: Treinador): Observable<Treinador> {
    return this.http.post<Treinador>('http://localhost:8080/treinador/', treinador, httpOptions);
  }

  deleteTreinador (treinador: Treinador | number): Observable<Treinador> {
    const id = typeof treinador === 'number' ? treinador : treinador.id;
    const url = `'http://localhost:8080/treinador/'/${id}`;
    return this.http.delete<Treinador>(url, httpOptions);
  }

}
