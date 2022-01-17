import { gql } from 'apollo-angular';

export const ALL_FILMS_QUERY = gql`
  query {
    allFilms {
      films {
        title
        producers
        episodeID
        id
        director
      }
    }
  }
`;

export const GET_FILM_BY_ID = gql`
  query GetFilmById($filmId: ID!) {
    film(filmID: $filmId) {
      title
      director
      producers
      created
      starshipConnection {
        starships {
          name
          model
          manufacturers
        }
      }
      characterConnection {
        characters {
          name
          birthYear
          gender
        }
      }
    }
  }
`;
