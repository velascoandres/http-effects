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

  getUsers(parametros?): Observable<UsuarioInterface[] | UsuarioInterface> {
    const uri = this.url + '/users?page=2&delay=1';
    const respuesta$ = this.httpClient.get(
      uri,
      {
        params: parametros,
      }
    ) as Observable<ResponseInterface<UsuarioInterface>>;
    return respuesta$
      .pipe(
        map(
          ({data}) => data,
        ),
      );
  }
}
