import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent {

  heroes:Heroe[] = [];
  termino:string = "";
  mostrarInfo: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) { 
    this.mostrarInfo = false;
  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      if (this.heroes.length == 0) {
          this.mostrarInfo = true;
      } else {
          this.mostrarInfo = false;
      }
    })
  }

  verHeroe(index:number){
    //this.router.navigate(['/heroe', index]);
  }

}