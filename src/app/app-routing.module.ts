import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListaComponent} from './usuarios/lista/lista.component';
import {UsuarioComponent} from './usuarios/usuario/usuario.component';


const rutas: Routes = [
  {
    path: 'home',
    component: ListaComponent,
  },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
      .forRoot(
        rutas,
      ),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
