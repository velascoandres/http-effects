import {Component, OnInit} from '@angular/core';
import {UsuarioInterface} from '../../models/usuario.interface';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import {cargarUsuarios} from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: UsuarioInterface[] = [];
  loading: boolean;
  error: any;

  constructor(
    private readonly store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.store
      .select('usuarios')
      .subscribe(
        ({usuarios, loading, error}) => {
          this.usuarios = usuarios;
          this.error = error;
          this.loading = loading;
        },
      );
    this.store.dispatch(cargarUsuarios());
  }

}
