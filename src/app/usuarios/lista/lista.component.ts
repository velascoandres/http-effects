import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {ResponseInterface} from '../../models/response.interface';
import {UsuarioInterface} from '../../models/usuario.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: UsuarioInterface[] = [];
  constructor(
    private readonly usuarioService: UsuarioService,
  ) {
  }

  ngOnInit(): void {
    this.usuarioService
      .getUsers()
      .subscribe(
        (users: UsuarioInterface[]) => {
          console.log(users);
          this.usuarios = users;
        }
      );
  }

}
