import {Action, createReducer, on} from '@ngrx/store';
import {UsuarioInterface} from '../../models/usuario.interface';
import {cargarUsuario, cargarUsuarioError, cargarUsuarioExito} from '../actions/usuario.actions';

export interface UsuarioState extends UsuarioInterface{
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialUsuariosState: UsuarioState = {
  id: null,
  last_name: null,
  first_name: null,
  avatar: null,
  loaded: false,
  loading: false,
  error: undefined,
};

const _usuarioReducer = createReducer(
  initialUsuariosState,
  on(cargarUsuario,
    (state: UsuarioState, {parametros}) => (
      {
        ...state,
        loading: true,
        ...parametros,
      }
    )
  ),
  on(cargarUsuarioExito,
    (state: UsuarioState, {usuario}) => (
      {
        ...state,
        ...usuario,
        loading: false,
        loaded: true,
      }
    ),
  ),
  on(cargarUsuarioError,
    (state: UsuarioState, {payload}) => (
      {
        ...state,
        loaded: false,
        loading: false,
        error: {
          url: payload.url,
          name: payload.name,
          message: payload.message,
        },
      })
  ),
);

export function usuarioReducer(state: UsuarioState | undefined, action: Action) {
  return _usuarioReducer(state, action);
}
