import {createAction, props} from '@ngrx/store';
import {UsuarioInterface} from '../../models/usuario.interface';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');
export const cargarUsuariosExito = createAction(
  '[Usuarios] Cargar Usuarios Exito',
  props<{usuarios: UsuarioInterface[]}>()
);
export const cargarUsuariosError = createAction(
  '[Usuarios] Cargar Usuarios Error',
  props<{payload: any}>()
);
