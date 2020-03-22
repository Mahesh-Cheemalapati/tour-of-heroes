import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Batman' },
      { id: 3, name: 'Wonder Woman' },
      { id: 4, name: 'Flash' },
      { id: 5, name: 'Wolverine' },
      { id: 6, name: 'Cyclops' },
      { id: 7, name: 'Dr. Strange' },
      { id: 8, name: 'Ironman' },
      { id: 9, name: 'Hulk' },
      { id: 10, name: 'Thor' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}