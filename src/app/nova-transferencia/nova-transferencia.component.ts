import { Component } from "@angular/core";

@Component({
  selector: 'nova-tranferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})

export class NovaTrasnferenciaComponent {
  valor: number = 0;
  destino: number = 0;
  transferir() {
    console.log('Solicitado nova transferencia', this.valor, ' | ', this.destino);

  }
}
