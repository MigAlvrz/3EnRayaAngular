import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casilla',
  template: `
    <button *ngIf="!valor">{{ valor }}</button>
    <button class="X" *ngIf="valor == 'X'">{{ valor }}</button>
    <button class="O" *ngIf="valor == 'O'">{{ valor }}</button>
  `,
  styleUrls: ['./casilla.component.scss']
})
export class CasillaComponent {

  @Input() valor: 'X' | 'O' | null;

}
