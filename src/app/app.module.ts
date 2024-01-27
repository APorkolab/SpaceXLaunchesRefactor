import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './components/launches-component/launches-component.component';
import { GraphQLService } from './services/graph-qlservice.service';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GraphQLService],
  bootstrap: [AppComponent]
})
export class AppModule { }
