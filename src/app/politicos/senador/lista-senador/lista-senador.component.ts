import { Component, OnInit } from '@angular/core';
import { PoliticoService } from '../../politicos.services';
import { Senador } from '../senador';

@Component({
  selector: 'app-lista-senador',
  templateUrl: './lista-senador.component.html'
})
export class ListaSenadorComponent implements OnInit {

  constructor(private politicoService: PoliticoService) { }

  public senadores: Senador[] = [];

  ngOnInit(): void {
    this.politicoService.obterSenadores().subscribe(
      senadores => {
        this.senadores = senadores;
        console.log(senadores);
      },
      error => console.log(error)
    );
  }

}
