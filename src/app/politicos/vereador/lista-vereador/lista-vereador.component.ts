import { Component, OnInit } from '@angular/core';
import { PoliticoService } from '../../politicos.services';
import { Vereador } from '../vereador';

@Component({
  selector: 'app-lista-vereador',
  templateUrl: './lista-vereador.component.html'
})
export class ListaVereadorComponent implements OnInit {

  constructor(private politicoService: PoliticoService) { }

  public vereadores: Vereador[] = []

  ngOnInit(): void {
    this.politicoService.obterVereadores().subscribe(
      vereadores => {
        this.vereadores = vereadores;
        console.log(vereadores)
      },
      error => console.log(error)
    );
  }
}
