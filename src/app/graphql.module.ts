import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

export function createApolloFactory(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: environment.graphqlURL }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApolloFactory,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
