import { Component, OnInit } from '@angular/core';
// import {Hero} from '../hero';
import {HEROES} from '../HEROES';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  /*hero: Hero = {
    id: 1,
    name: 'Winstorm'
  };*/

  // hero = new Hero();
  heroes: Hero[];
  selectedHero: Hero;

  constructor( private heroService: HeroService) {
   /* this.hero.id = 1;
    this.hero.name = 'WinStorm';*/
  }

  ngOnInit() {
    // 서비스 호출
    // 잘못된 방법

    // const heroService = new HeroService();
    // this.heroes = heroService.getHeroes();

    this.heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      });
  }

  onSelect(hero: Hero) {
      this.selectedHero = hero;
  }
}
