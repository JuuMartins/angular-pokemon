import { Component, OnInit } from '@angular/core';
import { Treinador } from '../treinador';
import { TreinadorService } from '../treinador.service';

@Component({
  selector: 'app-treinadores',
  templateUrl: './treinadores.component.html',
  styleUrls: ['./treinadores.component.css']
})
export class TreinadoresComponent implements OnInit {

  treinadores: Treinador[];

  constructor(private treinadorService: TreinadorService) { }

  ngOnInit() {
    this.getTreinadores();
  }

  getTreinadores(): void {
    this.treinadorService.getTreinadores()
        .subscribe(treinadores => this.treinadores = treinadores);
  }

  add(nome: string): void {
    nome = nome.trim();
    if (!nome) { return; }
    this.treinadorService.addTreinador({ nome } as Treinador)
      .subscribe(treinador => {
        this.treinadores.push(treinador);
      });
  }

  delete(treinador: Treinador): void {
    this.treinadores = this.treinadores.filter(h => h !== treinador);
    this.treinadorService.deleteTreinador(treinador).subscribe();
  }

}
