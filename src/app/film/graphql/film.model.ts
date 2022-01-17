export interface GraphQLFilm {
  title: string;
  director: string;
  producers: string[];
  created: Date;
  episodeID: string;
  characterConnection: GraphQLResponseFilmByIdCharacterConn;
  starshipConnection: GraphQLResponseFilmByIdStarshipConn;
}

export interface GraphQLResponseAllFilms {
  allFilms: {
    films: GraphQLFilm[];
  };
}

export interface GraphQLResponseFilmById {
  film: GraphQLFilm;
}

export interface GraphQLResponseFilmByIdCharacterConn {
  characters: GraphQLCharacter[];
}

export interface GraphQLResponseFilmByIdStarshipConn {
  starships: GraphQLStarship[];
}

export interface GraphQLCharacter {
  gender: string;
  name: string;
}

export interface GraphQLStarship {
  model: string;
  name: string;
}
