import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Deputado } from "./deputado/deputado";
import { Governador } from "./governador/governador";
import { Ministro } from "./ministro/ministro";
import { Prefeito } from "./prefeito/prefeito";
import { Presidente } from "./presidente/presidente";
import { Senador } from "./senador/senador";
import { Vereador } from "./vereador/vereador";

@Injectable()
export class PoliticoService {
constructor(private http: HttpClient) {}

protected UrlService: string = "https://localhost:5001/api/v1/";

obterDeputados() : Observable<Deputado[]> {
   return this.http
   .get<Deputado[]>(this.UrlService + "deputados/consumo")
}

obterGovernadores() : Observable<Governador[]> {
   return this.http
   .get<Governador[]>(this.UrlService + "governadores/consumo")
}
obterMinistros() : Observable<Ministro[]> {
   return this.http
   .get<Ministro[]>(this.UrlService + "ministros/consumo")
}

obterPrefeitos() : Observable<Prefeito[]> {
   return this.http
   .get<Prefeito[]>(this.UrlService + "prefeitos/consumo")
}

obterPresidentes() : Observable<Presidente[]> {
   return this.http
   .get<Presidente[]>(this.UrlService + "presidentes/consumo")
}

obterSenadores() : Observable<Senador[]> {
   return this.http
   .get<Senador[]>(this.UrlService + "senadores/consumo")
}

obterVereadores() : Observable<Vereador[]> {
   return this.http
   .get<Vereador[]>(this.UrlService + "vereadores/consumo")
}

}