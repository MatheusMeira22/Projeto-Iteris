import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { ProfissionaisModel } from './profissionais-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisApiService {

  constructor(private httpClient: HttpClient) { }

  public List():Observable<ProfissionaisModel[]>{
    return this.httpClient.get<ProfissionaisModel[]>("https://it3qwe.firebaseio.com/profissionais.json")
  }
}
