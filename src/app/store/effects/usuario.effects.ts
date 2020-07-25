import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {cargarUsuarios, cargarUsuariosError, cargarUsuariosExito} from '../actions';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {UsuarioService} from '../../services/usuario.service';
import {of} from 'rxjs';
import {cargarUsuario, cargarUsuarioError, cargarUsuarioExito} from '../actions/usuario.actions';
import {UsuarioInterface} from '../../models/usuario.interface';

@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private readonly usuarioService: UsuarioService,
  ) {
  }

  cargarUsuarios$ = createEffect(
    () => {
      const accion$ = this.actions$.pipe(
        ofType(cargarUsuarios)
      );
      return accion$
        .pipe(
          mergeMap(
            () => this.usuarioService.getUsers()
          ),
          map(
            (usuarios: UsuarioInterface[]) => {
              return cargarUsuariosExito({usuarios});
            },
          ),
          catchError(err => of(cargarUsuariosError({payload: err}))),
        );
    }
  );
  cargarUsuario$ = createEffect(
    () => {
      const accion$ = this.actions$.pipe(
        ofType(cargarUsuario)
      );
      return accion$
        .pipe(
          mergeMap(
            (accion) => this.usuarioService.getUsers(accion.parametros)
          ),
          map(
            (usuarios) => {
              const usuario = usuarios as UsuarioInterface;
              return cargarUsuarioExito({usuario});
            },
          ),
          catchError(err => of(cargarUsuarioError({payload: err}))),
        );
    }
  );
}
