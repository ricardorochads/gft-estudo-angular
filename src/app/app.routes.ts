import { Routes } from "@angular/router";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { ListaDeputadoComponent } from "./politicos/deputado/lista-deputado/lista-deputado.component";
import { ListaGovernadorComponent } from "./politicos/governador/lista-governador/lista-governador.component";
import { ListaMinistroComponent } from "./politicos/ministro/lista-ministro/lista-ministro.component";
import { ListaPrefeitoComponent } from "./politicos/prefeito/lista-prefeito/lista-prefeito.component";
import { ListaPresidenteComponent } from "./politicos/presidente/lista-presidente/lista-presidente.component";
import { ListaSenadorComponent } from "./politicos/senador/lista-senador/lista-senador.component";
import { ListaVereadorComponent } from "./politicos/vereador/lista-vereador/lista-vereador.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent},
    { path: 'deputados', component: ListaDeputadoComponent},
    { path: 'governadores', component: ListaGovernadorComponent},
    { path: 'ministros', component: ListaMinistroComponent},
    { path: 'prefeitos', component: ListaPrefeitoComponent},
    { path: 'presidentes', component: ListaPresidenteComponent},
    { path: 'senadores', component: ListaSenadorComponent},
    { path: 'vereadores', component: ListaVereadorComponent},
];
