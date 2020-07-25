import {createAction, props} from '@ngrx/store';
import {UsuarioInterface} from '../../models/usuario.interface';

export const cargarUsuario = createAction(
  '[Usuarios] Cargar Usuario',
  props<{parametros: Partial<UsuarioInterface>}>()
);
export const cargarUsuarioExito = createAction(
  '[Usuario] Cargar Usuario Exito',
  props<{usuario: UsuarioInterface}>()
);
export const cargarUsuarioError = createAction(
  '[Usuario] Cargar Usuario Error',
  props<{payload: any}>()
);
