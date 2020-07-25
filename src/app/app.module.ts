import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {UsuariosModule} from './usuarios/usuarios.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {APP_REDUCERS} from './store/app.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {UsuarioEffects} from './store/effects/usuario.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UsuariosModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      APP_REDUCERS,
    ),
    StoreDevtoolsModule
      .instrument(
        {
          maxAge: 25,
          logOnly: environment.production,
        },
      ),
    EffectsModule
      .forRoot(
        [
          UsuarioEffects,
        ],
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
