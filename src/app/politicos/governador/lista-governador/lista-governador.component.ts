import { Component, OnInit } from '@angular/core';
import { PoliticoService } from '../../politicos.services';
import { Governador } from '../governador';

@Component({
  selector: 'app-lista-governador',
  templateUrl: './lista-governador.component.html'
})
export class ListaGovernadorComponent implements OnInit {

  constructor(private politicoService: PoliticoService) { }

  public governadores: Governador[] = [];

  ngOnInit(): void {
    this.politicoService.obterGovernadores().subscribe(
      governadores => {
        this.governadores = governadores;
        console.log(governadores);
      },
      error => console.log(error)
    );
  }

}
