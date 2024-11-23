import { Component } from '@angular/core';
import { BikeappService } from '../../Service/bikeapp.service';

@Component({
  selector: 'app-bikeapp',
  imports: [],
  templateUrl: './bikeapp.component.html',
  styleUrl: './bikeapp.component.css'
})
export class BikeappComponent {
  bikes: any[] = []; // To hold the bike data

  currentPage: number = 1;
  rowsPerPage: number = 10;
  constructor(private bikeService: BikeappService) {}


  ngOnInit() {
    this.bikeService.getBikes().subscribe((data: any) => {
      this.bikes = data;
    },
    (error) => {
      console.error('Error fetching bike data:', error);
    })
  }



  


}
