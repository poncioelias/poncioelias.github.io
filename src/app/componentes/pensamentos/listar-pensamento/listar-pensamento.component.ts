import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: "b I love Angular  X",
      autoria: 'Poncio Elias',
      modelo: 'modelo3'
    },
    {
      conteudo: "c I love Angular  X",
      autoria: 'Poncio Elias',
      modelo: 'modelo1'
    },
    {
      conteudo: "d I love Angular  Xd I love Angular  Xd I love Angular  Xd I love Angular  Xd I love Angular  Xd I love Angular  Xd I love Angular  Xd I love Angular  Xd I love Angular  Xd I love Angular  Xd I love Angular  Xd I love Angular  Xd I love Angular  Xd I love Angular  X",
      autoria: 'Poncio Elias',
      modelo: 'modelo2'
    }

  ];




}
