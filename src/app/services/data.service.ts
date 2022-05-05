import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  distinctUntilChanged,
  first,
  map,
  Observable,
} from 'rxjs';
import { Data, powers, Hero, HeroAndLikes } from '../model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cache = new BehaviorSubject<Data>(createDemoData());

  constructor() {}

  /** Observable of cached application data (the store) */
  data$ = this.cache.asObservable();

  /** Return cached data at the moment of this method's execution.
   * Convenience method for internal service use only. */
  private dataNow() {
    // This technique relies on synchronous nature of data$.
    let data: Data | undefined;
    this.data$.pipe(first()).subscribe((d) => (data = d));
    return data;
  }

  /** Observable of the current hero (id: currentHeroId) and that hero's likes. */
  currentHeroAndLikes$: Observable<HeroAndLikes> = this.cache.pipe(
    // When heroes or likes change ...
    distinctUntilChanged(
      (p, c) => p.heroes === c.heroes && p.likes === c.likes
    ),

    // Select current hero and its likes
    map(
      (data) =>
        ({
          hero: data.heroes.find((hero) => hero.id === data.currentHeroId),
          likes: data.likes.filter(
            (like) => like.heroId === data.currentHeroId
          ),
        } as HeroAndLikes)
    )
  );

  saveHeroAndLikes({ hero, likes: heroLikes = [] }: HeroAndLikes) {
    const data = this.dataNow();
    if (!data) return;
    let { heroes, likes } = data;

    let currentHeroId = hero.id;
    if (currentHeroId > 0) {
      // Update existing hero
      heroes = heroes.map((h) => (h.id === currentHeroId ? hero : h));
      likes = likes
        .filter((l) => l.heroId !== currentHeroId)
        .concat(
          heroLikes.map((l) => (l.id > 0 ? l : { ...l, id: idCounter++ }))
        );
    } else {
      // Add a new hero
      currentHeroId = idCounter++;
      hero.id = currentHeroId;
      heroLikes = heroLikes.map((l) => ({
        ...l,
        id: idCounter++,
        currentHeroId,
      }));
      currentHeroId = currentHeroId;
      heroes = heroes.concat(hero);
      likes = likes.concat(heroLikes);
    }
    this.cache.next({ ...data, currentHeroId, heroes, likes });
  }
}

/** Next available id for a Hero or Like */
let idCounter = 18;

export function createDemoData(): Data {
  const pow = powers.find((p) => p && p.qualifiers && p.qualifiers.length > 1);
  const heroId = idCounter++;
  const hero: Hero = {
    id: heroId,
    name: 'Dr IQ',
    alterEgo: 'Chuck Overstreet',
    power: pow ? pow.name : '',
    powerQualifier: pow && pow.qualifiers && pow.qualifiers[1],
  };

  return {
    currentHeroId: heroId,
    heroes: [hero],
    likes: [
      { id: idCounter++, heroId, name: 'fruit' },
      { id: idCounter++, heroId, name: 'bread' },
      { id: idCounter++, heroId, name: 'hamburger' },
    ],
    selectedUi: '0',
  };
}
