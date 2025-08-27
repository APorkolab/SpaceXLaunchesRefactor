import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Launch } from '../core/models/launch.model';
import { GraphqlService } from './graphql.service';

interface LaunchState {
  launches: Launch[];
  loading: boolean;
  error: any;
}

@Injectable({
  providedIn: 'root'
})
export class LaunchStateService {
  private state = new BehaviorSubject<LaunchState>({
    launches: [],
    loading: false,
    error: null,
  });

  // Public observables for components to subscribe to
  launches$: Observable<Launch[]> = this.state.asObservable().pipe(map(s => s.launches));
  loading$: Observable<boolean> = this.state.asObservable().pipe(map(s => s.loading));
  error$: Observable<any> = this.state.asObservable().pipe(map(s => s.error));

  constructor(private graphqlService: GraphqlService) { }

  fetchLaunches() {
    this.state.next({ ...this.state.value, loading: true, error: null });

    this.graphqlService.getLaunches().pipe(
      tap(launches => {
        this.state.next({ launches, loading: false, error: null });
      }),
      catchError(error => {
        this.state.next({ ...this.state.value, loading: false, error });
        return []; // Return an empty array or re-throw
      })
    ).subscribe();
  }
}
