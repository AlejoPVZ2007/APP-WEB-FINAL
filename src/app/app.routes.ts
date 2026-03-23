import { Routes } from '@angular/router';

import { Principal } from './paginas/principal/principal';
import { Nosotros } from './paginas/nosotros/nosotros';

import { Nostalgia } from './paginas/emociones/nostalgia/nostalgia';
import { Calma } from './paginas/emociones/calma/calma';
import { Amor } from './paginas/emociones/amor/amor';
import { Sorpresa } from './paginas/emociones/sorpresa/sorpresa';
import { Confianza } from './paginas/emociones/confianza/confianza';
import { Tristeza } from './paginas/emociones/tristeza/tristeza';
import { Miedo } from './paginas/emociones/miedo/miedo';
import { Enojo } from './paginas/emociones/enojo/enojo';


export const routes: Routes = [
  { path: '', component: Principal },
  //{ path: '', redirectTo: 'emociones/calma', pathMatch: 'full' },
  { path: 'nosotros', component: Nosotros },

  { path: 'emociones/nostalgia', component: Nostalgia },
  { path: 'emociones/calma', component: Calma },
  { path: 'emociones/amor', component: Amor },
  { path: 'emociones/sorpresa', component: Sorpresa },
  { path: 'emociones/confianza', component: Confianza },
  { path: 'emociones/tristeza', component: Tristeza },
  { path: 'emociones/miedo', component: Miedo },
  { path: 'emociones/ira', component: Enojo }
];
