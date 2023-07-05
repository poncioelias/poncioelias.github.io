import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent  {

  pensamento={
    id: 1,
    conteudo: "Aprendendo Angular",
    autoria: "Dev",
    modelo: ''
  }

  criarPensamento() {
    alert("novo pensamento criado")
  }

  cancelarPensamento(){
    alert("cancelar pensamento")
  }

}
