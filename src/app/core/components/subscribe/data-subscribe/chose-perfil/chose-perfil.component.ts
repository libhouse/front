import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-chose-perfil',
  templateUrl: './chose-perfil.component.html',
  styleUrls: ['./chose-perfil.component.scss']
})
export class ChosePerfilComponent implements OnInit {

  @Output() proximaEtapaOut = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  proximaEtapa(command: any | null) {
    this.proximaEtapaOut.emit(
      {
        ...command
      });
  }
}
