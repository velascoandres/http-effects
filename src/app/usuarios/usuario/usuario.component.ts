import {Component, Input, OnInit} from '@angular/core';
import {UsuarioInterface} from '../../models/usuario.interface';
import {ActivatedRoute} from '@angular/router';
import {AppState} from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import {cargarUsuario} from '../../store/actions/usuario.actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: UsuarioInterface = {first_name: '', last_name: '', avatar: ''};
  error: any;
  cargando: boolean;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(
        ({id}) => {
          this.store.dispatch(
            cargarUsuario({parametros: {id}}),
          );
          this.store.select('usuario')
            .subscribe(
              ({id, first_name, last_name, avatar, loading, error}) => {
                this.usuario = {
                  id,
                  first_name,
                  last_name,
                  avatar,
                };
                this.cargando = loading;
                this.error = error;
              }
            );
        }
      );
  }

}
