import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphQLService {
  private readonly API_URL = 'https://spacex-production.up.railway.app/launches';

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<any[]> {
    const query = {
      query: `
     {
  launches(find: {}, limit: 10, offset: 0, order: "asc", sort: "launch_date_utc") {
    details
    id
    is_tentative
    launch_date_local
    launch_date_unix
    launch_date_utc
    launch_site {
      site_id
      site_name
      site_name_long
    }
    launch_success
    launch_year
    links {
      article_link
      video_link
      mission_patch
    }
    mission_id
    mission_name
    rocket {
      rocket_name
      rocket_type
    }
    static_fire_date_unix
    static_fire_date_utc
    telemetry {
      flight_club
    }
    tentative_max_precision
    upcoming
  }
}
    `
    };

    return this.http.post<any[]>(this.API_URL, query, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

}
