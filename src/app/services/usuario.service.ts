import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseInterface} from '../models/response.interface';
import {UsuarioInterface} from '../models/usuario.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://reqres.in/api';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getUsers(): Observable<UsuarioInterface[]> {
    const uri = this.url + '/users';
    const respuesta$ = this.httpClient.get(uri) as Observable<ResponseInterface<UsuarioInterface>>;
    return respuesta$
      .pipe(
        map(
          ({data}) => data,
        ),
      );
  }
}
