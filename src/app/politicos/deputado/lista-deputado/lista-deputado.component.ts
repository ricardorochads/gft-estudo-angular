import { Component, OnInit } from '@angular/core';
import { PoliticoService } from '../../politicos.services';
import { Deputado } from '../deputado';

@Component({
  selector: 'app-lista-deputado',
  templateUrl: './lista-deputado.component.html'
})
export class ListaDeputadoComponent implements OnInit {

  constructor(private politicoService: PoliticoService) { }

  public deputados: Deputado[] = [];

  ngOnInit(): void {
    this.politicoService.obterDeputados().subscribe(
      deputados => {
        this.deputados = deputados;
        console.log(deputados);
      },
      error => console.log(error)
    );
  }
}
