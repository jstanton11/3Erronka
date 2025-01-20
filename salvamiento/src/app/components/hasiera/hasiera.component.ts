import { Component, AfterViewInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-hasiera',
  templateUrl: './hasiera.component.html',
  styleUrls: ['./hasiera.component.scss']
})
export class HasieraComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const carouselElement = document.querySelector('#carousel');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Cambia la duración entre slides
        ride: 'carousel'
      });
    }
  }


}
