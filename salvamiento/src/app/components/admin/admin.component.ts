import { Component } from '@angular/core';
import { ServiceService } from './../../services/service.service';
import { Erreskatatuak } from 'src/app/models/erreskatatuak';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  erreskatatuak: Erreskatatuak[] = [];
  selectErreskatatua: Erreskatatuak = {id: 0, erreskate_id: 0, izen_osoa: '', argazkia: '', adina: 0, sexua: '', jatorria: '', balorazio_medikoa: ''};
  indizea: number = 0;
  opcion: string = 'create';

  constructor(private ServiceService: ServiceService) {
    this.ServiceService.getErreskatatuak().subscribe(data => {
      this.erreskatatuak = data;
    });
  }

  updateErreskatatua(erreskatatua: Erreskatatuak) {
    this.selectErreskatatua = erreskatatua;
    this.opcion = 'update';
  }

  bidaliIndizea(i: number): void {
    this.indizea = i;
  }

  baja(erreskatatua: Erreskatatuak) {
    this.ServiceService.bajaErreskatatuak(erreskatatua).subscribe(() => {
      this.erreskatatuak = this.erreskatatuak.filter((t: Erreskatatuak) => t.id !== erreskatatua.id);
      alert('Erreskatatua ezabatua');
    });
  }

  registroakDaude() {
    return this.erreskatatuak.length > 0;
  }

  cargarLista() {
    this.ServiceService.getErreskatatuak().subscribe(data => {
      this.erreskatatuak = data; // Actualiza la lista
    });
  }
}

// export class AdminComponent {
//   erreskatatuak: any;
//   url: string = "";
//   erreskatatua: Erreskatatuak = {id: 0, erreskate_id: 0, izen_osoa: '', argazkia: '', adina: 0, sexua: '', jatorria: '', balorazio_medikoa: ''};
//   selectErreskatatua: any;
//   indizea: any;

//   constructor(private ServiceService: ServiceService) {
//     this.erreskatatuak = [];
//     this.ServiceService.getErreskatatuak().subscribe(data => {
//       this.erreskatatuak = data
//     });
// }

// prepareEguneratu(indizea: number, erreskatatua: any): void {
//   this.indizea = indizea;
//   this.selectErreskatatua = erreskatatua;
// }


// baja(erreskatatua : Erreskatatuak){
//   this.ServiceService.bajaErreskatatuak(erreskatatua).subscribe(()=> (this.erreskatatuak = this.erreskatatuak.filter((t:Erreskatatuak) => t.id !== erreskatatua.id)));
// }

// registroakDaude(){
//   return true;
// }
// }
