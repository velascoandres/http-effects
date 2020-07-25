import {Component, Input, OnInit} from '@angular/core';
import {UsuarioInterface} from '../../models/usuario.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @Input()
  usuario: UsuarioInterface = {first_name: '', last_name: '', avatar: ''};

  constructor() {
  }

  ngOnInit(): void {
  }

}
