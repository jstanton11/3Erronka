import { Component } from '@angular/core';
import { ServiceService } from './../../services/service.service';
import { Erreskatatuak } from 'src/app/models/erreskatatuak';
import { FormAltaEguneraketaComponent } from "../form-alta-eguneraketa/form-alta-eguneraketa.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  erreskatatuak: Erreskatatuak[] = [];
  selectErreskatatua: Erreskatatuak = {id: '', erreskate_id: 0, izen_osoa: '', argazkia: '', adina: 0, sexua: '', jatorria: '', balorazio_medikoa: ''};
  indizea: number = 0;
  opcion: string = 'create';
  ultimoID: string = "";

  constructor(private ServiceService: ServiceService) {
    this.ServiceService.getErreskatatuak().subscribe(data => {
      this.erreskatatuak = data;
      console.log(this.erreskatatuak);
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

  closeModal() {
    const botonCerrar = document.querySelector("[data-bs-dismiss]");
    (botonCerrar as HTMLElement)?.click();
  }

  ultimoId(): void {
    console.log("ultimiID");
    this.ServiceService.getErreskatatuak().subscribe(data => {
      this.erreskatatuak = data;
      console.log(this.erreskatatuak);
    });
    // if (this.erreskatatuak && this.erreskatatuak.length > 0) {
      // Obtiene el último ID como string
      const ultimoIdString = this.erreskatatuak[this.erreskatatuak.length - 1]?.id ?? "0";

      // Extrae el número del string (suponiendo que contiene solo un número)
      const ultimoIdNumero = parseInt(ultimoIdString, 10) || 0;

      // Incrementa el número y lo convierte de nuevo a string
      this.ultimoID = (ultimoIdNumero + 1).toString();
      console.log(this.ultimoID);
    // } else {
    //   // Si el array está vacío, asigna "1" como ID inicial
    //   this.ultimoID = "1";
    // }
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
