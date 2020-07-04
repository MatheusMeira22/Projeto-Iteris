import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ImovelCardComponent } from './imovel-card/imovel-card.component';
import { ServicosPageComponent } from './servicos-page/servicos-page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
      path: 'Cadastro' ,
      component: CadastroComponent
      },
      {
        path: 'Servicos' ,
        component: ServicosPageComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
