import { Injectable } from '@angular/core';
import { Apollo, Query, QueryRef } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { ALL_FILMS_QUERY, GET_FILM_BY_ID } from './film-graphql-constants';
import {
  GraphQLFilm,
  GraphQLResponseAllFilms,
  GraphQLResponseFilmById,
} from './film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmGraphqlService {
  constructor(private apollo: Apollo) {}

  getAllFilms(): Observable<GraphQLFilm[]> {
    // We will include pagination here as well 
    return this.apollo
      .query<GraphQLResponseAllFilms>({ query: ALL_FILMS_QUERY })
      .pipe(map((m) => m.data.allFilms.films));
  }

  getFilmById(filmId: number): Observable<GraphQLFilm> {
    return this.apollo
      .query<GraphQLResponseFilmById, { filmId: number }>({
        query: GET_FILM_BY_ID,
        variables: {
          filmId,
        },
      })
      .pipe(map((m) => m.data.film));
  }
}
