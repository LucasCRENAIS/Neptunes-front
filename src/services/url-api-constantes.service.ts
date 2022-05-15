import {HttpHeaders} from "@angular/common/http";

export class UrlApiConstantes {

  static headers: {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type': 'application/ld+json',
    })
  };

  static urlApiplaylists: string = 'http://localhost:8080/playlists'

}
