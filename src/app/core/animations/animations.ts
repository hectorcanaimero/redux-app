import {animate, state, style, transition, trigger} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('invisible', style({ opacity: 0, })),
  state('visible', style({ opacity: 1 })),
  transition('invisible => visible',
  animate('1.2s ease-in'))
]);
