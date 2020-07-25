import {ActionReducerMap} from '@ngrx/store';
import * as reducers from './reducers';
import {usuarioReducer, UsuarioState} from './reducers/usuario.reducer';

export interface AppState {
  usuarios: reducers.UsuariosState;
  usuario: UsuarioState,
}

export const APP_REDUCERS: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer,
  usuario: usuarioReducer,
};
