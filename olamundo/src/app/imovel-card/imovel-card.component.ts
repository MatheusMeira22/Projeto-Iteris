import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovel-card',
  templateUrl: './imovel-card.component.html',
  styleUrls: ['./imovel-card.component.css']
})
export class ImovelCardComponent implements OnInit {

  imgUrl: string = "https://mariliaolivettiarquitetura.com.br/site/wp-content/uploads/2019/01/Imagem1-P%C3%B3s-1024x680.jpg";

  addres = 'Cabo Frio - RJ';

  location="São Paulo-SP";
  name="Livia Martins Cavalcanti";
  photo="https://images.generated.photos/qmdENySIv23bkva-PxTHsoxVbZQdB1Wka0ZPcH5shHY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzMDE4MzAuanBn.jpg";



  constructor() { }

  ngOnInit(): void {
  }

}
