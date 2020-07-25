import {Action, createReducer, on} from '@ngrx/store';
import {UsuarioInterface} from '../../models/usuario.interface';
import {cargarUsuarios, cargarUsuariosError, cargarUsuariosExito} from '../actions';

export interface UsuariosState {
  usuarios: UsuarioInterface[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialUsuariosState: UsuariosState = {
  usuarios: [],
  loaded: false,
  loading: false,
  error: undefined,
};

const _usuariosReducer = createReducer(
  initialUsuariosState,
  on(cargarUsuarios,
    (state: UsuariosState) => (
      {
        ...state,
        loading: true,
      })
  ),
  on(cargarUsuariosExito,
    (state: UsuariosState, {usuarios}) => (
      {
        ...state,
        usuarios: [...usuarios],
        loading: false,
        loaded: true,
      }
    ),
  ),
  on(cargarUsuariosError,
    (state: UsuariosState, {payload}) => (
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

export function usuariosReducer(state: UsuariosState | undefined, action: Action) {
  return _usuariosReducer(state, action);
}
