import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListaComponent} from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioItemComponent } from './usuario-item/usuario-item.component';


@NgModule({
  declarations: [
    ListaComponent,
    UsuarioComponent,
    UsuarioItemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaComponent,
    UsuarioComponent,
  ],
})
export class UsuariosModule {
}
