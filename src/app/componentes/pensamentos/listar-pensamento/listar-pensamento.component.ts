import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1
  haMaisPensamentos: boolean = true
  filtro: string = ''
  listaFavoritos: Pensamento[] = []
  titulo: string = 'Meu mural'

  constructor(
    private service: PensamentoService,
    private router: Router
    ){}

  ngOnInit() : void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }


  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        if(!listaPensamentos.length){
          this.haMaisPensamentos = false
        }
      })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos=true;
    this.paginaAtual=1;
    this.service.listar(this.paginaAtual,this.filtro)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
      })
  }

  listarFavoritos(){
    this.haMaisPensamentos=true;
    this.paginaAtual=1;
    this.titulo='Meus Favoritos'
    this.service.listarPensamentosFavoritos(this.paginaAtual,this.filtro)
      .subscribe(listaPensamentosFavoritos => {
        this.listaPensamentos = listaPensamentosFavoritos
        this.listaFavoritos = listaPensamentosFavoritos
      })
  }

  recarregarComponente(){

    this.paginaAtual=1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

}
