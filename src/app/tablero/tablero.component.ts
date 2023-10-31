import { Component } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent {
  casillas: any[]
  turnoDeX: boolean;
  ganador: string;

  constructor() {}

  ngOnInit() {

  }

  newGame = () => {
    this.casillas = Array(9).fill(null);
    this.ganador = null;
    this.turnoDeX = true;
  }

  getPlayer = () => {
    return this.turnoDeX ? 'X' : 'O';
  }

  jugarTurno = (id: number) => {
    if (!this.casillas[id]) {
      this.casillas.splice(id, 1, this.getPlayer())
      this.turnoDeX = !this.turnoDeX;
    }
    this.ganador = this.calcularGanador();
  }

  calcularGanador = () => {
    const lineas = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    let ganador;  
    lineas.map((value) => {
      const [a, b, c] = value
      if (
        this.casillas[a] &&
        this.casillas[a] === this.casillas[b] &&
        this.casillas[a] === this.casillas[c]
      ) {
        ganador = this.casillas[a]
      }
    })
    return ganador
  }

}
