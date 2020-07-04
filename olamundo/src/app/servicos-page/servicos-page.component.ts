import { Component, OnInit } from '@angular/core';
import {ProfissionaisModel} from "src/app/services/profissionais-api/profissionais-model"
import { ProfissionaisApiService } from 'src/app/services/profissionais-api/profissionais-api.service';

@Component({
  selector: 'app-servicos-page',
  templateUrl: './servicos-page.component.html',
  styleUrls: ['./servicos-page.component.css']
})
export class ServicosPageComponent implements OnInit {

  listaDeServicos: ProfissionaisModel[];

  constructor(private profissionaisApi:ProfissionaisApiService) { }

  ngOnInit(): void {

    this.profissionaisApi.List().subscribe((lista) => {
      this.listaDeServicos = lista;
    })

  }

}
