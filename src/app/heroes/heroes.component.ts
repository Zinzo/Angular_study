import { Component, OnInit } from '@angular/core';
// import {Hero} from '../hero';
import {HEROES} from '../HEROES';
import {Hero} from '../hero';

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
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {
   /* this.hero.id = 1;
    this.hero.name = 'WinStorm';*/
  }

  ngOnInit() {

  }

  onSelect(hero: Hero) {
      console.log(hero);
      this.selectedHero = hero;
  }
}
