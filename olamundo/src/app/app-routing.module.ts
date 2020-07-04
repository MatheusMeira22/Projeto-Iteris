import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      {
        path: 'Home',
        component: CadastroComponent,
      },
      {
      path: 'Cadastro' ,
      component: CadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
