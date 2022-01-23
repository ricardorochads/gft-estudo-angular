import { Component, OnInit } from '@angular/core';
import { PoliticoService } from '../../politicos.services';
import { Prefeito } from '../prefeito';

@Component({
  selector: 'app-lista-prefeito',
  templateUrl: './lista-prefeito.component.html'
})
export class ListaPrefeitoComponent implements OnInit {

  constructor(private politicoService: PoliticoService) { }

  public prefeitos: Prefeito[] = [];

  ngOnInit(): void {
    this.politicoService.obterPrefeitos().subscribe(
      prefeitos => {
        this.prefeitos = prefeitos;
        console.log(prefeitos);
      },
      error => console.log(error)
    );
  }
}
