import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { BikeappComponent } from './bikeapp/bikeapp.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { BikeappService } from '../Service/bikeapp.service';



@NgModule({
  declarations: [
    AppComponent,
    BikeappComponent // Declare non-standalone components here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Use the route configuration
  ],
  providers: [BikeappService],
  bootstrap: [AppComponent]
})
export class AppModule {}
