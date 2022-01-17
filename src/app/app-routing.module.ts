import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './film/pages/films/films.component';
import { StarshipsComponent } from './film/pages/starships/starships.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/films',
    pathMatch: 'full',
  },
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'film/:id',
    component: StarshipsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
