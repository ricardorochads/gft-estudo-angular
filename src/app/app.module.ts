import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListaDeputadoComponent } from './politicos/deputado/lista-deputado/lista-deputado.component';
import { PoliticoService } from './politicos/politicos.services';
import { ListaPresidenteComponent } from './politicos/presidente/lista-presidente/lista-presidente.component';
import { ListaGovernadorComponent } from './politicos/governador/lista-governador/lista-governador.component';
import { ListaMinistroComponent } from './politicos/ministro/lista-ministro/lista-ministro.component';
import { ListaPrefeitoComponent } from './politicos/prefeito/lista-prefeito/lista-prefeito.component';
import { ListaSenadorComponent } from './politicos/senador/lista-senador/lista-senador.component';
import { ListaVereadorComponent } from './politicos/vereador/lista-vereador/lista-vereador.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    ListaDeputadoComponent,
    ListaPresidenteComponent,
    ListaGovernadorComponent,
    ListaMinistroComponent,
    ListaPrefeitoComponent,
    ListaSenadorComponent,
    ListaVereadorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    PoliticoService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
