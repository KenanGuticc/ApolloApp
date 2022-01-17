import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmGraphqlService } from '../../graphql/film-graphql.service';
import { GraphQLFilm } from '../../graphql/film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'director',
    'episodeID',
    'actions'
  ];
  films$: Observable<GraphQLFilm[]> = new Observable<GraphQLFilm[]>();

  constructor(private filmGraphqlService: FilmGraphqlService, private router: Router) {}

  ngOnInit(): void {
    this.films$ = this.filmGraphqlService.getAllFilms();
  }

  open(element: GraphQLFilm) {
    this.router.navigateByUrl(`/film/${element.episodeID}`);
  }
}
