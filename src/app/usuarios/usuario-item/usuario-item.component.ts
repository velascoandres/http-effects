import {Component, Input, OnInit} from '@angular/core';
import {UsuarioInterface} from '../../models/usuario.interface';

@Component({
  selector: 'app-usuario-item',
  templateUrl: './usuario-item.component.html',
  styleUrls: ['./usuario-item.component.css']
})
export class UsuarioItemComponent implements OnInit {
  @Input()
  usuario: UsuarioInterface = {first_name: '', last_name: '', avatar: ''};

  constructor() {
  }

  ngOnInit(): void {
  }

}
