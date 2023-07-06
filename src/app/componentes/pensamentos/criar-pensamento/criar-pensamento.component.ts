import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent  {


  constructor(
    private service: PensamentoService,
    private router: Router
  ){}

  ngOnInit() : void {

  }



  pensamento: Pensamento ={
    conteudo: "Aprendendo Angular",
    autoria: "Dev",
    modelo: ''
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }

}
