import { Component } from '@angular/core';
import { ServiceService } from './../../services/service.service';
import { Erreskatatuak } from 'src/app/models/erreskatatuak';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  erreskatatuak: any;
  url: string = "";
  erreskatatua: Erreskatatuak = {id: 0, erreskate_id: 0, izen_osoa: '', argazkia: '', adina: 0, sexua: '', jatorria: '', balorazio_medikoa: ''};
  selectErreskatatua: any;
  indizea: any;

  constructor(private ServiceService: ServiceService) {
    this.erreskatatuak = [];
    this.ServiceService.getErreskatatuak().subscribe(data => {
      this.erreskatatuak = data
    });
}

updateErreskatatua(erreskatatua : Erreskatatuak){
this.selectErreskatatua = erreskatatua;
}

bidaliIndizea(i: number): void{
  this.indizea = i;
}

baja(erreskatatua : Erreskatatuak){
  this.ServiceService.bajaErreskatatuak(erreskatatua).subscribe(()=> (this.erreskatatuak = this.erreskatatuak.filter((t:Erreskatatuak) => t.id !== erreskatatua.id)));
}

registroakDaude(){
  return true;
}
}
