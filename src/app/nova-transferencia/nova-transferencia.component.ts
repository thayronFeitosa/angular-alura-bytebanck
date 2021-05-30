import { Component } from "@angular/core";

@Component({
  selector: 'nova-tranferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})

export class NovaTrasnferenciaComponent {

  transferir() {
    console.log('Solicitado nova transferencia');

  }
}
