import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'nova-tranferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})

export class NovaTrasnferenciaComponent {
@Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;
  transferir() {
    console.log('Solicitado nova transferencia');
    this.aoTransferir.emit({valor: this.valor, destino: this.destino});

  }
}
