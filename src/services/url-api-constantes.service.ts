import {HttpHeaders} from "@angular/common/http";

export class UrlApiConstantes {

  static headers: {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type': 'application/ld+json',
    })
  };

  static urlApiplaylists: string = 'https://neptunes-back.herokuapp.com/playlists'

}
