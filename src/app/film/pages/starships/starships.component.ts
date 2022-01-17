import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmGraphqlService } from '../../graphql/film-graphql.service';
import { GraphQLFilm } from '../../graphql/film.model';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
})
export class StarshipsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'model'];
  film$: Observable<GraphQLFilm>;

  constructor(
    private router: ActivatedRoute,
    private filmGraphqlService: FilmGraphqlService
  ) {}

  ngOnInit(): void {
    const filmId = this.router.snapshot.params['id'];
    this.film$ = this.filmGraphqlService.getFilmById(filmId);
  }
}
