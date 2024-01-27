interface LaunchesResponse {
  data: {
    launches: any[]; // Itt pontosíthatja a 'launches' tömb elemeinek típusát
  };
}

// launches.component.ts
import { Component, OnInit } from '@angular/core';
import { GraphQLService } from 'src/app/services/graph-qlservice.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches-component.component.html',
  styleUrls: ['./launches-component.component.css']
})
export class LaunchesComponent implements OnInit {
  launches: any[] = [];

  constructor(private graphQLService: GraphQLService) { }


  ngOnInit() {
    this.graphQLService.getLaunches().subscribe((response: any) => {
      const launchesResponse = response as LaunchesResponse; // Típus-állítás
      this.launches = launchesResponse.data.launches;
    }, error => {
      console.error('Hiba a kilövések lekérdezése közben:', error);
    });
  }

}