import { Component, OnInit } from '@angular/core';
import { PoliticoService } from '../../politicos.services';
import { Presidente } from '../presidente';

@Component({
  selector: 'app-lista-presidente',
  templateUrl: './lista-presidente.component.html'
})
export class ListaPresidenteComponent implements OnInit {

  constructor(private politicoService: PoliticoService) { }

  public presidentes : Presidente[] = [];

  ngOnInit(): void {
    this.politicoService.obterPresidentes().subscribe(
      presidentes => {
        this.presidentes = presidentes;
        console.log(presidentes);
      },
      error => console.log(error)
    );
  }
}
