import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ProfissionaisModel} from 'src/app/services/profissionais-api/profissionais-model'

@Component({
  selector: 'app-imovel-card',
  templateUrl: './imovel-card.component.html',
  styleUrls: ['./imovel-card.component.css']
})
export class ImovelCardComponent implements OnChanges {

  @Input() servicos: ProfissionaisModel;

  location: string;
  name: string;
  photo: string;
  services: string;
  zodiac: string;

  constructor() { }

  ngOnChanges(): void {

    if(this.servicos != null){
      this.location = this.servicos.location;
      this.name = this.servicos.name;
      this.photo = this.servicos.photo;
      this.services = this.servicos.services;
      this.zodiac = this.servicos.zodiac;
    }

  }

}
