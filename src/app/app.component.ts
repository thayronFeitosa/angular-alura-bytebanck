import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byteback';

  destino: number = 0;
  valor: number = 0;

  transferir($event: any) {
    const { destino, valor } = $event;
    this.destino = destino;
    this.valor = valor;
  }
}
