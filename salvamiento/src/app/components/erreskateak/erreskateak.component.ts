import { ServiceService } from './../../services/service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-erreskateak',
  templateUrl: './erreskateak.component.html',
  styleUrls: ['./erreskateak.component.scss']
})
export class ErreskateakComponent {
  erreskateak: any;
  constructor(private ServiceService: ServiceService) {
    this.ServiceService.getErreskateak().subscribe(data => {
      this.erreskateak = data
    });
}

}
