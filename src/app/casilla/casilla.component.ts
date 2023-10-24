import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casilla',
  template: `
    <button>{{ valor }}</button>
  `,
  styleUrls: ['./casilla.component.scss']
})
export class CasillaComponent {

  @Input() valor: 'X' | 'O' | null;

}
