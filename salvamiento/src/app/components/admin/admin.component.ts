import { Component } from '@angular/core';
import { ServiceService } from './../../services/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  erreskatatuak: any;
  constructor(private ServiceService: ServiceService) {
    this.ServiceService.getErreskatatuak().subscribe(data => {
      this.erreskatatuak = data
    });
}
}
