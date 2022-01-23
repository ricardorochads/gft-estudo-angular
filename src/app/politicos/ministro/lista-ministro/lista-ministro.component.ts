import { Component, OnInit } from '@angular/core';
import { PoliticoService } from '../../politicos.services';
import { Ministro } from '../ministro';

@Component({
  selector: 'app-lista-ministro',
  templateUrl: './lista-ministro.component.html'
})
export class ListaMinistroComponent implements OnInit {

  constructor(private politicoService: PoliticoService) { }

  public ministros: Ministro[] = [];

  ngOnInit(): void {
    this.politicoService.obterMinistros().subscribe(
      ministros => {
        this.ministros = ministros;
        console.log(ministros);
      },
      error => console.log(error)
    )
  }

}
